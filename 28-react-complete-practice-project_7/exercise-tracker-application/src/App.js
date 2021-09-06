import './App.css';
import Home from './pages/Home';
import { Redirect, Route, Switch } from 'react-router';
import CreateExercise from './pages/CreateExercise';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/create-exercise' >
          <CreateExercise />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
