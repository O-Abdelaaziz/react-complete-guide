import React from 'react'
import NotesData from '../assets/NotesData';
import NoteItem from '../components/NoteItem';

const NotesPage = () => {
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{NotesData.length}</p>
            </div>
            <div className="notes-list">
                {NotesData.map((note, index) => {
                    return <NoteItem key={index} note={note} />
                })}
            </div>
        </div>
    )
}

export default NotesPage;
