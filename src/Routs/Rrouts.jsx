import { createBrowserRouter } from 'react-router-dom';
import Main from '../../src/layout/Main';
import Home from '../Pages/home/Home';
import Blog from '../Pages/blog/Blog';
import AllToys from '../Pages/AllToys/AllToys';
import AddedAToy from '../Pages/AddAToy/AddedAToy';
import MyToys from '../Pages/MyToys/MyToys';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';


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
        path:'/add-a-toy',
        element: <AddedAToy></AddedAToy>
      },
      
      {
        path:'/signUp',
        element: <SignUp></SignUp>
      }, 
      {
        path:'/logIn',
        element: <Login></Login>
      }
    ]
  },
]);

export default router;