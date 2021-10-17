import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);