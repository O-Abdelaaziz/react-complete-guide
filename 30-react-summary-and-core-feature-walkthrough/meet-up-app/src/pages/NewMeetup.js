import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {

    const addMeetupHandler = (meetup) => {
        fetch("https://react-http-c7642-default-rtdb.firebaseio.com/meetups.json", {
            headers: { 'Content-Type': "application/json" },
            method: 'POST',
            body: JSON.stringify(meetup)
        }).then((response) => {
            return response.json();
        }).then((responseData) => {
            console.log("DataInserted successfully", responseData);
        })
    }

    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetup
