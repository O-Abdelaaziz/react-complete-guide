import React , {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {

    const context = useContext(CartContext);
    const totalAmount=`$${context.totalAmount.toFixed(2)}`;
    const hasItems=context.items.length>0;

    const cartItemRemoveHandler= (id)=>{

    }

    const cartItemAddHandler= (item)=>{

    }

    const cartItems = (<ul className={classes['cart-items']}>
        {
            context.items.map((item) => (<CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null,item.id)} 
                onAdd={cartItemAddHandler.bind(null,item)} />))
        }
    </ul>);

    return (
        <Modal onClick={props.onHideCart}>
            {console.log("from model")}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart} >Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;