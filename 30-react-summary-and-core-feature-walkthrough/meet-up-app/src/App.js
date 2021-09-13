import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetup from "./pages/AllMeetup";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
