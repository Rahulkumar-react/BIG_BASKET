import React from "react";
import Navbar from "./Nanbar/index";
import Sidebar from "../Components/Sidebar";
import { Container, Grid } from "@mui/material";
import ProductFilter from "../Components/ProductFilter";
// import Sidebar from '../Components/Sidebar';
// import Sidebar from '../Components/Sidebar';

const LandingScreen = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7", paddingTop: "0px" }}>
      <Container>
        <Grid style={{ marginTop: "150PX" }}>
          <ProductFilter />
        </Grid>
        <Sidebar />
      </Container>
    </div>
  );
};

export default LandingScreen;
