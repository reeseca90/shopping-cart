import React from "react";
import { useContext } from "react/cjs/react.development";
import { cartContext } from "./storeContext";
import './Cart.css'


const Cart = ({ deleteFromCart }) => { 
  const { cart } = useContext(cartContext);

  const deleteItemHandler = (e) => {
    e.preventDefault();
    const workingID = e.target.id;
    deleteFromCart(workingID);
  }

  function reduceFunc(total, num) {
    return total + num.totalPrice;
  }

  function total() {
    let subTotal = parseFloat(cart.reduce(reduceFunc, 0));
    let tax = parseFloat((cart.reduce(reduceFunc, 0) * 0.1).toFixed(2));

    return subTotal + tax;
  }

  return (
    <div id="Cart" className="mainContent">
      {cart.map((item) => {
        return (
          <div id={item.id} className="cartCard">
            <img src={item.src} alt={item.name} />
            <div className="cartCardText">
              <span>{item.name}</span>
              <span>Price: {item.price}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
            <button id={item.id} className="cartButton" onClick={deleteItemHandler}>Delete Item</button>
          </div>
        );        
      })}
      <div className="cartTotals">
        <div className="cartLines">
          <span>Subtotal:</span>
          <span>{cart.reduce(reduceFunc, 0).toFixed(2)}</span>
        </div>    
        <div className="cartLines">
          <span>Tax:</span>
          <span>{(cart.reduce(reduceFunc, 0) * 0.1).toFixed(2)}</span>
        </div>
        <div className="cartLines">
          <span>Total:</span>
          <span>{total().toFixed(2)}</span> 
        </div>
        
      </div>
    </div>
  );
}


export default Cart;