import React from "react";
import Navbar from "./Nanbar/index";
import Sidebar from "../Components/Sidebar";
import { Box, Container, Grid } from "@mui/material";
import ProductFilter from "../Components/ProductFilter";
import { Footer } from "../Components/Footer";
import Home from "./Home/Home";
// import Sidebar from '../Components/Sidebar';
// import Sidebar from '../Components/Sidebar';

const LandingScreen = () => {
  return (
    <div style={{ backgroundColor: "white", paddingTop: "0px" }}>
      {/* <Box
         sx={{
          width: "100%",
          background: {
            sm: "white",
            xs: "#689f38",
          },
          display: "flex",
          justifyContent: "space-between",
          // padding: "8px",
          position: "fixed",
          top: 0,
          left: 0,
          // boxShadow: "0px 4px 2px -2px gray",
          display: {
            xs: "none",
            sm: "block",
          },
          zIndex: 1100, // Ensures it stays above other elements
        }}
      >
        <Navbar />
      </Box> */}
      <Container>
        <Home />
      </Container>
      <Footer />
    </div>
  );
};

export default LandingScreen;
