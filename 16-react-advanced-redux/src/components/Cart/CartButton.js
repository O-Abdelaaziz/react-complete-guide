import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatchCart = useDispatch();
  const stateCart = useSelector(state => state.cart.totalQuantity);

  const cartToggleHandler = () =>{
    dispatchCart(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{stateCart}</span>
    </button>
  );
};

export default CartButton;
