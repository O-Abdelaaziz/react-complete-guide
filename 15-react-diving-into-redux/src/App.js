import { Fragment } from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const stateAuthentication = useSelector(state => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header/>
      {!stateAuthentication && <Auth/>}
      {stateAuthentication && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
