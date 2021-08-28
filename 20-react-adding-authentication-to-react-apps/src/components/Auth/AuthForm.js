import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';
const API_KEY = 'AIzaSyDpQngK9L0TleFRhgAXcqZr2v4zxwtTzCs'
const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (isLogin) {

    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+API_KEY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true
        })
      }).then(response => {
        setIsLoading(false);
        if (response.ok) {
          console.log(response);
        } else {
          response.json().then(data => {
            let errorMessage='Authentication failed!';
            if(data && data.error && data.error.message){
              errorMessage=data.error.message;
              console.log(data.error.message);
            }
            alert(errorMessage);
          });
        }
      });

    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
