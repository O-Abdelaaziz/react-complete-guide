import React from 'react'
import NotesData from '../assets/NotesData';
import NoteItem from '../components/NoteItem';

const NotesPage = () => {
    return (
        <div>
            <p>notes</p>
            {NotesData.map(note => {
                return <NoteItem key={note.id} note={note} />
            })}
        </div>
    )
}

export default NotesPage;
