import React from "react";
import { FaBars } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Assets/BigBasKetLogo.png";
import Smart from "../Assets/Smart_basket-250124-1.png";
import Offer from "../Assets/hp_cmc_m_offer_28_220921_all.png";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Boximage,
  Deleteicon,
  Img,
  Logaion,
  Logaionbutton,
  Loginbutton,
  Loginimage,
  MobileIcon,
  Nav,
  NavButton,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  SearchContainer,
  Texticon,
} from "./NavbarStyleComponents";
import Sidebar from "../../Components/Sidebar";
import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import ProductFilter from "../../Components/ProductFilter";
import Signin from "./Signin";
import { Box, display, fontWeight } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { GiRopeDart } from "react-icons/gi";

const pages = [
  "Milk",
  "Yogurt & Shrikhand",
  "Chocolates",
  "Cup Noodles",
  "Hair Care",
  "Fresh Chicken",
  "Eggs",
  "Honey",
];

const Navbar = () => {
  const ProfileStyle = {
    color: "white",
    marginY: 0.5,
    "&:hover": {
      backgroundColor: "#5a5a5a",
      fontWeight: 600,
    },
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorElPro, setAnchorElPro] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLocation, setAnchorElLocation] = React.useState(null);

  const handleOpenUserLocation = (event) => {
    setAnchorElLocation(event.currentTarget);
  };

  const handleCloseUserLocation = () => {
    setAnchorElLocation(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpen = () => {
    navigate("/dashboradd");
    // setOpen(true);
  };
  console.log(location.pathname);
  const handleClose = () => setOpen(false);

  const handleOpenProMenu = (event) => {
    setAnchorElPro(event.currentTarget);
  };

  const handleCloseProMenu = () => {
    setAnchorElPro(null);
  };

  const handleAddproduct = () => {
    navigate("/Addproduct");
  };
  return (
    <Box>
      <Signin open={open} onClose={handleClose} />
      <Nav>
        <NavbarContainer>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
          <NavLogo>
            <Img src={Logo} style={{ width: "100%" }} alt="hero-image" />
          </NavLogo>
          <NavItems>
            <SearchContainer>
              <SearchIcon />
              <input type="text" placeholder="Search for Products..." />
            </SearchContainer>

            {location.pathname !== "/" ? (
              <Grid
                sx={{
                  background: "#eeeeee",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  // width: "17%",
                  height: "7vh",
                  paddingX: 3.5,
                  cursor: "pointer",
                }}
              >
                <Grid
                  onClick={handleOpenUserLocation}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "auto",
                    columnGap: 1,
                  }}
                >
                  <ExploreIcon
                    sx={{
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "14px",
                      textWrap: { xs: "wrap", lg: "nowrap" },
                    }}
                  >
                    Select Loaction
                  </Typography>
                </Grid>
                <Menu
                  sx={{
                    width: "83%",
                    mt: "45px",
                    "& .MuiPaper-root": {
                      backgroundColor: "#eeeeee",
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElLocation}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElLocation)}
                  onClose={handleCloseUserLocation}
                >
                  <Grid onClick={handleCloseUserLocation} sx={{ margin: 2 }}>
                    <Typography>Select a location for delivery</Typography>
                    <Typography sx={{ fontSize: "12px", textWrap: "wrap" }}>
                      Choose your address location to see product availability
                      and delivery options
                    </Typography>
                    <Grid sx={{ marginTop: 3 }}>
                      <Paper
                        component="form"
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
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
                          placeholder="Search for area or street name"
                          inputProps={{
                            "aria-label": "Search for area or street name",
                          }}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </Menu>
              </Grid>
            ) : (
              <Logaion>
                <Texticon>
                  Get it in 2 hrs
                  <br />
                  600032,Chennai
                </Texticon>
              </Logaion>
            )}

            {location.pathname !== "/" ? (
              <>
                <Logaion
                  style={{
                    background: "#eeeeee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AccountCircleIcon
                    onClick={handleOpenUserMenu}
                    sx={{
                      fontSize: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </Logaion>
                <Menu
                  sx={{
                    mt: "45px",
                    "& .MuiPaper-root": {
                      backgroundColor: "black",
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem sx={ProfileStyle} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Account</Typography>
                  </MenuItem>
                  <MenuItem
                    sx={{ ...ProfileStyle, columnGap: 8 }}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">My Basket</Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#d63333",
                        fontSize: "12px",
                        paddingY: 0.8,
                        paddingX: 1.5,
                        color: "white",
                        borderRadius: "16px",
                      }}
                    >
                      0 Item
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={ProfileStyle} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Order</Typography>
                  </MenuItem>
                  <MenuItem sx={ProfileStyle} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Smart Basket</Typography>
                  </MenuItem>
                  <MenuItem
                    sx={{ ...ProfileStyle, justifyContent: "space-between" }}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">My Wallet</Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#76b900",
                        fontSize: "12px",
                        paddingY: 0.8,
                        paddingX: 1.5,
                        color: "white",
                        borderRadius: "16px",
                      }}
                    >
                      ₹ 0
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={ProfileStyle} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Contact Us</Typography>
                  </MenuItem>
                  <MenuItem sx={ProfileStyle} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Logaionbutton style={{ background: "#202020" }}>
                <Loginbutton onClick={handleOpen}>Login/SingUp</Loginbutton>
              </Logaionbutton>
            )}

            <Deleteicon style={{ background: "#fae6e6" }}>
              <ShoppingBasketIcon
                sx={{
                  fontSize: "28px",
                  backgroundColor: "red",
                  color: "white",
                  padding: "4px 5px 5px 5px ",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={handleAddproduct}
              />
            </Deleteicon>
          </NavItems>
        </NavbarContainer>
      </Nav>

      <Nav>
        <NavbarContainer>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
          <NavLogo>
            <NavButton style={{ background: "#476F00" }}>
              Shop by<b style={{ fontWeight: "bold" }}> Category</b>
            </NavButton>
          </NavLogo>
          <NavItems>
            <NavLink>Exotic Fruits & Vegg</NavLink>
            {/* <NavLink /> */}
            <NavLink>Tea</NavLink>
            {/* <NavLink /> */}
            <NavLink>Ghee</NavLink>
            {/* <NavLink /> */}
            <NavLink>Nandini</NavLink>
            <NavLink>Fresh Vegetables</NavLink>
            <Grid>
              <IconButton
                sx={{ color: "black" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenProMenu}
                color="inherit"
              >
                <KeyboardDoubleArrowRightIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElPro}
                open={Boolean(anchorElPro)}
                onClose={handleCloseProMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    key={page}
                    onClick={handleCloseProMenu}
                  >
                    <Typography
                      sx={{
                        marginY: 1,
                        paddingRight: 5,
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </NavItems>
          <Loginimage>
            <Boximage>
              <Img src={Smart} />
            </Boximage>
            <Boximage>
              <Img src={Offer} />
            </Boximage>
          </Loginimage>
        </NavbarContainer>
      </Nav>
      {/* <Grid>
        <ProductFilter />
      </Grid> */}
      {/* <Container > */}
      {/* <NavbarContainer> */}

      {/* </NavbarContainer> */}
      {/* </Container > */}
    </Box>
  );
};

export default Navbar;
