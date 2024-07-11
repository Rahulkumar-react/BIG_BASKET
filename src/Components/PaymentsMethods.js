import * as React from "react";
import propTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import amezonpayicon from "../Pages/Assets/ic_amazonpay.png";
import mobiwikicon from "../Pages/Assets/ic_mobikwik.png";
import airtelmoneyicon from "../Pages/Assets/ic_airtelmoney.png";
import Payzapp from "../Pages/Assets/ic_payzapp.png";
import FreeRecharge from "../Pages/Assets/ic_freecharge.png";
import Olapay from "../Pages/Assets/ic_olamoney.png";
import CashOndelivery from "../Pages/Assets/ic_cashondelivery.png";
import Checkbox from "@mui/material/Checkbox";
import {
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import BankIcon1 from "../Pages/Assets/bankIcon_HDFC.png";
import BankIcon2 from "../Pages/Assets/bankIcon_.png";
import BankIcon3 from "../Pages/Assets/bankIcon_SBI.png";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  AccordionHover,
  AccordionSummaryBody,
  AccordionSummaryHeading,
  IconBoxStyle,
  IconBoxStyleMobik,
  ImgIconStyle,
  MobikAccordionSummary,
  MobikAccordionSummaryHeading,
  Mobiklinka,
  TabHeading,
  TabHeadingbody,
  Tabverticalstyle,
} from "./PaymentsMethodsStyle";
import { Link } from "react-router-dom";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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

