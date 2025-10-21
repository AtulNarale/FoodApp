import cart from './cart.png';
import logo from './logo.png';
import burger from './burger.jpeg';
import cake from './cake.jpeg';
import chickenbiryani from './chickenbiryani.jpg';
import pizza from './pizza.jpeg';
import salad from './salad.jpeg';
import roll from './roll.jpeg';
import pasta from './pasta.jpeg';
import noodles from './noodles.jpeg';



  

export const assets = { logo, cart };

export const categories = [
  { category: 'Burger', icon: burger },
  { category: 'Cake', icon: cake },
  { category: 'Biryani', icon: chickenbiryani },
  { category: 'Pizza', icon: pizza },
  { category: 'Salad', icon: salad },
  { category: 'Roll', icon: roll },
    // ✅ Add new category here
  { category: 'Pasta', icon: pasta },    // Example
  { category: 'Noodles', icon: noodles } 
];
