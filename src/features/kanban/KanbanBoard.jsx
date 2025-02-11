import React, { useState, useMemo } from "react";

import Column from "../../components/kanban/column";
import EditableText from "../../components/EditableText";

import "../../style/components/kaban/kabanBoard.css";

function KanbanBoard({ projectName }) {
    const initialColumns = useMemo(() => ["À faire", "En cours", "Bloqué", "Terminé"], []);
    const [columns, setColumns] = useState(initialColumns);
    const [tasks, setTasks] = useState([]);
    const [taskCounter, setTaskCounter] = useState(1);
    
    const addColumn = () => {
        let newColumnName = prompt("Nom de la nouvelle colonne :", "Nouvelle colonne");
        if (newColumnName) {
            newColumnName = newColumnName.trim();
            if (columns.includes(newColumnName)) {
                alert("Une colonne avec ce nom existe déjà !");
            } else {
                setColumns([...columns, newColumnName]);
            }
        }
    };

    const removeColumn = (columnName) => {
        setColumns(columns.filter(column => column !== columnName));
        setTasks(tasks.filter(task => task.column !== columnName));
    };

    const addTask = (columnName) => {
        const taskName = prompt("Nom de la tâche :", `Tâche ${taskCounter}`);
        if (taskName) {
            setTasks([...tasks, { id: taskCounter, name: taskName, column: columnName }]);
            setTaskCounter(taskCounter + 1);
        }
    };

    const onTaskDragStart = (e, taskId) => {
        e.dataTransfer.setData("taskId", taskId);
    };

    const onTaskDrop = (e, newColumn) => {
        const taskId = e.dataTransfer.getData("taskId");
        setTasks(tasks.map(task => (task.id === parseInt(taskId) ? { ...task, column: newColumn } : task)));
    };

    const onTaskDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="kanban-container">
            <header className="kanban-header">
                <h1>Tableau Kanban : <EditableText initialText={projectName || "Nouveau projet"} /></h1>
            </header>
            <div className="kanban-board">
                <div className="kanban-column">
                {columns.map(columnName => (
                    <Column 
                        key={columnName} 
                        columnName={columnName} 
                        tasks={tasks.filter(task => task.column === columnName)}
                        onRemove={() => removeColumn(columnName)}
                        onAddTask={() => addTask(columnName)}
                        onTaskDragStart={onTaskDragStart}
                        onTaskDrop={onTaskDrop}
                        onTaskDragOver={onTaskDragOver}
                    />
                ))}
                </div>
                <div className="kanban-footer">
                    <button className="kanban-add-column" onClick={addColumn}>+</button>
                </div>
            </div>
        </div>
    );
}

export default KanbanBoard;
