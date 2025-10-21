import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './ListFood.css';
import { deleteFood, getFoodList } from '../../services/foodService';

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
       const data = await getFoodList();
        setList(data);
    } catch (error) {
      toast.error('Error while fetching food list', error);
    }
  };

  const removeFood = async (id) => {
    try {
    const success = await deleteFood(id);
      if (success) {
        toast.success('Food item deleted successfully');
      } 
      await fetchList();
    } catch (error) {
      toast.error('Error while deleting food item', error);
    }
    
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.imageUrl} alt={item.name} height={48} width={48} />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}.00</td>
                <td className="text-danger">
                  <i className="bi bi-x-circle-fill" onClick={()=> removeFood(item.id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFood;
