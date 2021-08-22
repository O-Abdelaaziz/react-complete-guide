import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from "./components/UI/Notification";

let isInitial= true;

function App() {
  const stateUi = useSelector(state => state.ui.cartIsVisible);
  const stateNotification = useSelector(state => state.ui.notification);
  const stateCart = useSelector(state => state.cart);
  const dispatchUi = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {

      dispatchUi(uiActions.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data !'
      }));
      const response = await fetch('https://react-http-c7642-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(stateCart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      //const responseData= await response.json();
      dispatchUi(uiActions.showNotification({
        status: 'Success',
        title: 'Success...',
        message: 'Sending cart data successfully.'
      }));
    }
    if(isInitial){
      isInitial=false;
      return;
    }
    sendCartData().catch((error)=>{
      dispatchUi(uiActions.showNotification({
        status: 'Error',
        title: 'Error...',
        message: 'Sending cart data failed.'
      }));
    });

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
