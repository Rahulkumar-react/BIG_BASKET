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
      <Toolbar />
      <Divider />
      <List>
        {NavConfig.map((text, index) => (
          <div key={text.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNav(text.path, index)}
                sx={{ padding: "0px" }}
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
            {text.subItems.map((subItem, subIndex) => (
              // <ListItem key={subItem.name} sx={{ pl: 4 }}>
              <ListItemButton onClick={() => navigate(subItem.path)}>
                <input style={{height:'20px',width:'20px',margin:'8px',border:' 3px solid #c4c4c4'}} type="checkbox" />
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
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
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
                background: "#f7f7f7",
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
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#f7f7f7",
                marginTop: "140px",
                marginLeft: "280px",
                border: "1px solid #eeeeee",
                color: "black",
                borderRadius: "3px",
                overflowY: "auto",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: 0,
                  height: 4, // Set the height of the scrollbar
                },
                "&:hover": {
                  "&::-webkit-scrollbar": {
                    width: 4, // Adjust the width when hovered
                  },
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginLeft: "280px",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
