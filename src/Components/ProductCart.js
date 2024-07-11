import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCart = ({ openDrawer, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 300,
          padding: 2.5,
          height: "100%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Typography sx={{ fontSize: "26px", fontWeight: 800 }}>
          Your Cart
        </Typography>
        <Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>SubTotal</Typography>
            <Typography sx={{ fontWeight: 600 }}>CAD 0.00</Typography>
          </Grid>
          <Link to={"/AddPaymentMethods"}>
            <Button variant="contained" color="success" sx={{ width: "100%" }}>
              View Cart
            </Button>
          </Link>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default ProductCart;
