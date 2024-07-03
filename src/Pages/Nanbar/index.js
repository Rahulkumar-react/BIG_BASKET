import * as React from "react";
import Farmlogo from "../Assets/Farm2Kitchens.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListIcon from "@mui/icons-material/List";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import NavMenuItem from "./NavMenuItem";
import { Link } from "react-router-dom";
import Signin from "./Signin";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handlechangelogin = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Signin open={open} onClose={handleClose} />
      <AppBar
        position="fixed"
        sx={{ paddingBottom: 1.5, backgroundColor: "#0f3cc9" }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", alignItems: "end" }}>
            <Box sx={{ width: "15%" }}>
              <Link to={"/"}>
                <img
                  style={{ width: "100%", height: "9vh" }}
                  src={Farmlogo}
                  alt=""
                />
              </Link>
            </Box>
            <Button
              size="small"
              variant="text"
              startIcon={<LocationOnIcon />}
              sx={{
                fontSize: "14px",
                color: "white",
                paddingX: 2,
                marginBottom: 1,
                borderRadius: "18px",
                "&:hover": {
                  backgroundColor: "#0c5273",
                },
              }}
            >
              Deliver to Chennai
            </Button>
            <Box
              sx={{
                width: { xs: "auto", md: "35%", lg: "50%" },
                marginBottom: 0.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  bgcolor: "grey.800",
                  borderRadius: 6,
                  margin: "auto",
                  backgroundColor: "#0c5273",
                }}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "white" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,
                    color: "white",
                    "&::placeholder": {
                      color: "white",
                    },
                  }}
                  placeholder="Search For Products"
                  inputProps={{ "aria-label": "Search For Products" }}
                />
                <IconButton
                  sx={{ p: "10px", color: "white" }}
                  aria-label="menu"
                >
                  <ListIcon />
                </IconButton>
              </Box>
            </Box>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Link onClick={handlechangelogin} style={{ color: "inherit" }}>
                  <AccountCircle />
                </Link>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <>
        <NavMenuItem />
      </>
    </>
  );
};

export default Navbar;
