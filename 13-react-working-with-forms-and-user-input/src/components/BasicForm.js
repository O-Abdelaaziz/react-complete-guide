import useCurrentInput from "../hooks/use-current-input";
const BasicForm = (props) => {

  const {
    value:enteredFirstName,
    isValid:isEnteredFirstNameIsValid,
    hasError:firstNameInputIsInvalid,
    valueInputChangeHandler:firstNameInputChangeHandler,
    valueBlurHandler:firstNameBlurHandler,
    reset:resetFirstNameInput,


  }= useCurrentInput((value)=>value.trim() !=='');

  const {
    value:enteredLastName,
    isValid:isEnteredLastNameIsValid,
    hasError:lastNameInputIsInvalid,
    valueInputChangeHandler:lastNameInputChangeHandler,
    valueBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput,


  }= useCurrentInput((value)=>value.trim() !=='');

  
  const {
    value:enteredEmail,
    isValid:isEnteredEmailIsValid,
    hasError:emailInputIsInvalid,
    valueInputChangeHandler:emailInputChangeHandler,
    valueBlurHandler:emailBlurHandler,
    reset:resetEmailInput,


  }= useCurrentInput((value)=>value.includes('@'));


  let isFormValid=false;

  if(isEnteredFirstNameIsValid && isEnteredEmailIsValid && isEnteredLastNameIsValid){
    isFormValid=true;
  }

  

  const submitFormHandler=(event)=>{
    event.preventDefault();

    if(!isEnteredFirstNameIsValid || !isEnteredEmailIsValid || !isEnteredLastNameIsValid){
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameInputClassInvalid= firstNameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const lastNameInputClassInvalid= lastNameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClassInvalid= emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameInputClassInvalid}>
          <label htmlFor='fname'>First Name</label>
          <input 
          id='fname'
          value={enteredFirstName} 
          type='text'
          onChange={firstNameInputChangeHandler}
          onBlur={firstNameBlurHandler}   />
          {firstNameInputIsInvalid && (<p className="error-text">input first name is not valid.</p>)}
        </div>
        <div className={lastNameInputClassInvalid}>
          <label htmlFor='lname'>Last Name</label>
          <input 
          id='lname'
          value={enteredLastName} 
          type='text'
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameBlurHandler}   />
          {lastNameInputIsInvalid && (<p className="error-text">input last name is not valid.</p>)}
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
