import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const stateUi = useSelector(state => state.ui.cartIsVisible);
  const stateCart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://react-http-c7642-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(stateCart),
    })
  }, [stateCart])

  return (
    <Layout>
      {stateUi && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
