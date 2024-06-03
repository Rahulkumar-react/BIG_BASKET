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
  Avatar,
  Button,
  Popover,
  Container,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavConfig } from "./NavConfig";
import Navbar from "../Pages/Nanbar";
// import styled from "@emotion/styled";

// const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
//   height: 23px;
//   width: 23px;
//   appearance: none;
//   border: 3px solid #c4c4c4;
// `;

const SideBar = () => {
  const drawerWidth = 280;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popName, setPopName] = useState([]);
  // const cookies = useMemo(() => new Cookies(), []);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const userName = cookies.get("User");
  //   const retrieveData = Object.values(userName?.data[0] || {});
  //   setPopName(retrieveData);
  // }, [cookies]);

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

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;

  const drawer = (
    <div>
      {/* <Toolbar /> */}

      <Divider />
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
                    height: "46px",
                    width: "100%",
                    paddingTop: "10px",
                    borderRadius: "4px",
                    backgroundColor: "#eeeeee",
                    padding: 1,
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
                  <ListItemText primary={subItem.name} />
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
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            padding: "8px",
          }}
        >
          <Navbar />
        </AppBar>
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
              marginTop: "100px",
              borderRadius: "3px",
            },
          }}
          onClick={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
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
