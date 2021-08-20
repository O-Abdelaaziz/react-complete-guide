import classes from './Auth.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { authenticationActions } from '../store/authentication';
  
const Auth = () => {

  const stateAuthentication = useSelector(state => state.authentication.isAuthenticated);
  const dispatchAuthentication = useDispatch();
    
  const loginHandler = (event)=>{
    event.preventDefault();
    dispatchAuthentication(authenticationActions.login());
    console.log(stateAuthentication);
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
