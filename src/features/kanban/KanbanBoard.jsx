import React, { useMemo, useState, useRef } from "react";
import PropTypes from "prop-types";
import Column from "../../components/kanban/column";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import EditableText from "../../components/EditableText";

/*Style*/
import "../../style/components/kaban/kabanBoard.css"


function KanbanBoard({ projectName }) {
    const columns = useMemo(() => ["À faire", "En cours", "Bloqué", "Terminé"], []);
    const [dimensions, setDimensions] = useState({ width: 50, height: 50 });
    const kanbanRef = useRef(null);
    const isResizing = useRef(false);

    const startResizing = (e) => {
        e.preventDefault();
        isResizing.current = true;
        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResizing);
    };

    const resize = (e) => {
        console.log("resizing");
        if (isResizing.current && kanbanRef.current) {
            const newWidth = Math.min(Math.max((e.clientX / window.innerWidth) * 100, 25), 75);
            const newHeight = Math.min(Math.max((e.clientY / window.innerHeight) * 100, 25), 75);
            setDimensions({ width: newWidth, height: newHeight });
        }
    };

    const stopResizing = () => {
        isResizing.current = false;
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stopResizing);
    };

    return (
        <div
            ref={kanbanRef}
            className="kanban-container"
            style={{ width: `${dimensions.width}vw`, height: `${dimensions.height}vh` }}
        >
            <header className="kanban-header">
                <h1>Tableau Kanban : <EditableText initialText={projectName ? projectName : "Nouveau projet"}></EditableText></h1>
                <button className="toggle-button">
                    {dimensions.width >= 75 ? <FiMinimize /> : <FiMaximize />}
                </button>
            </header>
            <div className="kanban-board">
                {columns.map((title) => (
                    <Column key={title} columnName={title} />
                ))}
            </div>
            <div className="resize-handle" onMouseDown={startResizing}></div>
        </div>
    );
}

KanbanBoard.propTypes = {
    projectName: PropTypes.string,
};

KanbanBoard.defaultProps = {
    projectName: "",
};

export default KanbanBoard;
