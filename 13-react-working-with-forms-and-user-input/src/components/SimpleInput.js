import {useState, useRef} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
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
      return;
    }
    console.log('Get value using useState: ',enteredName);
    console.log('Get value using useRef: ',refInputName.current.value);
    setEnteredName('');
    /**
     * Not ideal, don't manipulate the dom directly.
     * Let dom manipulation for react.
     */
    //refInputName.current.value='',
  }

  return (
    <form onSubmit={formSubmissionHandler}> 
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={refInputName} onChange={userNameHandlerUseState}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
