import React, { Fragment, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

const EditExercise = (props) => {
    const [titleInput, setTitleInput] = useState('');
    const [detailsInput, setDetailsInput] = useState('');
    const history = useHistory();
    const params = useParams();
    const exerciseId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3006/exercises/${exerciseId}`)
            .then((response) => {
                return response.json();
            })
            .then((responseDate) => {
                setTitleInput(responseDate.title);
                setDetailsInput(responseDate.details);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [exerciseId]);

    const inputTitleHandleChange = (event) => {
        setTitleInput(event.target.value);
    };
    const inputDetailsHandleChange = (event) => {
        setDetailsInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (titleInput === '' || detailsInput === '') {
            console.error('title or details can\'t be empty!');
            alert('title or details can\'t be empty!');
            return;
        }

        const exercise = {
            title:titleInput,
            details:titleInput,
        };
        fetch(`http://localhost:3006/exercises/${exerciseId}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PATCH',
            body: JSON.stringify(exercise)
        }).then((response) => {
            console.log(response);
            history.push('/');
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <Fragment>
            <h4>Edit Exercise ({"N°:" + exerciseId})</h4>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" value={titleInput} onChange={inputTitleHandleChange} placeholder="enter title here ..." maxLength="15" />

                <label htmlFor="detail">Details</label>
                <textarea id="detail" name="details" type="text" value={detailsInput} onChange={inputDetailsHandleChange} cols="30" rows="10" placeholder="enter details here ..." />
                <button>Update Exercise</button>
            </form>
        </Fragment>

    )
}

export default EditExercise
