import { Route } from "react-router-dom";
import Product from "./components/Product";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path='/welcome'><Welcome/></Route>
      <Route path='/product'><Product/></Route>
    </div>
  );
}

export default App;
