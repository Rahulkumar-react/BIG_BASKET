import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Grid, TextField, Button, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Quality from "../Assets/quality.jpg";
import Time from "../Assets/time.jpg";
import FreeDelivery from "../Assets/Freedelivery.jpg";
import Playstore from "../Assets/PlayStore.jpg";
import Apple from "../Assets/Apple.png";
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Input as BaseInput } from '@mui/base/Input';

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

const InputElement = styled("input")(({ theme }) => ({
  width: "40px",
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: 1.5,
  padding: "8px 0px",
  borderRadius: "8px",
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#DAE2ED" : "#1C2025",
  background: theme.palette.mode === "dark" ? "#1C2025" : "#fff",
  border: `1px solid ${theme.palette.mode === "dark" ? "#434D5B" : "#DAE2ED"}`,
  boxShadow: `0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.05)"
  }`,
  "&:hover": {
    borderColor: "#3399FF",
  },
  "&:focus": {
    borderColor: "#3399FF",
    boxShadow: `0 0 0 3px ${
      theme.palette.mode === "dark" ? "#0072E5" : "#80BFFF"
    }`,
  },
  "&:focus-visible": {
    outline: 0,
  },
}));
const Signin = ({ open, onClose }) => {
  const Navigate = useNavigate();
  const handledashboard = () => {
    Navigate("/dashboradd");
    onClose();
  };
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = React.useState('');
  const [showInput, setShowInput] = useState(true);
  const inputRefs = React.useRef(new Array(4).fill(null));

  const handleKeyDown = (event, currentIndex) => {
    const focusInput = (index) => {
      inputRefs.current[index]?.focus();
      inputRefs.current[index]?.select();
    };

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        currentIndex > 0 && focusInput(currentIndex - 1);
        break;
      case 'ArrowRight':
        event.preventDefault();
        currentIndex < 4 && focusInput(currentIndex + 1);
        break;
      case 'Delete':
      case 'Backspace':
        event.preventDefault();
        setOtp((prev) => prev.slice(0, currentIndex) + prev.slice(currentIndex + 1));
        if (currentIndex > 0 && event.key === 'Backspace') focusInput(currentIndex - 1);
        break;
      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const newValue = event.target.value.slice(-1);
    setOtp((prev) => {
      const otpArray = prev.split('');
      otpArray[currentIndex] = newValue;
      return otpArray.join('');
    });
    newValue && currentIndex < 4 && inputRefs.current[currentIndex + 1]?.focus();
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text/plain').slice(0, 4 - currentIndex);
    setOtp((prev) => {
      const otpArray = prev.split('');
      for (let i = 0; i < pastedText.length; i++) {
        otpArray[currentIndex + i] = pastedText[i];
      }
      return otpArray.join('');
    });
  };
  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  }
  const handleotpbox = () => {
    setShowInput(false);
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{
        timeout: 500,
        style: { backdropFilter: "blur(5px)" },
      }}
    >
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
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            sm={3.7}
            sx={{
              backgroundColor: "#efeeee",
              paddingY: 2.5,
              borderRadius: "20px 0 0 20px",
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
            <Grid container sx={{ justifyContent: "space-around" }}>
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
              backgroundColor: "#0c5273",
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
                size="small"
                  sx={{
                    width: "100%",
                    display: !showInput ? 'none' : 'block',
                    "& .MuiInputBase-root": {
                      backgroundColor: "white",
                      width: '100%'
                    },
                  }}
                  value={mobileNo}
                  id="outlined-basic"
                  placeholder="Enter Phone number/ Email Id"
                  label=""
                  variant="outlined"
                  onChange={handleMobileNo}
                />
              </Grid>
              <Typography sx={{fontSize: '12px', textAlign: 'end', fontWeight: 600, color: 'white', cursor: 'pointer', visibility: mobileNo.length >= 10 ? 'none': 'hidden' }} onClick={handleotpbox}> {!showInput ? 'Resend OTP' : 'Send OTP'}</Typography>
              <Grid sx={{display: !showInput ? 'block': 'none' }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: 'space-around' }}>
                    {new Array(4).fill(null).map((_, index) => (
                      <Box key={index}>
                        <BaseInput
                          slots={{ input: InputElement }}
                          aria-label={`Digit ${index + 1} of OTP`}
                          slotProps={{
                            input: {
                              ref: (el) => (inputRefs.current[index] = el),
                              onKeyDown: (event) => handleKeyDown(event, index),
                              onChange: (event) => handleChange(event, index),
                              onPaste: (event) => handlePaste(event, index),
                              value: otp[index] ?? "",
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid>
                <Button
                  onClick={handledashboard}
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "#efeeee",
                    width: "100%",
                    borderColor: "#484040",
                    mt: 3,
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#efeeee",
                    },
                  }}
                >
                  Continue
                </Button>
              </Grid>
              <Policy>
                By continuing, I accept TCP - bigbasket’s Terms and Conditions &
                Privacy Policy
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
  );
};

export default Signin;
