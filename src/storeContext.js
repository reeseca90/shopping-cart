import { createContext } from "react";
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

const storeContext = createContext({
  products: [
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
  ],
  cart: []
  });

export default storeContext;