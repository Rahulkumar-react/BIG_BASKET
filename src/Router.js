import React from "react";
import { useRoutes } from "react-router-dom";
import LandingScreen from "./Pages/LandingScreen";
import ProductCard from "./Pages/Card/ProductCard";
import ProductDetails from "./Components/ProductDetails";
import ViewProductDetails from "./Pages/ViewProductDetails";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <LandingScreen />,
      children: [
        { path: "dashboard", element: <ProductCard /> },
        { path: "CreateEmployee", element: <ProductCard /> },
      ],
    },
    { path: "/ProductDetails", element: <ViewProductDetails /> },
  ]);
};

export default Router;
