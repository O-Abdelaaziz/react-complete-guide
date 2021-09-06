import './App.css';
import Home from './pages/Home';
import { Redirect, Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route to='/home'>
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
