import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-c7642-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Getting cart data failed.');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'Error',
                title: 'Error...',
                message: 'Getting cart data failed.'
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Sending...',
            message: 'Sending cart data !'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-c7642-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }


        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'Success',
                title: 'Success...',
                message: 'Sending cart data successfully.'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'Error',
                title: 'Error...',
                message: 'Sending cart data failed.'
            }));
        }

    }
}
