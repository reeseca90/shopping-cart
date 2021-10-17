import { createContext, useState } from "react";
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

export const storeContext = createContext([
    {name: 'Aquarius', src: aquarius, id: 0, quantity: 0, price: 9.99},
    {name: 'Aries', src: aries, id: 1, quantity: 0, price: 1.99},
    {name: 'Cancer', src: cancer, id: 2, quantity: 0, price: 19.99},
    {name: 'Gemini', src: gemini, id: 3, quantity: 0, price: 12.99},
    {name: 'Leo', src: leo, id: 4, quantity: 0, price: 15.99},
    {name: 'Libra', src: libra, id: 5, quantity: 0, price: 9.99},
    {name: 'Sagittarius', src: sagittarius, id: 6, quantity: 0, price: 29.99},
    {name: 'Scoprio', src: scorpio, id: 7, quantity: 0, price: 4.99},
    {name: 'Taurus', src: taurus, id: 8, quantity: 0, price: 5.99},
    {name: 'Virgo', src: virgo, id: 9, quantity: 0, price: 9.99}
  ]
);

export const cartContext = createContext({
  cart: [{name: 'defaultItem'}],
  setCart: () => {}
});
