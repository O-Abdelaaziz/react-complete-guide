import { Switch, Route, Redirect } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetup from "./pages/AllMeetup";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/meetups' />
        </Route>
        <Route path='/meetups'>
          <AllMeetup />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
