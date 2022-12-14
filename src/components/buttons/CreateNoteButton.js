import React, { useContext } from "react";
import { Button } from "react-bulma-components";
import { EditorContext } from "../../context/EditorProvider";
import { NotesContext } from "../../context/NotesProvider";

const CreateNoteButton = ({ label, justifyContent }) => {
    
    const { createNote } = useContext(NotesContext);
    const { setIsEditing } = useContext(EditorContext);

    const justify = justifyContent ? justifyContent : "flex-start";

    return( <div style={{
        display: "flex",
        justifyContent: justify
    }}>
        <Button color="success"
        className="is-rounded"
        onClick={() => {
            createNote()
            setIsEditing(true);
        }}>+</Button>
        {label && <p className="menu-label ml-3">{label}</p>}
        </div> 
    )
}

export default CreateNoteButton;