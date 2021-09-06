import React from 'react'
import classes from './ExerciserItem.module.css';
const ExercisesItem = (props) => {
    return (
        <div className={classes.exercise}>
            <div className={classes.actions}>
                <h4>{props.exercise.title}</h4>
                <div className={classes.buttons}></div>
            </div>
            <div className={classes.details}>
                <p>{props.exercise.details}</p>
            </div>
        </div>
    )
}

export default ExercisesItem
