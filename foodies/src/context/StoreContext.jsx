import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { fetchFoodList } from '../service/foodService.js';
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

 const [foodList, setFoodList] = useState([]);

 const [quantities, setQuantities] = useState({});

const removeFromCart = (foodId) => {
  setQuantities((prevQuantities) => {
    const updatedQuantities = { ...prevQuantities };
    delete updatedQuantities[foodId];
    return updatedQuantities;
  });
};


 const incrementQuantity = (foodId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: (prevQuantities[foodId] || 0) + 1,
    }));
  }

  const decrementQuantity = (foodId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[foodId] || 0;    
      if (currentQuantity > 0) {
        return {
          ...prevQuantities,    
          [foodId]: currentQuantity - 1,

        };
      }
      return prevQuantities;
    });
  }


  const contextValue = {
    foodList
    , quantities, incrementQuantity, decrementQuantity,removeFromCart
    
  };

  useEffect(() => {
  async function loadData() {
    const data = await  fetchFoodList();
    setFoodList(data);
  }
  loadData();
 }, []);    



  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
 