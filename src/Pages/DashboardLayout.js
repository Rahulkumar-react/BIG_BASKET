import React from "react";
import { Container, Grid } from "@mui/material";
import ProductFilter from "../Components/ProductFilter";
import SideBar from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

const DashboardLayout = () => {
  return (
    <>
      <Container>
        <Grid>
          <ProductFilter />
        </Grid>
        <SideBar />
      </Container>
      <Footer />
    </>
  );
};

export default DashboardLayout;
