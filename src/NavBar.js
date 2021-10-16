import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <div id='logo'>
        Craig's SkyStore
      </div>

      <div id='links'>
        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/cart">Cart</a>
      </div>
    </header>
  );
}

export default NavBar;