import './App.css';
import Home from './pages/Home';
import { Redirect, Route, Switch } from 'react-router';
import CreateExercise from './pages/CreateExercise';
import Navbar from './components/Navbar';
import EditExercise from './pages/EditExercise';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
        <Route path='/exercises/:id/edit' >
          <EditExercise />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
