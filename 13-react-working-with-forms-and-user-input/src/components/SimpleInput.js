import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const{
    value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueInputChangeHandler:nameChangeHandler,
    valueInputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  }=useInput((value)=>value.trim() !== '');
  
  const{
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueInputChangeHandler:emailChangeHandler,
    valueInputBlurHandler:emailBlurHandler,
    reset:resetEmailInput

  }=useInput((value)=> value.includes('@'));

  let formIsValid=false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true;
  }

  const formSubmissionHandler=(event)=>{
    event.preventDefault();

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }
    resetNameInput();
    resetEmailInput();
    /**
     * Not ideal, don't manipulate the dom directly.
     * Let dom manipulation for react.
     */
    //refInputName.current.value='',
  }
  const nameInputClass = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}> 
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}/>
        {nameInputHasError && (<p className="error-text">input name is not valid.</p>)}
      </div>

      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
        type='email' 
        id='email' 
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}/>
        {emailInputHasError && (<p className="error-text">input email is not valid.</p>)}
      </div>
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
