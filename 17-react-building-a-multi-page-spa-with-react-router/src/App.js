import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path='/welcome'><Welcome /></Route>
        <Route path='/products' exact><Product /></Route>
        <Route path='/products/:productId'><ProductDetails /></Route>
      </Switch>
    </div>
  );
}

export default App;
