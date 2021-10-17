import { useContext, useState } from 'react';
import './Store.css';
import {storeContext, cartContext} from './storeContext';

const Store = ({ addToCart }) => {
  const [order, setOrder] = useState({id: '', quantity: 0});

  const items = useContext(storeContext);
  const { cart } = useContext(cartContext);

  const handleChange = (e) => {
    // not using strict equality because ID becomes a string during setOrder
    let workingItem = items.find((element) => {
      return element.id == e.target.id;
    });

    setOrder({id: workingItem.id,
      quantity: e.target.value,
      name: workingItem.name,
      src: workingItem.src,
      price: workingItem.price,
      totalPrice: e.target.value * workingItem.price
    });
  }

  const addToCartHandler = (e) => {
    e.preventDefault();

    // don't add item to cart if add button for an item whose quantity was not updated last
    // not using strict equality because ID becomes a string during setOrder
    if (order.id != e.target.id) {
      console.log('clicked wrong add button');
    } else {
      // do function to add to cart
      addToCart(order);
    }
  }

  return (
    <div id="Store" className="mainContent">
      <div id="storeGrid">
        {items.map((item) => {
          return (
            <div className="card" id={item.id}>
              <img src={item.src} id={item.id} alt={item.name} />
              <span>{item.name}</span>
              <div className="toCart">
                <input className="textInput" id={item.id} type="number" placeholder="0" onChange={handleChange} />
                <button id={item.id} onClick={addToCartHandler}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;