function a11yPropsVertical(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const PaymentsMethods = () => {
  const [value, setValue] = React.useState(0);
  const [valueVertical, setValueVertical] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState("");
  const [validThru, setValidThru] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeVertical = (event, newValue) => {
    setValueVertical(newValue);
  };
  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, " ").slice(0, 20);
    setCardNumber(value);
  };

  const handleValidThruChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5); // You can adjust this based on the format you expect
    setValidThru(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4); // CVV typically has 3 or 4 digits
    setCvv(value);
  };
  return (
    <>
      <Box
        sx={{
          // width: "72.5%",
          border: "1px solid #dfdfdf",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <Box sx={{ margin: "20px" }}>
          <Box sx={{ borderBottom: 0, borderColor: "divider", gap: 2 }}>
            <Tabs
              sx={{ width: "100%", borderBottom: "0px" }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{ style: { display: "none" } }}
            >
              <Tab
                sx={{
                  backgroundColor: "#e4e4e4",
                  width: "50%",
                  marginRight: 1,
                  border: "1px solid #e4e4e4",
                  borderBottom: "none",
                  "&.Mui-selected": {
                    backgroundColor: "#fff", // Selected tab background color
                    color: "#e4e4e4", //selected tab moveing color or Hover tab text color
                    transition: "2s ease-in-out",
                  },
                }}
                label={
                  <TabHeading>
                    Payment with Offer <br />
                    <TabHeadingbody>
                      Apply voucher code, if applicable to avail the Offer
                    </TabHeadingbody>
                  </TabHeading>
                }
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  backgroundColor: "#e4e4e4",
                  width: "50%",
                  marginLeft: 1,
                  border: "1px solid #e4e4e4",
                  borderColor: "#e4e4e4",
                  borderBottom: "none",
                  "&.Mui-selected": {
                    backgroundColor: "#fff",
                    transition: "2s ease",
                    color: "#e4e4e4",
                  },
                }}
                label={
                  <TabHeading>
                    Other Payment Option <br />
                    <TabHeadingbody>
                      Credit/Debit, Netbanking, UPI, COD, and More{" "}
                    </TabHeadingbody>
                  </TabHeading>
                }
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div>
              <Accordion
                sx={AccordionHover}
                expanded={expanded === "panel1"}
                onChange={handleChange1("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Box sx={IconBoxStyle}>
                    <ImgIconStyle src={amezonpayicon} alt="amezonpayicon" />
                  </Box>
                  <AccordionSummaryHeading>
                    Amezon Pay Balance <br />
                    <AccordionSummaryBody>
                      win up to Rs.150 Cashback on the minimum Order of Rs.110,
                      assured cashback of Rs.50. Valid only once per user.(1-15
                      JUN) <Link href="">T&C</Link>{" "}
                    </AccordionSummaryBody>
                  </AccordionSummaryHeading>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      paddingLeft: "40px",
                      gap: 2,
                      paddingTop: "0px",
                    }}
                  >
                    <Box sx={{ fontSize: "13px" }}>
                      <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                      Make this your default payment Option.
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#cc0000",
                        color: "white",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#cc0000",
                        },
                      }}
                    >
                      Place Order & Pay
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={AccordionHover}
                expanded={expanded === "panel2"}
                onChange={handleChange1("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Box sx={IconBoxStyleMobik}>
                    <ImgIconStyle src={mobiwikicon} alt="mobiwikicon" />
                  </Box>
                  <span style={MobikAccordionSummaryHeading}>
                    Mobikwik | zip (Pay Later)
                    <br />{" "}
                    <span style={MobikAccordionSummary}>
                      All user Offer: Get up to 100 Cashback. Minimum order
                      Rs.799. Assured Cashback of Rs.20.(1-30 JUN) New User
                      Offer: Get up to Rs.75 Cashback, Min Order Rs.499, Assured
                      Cashback of Rs.10. (1-30 DEC) <Link href="">T&C</Link>
                    </span>
                  </span>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0px 0px 0px 10px",
                    }}
                  >
                    <Mobiklinka href="">Link</Mobiklinka>{" "}
                  </Box>
                </AccordionSummary>
              </Accordion>
              <Accordion
                sx={AccordionHover}
                expanded={expanded === "panel3"}
                onChange={handleChange1("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Box sx={IconBoxStyle}>
                    <img
                      style={{
                        width: "85%",
                        height: "45px",
                        alignContent: "center",
                      }}
                      src={airtelmoneyicon}
                      alt="airtelmoneyicon"
                    />
                  </Box>
                  <AccordionSummaryHeading>
                    Airtel Payments Bank Wallet <br />
                    <AccordionSummaryBody>
                      Get Rs.100 cashback, minimum order Rs.1500. Valid ONCE for
                      all Airtel Payments Bank customers. (1-30 JUN){" "}
                      <Link href="">T&C</Link>{" "}
                    </AccordionSummaryBody>
                  </AccordionSummaryHeading>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      paddingLeft: "40px",
                      gap: 2,
                      paddingTop: "0px",
                    }}
                  >
                    <Box sx={{ fontSize: "13px" }}>
                      <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                      Make this your default payment Option.
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#cc0000",
                        color: "white",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#cc0000",
                        },
                      }}
                    >
                      Place Order & Pay
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} sx={{ padding: "0px" }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                display: "flex",
                width: "100%",
                height: "100%",
                padding: "0px",
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons={true}
                value={valueVertical}
                onChange={handleChangeVertical}
                aria-label="Vertical tabs example"
                sx={{
                  padding: "0px",
                  width: "40%",
                  backgroundColor: "#e4e4e4",
                }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "red",
                    width: "6px",
                    left: 0,
                  },
                }}
              >
                <Tab
                  label="Credit / Debit Card"
                  sx={Tabverticalstyle}
                  {...a11yPropsVertical(0)}
                />
                <Tab
                  label="Net Banking"
                  sx={Tabverticalstyle}
                  {...a11yPropsVertical(1)}
                />
                <Tab
                  label="UPI"
                  sx={Tabverticalstyle}
                  {...a11yPropsVertical(2)}
                />
                <Tab
                  label="Wallets"
                  sx={Tabverticalstyle}
                  {...a11yPropsVertical(3)}
                />
                <Tab
                  label="Food Cards / Pluxee"
                  sx={Tabverticalstyle}
                  {...a11yPropsVertical(4)}
                />
                <Tab
                  label="Cash on Delivery"
                  sx={Tabverticalstyle}
                  {...a11yPropsVertical(5)}
                />
              </Tabs>
              <Box sx={{ width: "60%", padding: "0px" }}>
                <TabPanelvertical value={valueVertical} index={0}>
                  <Box>
                    <Typography
                      align="left"
                      sx={{
                        color: "#5c5c5c",
                        fontSize: "16px",
                        marginBottom: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Add a Card
                    </Typography>
                    <Box
                      sx={{
                        width: "85%",
                        height: "auto",
                        border: "2px solid green",
                        padding: "15px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyItems: "center",
                      }}
                    >
                      <Box
                        component="form"
                        sx={{
                          textAlign: "left",
                          "& .MuiTextField-root": {
                            m: 2,
                            width: "100%",
                            padding: "0px",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <Typography align="left">
                          <span style={{ color: "red" }}>* </span>Card Number
                        </Typography>
                        <TextField
                          id="card-number"
                          type="text"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="Enter Card Number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                          sx={{
                            "& input[type=text]::-webkit-outer-spin-button, & input[type=text]::-webkit-inner-spin-button":
                              {
                                "-webkit-appearance": "none",
                                margin: 0,
                              },
                            "& input[type=text]": {
                              "-moz-appearance": "textfield",
                            },
                          }}
                        />
                        <Grid sx={{ display: "flex", gap: 0 }}>
                          <Box sx={{ width: "100%" }}>
                            <Typography align="left">
                              <span style={{ color: "red" }}>* </span>
                              Valid thru
                            </Typography>
                            <TextField
                              id="valid-thru"
                              type="text"
                              value={validThru}
                              onChange={handleValidThruChange}
                              placeholder="MM/YY"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="standard"
                              sx={{
                                pr: 0,
                                width: "100%",
                                "& input[type=text]::-webkit-outer-spin-button, & input[type=text]::-webkit-inner-spin-button":
                                  {
                                    "-webkit-appearance": "none",
                                    margin: 0,
                                  },
                                "& input[type=text]": {
                                  "-moz-appearance": "textfield",
                                },
                              }}
                            />
                          </Box>
                          <Divider />
                          <Box sx={{ width: "100%" }}>
                            <Typography align="left">
                              <span style={{ color: "red" }}>* </span>CVV
                            </Typography>
                            <TextField
                              id="cvv"
                              type="text"
                              value={cvv}
                              onChange={handleCvvChange}
                              placeholder="Security Code"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="standard"
                              sx={{
                                pl: 0,
                                width: "90%",
                                "& input[type=text]::-webkit-outer-spin-button, & input[type=text]::-webkit-inner-spin-button":
                                  {
                                    "-webkit-appearance": "none",
                                    margin: 0,
                                  },
                                "& input[type=text]": {
                                  "-moz-appearance": "textfield",
                                },
                              }}
                            />
                          </Box>
                        </Grid>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "15px",
                          }}
                        >
                          <Button
                            sx={{
                              backgroundColor: "#cc0000",
                              color: "white",
                              "&:hover": {
                                color: "white",
                                backgroundColor: "#cc0000",
                              },
                            }}
                          >
                            Place Order & Pay
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </TabPanelvertical>
                <TabPanelvertical value={valueVertical} index={1}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#5c5c5c",
                      fontWeight: "bold",
                    }}
                  >
                    Frequently Used Banks
                  </Typography>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel4"}
                    onChange={handleChange1("panel4")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={BankIcon1}
                          alt="bankicon"
                        />
                        HDFC Bank
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel5"}
                    onChange={handleChange1("panel5")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={BankIcon2}
                          alt="bankicon"
                        />
                        HDFC Bank
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel6"}
                    onChange={handleChange1("panel6")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={BankIcon3}
                          alt="bankicon"
                        />
                        HDFC Bank
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#5c5c5c",
                      fontWeight: "bold",
                      marginTop: "50px",
                    }}
                  >
                    More Banks
                  </Typography>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "92%",
                      marginTop: "10px",
                      height: "50px",
                      border: "1px solid #507e48",
                    }}
                  >
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Banks"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                  </Paper>
                </TabPanelvertical>
                <TabPanelvertical value={valueVertical} index={2}>
                  <Button
                    sx={{
                      border: "2px dashed red",
                      borderRadius: "5px",
                      width: "85%",
                      height: "100px",
                      display: "flex",
                      fontSize: "16px",
                      color: "#cc0000",
                      gap: 5,
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <AddCircleIcon
                      fontSize="large"
                      sx={{
                        borderRadius: "50px",
                        color: "#dde7f9",
                        backgroundColor: "blue",
                      }}
                    />{" "}
                    Add UPI ID
                  </Button>
                </TabPanelvertical>
                <TabPanelvertical value={valueVertical} index={3}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#5C5C5C",
                      fontWeight: "bold",
                    }}
                  >
                    Wallets
                  </Typography>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel9"}
                    onChange={handleChange1("panel9")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={Payzapp}
                          alt="bankicon"
                        />
                        Payzapp
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      ...AccordionHover,
                      width: "95%",
                      marginTop: "20px",
                    }}
                    expanded={expanded === "panel10"}
                    onChange={handleChange1("panel10")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Box sx={{ width: "30%", alignContent: "center" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "45px",
                            alignContent: "center",
                          }}
                          src={mobiwikicon}
                          alt="airtelmoneyicon"
                        />
                      </Box>
                      <Typography pr={2} pl={2}>
                        {" "}
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontSize: "13px",
                            color: "#689F39",
                          }}
                        >
                          Airtel Payments Bank Wallet
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "justify",
                            fontSize: "13px",
                            color: "#689F39",
                          }}
                        >
                          Get Rs.100 cashback, minimum order Rs.1500. Valid ONCE
                          for all Airtel Payments Bank customers. (1-30 JUN){" "}
                          <a href="T&C" style={{ color: "#5C5C5C" }}>
                            T&C
                          </a>
                        </Typography>
                      </Typography>
                      <Link
                        style={{
                          alignContent: "center",
                          color: "#Cc0000",
                        }}
                      >
                        Link
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  <Accordion
                    sx={{
                      ...AccordionHover,
                      width: "95%",
                      marginTop: "20px",
                    }}
                    expanded={expanded === "panel11"}
                    onChange={handleChange1("panel11")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Box sx={{ width: "30%", alignContent: "center" }}>
                        <img
                          style={{
                            width: "95%",
                            height: "45px",
                            alignContent: "center",
                          }}
                          src={airtelmoneyicon}
                          alt="airtelmoneyicon"
                        />
                      </Box>
                      <Typography pr={6} pl={2}>
                        {" "}
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontSize: "13px",
                            color: "#689F39",
                          }}
                        >
                          Airtel Payments Bank Wallet
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "justify",
                            fontSize: "13px",
                            color: "#689F39",
                          }}
                        >
                          Get Rs.100 cashback, minimum order Rs.1500. Valid ONCE
                          for all Airtel Payments Bank customers. (1-30 JUN){" "}
                          <a href="T&C" style={{ color: "#5C5C5C" }}>
                            T&C
                          </a>
                        </Typography>
                      </Typography>
                      <Link
                        style={{
                          alignContent: "center",
                          color: "#Cc0000",
                        }}
                      ></Link>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          paddingLeft: "40px",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel12"}
                    onChange={handleChange1("panel12")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={FreeRecharge}
                          alt="bankicon"
                        />
                        Freecharge{" "}
                      </Typography>
                      <Link
                        style={{
                          alignContent: "center",
                          color: "#Cc0000",
                        }}
                      >
                        Link
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel13"}
                    onChange={handleChange1("panel13")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={Olapay}
                          alt="bankicon"
                        />
                        Ola money
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded === "panel14"}
                    onChange={handleChange1("panel14")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "25%", alignContent: "center" }}
                          src={amezonpayicon}
                          alt="bankicon"
                        />
                        Amezon Pay Balance
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          paddingTop: "0px",
                        }}
                      >
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </TabPanelvertical>
                <TabPanelvertical value={valueVertical} index={4}>
                  <Box>
                    <Typography
                      align="left"
                      sx={{
                        color: "#5c5c5c",
                        fontSize: "16px",
                        marginBottom: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Enter Food Card details
                    </Typography>
                    <Box
                      sx={{
                        width: "85%",
                        height: "auto",
                        border: "2px solid green",
                        padding: "15px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyItems: "center",
                      }}
                    >
                      <Box
                        component="form"
                        sx={{
                          textAlign: "left",
                          "& .MuiTextField-root": {
                            m: 2,
                            width: "100%",
                            padding: "0px",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <Typography align="left">
                          <span style={{ color: "red" }}>* </span>Card Number
                        </Typography>
                        <TextField
                          id="standard-number"
                          type="number"
                          placeholder="Enter Card Number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                        />
                        <Grid sx={{ display: "flex", gap: 0 }}>
                          <Box sx={{ width: "100%" }}>
                            <Typography align="left">
                              <span style={{ color: "red" }}>* </span>
                              Valid thru
                            </Typography>
                            <TextField
                              sx={{ pr: 0, width: "100%" }}
                              id="standard-number"
                              type="number"
                              placeholder="MM/YYY"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="standard"
                            />
                          </Box>
                          <Divider />
                          <Box sx={{ width: "100%" }}>
                            <Typography align="left">
                              <span style={{ color: "red" }}>* </span>CVV
                            </Typography>
                            <TextField
                              sx={{ pl: 0, width: "90%" }}
                              id="standard-number"
                              type="number"
                              placeholder="Security Code"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="standard"
                            />
                          </Box>
                        </Grid>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "15px",
                          }}
                        >
                          <Button
                            sx={{
                              backgroundColor: "#cc0000",
                              color: "white",
                              "&:hover": {
                                color: "white",
                                backgroundColor: "#cc0000",
                              },
                            }}
                          >
                            Place Order & Pay
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </TabPanelvertical>
                <TabPanelvertical value={valueVertical} index={5}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#5C5C5C",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Pay On Delivery
                  </Typography>
                  <Accordion
                    sx={{ ...AccordionHover, width: "94%" }}
                    expanded={expanded}
                    onChange={handleChange1("panel")}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Box sx={{ display: "flex" }}>
                        <Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              gap: 2,
                              alignContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              style={{
                                width: "12%",
                                alignContent: "center",
                              }}
                              src={CashOndelivery}
                              alt="bankicon"
                            />
                            Cash On Delivery
                          </Typography>
                          <Typography
                            sx={{
                              color: "#76B900",
                              textAlign: "justify",
                              padding: "20px 15px 0px 65px",
                            }}
                          >
                            Tip: To ensure a contactless delivery, we recommend
                            you use an online payment option.
                          </Typography>
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ paddingTop: "0px" }}>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ fontSize: "13px" }}>
                          <Checkbox sx={{ cursor: "pointer", width: "30px" }} />{" "}
                          Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "0px",
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#cc0000",
                            color: "white",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#cc0000",
                            },
                          }}
                        >
                          Place Order & Pay
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </TabPanelvertical>
              </Box>
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
};

export default PaymentsMethods;
