import {useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid= !enteredNameIsValid && enteredNameTouched;
  
  let formIsValid=false;

  if(enteredNameIsValid){
    formIsValid=true;
  }

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler=(event)=>{
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler=(event)=>{
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }
     setEnteredName('');
     setEnteredNameTouched(false);
    /**
     * Not ideal, don't manipulate the dom directly.
     * Let dom manipulation for react.
     */
    //refInputName.current.value='',
  }
  const nameInputClass = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}> 
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && (<p className="error-text">input name is not valid.</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
