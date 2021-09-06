import React from 'react';
import ExercisesItem from './ExercisesItem';
import classes from "./ExercisesList.module.css";

const ExercisesList = (props) => {
    return (
        <div className={classes['exercises-list']}>
            {props.exercises.map(exercise => {
                return <ExercisesItem onRemoveExercise={props.onRemoveExercise} key={exercise.id} exercise={exercise}/>
            })}
        </div>
    )
}

export default ExercisesList
