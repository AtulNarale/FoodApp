import AddFood from './pages/AddFood/AddFood'
import ListFood from './pages/ListFood/ListFood'
import Sidebar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Mbar'
import { Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
  
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="d-flex" id="wrapper">   
          <Sidebar sidebarVisible={sidebarVisible}/>
      
      <div id="page-content-wrapper">
             <Menubar toggleSidebar={toggleSidebar} />
             <ToastContainer/>


        <div className="container-fluid">

        
        
         <Routes>
            <Route path='/add' element={<AddFood />} />
            <Route path='/list' element={<ListFood />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/' element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App