import React from "react";
import { FaBars } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
// import Delete from "../Assets/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiNENjMzMzMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZ.svg";
import Logo from "../Assets/BigBasKetLogo.png";
// import Next from "../Assets/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iZmFsc2UiIGNsYXNzPSJjdXJzb3ItcG9pbnRlciI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im05L.svg";
import Smart from "../Assets/Smart_basket-250124-1.png";
import Offer from "../Assets/hp_cmc_m_offer_28_220921_all.png";
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
  Grid,
} from "./NavbarStyleComponents";
import Sidebar from "../../Components/Sidebar";
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ProductFilter from "../../Components/ProductFilter";
import Signin from "./Signin";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpen = () => {
    navigate('/dashboradd')
    // setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            <Logaion style={{ background: "#eeeeee" }}>
              <Texticon>
                Get it in 2 hrs
                <br />
                600032,Chennai
              </Texticon>
            </Logaion>
            <Logaionbutton style={{ background: "#202020" }}>
              <Loginbutton onClick={handleOpen}>Login/SingUp</Loginbutton>
            </Logaionbutton>
            <Deleteicon style={{ background: "#fae6e6" }}>
              {/* <Img
                style={{ height: "38px", width: "38px", padding: "6px" }}
                src={Delete}
                alt="Delete-image"
              /> */}
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
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <KeyboardDoubleArrowRightIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
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
                    onClick={handleCloseNavMenu}
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
