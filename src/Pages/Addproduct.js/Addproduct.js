import React from "react";
import { CheckoutBox, SectionHeading, Text } from "./Addproductstyle";
import { Footer } from "../../Components/Footer";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Navbar from "../Nanbar";
import items1 from '../../Pages/Assets/broccoli2.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
const navigate= useNavigate();
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
                onClick={navigate('/AddPaymentMethods')}
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

        <Box sx={{ marginBottom: '20px',padding: '10px',paddingTop: '0', borderBottom: '2px solid #f5f5f5' }}>
            <Typography sx={{ fontSize: "21px", }}>Fruits & Vegetables</Typography>
        <Divider sx={{ backgroundColor: 'orangered', borderWidth: "1px", width: "5%"}}></Divider>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "137px",
              width: '100%'
            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 7
            }}>
              <Box sx={{ padding: '20px', width: '60%', height: '100px' }}>
                <img
                  src={items1}
                  alt="Description"
                  style={{
                    height: "115px",
                    width: '130%',
                    objectFit: "contain",
                    alignContent: 'center',
                    alignItems: 'center'
                  }}
                />
              </Box>

              <Box sx={{ alignContent: 'center', width: "49%", marginTop: '12px' }}>
                <Typography>Broccoli</Typography>
                <Typography>₹42<span style={{
                  textDecorationLine: 'line-through',
                  gap: 1,
                  fontSize: '12px',
                  color: '#808080'
                }} > ₹57.53</span></Typography>
              </Box>
            </Box>

            <Box sx={{
              marginTop: '20px',
              width: "30%",
              paddingTop: '28px',
              paddingBottom: '28px'
            }}>
              <Box sx={{ alignContent: 'center', float: 'left', }} >
                <Box sx={{
                  display: 'flex',
                  border: '1px solid #808080',
                  borderRadius: '5px',
                  gap: 3,
                  padding: '8px',
                  width: '90%',
                  height: '25px',
                }}>
                  <RemoveIcon sx={{ '&:hover': { backgroundColor: 'red', color: 'white', borderRadius: '5px' }, paddingLeft: '10px', paddingRight: '10px' }} />
                  <Typography>1</Typography>
                  <AddIcon sx={{ '&:hover': { backgroundColor: 'red', color: 'white', borderRadius: '5px' }, paddingLeft: '10px', paddingRight: '10px' }} />
                </Box>
                <Typography fontSize={'12px'} marginTop={'12px'} color={'#606060'} textAlign={'center'}> <a style={{ textDecoration: 'none', color: '#606060' }} href="">Delete</a>  | <a style={{ textDecoration: 'none', color: '#606060' }} href="">Save for later</a> </Typography>
              </Box>

              <Box sx={{ alignContent: 'center', float: 'right', paddingTop: '23px' }}>
                <Typography sx={{ marginBottom: '8px', textAlign: 'end', }}>₹42</Typography>
                <Typography sx={{ fontSize: '14px', color: '#808080', textAlign: 'end' }}>Saved:₹16.63</Typography>
              </Box>
              <Box />
            </Box>
          </Box>
        </Box>
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default Addproduct;
