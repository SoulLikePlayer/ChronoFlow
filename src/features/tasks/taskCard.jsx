import React from "react";
import "../../style/components/kaban/taskCard.css"

function TaskCard({ taskName }) {
    return (
        <div className="taskCard-container">
            <p className="taskCard-title">{taskName}</p>
        </div>
    );
}

export default TaskCard;
