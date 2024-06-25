import React, { useState, useEffect, useMemo } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  Button,
  Popover,
  Rating,
  Grid,
  Switch,
  SwipeableDrawer,
  TextField,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavConfig } from "./NavConfig";
import Navbar from "../Pages/Nanbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styled from "styled-components";
import { grey } from "@mui/material/colors";
// import styled from "@emotion/styled";

// const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
//   height: 23px;
//   width: 23px;
//   appearance: none;
//   border: 3px solid #c4c4c4;
// `;

const SideBar = () => {
  const drawerBleeding = 56;
  const drawerWidth = 280;
  const [open1, setOpen1] = React.useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popName, setPopName] = useState([]);
  // const cookies = useMemo(() => new Cookies(), []);
  const [checked, setChecked] = React.useState(false);
  const handleBottonsidebar = () => {
    setOpen1(true);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNav = (nav, index) => {
    if (NavConfig[index].subItems) {
      console.log("log");

      setOpenSubMenu(openSubMenu === index ? null : index);
    } else {
      navigate(nav);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen1(newOpen);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const StyledBox = styled.div`
    background-color: red;
  `;
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;
  const RatingComponent = ({ rating }) => {
    const [value, setValue] = useState(rating.value);
    return (
      <Rating
        sx={{ fontSize: "18px", color: "green" }}
        name={rating.name}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    );
  };
  const drawer2 = (
    <div>
      <Toolbar sx={{ backgroundColor: "#37474f" }}>
        <Grid sx={{ display: "flex", paddingLeft: 0.7 }}>
          <Typography
            sx={{
              fontSize: "14px",
              pt: 0.2,
              padding: 0.5,
              border: "1px solid white",
              color: "white",
              borderRadius: "5px",
              corsur: "pointer",
            }}
            onClick={handleBottonsidebar}
          >
            Login / Signup
          </Typography>
        </Grid>
      </Toolbar>

      <Divider />
      <List>
        {NavConfig.map((text, index) => (
          <div key={text.name}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNav(text.path, index)}>
                <ListItemIcon sx={{ color: "black" }}>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>

            {/* Conditionally render subitems if the submenu is open */}
            {index === openSubMenu &&
              text.subItems &&
              text.subItems.map((subItem, subIndex) => (
                <ListItem key={subItem.name} sx={{ pl: 4 }}>
                  <ListItemButton onClick={() => navigate(subItem.path)}>
                    <ListItemIcon sx={{ color: "black" }}>
                      {subItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={subItem.name} />
                  </ListItemButton>
                </ListItem>
              ))}
          </div>
        ))}
      </List>
    </div>
  );

  const drawer = (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <Typography sx={{ fontSize: "16px", fontWeight: 600, paddingY: 2.5 }}>
        Shop by Category
      </Typography>
      <Grid sx={{ display: "flex", paddingLeft: 0.7 }}>
        <KeyboardArrowLeftIcon />
        <Typography sx={{ fontSize: "14px", pt: 0.2, paddingLeft: 1 }}>
          Fruits & Vegetables
        </Typography>
      </Grid>
      <Box
        sx={{
          mt: 2,
          mb: 2.5,
          backgroundColor: "#ffffff",
          paddingY: 1.5,
          paddingLeft: 0.7,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "15px",
            color: "#76b900",
            paddingLeft: 1,
            mb: 0.5,
          }}
        >
          Exotic Fruits & Veggies
        </Typography>
        <Grid sx={{ paddingLeft: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              borderLeft: "1px solid #c4c4c4",
              paddingY: 1,
              paddingLeft: 1,
            }}
          >
            Exotic Fruits
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              borderLeft: "1px solid #c4c4c4",
              paddingY: 1,
              paddingLeft: 1,
            }}
          >
            Exotic Vegetables
          </Typography>
        </Grid>
      </Box>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#ffffff",
          mb: 2,
          paddingY: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          Super<span style={{ color: "red" }}>Saver</span>
        </Typography>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          size="small"
        />
      </Grid>
      <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
        Refined by
      </Typography>
      {/* <Toolbar /> */}
      {/* <Divider /> */}
      <List sx={{ backgroundColor: "#f7f7f7" }}>
        {NavConfig.map((text, index) => (
          <div key={text.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNav(text.path, index)}
                sx={{
                  padding: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:active": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemText
                  sx={{
                    height: "42px",
                    width: "100%",
                    borderRadius: "4px",
                    backgroundColor: "#eeeeee",
                    padding: "10px 8px 8px 8px",
                  }}
                >
                  {text.name}
                  <ListItemIcon
                    sx={{
                      color: "black",
                      width: "57%",
                      float: "right",
                      paddingLeft: "110px",
                    }}
                  >
                    {" "}
                    {text.Icon}
                  </ListItemIcon>
                </ListItemText>
              </ListItemButton>
            </ListItem>

            {index === openSubMenu ||
              text.subItems.map((subItem, subIndex) => (
                // <ListItem key={subItem.name} sx={{ pl: 4 }}>
                <ListItemButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f7f7f7",
                    },
                  }}
                  onClick={() => navigate(subItem.path)}
                >
                  <input
                    style={{
                      height: "20px",
                      width: "20px",
                      margin: "8px",
                      border: " 3px solid #c4c4c4",
                    }}
                    type="checkbox"
                  />

                  {subItem.rating ? (
                    <RatingComponent rating={subItem.rating} />
                  ) : (
                    <ListItemText primary={subItem.name} />
                  )}
                </ListItemButton>
                // </ListItem>
              ))}
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: "100%" },
            ml: { sm: `${drawerWidth}px` },
            background: {
              sm: "white",
              xs: "#689f38",
            },
            display: "flex",
            justifyContent: "space-between",
            padding: "8px",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Navbar />
          </Box>
          <Toolbar
            sx={{
              display: "flex",
              display: { xs: "block", sm: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontWeight: "600", textAlign: "center" }}
              >
                bigbasked
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexGrow: 1,
                  flexBasis: 0,
                }}
              >
                {/* <CustomizedSwitches/> */}
                <Tooltip title="Account Settings">
                  <SearchIcon sx={{ height: "30px", width: "40px" }} />
                </Tooltip>
              </Box>
            </div>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box component="section" sx={{ p: 2, border: "ActiveBorder" }}>
                <Typography variant="body1"> {popName[0]?.userName}</Typography>
              </Box>
              <Divider sx={{ color: "black" }} />
              <Box component="section" sx={{ p: 1, border: "ActiveBorder" }}>
                <Typography
                  sx={{ textAlign: "center", fontSize: "18px" }}
                  onClick={() => {
                    // cookies.remove("User");
                    navigate("/");
                  }}
                >
                  {" "}
                  <Button>
                    Logout &nbsp;&nbsp;&nbsp;&nbsp;
                    <LogoutIcon sx={{ color: "black", fontSize: "18px" }} />
                  </Button>
                </Typography>
              </Box>
            </Popover>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          // container={container}

          anchor="bottom"
          open={open1}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{
              height: "400px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ paddingTop: 15, fontWeight: "666", fontSize: "21px" }}
            >
              {"Login /Signup"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                m: 3,
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Mobile Number (10 digit)"
                  variant="outlined"
                  sx={{ "& input": { height: "10px" } }}
                />
              </Box>
              <Box sx={{ paddingTop: "8px" }}>Mobile Number</Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ paddingTop: "8px" }}>
                by clicking on Continue i accept bigbasget
                <br />
                Tems & Conditions and Privacy policy
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{ marginTop: 5, borderColor: "red" }}
            >
              Continue
            </Button>
          </Box>
        </SwipeableDrawer>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "black",
              // marginTop: "100px",
              borderRadius: "3px",
            },
          }}
          onClick={handleDrawerToggle}
        >
          {drawer2}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            paddingTop: "25px",
            "& .MuiDrawer-paper": {
              overflow: "auto",
              height: "calc(100vh - 135px)",
              boxSizing: "border-box",
              width: drawerWidth,
              border: "1px solid #eeeeee",
              color: "black",
              borderRadius: "3px",
              position: "sticky",
              top: "140px",
              zIndex: 1,
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#ccc",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar": {
                width: "6px",
                borderRadius: "3px",
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>

        {/* </Box> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* <Toolbar /> */}
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
