import classes from './Header.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { authenticationActions } from '../store';


const Header = () => {
  const stateAuthentication = useSelector(state => state.authentication.isAuthenticated);
  const dispatchAuthentication = useDispatch();
  const logoutHandler = ()=>{
    dispatchAuthentication(authenticationActions.logout());
    console.log(stateAuthentication);
  }
  return (
    <header className={classes.header}>
      {console.log(stateAuthentication)}
      <h1>Redux Auth</h1>
      <nav>
        {
          stateAuthentication &&
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
