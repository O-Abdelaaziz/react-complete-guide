import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";
const { Route, Switch, Redirect } = require("react-router-dom");

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact><Redirect to='/quotes' /></Route>
        <Route path='/quotes' exact><AllQuotes /></Route>
        <Route path='/quotes/:quoteId'><QuoteDetail /></Route>
        <Route path='/new-quote'><NewQuote /></Route>
        <Route path='*'><NotFound /></Route>
      </Switch>
    </Layout>
  );
}

export default App;