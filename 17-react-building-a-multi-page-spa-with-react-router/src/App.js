import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div>
      <MainHeader/>
      <Route path='/welcome'><Welcome/></Route>
      <Route path='/product'><Product/></Route>
      <Route path='/product-details/:productId'><ProductDetails/></Route>
    </div>
  );
}

export default App;
