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
            await fetch(`http://localhost:3006/notes/${noteId}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    setNote(data);
                });
        }

        response();
    }, [noteId]);

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/"><i className="fa fa-arrow-circle-left fa-2x"></i></Link>
                </h3>
            </div>
            <textarea value={note?.body}></textarea>
        </div>
    )
}

export default NotePage;
