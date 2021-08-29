import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const API_KEY = ''

const ProfileForm = () => {
  const passwordInputRef=useRef();
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const submitHandler= (event)=>{
    event.preventDefault();

    let url='https://identitytoolkit.googleapis.com/v1/accounts:update?key='+API_KEY;
    const enteredPassword=passwordInputRef.current.value;
    fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        idToken:authContext.token,
        password:enteredPassword,
        returnSecureToken:false
      })
    }).then(response=>{
      if(response.ok){
        return response.json();
      }else{
        response.json().then(data => {
          let errorMessage = 'Change password failed!';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
            console.log(data.error.message);
          }
          alert(errorMessage);
          //throw new Error(errorMessage);
        });
      }
    }).then(data=>{
      console.log(data);
      alert('Password changed successfully');
      history.replace('/');
    }).catch(error=>{
      console.log(error);
    })

  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' minLength='7' ref={passwordInputRef} id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
