import React, { useState, useEffect } from "react";
import "../../style/components/kaban/Column.css";
import EditableText from "../EditableText";


function Column({ columnName }) {
    const [id, setId] = useState("");

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
                setId("bug")
                break;
            default:
                setId("");
                break;
        }
    }, [columnName]); 

    return (
        <div className="column">
            <div className="column-header" id={id}><EditableText initialText={columnName} /></div>
            <div className="column-content"></div>
        </div>
    );
}

export default Column;
