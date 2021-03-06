import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem';

const NotesPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const response = async () => {
            await fetch('http://localhost:3006/notes')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    setNotes(data);
                });
        }

        response();
    }, []);

    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => {
                    return <NoteItem key={index} note={note} />
                })}
            </div>
            <Link to="/notes/new" className="floating-button">
                <i className="fa fa-plus-circle" ></i>
            </Link>
        </div>
    )
}

export default NotesPage;
