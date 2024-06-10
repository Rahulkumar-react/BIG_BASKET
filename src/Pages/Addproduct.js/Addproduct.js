import React from "react";
import { CheckoutBox, SectionHeading, Text } from "./Addproductstyle";
import { Footer } from "../../Components/Footer";
import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "../Nanbar";

const Addproduct = () => {
  return (
    <>
      <Box sx={{ padding: "10px 0px 0px 0px" }}>
        <Navbar />
      </Box>

      <Container sx={{ paddingLeft: -10 }}>
        <Box sx={{ width: "100%" }}>
          <SectionHeading>{"Your Basket"}</SectionHeading>
          <CheckoutBox>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  color: "white",
                  height: "57px",
                  width: "85%",
                  paddingTop: "23px",
                  marginLeft: "23px",
                }}
              >
                <Typography>Subtotal (3 items) : ₹ 852.00</Typography>
                <Typography>Savings : ₹ 418.00</Typography>
              </Box>
              <Button
                sx={{
                  width: "25%",
                  height: "45px",
                  marginTop: "26px",
                  marginRight: "23px",
                  backgroundColor: "#cc0000",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#cc0000", // Keep the background color the same on hover
                    boxShadow: "none", // Remove the shadow effect on hover
                  },
                }}
              >
                {"Checkout"}
              </Button>
            </Box>
          </CheckoutBox>
          <br />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ width: "49%" }}>
              <Text>{"Items  (3 items)"}</Text>
            </Box>
            <Box
              sx={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text>{"Quantity"}</Text>

              <Text>{"Sub-total"}</Text>
            </Box>
          </Box>
        </Box>
        <br />

        <Box>
          <Typography sx={{ fontSize: "21px" }}>
            {"Snacks & Branded Foods"}
          </Typography>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "150px",
          }}
        >
          <Box>
            <img
              src="path_to_your_image.jpg"
              alt="Description"
              style={{ height: "80%", objectFit: "contain" }}
            />
          </Box>
          <Box>Text 2</Box> <Box>Text 3</Box>
        </Box>
        <br />

        <Footer />
      </Container>
    </>
  );
};

export default Addproduct;
