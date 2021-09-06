import React from 'react'
import classes from './ExerciserItem.module.css';
const ExercisesItem = (props) => {

    const removeExerciseHandler = () => {
        fetch(`http://localhost:3006/exercises/${props.exercise.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                props.onRemoveExercise(props.exercise.id);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    const toggleExerciseStatusHandler= ()=>{
        props.onToggleExercise(props.exercise.id);
    }
    return (
        <div className={classes.exercise}>
            <div className={classes.actions}>
                <h4>{props.exercise.title}</h4>
                <div className={classes.buttons}>
                    <button className="button" onClick={removeExerciseHandler}>Remove</button>
                    <button className="button" onClick={toggleExerciseStatusHandler}>Toggle</button>
                </div>
            </div>
            <div className={classes.details}>
                <p>{props.exercise.details}</p>
            </div>
        </div>
    )
}

export default ExercisesItem
