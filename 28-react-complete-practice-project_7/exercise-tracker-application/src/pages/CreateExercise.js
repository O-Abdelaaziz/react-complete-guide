import React, { Fragment, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';
import classes from './CreateExercise.module.css';

const CreateExercise = (props) => {
    const titleInputRef = useRef();
    const detailsInputRef = useRef();
    const history = useHistory();

    //if we working with useState
    // const [exercise, setExercise] = useState({
    //     title: '',
    //     details: '',
    // });


    // const inputHandleChange = (event) => {
    //     setExercise({
    //         ...exercise,
    //         [event.target.name]:event.target.value,
    //     })
    // };

    const submitHandler = (event) => {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const details = detailsInputRef.current.value;

        if (title === '' || details === '') {
            console.error('title or details can\'t be empty!');
            alert('title or details can\'t be empty!');
            return;
        }

        const exercise = {
            id: uuidv4,
            title,
            details,
            complete: false,
        };
        console.log(exercise);
        fetch(`http://localhost:3006/exercises`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(exercise)
        }).then((response) => {
            console.log(response);
            history.push('/');
        }).catch((error)=>{
            console.error(error);
        });
    }

    return (
        <Fragment>
            <h4>Create New Exercise</h4>
            <form onSubmit={submitHandler} className={classes.form}>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" ref={titleInputRef} placeholder="enter title here ..." maxLength="15" />

                <label htmlFor="detail">Details</label>
                <textarea id="detail" name="details" type="text" ref={detailsInputRef} cols="30" rows="10" placeholder="enter details here ..." />
                <button>Create Exercise</button>
            </form>
        </Fragment>

    )
}

export default CreateExercise
