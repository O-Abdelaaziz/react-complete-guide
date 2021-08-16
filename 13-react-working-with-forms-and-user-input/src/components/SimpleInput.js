import {useState, useRef} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const refInputName = useRef();

  const userNameHandlerUseState = (event) =>{
    console.log(event.target.value);
    setEnteredName(event.target.value);
  }

  const userNameHandlerUseRef = (event) =>{
    console.log(refInputName.current.value);
  }

  const formSubmissionHandler=(event)=>{
    event.preventDefault();
    if(enteredName.trim() === ''){
      console.log('name is empty!');
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log('Get value using useState: ',enteredName);
    console.log('Get value using useRef: ',refInputName.current.value);
    setEnteredName('');
    /**
     * Not ideal, don't manipulate the dom directly.
     * Let dom manipulation for react.
     */
    //refInputName.current.value='',
  }

  const nameInputClass = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}> 
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={refInputName} onChange={userNameHandlerUseState}/>
        {!enteredNameIsValid && <p className="error-text">input name is not valid.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
