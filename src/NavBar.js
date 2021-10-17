import './NavBar.css';
import { Link } from "react-router-dom";
import { cartContext } from "./storeContext";
import { useContext } from 'react/cjs/react.development';

const NavBar = () => {
  const { cart } = useContext(cartContext);  
  return (
    <header>
      <div className="header">
        <div id='logo'>
          <Link to="/">Craig's SkyStore</Link>
        </div>

        <div id='links'>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <div id="cartAndQuantity"><Link to="/cart">Cart&nbsp;</Link><span id="cartQuantity">&nbsp;{cart.length}&nbsp;</span></div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;