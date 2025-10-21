import React from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ExploreFood = () => {
  return (

    <>
    <div className='container'>
    <div className='row justify-content-center'>
      <div  className='col-md-8'>
        <form> 
          <div className='input-group mb-3'>
          <select className='form-select mt-2' style={{'maxWidth':'150px'}}>
            <option value="biryani">Biryani</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="roll">roll</option>
            <option value="salad">salad</option>
            <option value="cake">cake</option>
            <option value="pasta">Pasta</option>
            <option value="noodles">Noodles</option>
          </select>
          <input type="text" className='form-control mt-2' placeholder='Search your favourite Food Items...'/>
          <button className='btn btn-primary mt-2' type='submit'>
            <i className='bi bi-search'></i>
          </button>
          </div>
           </form>
        </div>
      </div>
   </div>
    
    <FoodDisplay />
    </>
   
  )
}

export default ExploreFood;