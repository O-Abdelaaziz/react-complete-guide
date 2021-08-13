import React , {useReducer} from 'react'
import CartContext from './cart-context'


const defaultCartStat={
    items:[],
    totalAmount:0,
};

const cartReducer=(statSnapshot,action)=>{
    if(action.type==='ADD'){
        const updateTotalAmount=statSnapshot.totalAmount +(action.item.price * action.item.amount);
        const existingCartItemIndex=statSnapshot.items.findIndex(item=>item.id===action.id);
        const existingCartItem=statSnapshot.items[existingCartItemIndex];
       
        let updatedItems;
       
        if(existingCartItem){
            let updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            };
            updatedItems=[...statSnapshot.items];
            updatedItems[existingCartItemIndex]=updatedItem
        }else{
            updatedItems=statSnapshot.items.concat(action.item);
        }

        return {
            items:updatedItems,
            totalAmount:updateTotalAmount,
        }
    }
    return defaultCartStat;
}

const CartProvider = (props) => {


    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartStat )

    const addItemToCartHandler= item=>{
        dispatchCart({type:'ADD',item:item})
    };
    const removeItemFromCartHandler= id =>{
        dispatchCart({type:'REMOVE',item:id}) 
    };

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
