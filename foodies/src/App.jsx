import React from 'react'
import Menubar from './components/Menubar/Menubar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import ExploreFood from './pages/ExploreFood/ExploreFood'
import FoodDetails from './pages/FoodDetails/FoodDetails'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'









const App = () => {
  return (
    <div>
  <Menubar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/ExploreFood" element={<ExploreFood />} />
    <Route path='/food/:id' element ={<FoodDetails />} /> 
    <Route path='/cart' element ={<Cart />} />
    <Route path='/order' element={<PlaceOrder/>} />
  </Routes>
</div>
  )
}

export default App;