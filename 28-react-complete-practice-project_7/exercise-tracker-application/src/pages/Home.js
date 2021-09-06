import React, { useEffect, useState } from 'react'
import ExercisesList from '../components/ExercisesList';

const Home = (props) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const response = async () => {
            await fetch('http://localhost:3006/exercises')
                .then(response => {
                    return response.json()
                })
                .catch((error)=>{
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
            <ExercisesList exercises={exercises} />
        </div>
    )
}

export default Home
