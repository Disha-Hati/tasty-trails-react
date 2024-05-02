import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';




const App = () => {
  return (
    <div >
    
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App;

