import React from "react";
import { useRoutes } from "react-router-dom";
import LandingScreen from "./Pages/LandingScreen";
import Card from "./Pages/Card/Card";

const Router = () => {
  return useRoutes([
    { path: "/", element: <LandingScreen /> },
    // { path: "/overview", element: <Card /> },
    // { path: "/reports", element: <Card /> },
    // { path: "/reports/reports1", element: <Card /> },
    // { path: "/reports/reports2", element: <Card /> },
    // { path: "/reports/reports3", element: <Card /> },
    // { path: "/team", element: <Card/> },
  ]);
};

export default Router;
