import React, { useEffect, useState } from 'react'

const Home = (props) => {
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
        const response = async () => {
            await fetch('http://localhost:3006/exercises')
                .then(response => { return response.json() })
                .then(responseData => { console.log(responseData); });
        }
        console.log("from useEffect");
        response();
    }, [])
    return (
        <div>

        </div>
    )
}

export default Home
