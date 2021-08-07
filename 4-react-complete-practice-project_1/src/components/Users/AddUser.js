import React ,{useState} from 'react'
import Card from '../UI/Card';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
        console.log(event.target.value);
    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
        console.log(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(event);
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Year):</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser;
