import React from 'react'
import { Modal, Box, Grid, TextField, Button } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Quality from "../Assets/quality.jpg";
import Time from "../Assets/time.jpg";
import FreeDelivery from "../Assets/Freedelivery.jpg";
import Playstore from "../Assets/PlayStore.jpg";
import Apple from "../Assets/Apple.png";

import {
    Choose,
    ImageLogin,
    ImageName,
    LoginCointaner,
    LoginHeading,
    Otp,
    Policy,
    SocialMedia,
    SocialTitle,
    SocialImg,
  } from "./NavbarStyleComponents";

const Signin = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            border: "none",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Grid container>
            <Grid
              sm={3.7}
              sx={{
                backgroundColor: "#efeeee",
                paddingY: 2.5,
                borderRadius: "inherit",
              }}
            >
              <Choose>Why choose Bigbasket?</Choose>
              <Grid container>
                <Grid sm={6} sx={{ textAlign: "center" }}>
                  <ImageLogin src={Quality} alt="" />
                  <ImageName>Quality</ImageName>
                </Grid>
                <Grid sm={6} sx={{ textAlign: "center" }}>
                  <ImageLogin src={Time} alt="" />
                  <ImageName>On Time</ImageName>
                </Grid>
                <Grid sm={6} sx={{ textAlign: "center" }}>
                  <LocalShippingOutlinedIcon sx={{ color: "#606060" }} />
                  <ImageName>Return Policy</ImageName>
                </Grid>
                <Grid sm={6} sx={{ textAlign: "center" }}>
                  <ImageLogin src={FreeDelivery} alt="" />
                  <ImageName>Free Delivery</ImageName>
                </Grid>
              </Grid>
              <hr
                style={{
                  marginTop: "20px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  color: "#777777",
                  width: "78%",
                }}
              />
              {/* <SocialMedia>
                <SocialTitle>Find us on</SocialTitle>
                <Grid>
                  <SocialImg src={Playstore} alt="" />
                </Grid>
                <Grid>
                  <SocialImg src={Apple} alt="" />
                </Grid>
              </SocialMedia> */}
              <Grid container sx={{justifyContent: 'space-around'}}>
                <Grid xs={5}>
                  <SocialTitle>Find us on</SocialTitle>
                </Grid>
                <Grid xs={2}>
                  <SocialImg src={Playstore} alt="" />
                </Grid>
                <Grid xs={2}>
                  <SocialImg src={Apple} alt="" />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm={6}
              sx={{
                backgroundColor: "#000000",
                paddingY: 2.8,
                paddingX: 6,
                borderRadius: "0 20px 20px 0",
              }}
            >
              <LoginCointaner>
                <LoginHeading>Login/ Sign up</LoginHeading>
                <Otp>Using OTP</Otp>
                <Grid>
                  <TextField
                    sx={{
                      width: "100%",
                      height: "37px",
                      "& .MuiInputBase-root": {
                        height: "100%",
                        padding: "10px 14px",
                        backgroundColor: "white",
                      },
                    }}
                    id="outlined-basic"
                    placeholder="Enter Phone number/ Email Id"
                    label=""
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#3e0000",
                      width: "100%",
                      borderColor: "#484040",
                      mt: 5,
                      mb: 1,
                      "&:hover": {
                        backgroundColor: "#3e0000",
                      },
                    }}
                  >
                    Continue
                  </Button>
                </Grid>
                <Policy>
                  By continuing, I accept TCP - bigbasket’s Terms and Conditions
                  & Privacy Policy
                </Policy>
                <Policy>
                  This site is protected by reCAPTCHA and the Google - Privacy
                  Policy and & Terms of Service apply.
                </Policy>
              </LoginCointaner>
            </Grid>
          </Grid>
        </Box>
      </Modal>
  )
}

export default Signin