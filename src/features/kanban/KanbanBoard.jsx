import React from "react";
import Column from "../../components/kanban/column";
import "../../style/components/kaban/kabanBoard.css";

function KanbanBoard( {ProjectName} ) {
    const columns = ["À faire", "En cours", "Bloqué", "Terminé"];

    return (
        <div className="kaban-container">
            <div className="kaban-header">
                <h1>Tableau Kaban : {ProjectName}</h1>
            </div>
            <div className="kanban-board">
                {columns.map((title) => (
                    <Column key={title} columnName={title} />
                ))}
            </div>
        </div>
    );
}

export default KanbanBoard;
