import React, { useState,useEffect,useReducer,useContext,useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer =(stateSnapshot,action)=>{
  if(action.type ==='USER_INPUT'){
    return {value:action.val,isValid:action.val.includes('@')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:stateSnapshot.value,isValid:stateSnapshot.value.includes('@')};
  }
  return {value:'',isValid:false};
}

const passwordReducer=(stateSnapshot,action)=>{
  if(action.type==='USER_INPUT'){
    return {value:action.val,isValid:action.val.trim().length>6}
  }
  if(action.type==='INPUT_BLUR'){
    return {value:stateSnapshot.value,isValid:stateSnapshot.value.trim().length>6}
  }
  return {value:'',isValid:false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailSate, dispatchEmail] = useReducer(
    emailReducer,
    {value:'',isValid:false});

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    {value:'',isValid:false});  

  const context = useContext(AuthContext);

  const {isValid:emailIsValid}=emailSate;
  const {isValid:passwordIsValid}=passwordState;

  const refEmailInput = useRef();
  const refPasswordInput = useRef();

  useEffect(() => {

    const identifier = setTimeout(() => {
          console.log('Checking the form validity');
          setFormIsValid(
            emailIsValid && passwordIsValid
          );
        }, 500);
    return ()=>{
      console.log('Clean up the timer');
      clearTimeout(identifier);
    }    

  }, [emailIsValid,passwordIsValid]);

  useEffect(() => {
    console.log('Effect is running !!!');
    return () => {
      console.log('Effect is clean up !!!');
    }
  }, [])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value});
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT',val:event.target.value});
    setFormIsValid(
      emailSate.isValid && event.target.value.trim().length>6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      context.onLogin(emailSate.value, passwordState.value);
    }else if(!emailIsValid){
      refEmailInput.current.focus();
    }else{
      refPasswordInput.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={refEmailInput}
          id="email"
          label="Email:"
          type="email"
          isValid={emailIsValid}
          value={emailSate.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={refPasswordInput}
          id="password"
          label="Password:"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
