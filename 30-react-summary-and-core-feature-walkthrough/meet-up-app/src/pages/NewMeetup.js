import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {

    const addMeetupHandler= ()=>{

    }

    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetup
