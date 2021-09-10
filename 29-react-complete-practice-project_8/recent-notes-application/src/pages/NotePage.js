import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import NotesData from '../assets/NotesData';

const NotePage = (props) => {
    const [note, setNote] = useState(null)
    const params = useParams();
    const noteId = params.id;
    // let note = NotesData.find(note => note.id === +params.id);
    useEffect(() => {
        const response = async () => {
            if (noteId === 'new') return;
            await fetch(`http://localhost:3006/notes/${noteId}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    setNote(data);
                });
        }

        response();
    }, [noteId]);

    const noteInputChangeHandler = (event) => {
        setNote({ ...note, body: event.target.value });
    }

    const updateNoteHandler = async () => {
        if (noteId !== 'new' && !note.body) {
            deleteNoteHandler();
        }
        else if (noteId !== 'new') {
            await fetch(`http://localhost:3006/notes/${noteId}`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PATCH',
                body: JSON.stringify({ ...note, updated: new Date().toISOString() })
            }).then((response) => {
                props.history.push('/');
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    const deleteNoteHandler = async () => {
        await fetch(`http://localhost:3006/notes/${noteId}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'DELETE',
        }).then((response) => {
            console.log(response);
            props.history.push('/');
        }).catch((error) => {
            console.error(error);
        });
    }

    const insertNoteHandler = async () => {
        if (note === null || note.body === '') {
            props.history.push('/');
        } else {
            await fetch(`http://localhost:3006/notes`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ ...note, created: new Date().toISOString(), updated: new Date().toISOString() })
            }).then((response) => {
                props.history.push('/');
            }).catch((error) => {
                console.error(error);
            });
        }

    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/"><i className="fa fa-arrow-circle-left fa-2x" onClick={updateNoteHandler}></i></Link>
                </h3>
                {noteId !== 'new' ?
                    <button onClick={deleteNoteHandler}><i className="fa fa-trash fa-2x" ></i></button> :
                    <h3>
                        <Link to="/"><i className="fa fa-arrow-circle-down fa-2x" onClick={insertNoteHandler}></i></Link>
                    </h3>}
            </div>
            <textarea value={note?.body} onChange={noteInputChangeHandler}></textarea>
        </div>
    )
}

export default NotePage;
