import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Layout/AddITem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../Pages/ManageItem/ManageItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      // admin routes
      {
        path: "allusers",
        element: 
          //<AdminRoutes>
            <AllUsers />,
          //</AdminRoutes>
        
      },
      {
        path: "addITem",
        element: (
          //<AdminRoutes>
            <AddItem />
          //</AdminRoutes>
        ),
      },
      {
        path: "manageItem",
        element: (
          //<AdminRoutes>
            <ManageItem />
          //</AdminRoutes>
        ),
      },
    ],
  },
]);