import * as React from "react";
import propTypes from "prop-types";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Divider, Paper, Tooltip, Typography } from "@mui/material";
import Voucherimg from "../Pages/Assets/voucher.jpeg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const steps = [
  "Your Cart",
  "Order Review",
  "Payment",
];
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, marginTop: "20px", width: "100%" }}>{children}</Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: propTypes.node,
  index: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
};

//Other Payment method
function TabPanelvertical(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanelvertical.propTypes = {
  children: propTypes.node,
  index: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
};

const PaymentDetails = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#e5f7ee", paddingY: 1.5, borderRadius: '24px', marginBottom: 2 }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderTop: "7px solid green",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Button
          sx={{
            border: "2px dashed #C9CAC8",
            width: "100%",
            height: "70px",
            "&:hover": { backgroundColor: "transparent" },
            margin: "15px 0px 10px 0px",
            padding: "0px 0px 0px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: "0px 0px 0px 0px",
            }}
          >
            <Box>
              <img
                style={{
                  width: "100%",
                  height: "55px",
                  alignItems: "start",
                }}
                src={Voucherimg}
                alt="voucherimage"
              />
            </Box>
            <Typography sx={{ textTransform: "none" }}>
              <span
                style={{
                  textAlign: "start",
                  color: "#202020",
                  fontSize: "16px",
                }}
              >
                Apply voucher
              </span>
              <br></br>
              <span style={{ color: "#606060", fontSize: "12px" }}>
                8 vouchers available
              </span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                margin: "0px 0px 0px 100px",
              }}
            >
              <NavigateNextIcon sx={{ color: "#202020" }} />
            </Box>
          </Box>
        </Button>
        <Typography
          sx={{
            textAlign: "start",
            margin: "10px 0px 10px 0px",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Order Summary
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px 0px 0px",
            fontSize: "14px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Basket Value</Typography>
          <Typography sx={{ fontSize: "14px" }}>₹692</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px 0px 0px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Delivery & Handling Charges
          </Typography>
          <Typography>
            {" "}
            <span>
              {" "}
              <span
                style={{
                  textDecorationLine: "line-through",
                  color: "#909090",
                  fontSize: "14px",
                }}
              >
                ₹10
              </span>{" "}
              <span style={{ fontSize: "12px" }}>Free</span>
            </span>{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            justifyItems: "center",
            margin: "0px",
          }}
        >
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange1("panel7")}
            sx={{ borderRadius: "2px", width: "100%" }}
          >
            <Paper elevation={0}>
              <AccordionSummary
                sx={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: "blue",
                }}
                expandIcon={
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{ borderRadius: "10px", color: "blue" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Show Details
              </AccordionSummary>
            </Paper>
            <AccordionDetails
              sx={{
                color: "#5E9400",
                borderTop: "1px dashed #5E9400",
                padding: "8px 16px 8px 16px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "12px", color: "#909090" }}>
                  Delivery Charge
                </Typography>
                <Typography>
                  {" "}
                  <span>
                    {" "}
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        color: "#909090",
                        fontSize: "14px",
                      }}
                    >
                      ₹30
                    </span>{" "}
                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                      Free
                    </span>
                  </span>{" "}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "green",
                  textAlign: "left",
                }}
              >
                Free for first few orders!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px 0px 0px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              justifyItems: "center",
              gap: 0.5,
            }}
          >
            Feed the underprivileged
            <Tooltip
              sx={{ backgroundColor: "#202020" }}
              title="Help us provide groceries for the needy & underprivileged."
              placement="top"
              arrow
            >
              <InfoIcon
                sx={{
                  backgroundColor: "#606060",
                  color: "white",
                  width: "10%",
                  height: "18px",
                  borderRadius: "15px",
                }}
              />
            </Tooltip>
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {" "}
            <a
              href="AddItemLink"
              style={{ color: "#D63333", fontWeight: "bold" }}
            >
              Add
            </a>{" "}
            ₹2
          </Typography>
        </Box>
        <Divider sx={{ marginTop: "10px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px 0px 0px 0px",
          }}
        >
          <Typography sx={{ fontSize: "14px", color: "#909090" }}>
            {" "}
            <Checkbox
              sx={{
                "&:hover": {
                  width: "0px",
                  height: "0px",
                  cursor: "not-allowed",
                },
                color: "#D5D5D5",
                width: "0px",
                height: "0px",
                margin: "0px 4px 0px 0px",
              }}
            />{" "}
            Feed the underprivileged
          </Typography>
          <Typography sx={{ alignContent: "center", color: "#909090" }}>
            ₹0
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              textAlign: "start",
              color: "#909090",
              margin: "0px 0px 0px 27px",
            }}
          >
            Balance:₹0
          </Typography>
        </Box>
        <Divider sx={{ marginTop: "15px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px 0px 0px",
            padding: "0px 12px 0px 12px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Total Amount Payable
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            ₹692
          </Typography>
        </Box>
        <Box sx={{ margin: "15px 0px 0px 0px" }}>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange1("panel8")}
            sx={{
              backgroundColor: " #f1f8e6",
              borderRadius: "2px",
              margin: "10px 0px 10px 0px",
            }}
          >
            <AccordionSummary
              sx={{
                padding: "0px 10px 0px 12px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#5E9400",
              }}
              expandIcon={
                <ArrowDropDownIcon
                  fontSize="large"
                  sx={{ borderRadius: "10px", color: "#5E9400" }}
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Total Savings
            </AccordionSummary>
            <AccordionDetails
              sx={{
                color: "#5E9400",
                borderTop: "1px solid #5E9400",
                padding: "8px 16px 8px 16px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "12px" }}>
                  Saved on basket value
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>₹223</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  textAlign: "end",
                  marginTop: "10px",
                }}
              >
                ₹10
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default PaymentDetails;
