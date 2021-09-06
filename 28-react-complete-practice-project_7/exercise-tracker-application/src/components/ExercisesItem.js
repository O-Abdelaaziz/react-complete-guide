import React from 'react'
import classes from './ExerciserItem.module.css';
const ExercisesItem = (props) => {

    const removeExerciseHandler = () => {
        props.onRemoveExercise(props.exercise.id);
    }
    return (
        <div className={classes.exercise}>
            <div className={classes.actions}>
                <h4>{props.exercise.title}</h4>
                <div className={classes.buttons}>
                    <button className="button" onClick={removeExerciseHandler}>Remove</button>
                </div>
            </div>
            <div className={classes.details}>
                <p>{props.exercise.details}</p>
            </div>
        </div>
    )
}

export default ExercisesItem
