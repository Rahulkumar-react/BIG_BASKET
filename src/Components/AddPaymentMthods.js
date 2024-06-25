import * as React from 'react';
import propTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import amezonpayicon from '../Pages/Assets/ic_amazonpay.png';
import mobiwikicon from '../Pages/Assets/ic_mobikwik.png';
import airtelmoneyicon from '../Pages/Assets/ic_airtelmoney.png';
import Payzapp from '../Pages/Assets/ic_payzapp.png';
import FreeRecharge from '../Pages/Assets/ic_freecharge.png';
import Olapay from '../Pages/Assets/ic_olamoney.png';
import CashOndelivery from '../Pages/Assets/ic_cashondelivery.png';
import Checkbox from '@mui/material/Checkbox';
import { Container, Divider, Grid, IconButton, InputBase, Paper, TextField, Tooltip, Typography } from '@mui/material';
import styled from 'styled-components';
import Voucherimg from '../Pages/Assets/voucher.jpeg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BankIcon1 from '../Pages/Assets/bankIcon_HDFC.png';
import BankIcon2 from '../Pages/Assets/bankIcon_.png';
import BankIcon3 from '../Pages/Assets/bankIcon_SBI.png';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PaymentNavBar from './PaymentNavBar';

const Link = styled.a`
        color: black;
        `
const Mobiklinka = styled.a`
color: red;
font-weight: 500;
text-decoration: none;
padding-left: 10px;
`
const TabHeading = styled.span`
color: black;
text-Transform: none;
text-Align: start;
`
const TabHeadingbody = styled.span`
color: #00000080;
fontSize: 8px;
`
const IconBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '10%',
  padding: '0px 15px 0px 0px',
}

const IconBoxStyleMobik = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '17%',
  padding: '0px 15px 0px 0px',
}

const ImgIconStyle = styled.img`
width: 100%;
height: auto; 
alignContent: center;
`
const AccordionSummaryHeading = styled.span`
text-Align: justify;
font-Size: 14px;
color: #222222;
padding: 0px 50px 0px 0px;
`
const MobikAccordionSummaryHeading = {
  textAlign: 'justify',
  fontSize: '14px',
  color: '#222222',
  paddingLeft: '0px',
}
const AccordionSummaryBody = styled.span`
text-Align: justify;
color: green;
font-Size: 13px;
`
const MobikAccordionSummary = {
  textAlign: 'justify',
  color: 'green',
  fontSize: '13px',
}

const AccordionHover = {
  border: '1px solid #dfdfdf',
  marginTop: '20px',
  '&:hover': { boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)" },
}

