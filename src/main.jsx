import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Pages/home/Home';
import Blog from './Pages/blog/Blog';
import AllToys from './Pages/AllToys/AllToys';
import AddedAToy from './Pages/AddAToy/AddedAToy';
import MyToys from './Pages/MyToys/MyToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/all-toys',
        element: <AllToys></AllToys>
      },
      {
        path:'/my-toys',
        element:<MyToys></MyToys>
      },
      {
        path:'add-a-toy',
        element: <AddedAToy></AddedAToy>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
