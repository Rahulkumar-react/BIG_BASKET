import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoImage from "../Pages/Assets/bb_logo.png";

function PaymentNavBar() {
  const steps = [
    {
      label: "Delivery Address",
      icon: <CheckCircleIcon backgroundColor="#4fc230" />,
    },
    { label: "Delivery Options", icon: <DirectionsBikeIcon /> },
    { label: "Payment Options", icon: <PaymentIcon /> },
  ];
  const addresses = [
    "Home - 11, 198, Sathish Towers Puthu Nagar, Medavakkam",
    "Choose your convenient date and time for delivery",
    "Pay Order amount by selecting any payment mode",
  ];

  return (
    <Grid sx={{marginBottom: 20}}>
      <AppBar
        sx={{
        //   display: "flex",
          backgroundColor: "rgba(94, 148, 0)",
          width: "100%",
        //   justifyContent: "center",
        }}
      >
        <Container maxWidth="xl" sx={{ marginY: 3 }}>
          <Toolbar disableGutters sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                width: "50px",
                marginRight: "60px",
              }}
            >
              <img
                src={LogoImage}
                alt="logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box sx={{ width: "60%" }}>
              <Stepper activeStep={1}>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel icon={step.icon}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", color: "white" }}
                      >
                        {step.label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Stepper>
                {addresses.map((e, i) => (
                  <Step key={i}>
                    <StepLabel>
                      <span
                        style={{ color: "white", fontSize: "12px" }}
                        key={i}
                      >
                        {e}{" "}
                        {i === 0 && (
                          <Button
                            size="small"
                            variant="outlined"
                            sx={{ color: "white", fontSize: "12px" }}
                          >
                            change
                          </Button>
                        )}
                      </span>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
}

export default PaymentNavBar;