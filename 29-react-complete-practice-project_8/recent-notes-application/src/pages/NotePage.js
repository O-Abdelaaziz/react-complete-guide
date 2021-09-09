import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NotesData from '../assets/NotesData';

const NotePage = (props) => {
    const params = useParams();
    let note = NotesData.find(note => note.id === +params.id);
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
