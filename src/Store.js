import { useState } from 'react';
import './Store.css';
// I DON'T KNOW WHY I HAVE TO IMPORT WITH FILE EXTENSION BUT IT CRASHES IF I DON'T
import aquarius from './images/aquarius.jpg';
import aries from './images/aries.jpg';
import cancer from './images/cancer.jpg';
import gemini from './images/gemini.jpg';
import leo from './images/leo.jpg';
import libra from './images/libra.jpg';
import sagittarius from './images/sagittarius.jpg';
import scorpio from './images/scorpio.jpg';
import taurus from './images/taurus.jpg';
import virgo from './images/virgo.jpg';

const Store = () => {
  const [order, setOrder] = useState({itemID: '', quantity: 0});

  const [items, setItems] = useState([
    {name: 'Aquarius', src: aquarius, id: 0},
    {name: 'Aries', src: aries, id: 1},
    {name: 'Cancer', src: cancer, id: 2},
    {name: 'Gemini', src: gemini, id: 3},
    {name: 'Leo', src: leo, id: 4},
    {name: 'Libra', src: libra, id: 5},
    {name: 'Sagittarius', src: sagittarius, id: 6},
    {name: 'Scoprio', src: scorpio, id: 7},
    {name: 'Taurus', src: taurus, id: 8},
    {name: 'Virgo', src: virgo, id: 9}
  ]);

  const handleChange = (e) => {
    setOrder({itemID: e.target.id,
    quantity: e.target.value
    });

    console.log(order);
  }

  const addToCart = (e) => {
    e.preventDefault();
    const holdQuantity = order.quantity;

    setOrder({itemID: e.target.id,
      quantity: holdQuantity
    });

    console.log(order);
  }

  const tableData = (e) => {
    e.preventDefault();
    console.log(order);
  }

  

  return (
    <div id="Store" className="mainContent">
      <button onClick={tableData}>log data</button>
      <div id="storeGrid">
        {items.map((item) => {
          return (
            <div className="card" id={item.id}>
              <img src={item.src} id={item.id} alt={item.name} />
              <span>{item.name}</span>
              <div className="toCart">
                <input id={item.id} type="number" placeholder="0" onChange={handleChange} />
                <button id={item.id} onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;