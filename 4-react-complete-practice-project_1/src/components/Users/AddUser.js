import React ,{useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

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
        if(enteredUsername.trim().length===0 || enteredAge.trim().length ===0){
            return;
        }
        if(+enteredAge<1){
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <div>
            <ErrorModal title="An error occured!" message="Something went wrong!" />
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Year):</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
