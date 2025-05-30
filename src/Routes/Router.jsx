import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Sceret from "../Pages/Shared/Sceret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Card from "../Pages/Dashboard/Card";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRouter from '../Routes/AdminRoute';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/secret',
        element:<PrivetRoute><Sceret></Sceret></PrivetRoute>
      }
    ]

  },

  {
    path:'dashboard',
    element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children:[
      {
        path:'card',
        element:<Card></Card>
      },
      //Admin route
      {
        path:'allusers',
        element:<AdminRouter><AllUsers></AllUsers></AdminRouter>
      },
      {
        path:'additem',
        element:<AdminRouter><AddItem></AddItem></AdminRouter>
      }
    ]
  },

]);  