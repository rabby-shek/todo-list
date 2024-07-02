import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Main from './layout/main/Main';
import Sidebar from './components/sidebar/Sidebar'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
const App = () => {

  return <RouterProvider router={router} />


}

export default App;
