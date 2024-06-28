import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LandingScreen from "./Pages/LandingScreen";
import ProductCard from "./Pages/Card/ProductCard";
import ProductDetails from "./Components/ProductDetails";
import ViewProductDetails from "./Pages/ViewProductDetails";
import Addproduct from "./Pages/Addproduct.js/Addproduct";
import DashboardLayout from "./Pages/DashboardLayout";
import AddPaymentMthods from './Components/AddPaymentMthods';
import PaymentNavBar from "./Components/PaymentNavBar";
import Profile from "./Pages/UserDetails/Profile";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <LandingScreen />,
    },
    {
      path: "/dashboradd",
      element: <DashboardLayout />,
      children: [
        { path: "CreateEmployee", element: <ProductCard /> },
        { path: "dashboard", element: <ProductCard /> },
        { path: "", element: <Navigate to="CreateEmployee" /> },
      ],
      
    },
    { path: "/ProductDetails", element: <ViewProductDetails /> },
    { path: "/Addproduct", element: <Addproduct /> },
    { path: "/AddPaymentMethods", element: <AddPaymentMthods /> },
    { Path : "/MyAccount", element: <Profile />}
  ]);
};

export default Router;
