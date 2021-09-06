import React, { useEffect, useState } from 'react'
import ExercisesList from '../components/ExercisesList';

const Home = (props) => {
    const [exercises, setExercises] = useState([]);

    const removeExerciseHandler = (id) => {
        const patchedExercise = exercises.filter(exercise => exercise.id !== id);
        setExercises(patchedExercise);
    }

    const toggleExerciseStatusHandler = (id) => {
        // console.log("The id: "+id);
        // const cloneExercises = [...exercises];
        // const clickedExerciseIndex = cloneExercises.findIndex(exercise => exercise.id === id);
        // const clickedExercise=cloneExercises[clickedExerciseIndex];
        // clickedExercise.complete = !clickedExercise.complete;
        //setExercises(cloneExercises);
        setExercises((prevExerciseState) => {
            const exerciseIndex = prevExerciseState.findIndex(exercise => exercise.id === id); //1,5,23654,.... etc;
            const newExerciseStatus = !prevExerciseState[exerciseIndex].complete;
            const updateExerciseList = [...prevExerciseState];
            updateExerciseList[exerciseIndex] = {
                ...prevExerciseState[exerciseIndex],
                complete: newExerciseStatus,
            };
            console.log(updateExerciseList);
            return updateExerciseList;
        });
    }

    useEffect(() => {
        const response = async () => {
            await fetch('http://localhost:3006/exercises')
                .then(response => {
                    return response.json()
                })
                .catch((error) => {
                    console.log(error.message);
                })
                .then(fetchedExercises => {
                    console.log(fetchedExercises);
                    setExercises(fetchedExercises);
                });
        }
        console.log("from useEffect");
        response();
    }, [])
    return (
        <div>
            <ExercisesList onRemoveExercise={removeExerciseHandler} onToggleExercise={toggleExerciseStatusHandler} exercises={exercises} />
        </div>
    )
}

export default Home
