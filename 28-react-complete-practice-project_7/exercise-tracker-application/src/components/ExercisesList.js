import React from 'react'

const ExercisesList = (props) => {
    return (
        <ul>
            {props.exercises.map(exercise => {
                return <li key={exercise.id}>{exercise.title}</li>
            })}
        </ul>
    )
}

export default ExercisesList
