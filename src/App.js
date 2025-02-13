import React,{ useState } from "react";

import KanbanBoard  from "./features/kanban/KanbanBoard";

import "./style/theme.css"
import "./style/global.css"

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };
  return (
    <div>
      <KanbanBoard ProjectName={"Projet de test"} isFullPage={ true }  tasks={tasks} onAddTask={addTask}/>
    </div>
  );
}

export default App;