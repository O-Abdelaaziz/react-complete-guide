import React, { useEffect, useState } from 'react'
import BaseFilter from '../components/BaseFilter';
import ExercisesList from '../components/ExercisesList';
import { FilterStatus } from '../helper/Utils';

const Home = (props) => {
    const [exercises, setExercises] = useState([]);
    const [currentFilter, setCurrentFilter] = useState(FilterStatus.ALL);

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
            return updateExerciseList;
        });
    }

    const updateFilterStatusHandler = (netFilter) => {
        setCurrentFilter(netFilter);
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
                    setExercises(fetchedExercises);
                });
        }
        response();
    }, []);

    const filterStyleHandler = () => {
        let currentStyle ;
        if (currentFilter === FilterStatus.COMPLETE) {
             currentStyle = <ExercisesList onRemoveExercise={removeExerciseHandler} onToggleExercise={toggleExerciseStatusHandler} exercises={exercises.filter(exercise => exercise.complete)} />;
            return currentStyle 
        } else if (currentFilter === FilterStatus.PENDING) {
             currentStyle = <ExercisesList onRemoveExercise={removeExerciseHandler} onToggleExercise={toggleExerciseStatusHandler} exercises={exercises.filter(exercise => !exercise.complete)} />;
            return currentStyle
        } else {
            return <ExercisesList onRemoveExercise={removeExerciseHandler} onToggleExercise={toggleExerciseStatusHandler} exercises={exercises} />
        }
    }
    return (
        <div>
            <BaseFilter onFilter={updateFilterStatusHandler} current={currentFilter} />
            {filterStyleHandler()}
        </div>
    )
}

export default Home
