import React from "react";
import { useRoutes } from "react-router-dom";
import LandingScreen from "./Pages/LandingScreen";
import Card from "./Pages/Card/Card";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <LandingScreen />,
      children: [
        { path: "dashboard", element: <Card /> },
        { path: "CreateEmployee", element: <Card /> },
      ],
    },
  ]);
};

export default Router;
