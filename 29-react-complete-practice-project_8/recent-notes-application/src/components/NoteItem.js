import React from 'react'

const NoteItem = props => {
    console.log("props: ", props);
    const { note } = props;

    return (
        <div className="notes-list-item">
            <h3>{note.body}</h3>
        </div>
    )
}

export default NoteItem;
