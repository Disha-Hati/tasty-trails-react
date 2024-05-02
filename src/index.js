import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import User from './components/User';
import Cart from './components/Cart';
import Error from './components/Error';
import { RouterProvider } from 'react-router-dom';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },{
        path:"/user",
        element:<User/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  
])
root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter}>
   <App />
   </RouterProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
