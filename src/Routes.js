import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Store from './Store';
import Cart from './Cart';
import { useReducer, useEffect, useContext } from "react";

import { cartContext } from "./storeContext";
import NavBar from "./NavBar";

function reducer(cart, action) {
  switch (action.type) {
    case 'add':
        return [...cart, action.payload]; 
    case 'delete':
      let workingCart = [...cart].filter(function(item) {
          // these strict equalities are killing me
          return item.id != action.payload;
        });
      return workingCart;
    default:
      throw console.error('no action provided');
  }
}

const Routes = () => {
  const [cart, dispatch] = useReducer(reducer, []);

  async function addToCart(item) {
    if (item.quantity <= 0) {
      console.log('invalid quantity');
    } else {
      await dispatch({type: 'add', payload: item});
    }
  }

  async function deleteItem(itemID) {
    await dispatch({type: 'delete', payload: itemID})
  }

  return (
    <BrowserRouter>
      <cartContext.Provider value={{ cart, dispatch }}>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store">
              <Store addToCart={addToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart deleteFromCart={deleteItem} />
            </Route>
        </Switch>
      </cartContext.Provider>
    </BrowserRouter>
  );
};

export default Routes;