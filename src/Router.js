import React from "react";
import { useRoutes } from "react-router-dom";
import LandingScreen from "./Pages/LandingScreen";
import ProductCard from "./Pages/Card/ProductCard";
import ProductDetails from "./Components/ProductDetails";
import ViewProductDetails from "./Pages/ViewProductDetails";
import Addproduct from "./Pages/Addproduct.js/Addproduct";
import DashboardLayout from "./Pages/DashboardLayout";

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
        { path: "dashboard", element: <ProductCard /> },
        { path: "CreateEmployee", element: <ProductCard /> },
      ],
    },
    { path: "/ProductDetails", element: <ViewProductDetails /> },
    { path: "/Addproduct", element: <Addproduct /> },
  ]);
};

export default Router;
