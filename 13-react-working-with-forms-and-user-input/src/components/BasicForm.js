import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const isEnteredNameIsValid=enteredName.trim() !=='';
  const nameInputIsInvalid= !isEnteredNameIsValid && enteredNameTouched;

  const isEnteredEmailIsValid=enteredEmail.includes('@');
  const emailInputIsInvalid= !isEnteredEmailIsValid && enteredEmailTouched;

  let isFormValid=false;

  if(isEnteredNameIsValid && isEnteredEmailIsValid){
    isFormValid=true;
  }

  const nameInputChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }

  const nameBlurHandler=(event)=>{
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler=(event)=>{
    setEnteredEmail(event.target.value);
  }

  const emailBlurHandler=(event)=>{
    setEnteredEmailTouched(true);
  }
  

  const submitFormHandler=(event)=>{
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if(!isEnteredNameIsValid || !isEnteredEmailIsValid){
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClassInvalid= nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClassInvalid= emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameInputClassInvalid}>
          <label htmlFor='name'>First Name</label>
          <input 
          id='name'
          value={enteredName} 
          type='text'
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}   />
          {nameInputIsInvalid && (<p className="error-text">input name is not valid.</p>)}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className={emailInputClassInvalid}>
        <label htmlFor='email'>E-Mail Address</label>
        <input  
          id='email'
          value={enteredEmail} 
          type='email'
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}   />
          {emailInputIsInvalid && (<p className="error-text">input email is not valid.</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