const Tabverticalstyle = {
  padding: '26px 26px 26px 16px',
  textAlign: "left",
  alignItems: 'start',
  backgroundColor: '#e4e4e4',
  '&.Mui-selected': {
    backgroundColor: 'white', // Selected tab background color
    color: '#202020', //selected tab moveing color or Hover tab text color
  }
}

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
      {value === index && <Box sx={{ p: 0, marginTop: '20px', width: '100%' }}>{children}</Box>}
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
    'aria-controls': `simple-tabpanel-${index}`,
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
        <Box sx={{ p: 3, width: '100%' }}>
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [valueVertical, setValueVertical] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState('');
  const [validThru, setValidThru] = React.useState('');
  const [cvv, setCvv] = React.useState('');

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
    const value = e.target.value.replace(/\D/g, ' ').slice(0, 20);
    setCardNumber(value);
  };

  const handleValidThruChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5); // You can adjust this based on the format you expect
    setValidThru(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4); // CVV typically has 3 or 4 digits
    setCvv(value);
  };

  return (
    <>
      <PaymentNavBar/>
    
    <Box sx={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "#f7f7f7" }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: "100%", height: '100%', gap: 4 }}>
          <Box sx={{ width: '72.5%', border: '2px solid #dfdfdf', backgroundColor: '#fff', height: "95vh", overflow: 'hidden' }}>
            <Box sx={{ margin: '20px' }}>
              <Box sx={{ borderBottom: 0, borderColor: 'divider', gap: 2 }}>
                <Tabs sx={{ width: '100%', borderBottom: '0px', }} value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { display: 'none' } }}>
                  <Tab
                    sx={{
                      backgroundColor: '#e4e4e4',
                      width: '50%',
                      marginRight: 1,
                      border: '1px solid #e4e4e4',
                      borderBottom: 'none',
                      '&.Mui-selected': {
                        backgroundColor: '#fff', // Selected tab background color
                        color: '#e4e4e4', //selected tab moveing color or Hover tab text color
                        transition: '2s ease-in-out',

                      },
                    }}
                    label={
                      <TabHeading>
                        Payment with Offer <br />
                        <TabHeadingbody>Apply voucher code, if applicable to avail the Offer</TabHeadingbody>
                      </TabHeading>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      backgroundColor: '#e4e4e4',
                      width: '50%',
                      marginLeft: 1,
                      border: '1px solid #e4e4e4',
                      borderColor: '#e4e4e4',
                      borderBottom: 'none',

                      '&.Mui-selected': {
                        backgroundColor: '#fff',  // Selected tab background color
                        transition: '2s ease',
                        color: '#e4e4e4', //selected tab moveing  or Hover tab text color

                      },

                    }}
                    label={
                      <TabHeading>
                        Other Payment Option <br />
                        <TabHeadingbody>Credit/Debit, Netbanking, UPI, COD, and More </TabHeadingbody>
                      </TabHeading>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0} >
                <div>
                  <Accordion sx={AccordionHover} expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
                    <AccordionSummary
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    ><Box sx={IconBoxStyle}>
                        <ImgIconStyle src={amezonpayicon} alt="amezonpayicon" />
                      </Box>
                      <AccordionSummaryHeading >Amezon Pay Balance <br /><AccordionSummaryBody>win up to Rs.150 Cashback on the minimum Order of Rs.110, assured cashback of Rs.50. Valid only once per user.(1-15 JUN) <Link href="">T&C</Link> </AccordionSummaryBody></AccordionSummaryHeading>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Box sx={{ display: 'flex', paddingLeft: '40px', gap: 2, paddingTop: '0px' }}>
                        <Box sx={{ fontSize: '13px' }}>
                          <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '10px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion sx={AccordionHover} expanded={expanded === 'panel2'} onChange={handleChange1('panel2')}>
                    <AccordionSummary
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    ><Box sx={IconBoxStyleMobik} >

                        <ImgIconStyle src={mobiwikicon} alt="mobiwikicon" />
                      </Box>
                      <span style={MobikAccordionSummaryHeading}>Mobikwik | zip (Pay Later)<br /> <span style={MobikAccordionSummary}>All user Offer: Get up to 100 Cashback. Minimum order Rs.799. Assured Cashback of Rs.20.(1-30 JUN) New User Offer: Get up to Rs.75 Cashback, Min Order Rs.499, Assured Cashback of Rs.10. (1-30 DEC)  <Link href="" >T&C</Link></span></span>
                      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', padding: '0px 0px 0px 10px', }}><Mobiklinka href="">Link</Mobiklinka> </Box>
                    </AccordionSummary>
                  </Accordion>

                  <Accordion sx={AccordionHover} expanded={expanded === 'panel3'} onChange={handleChange1('panel3')}>
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    ><Box sx={IconBoxStyle}>
                        <img style={{ width: '85%', height: '45px', alignContent: 'center' }} src={airtelmoneyicon} alt="airtelmoneyicon" />
                      </Box>
                      <AccordionSummaryHeading >Airtel Payments Bank Wallet <br /><AccordionSummaryBody >Get Rs.100 cashback, minimum order Rs.1500. Valid ONCE for all Airtel Payments Bank customers. (1-30 JUN)  <Link href="">T&C</Link> </AccordionSummaryBody></AccordionSummaryHeading>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Box sx={{ display: 'flex', paddingLeft: '40px', gap: 2, paddingTop: '0px' }}>
                        <Box sx={{ fontSize: '13px' }}>
                          <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '10px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1} sx={{ padding: '0px' }}>

                <Box
                  sx={{ bgcolor: 'background.paper', display: 'flex', width: '100%', height: '100%', padding: '0px' }}
                >
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    scrollButtons={true}
                    value={valueVertical}
                    onChange={handleChangeVertical}
                    aria-label="Vertical tabs example"
                    sx={{ padding: '0px', width: "40%", backgroundColor: '#e4e4e4' }}
                    TabIndicatorProps={{ style: { backgroundColor: 'red', width: '6px', left: 0 } }}
                  >
                    <Tab label="Credit / Debit Card" sx={Tabverticalstyle} {...a11yPropsVertical(0)} />
                    <Tab label="Net Banking" sx={Tabverticalstyle} {...a11yPropsVertical(1)} />
                    <Tab label="UPI" sx={Tabverticalstyle} {...a11yPropsVertical(2)} />
                    <Tab label="Wallets" sx={Tabverticalstyle} {...a11yPropsVertical(3)} />
                    <Tab label="Food Cards / Pluxee" sx={Tabverticalstyle} {...a11yPropsVertical(4)} />
                    <Tab label="Cash on Delivery" sx={Tabverticalstyle} {...a11yPropsVertical(5)} />
                  </Tabs>

                  <Box sx={{ width: '60%', padding: '0px' }}>
                    <TabPanelvertical value={valueVertical} index={0}>
                      <Box>
                        <Typography align='left' sx={{ color: '#5c5c5c', fontSize: "16px", marginBottom: '20px', fontWeight: 'bold' }}>Add a Card</Typography>
                        <Box sx={{ width: '85%', height: 'auto', border: '2px solid green', padding: '15px', borderRadius: '10px', display: 'flex', justifyItems: 'center' }}>
                          <Box component="form" sx={{ textAlign: 'left', '& .MuiTextField-root': { m: 2, width: '100%', padding: '0px' } }}
                            noValidate
                            autoComplete="off">
                            <Typography align='left'><span style={{ color: 'red' }}>* </span>Card Number</Typography>
                            <TextField
                              id="card-number"
                              type="text"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              placeholder='Enter Card Number'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="standard"
                              sx={{
                                '& input[type=text]::-webkit-outer-spin-button, & input[type=text]::-webkit-inner-spin-button': {
                                  '-webkit-appearance': 'none',
                                  margin: 0,
                                },
                                '& input[type=text]': {
                                  '-moz-appearance': 'textfield',
                                }
                              }}
                            />
                            <Grid sx={{ display: 'flex', gap: 0 }}>
                              <Box sx={{ width: '100%' }}>
                                <Typography align='left'><span style={{ color: 'red' }}>* </span>Valid thru</Typography>
                                <TextField
                                  id="valid-thru"
                                  type="text"
                                  value={validThru}
                                  onChange={handleValidThruChange}
                                  placeholder='MM/YY'
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="standard"
                                  sx={{
                                    pr: 0, width: '100%',
                                    '& input[type=text]::-webkit-outer-spin-button, & input[type=text]::-webkit-inner-spin-button': {
                                      '-webkit-appearance': 'none',
                                      margin: 0,
                                    },
                                    '& input[type=text]': {
                                      '-moz-appearance': 'textfield',
                                    }
                                  }}
                                />
                              </Box>
                              <Divider />
                              <Box sx={{ width: '100%' }}>
                                <Typography align='left'><span style={{ color: 'red' }}>* </span>CVV</Typography>
                                <TextField
                                  id="cvv"
                                  type="text"
                                  value={cvv}
                                  onChange={handleCvvChange}
                                  placeholder='Security Code'
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="standard"
                                  sx={{
                                    pl: 0, width: '90%',
                                    '& input[type=text]::-webkit-outer-spin-button, & input[type=text]::-webkit-inner-spin-button': {
                                      '-webkit-appearance': 'none',
                                      margin: 0,
                                    },
                                    '& input[type=text]': {
                                      '-moz-appearance': 'textfield',
                                    }
                                  }}
                                />
                              </Box>
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: "15px" }}>
                              <Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanelvertical>

                    <TabPanelvertical value={valueVertical} index={1} >
                      <Typography sx={{ textAlign: "start", color: '#5c5c5c', fontWeight: 'bold' }}>Frequently Used Banks</Typography>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel4'} onChange={handleChange1('panel4')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={BankIcon1} alt="bankicon" />HDFC Bank</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel5'} onChange={handleChange1('panel5')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={BankIcon2} alt="bankicon" />HDFC Bank</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel6'} onChange={handleChange1('panel6')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={BankIcon3} alt="bankicon" />HDFC Bank</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Typography sx={{ textAlign: "start", color: '#5c5c5c', fontWeight: 'bold', marginTop: "50px" }}>More Banks</Typography>
                      <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '92%', marginTop: "10px", height: '50px', border: '1px solid #507e48' }}
                      >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                          <SearchIcon />
                        </IconButton>
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Search Banks"
                          inputProps={{ 'aria-label': 'search google maps' }}
                        />
                      </Paper>

                    </TabPanelvertical>

                    <TabPanelvertical value={valueVertical} index={2} >
                      <Button sx={{ border: '2px dashed red', borderRadius: '5px', width: '85%', height: '100px', display: 'flex', fontSize: '16px', color: '#cc0000', gap: 5, '&:hover': { backgroundColor: 'transparent' } }}><AddCircleIcon fontSize='large' sx={{ borderRadius: '50px', color: '#dde7f9', backgroundColor: 'blue' }} />  Add UPI ID</Button>
                    </TabPanelvertical>

                    <TabPanelvertical value={valueVertical} index={3} >
                      <Typography sx={{ textAlign: 'left', color: '#5C5C5C', fontWeight: 'bold' }}>Wallets</Typography>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel9'} onChange={handleChange1('panel9')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={Payzapp} alt="bankicon" />Payzapp</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion sx={{ ...AccordionHover, width: '95%', marginTop: '20px' }} expanded={expanded === 'panel10'} onChange={handleChange1('panel10')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        ><Box sx={{ width: '30%', alignContent: 'center' }}>
                            <img style={{ width: '100%', height: '45px', alignContent: 'center' }} src={mobiwikicon} alt="airtelmoneyicon" />
                          </Box>
                          <Typography pr={2} pl={2}> <Typography sx={{ textAlign: 'left', fontSize: '13px', color: '#689F39' }}>Airtel Payments Bank Wallet</Typography>
                            <Typography sx={{ textAlign: 'justify', fontSize: '13px', color: '#689F39' }} >Get Rs.100 cashback, minimum order Rs.1500. Valid ONCE for all Airtel Payments Bank customers. (1-30 JUN) <a href="T&C" style={{ color: "#5C5C5C" }}>T&C</a></Typography></Typography>
                          <Link style={{ alignContent: 'center', color: '#Cc0000' }}>Link</Link>
                        </AccordionSummary>
                      </Accordion>

                      <Accordion sx={{ ...AccordionHover, width: '95%', marginTop: '20px' }} expanded={expanded === 'panel11'} onChange={handleChange1('panel11')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        ><Box sx={{ width: '30%', alignContent: 'center' }}>
                            <img style={{ width: '95%', height: '45px', alignContent: 'center' }} src={airtelmoneyicon} alt="airtelmoneyicon" />
                          </Box>
                          <Typography pr={6} pl={2}> <Typography sx={{ textAlign: 'left', fontSize: '13px', color: '#689F39' }}>Airtel Payments Bank Wallet</Typography>
                            <Typography sx={{ textAlign: 'justify', fontSize: '13px', color: '#689F39' }} >Get Rs.100 cashback, minimum order Rs.1500. Valid ONCE for all Airtel Payments Bank customers. (1-30 JUN) <a href="T&C" style={{ color: "#5C5C5C" }}>T&C</a></Typography></Typography>
                          <Link style={{ alignContent: 'center', color: '#Cc0000' }}></Link>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', paddingLeft: '40px', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '10px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel12'} onChange={handleChange1('panel12')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={FreeRecharge} alt="bankicon" />Freecharge </Typography>
                          <Link style={{ alignContent: 'center', color: '#Cc0000' }}>Link</Link>
                        </AccordionSummary>

                      </Accordion>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel13'} onChange={handleChange1('panel13')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={Olapay} alt="bankicon" />Ola money</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{ ...AccordionHover, width: '94%' }} expanded={expanded === 'panel14'} onChange={handleChange1('panel14')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '25%', alignContent: 'center' }} src={amezonpayicon} alt="bankicon" />Amezon Pay Balance</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                          <Box sx={{ display: 'flex', gap: 2, paddingTop: '0px' }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </TabPanelvertical>

                    <TabPanelvertical value={valueVertical} index={4}>
                      <Box >
                        <Typography align='left' sx={{ color: '#5c5c5c', fontSize: "16px", marginBottom: '20px', fontWeight: 'bold' }}>Enter Food Card details</Typography>
                        <Box sx={{ width: '85%', height: 'auto', border: '2px solid green', padding: '15px', borderRadius: '10px', display: 'flex', justifyItems: 'center' }}>
                          <Box component="form" sx={{ textAlign: 'left', '& .MuiTextField-root': { m: 2, width: '100%', padding: '0px' } }}
                            noValidate
                            autoComplete="off">
                            <Typography align='left'><span style={{ color: 'red' }}>* </span>Card Number</Typography>
                            <TextField
                              id="standard-number"
                              type="number"
                              placeholder='Enter Card Number'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="standard"
                            />
                            <Grid sx={{ display: 'flex', gap: 0 }}>
                              <Box sx={{ width: '100%' }}>
                                <Typography align='left'><span style={{ color: 'red' }}>* </span>Valid thru</Typography>
                                <TextField sx={{ pr: 0, width: '100%' }}
                                  id="standard-number"
                                  type="number"
                                  placeholder='MM/YYY'
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="standard"
                                />
                              </Box>
                              <Divider />
                              <Box sx={{ width: '100%' }}>
                                <Typography align='left'><span style={{ color: 'red' }}>* </span>CVV</Typography>
                                <TextField sx={{ pl: 0, width: '90%' }}
                                  id="standard-number"
                                  type="number"
                                  placeholder='Security Code'
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="standard"
                                />
                              </Box>
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: "15px" }}>
                              <Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanelvertical>
                    <TabPanelvertical value={valueVertical} index={5}>
                      <Typography sx={{ textAlign: 'left', color: '#5C5C5C', fontWeight: 'bold', marginBottom: '20px' }}>Pay On Delivery</Typography>
                      <Accordion sx={{ ...AccordionHover, width: '94%', }} expanded={expanded} onChange={handleChange1('panel')}>
                        <AccordionSummary
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Box sx={{ display: 'flex' }}>
                            <Typography><Typography sx={{ display: 'flex', gap: 2, alignContent: 'center', alignItems: "center" }}><img style={{ width: '12%', alignContent: 'center' }} src={CashOndelivery} alt="bankicon" />Cash On Delivery</Typography>
                              <Typography sx={{ color: '#76B900', textAlign: 'justify', padding: '20px 15px 0px 65px' }}>Tip: To ensure a contactless delivery, we recommend you use an online payment option.</Typography></Typography>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ paddingTop: '0px' }}>
                          <Box sx={{ display: 'flex', gap: 2, }}>
                            <Box sx={{ fontSize: '13px' }}>
                              <Checkbox sx={{ cursor: 'pointer', width: "30px" }} /> Make this your default payment Option.
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: "end", marginTop: '0px' }}><Button sx={{ backgroundColor: "#cc0000", color: 'white', '&:hover': { color: 'white', backgroundColor: '#cc0000' } }}>Place Order & Pay</Button>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </TabPanelvertical>
                  </Box>
                </Box>

              </CustomTabPanel>
            </Box>
          </Box>

          {/* Voucher order Summary */}

          <Box sx={{ width: '30%', height: '100%', backgroundColor: '#fff', borderTop: "7px solid green", borderRadius: '5px', padding: '10px' }} >
            <Button sx={{ border: "2px dashed #C9CAC8", width: "100%", height: '70px', '&:hover': { backgroundColor: 'transparent' }, margin: '15px 0px 10px 0px', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: '10px 0px 0px 0px' }}>
                <Box>
                  <img style={{ width: "100%", height: '55px', alignItems: 'start' }} src={Voucherimg} alt="voucherimage" />
                </Box >
                <Typography sx={{ textTransform: 'none' }}><span style={{ textAlign: 'start', color: '#202020', fontSize: "16px" }}>Apply voucher</span><br></br><span style={{ color: '#606060', fontSize: "12px" }}>8 vouchers available</span></Typography>
                <Box sx={{ display: "flex", justifyContent: 'right', alignItems: 'center', margin: '0px 0px 0px 100px' }}>
                  <NavigateNextIcon sx={{ color: '#202020' }} />
                </Box>
              </Box></Button>
            <Typography sx={{ textAlign: 'start', margin: '10px 0px 10px 0px', fontWeight: 'bold', fontSize: '16px' }}>Order Summary</Typography>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px 0px 0px', fontSize: '14px' }}>
              <Typography sx={{ fontSize: '14px' }}>Basket Value</Typography>
              <Typography sx={{ fontSize: '14px' }}>₹692</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
              <Typography sx={{ fontSize: '14px' }}>Delivery & Handling Charges</Typography>
              <Typography > <span> <span style={{ textDecorationLine: 'line-through', color: '#909090', fontSize: '14px' }}>₹10</span> <span style={{ fontSize: '12px' }}>Free</span></span> </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', justifyItems: 'center', margin: '0px' }}>
              <Accordion expanded={expanded === 'panel7'} onChange={handleChange1('panel7')} sx={{ borderRadius: '2px', width: '100%', }}>
                <Paper elevation={0}>
                  <AccordionSummary
                    sx={{ fontWeight: 'bold', fontSize: '12px', color: 'blue' }}
                    expandIcon={<KeyboardArrowDownIcon fontSize='small' sx={{ borderRadius: '10px', color: 'blue' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Show Details
                  </AccordionSummary>
                </Paper>
                <AccordionDetails sx={{ color: '#5E9400', borderTop: '1px dashed #5E9400', padding: '8px 16px 8px 16px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '12px', color: '#909090' }}>Delivery Charge</Typography>
                    <Typography > <span> <span style={{ textDecorationLine: 'line-through', color: '#909090', fontSize: '14px' }}>₹30</span> <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Free</span></span> </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '12px', color: 'green', textAlign: "left" }}>Free for first few orders!</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px 0px 0px', }}>
              <Typography sx={{ fontSize: '14px', display: 'flex', justifyItems: 'center', gap: 0.5 }}>Feed the underprivileged<Tooltip sx={{ backgroundColor: '#202020' }} title='Help us provide groceries for the needy & underprivileged.' placement="top" arrow><InfoIcon sx={{ backgroundColor: "#606060", color: 'white', width: '10%', height: '18px', borderRadius: "15px", }} /></Tooltip>
              </Typography>
              <Typography sx={{ fontSize: '12px' }}> <a href="AddItemLink" style={{ color: '#D63333', fontWeight: 'bold' }}>Add</a> ₹2</Typography>
            </Box>
            <Divider sx={{ marginTop: '10px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0px 0px 0px', }}>
              <Typography sx={{ fontSize: '14px', color: '#909090' }}> <Checkbox sx={{ '&:hover': { width: '0px', height: '0px', cursor: 'not-allowed' }, color: '#D5D5D5', width: '0px', height: '0px', margin: '0px 4px 0px 0px' }} /> Feed the underprivileged</Typography>
              <Typography sx={{ alignContent: 'center', color: '#909090' }}>₹0</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '12px', textAlign: 'start', color: '#909090', margin: '0px 0px 0px 27px' }}>Balance:₹0</Typography>
            </Box>
            <Divider sx={{ marginTop: '15px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px 0px 0px', padding: '0px 12px 0px 12px' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Total Amount Payable</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>₹692</Typography>
            </Box>
            <Box sx={{ margin: '15px 0px 0px 0px', }}>
              <Accordion expanded={expanded === 'panel8'} onChange={handleChange1('panel8')} sx={{ backgroundColor: ' #f1f8e6', borderRadius: '2px', margin: '10px 0px 10px 0px' }}>
                <AccordionSummary
                  sx={{ padding: '0px 10px 0px 12px', fontWeight: 'bold', fontSize: '14px', color: '#5E9400' }}
                  expandIcon={<ArrowDropDownIcon fontSize='large' sx={{ borderRadius: '10px', color: '#5E9400' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Total Savings
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#5E9400', borderTop: '1px solid #5E9400', padding: '8px 16px 8px 16px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '12px' }}>Saved on basket value</Typography>
                    <Typography sx={{ fontSize: '12px' }}>₹223</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '12px', textAlign: 'end', marginTop: '10px' }}>₹10</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>

        </Box>
      </Container >


    </Box >
    </>

  );
}
