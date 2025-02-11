import React, { useState, useEffect } from "react";
import "../../style/components/kaban/Column.css";
import EditableText from "../EditableText";

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Column({ columnName, tasks, onRemove, onAddTask, onTaskDragStart, onTaskDrop, onTaskDragOver }) {
    const [id, setId] = useState("");
    const [randomBg, setRandomBg] = useState("");

    useEffect(() => {
        switch (columnName) {
            case "À faire":
                setId("todo");
                break;
            case "En cours":
                setId("inProgress");
                break;
            case "Terminé":
                setId("finish");
                break;
            case "Bloqué":
                setId("bug");
                break;
            default:
                setId("random");
                setRandomBg(getRandomColor());
                break;
        }
    }, [columnName]);

    return (
        <div 
            className="column" 
            onDrop={(e) => onTaskDrop(e, columnName)}
            onDragOver={(e) => onTaskDragOver(e)}
        >
            <div className="column-header" id={id} style={id === "random" ? { backgroundColor: randomBg } : {}}>
                <EditableText className="column-name" initialText={columnName} />
                <button onClick={onRemove} className="remove-column">×</button>
            </div>
            <div className="column-content">
                {tasks.map(task => (
                    <div 
                        key={task.id} 
                        className="task" 
                        draggable 
                        onDragStart={(e) => onTaskDragStart(e, task.id)}
                    >
                        {task.name}
                    </div>
                ))}
            </div>
            <button onClick={onAddTask} className="add-task">Ajouter une tâche</button>
        </div>
    );
}

export default Column;
