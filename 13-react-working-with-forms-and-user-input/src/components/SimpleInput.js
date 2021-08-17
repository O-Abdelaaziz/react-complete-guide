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
  
  let formIsValid=false;

  if(enteredNameIsValid){
    formIsValid=true;
  }

  const formSubmissionHandler=(event)=>{
    event.preventDefault();

    if(!enteredNameIsValid){
      return;
    }
    resetNameInput();
    /**
     * Not ideal, don't manipulate the dom directly.
     * Let dom manipulation for react.
     */
    //refInputName.current.value='',
  }
  const nameInputClass = nameInputHasError ? 'form-control invalid' : 'form-control'

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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
