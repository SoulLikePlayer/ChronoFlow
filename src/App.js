import React from "react";

import KanbanBoard  from "./features/kanban/KanbanBoard";

import "./style/theme.css"
function App() {
  return (
    <div>
      <KanbanBoard ProjectName={"Projet de test"}/>
    </div>
  );
}

export default App;