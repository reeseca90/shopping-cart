import React from 'react';
import './Home.css';
import milkyway from './images/milkyway.jpg'

class Home extends React.Component {

  render() {
    return (
      <div id="Home" className="mainContent">
        <h1>Welcome to Craig's SkyStore!</h1>
        <div id="homeUpper">
          <div id="homeText">
            <p className="homeText">If you've ever wanted to own your very own piece of the galaxy, there has never been a better time than now. We sell <i>entirely real and completely legitimate</i> claims to the constellations, with our stock rotating often.</p>
            <br />
            <p className="homeText">These offers are so legitimate that you can buy <i>multiple</i> of the same consetllation! Don't miss out!</p>
          </div>
          <img id="homeImage" src={milkyway} alt='Milky Way Galaxy' />
        </div>
        <h2>We sell only the finest <i>totally real</i> constellations.</h2>
      </div>
    );
  }
}

export default Home;
