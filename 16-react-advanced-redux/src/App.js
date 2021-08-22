import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import { sendCartData } from './store/cart-slice';

let isInitial= true;

function App() {
  const stateUi = useSelector(state => state.ui.cartIsVisible);
  const stateNotification = useSelector(state => state.ui.notification);
  const stateCart = useSelector(state => state.cart);
  const dispatchUi = useDispatch();

  useEffect(() => {
 
    if(isInitial){
      isInitial=false;
      return;
    }
    
    dispatchUi(sendCartData(stateCart));

  }, [stateCart, dispatchUi])

  return (
    <Fragment>
      {stateNotification && <Notification
      status={stateNotification.status}
      title={stateNotification.title}
      message={stateNotification.message} />}
      <Layout>
        {stateUi && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
