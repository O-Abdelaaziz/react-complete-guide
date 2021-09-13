import React, { useState,useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const refEnteredUsername = useRef();
  const refEnteredAge = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const username =refEnteredUsername.current.value;
    const age=refEnteredAge.current.value;

    if (username === 0 || age === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(username, age);
    refEnteredUsername.current.value='';
    refEnteredAge.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    //<div>
    <Wrapper>
     { error && (
        <ErrorModal
          key="error-modal"
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card key="add-user" className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={refEnteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={refEnteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
    //</div>
  );
};

export default AddUser;
