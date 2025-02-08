import React from "react";

import KanbanBoard  from "./features/kanban/KanbanBoard";

import "./style/theme.css"
import "./style/global.css"
function App() {
  return (
    <div>
      <KanbanBoard ProjectName={"Projet de test"} isFullPage={ true }/>
    </div>
  );
}

export default App;