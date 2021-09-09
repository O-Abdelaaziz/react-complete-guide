import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Switch>
          <Route path='/' exact component={() => { return <Redirect to="/notes" /> }} />
          <Route path="/notes" component={NotesPage} exact />
          <Route path="/notes/:id" component={NotePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
