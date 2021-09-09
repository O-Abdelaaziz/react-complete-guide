import React from 'react'
import { useParams } from 'react-router';
import NotesData from '../assets/NotesData';

const NotePage = (props) => {
    const params = useParams();
    console.log(props);
    let note = NotesData.find(note => note.id == params.id);
    console.log("note",note)
    return (
        <div>
            <p>Param using hook {params.id}</p>
            <p>Param using props {props.match.params.id}</p>
            <p>{note?.body}</p>
        </div>
    )
}

export default NotePage;
