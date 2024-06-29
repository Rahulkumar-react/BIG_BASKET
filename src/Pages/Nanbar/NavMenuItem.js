import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Menu, MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "Tea",
  "Ghee",
  "Nandini",
  "Fresh Vegetables",
  "Milk",
  "Beverages",
  "Bode Care",
  "All Category",
];
const NavItems = [
  {
    Item: "Tea",
    SubItems: ["Profile", "Account", "Dashboard", "Logout"],
  },
  {
    Item: "Ghee",
    SubItems: ["Account", "Dashboard", "Profile", "Logout"],
  },
  {
    Item: "Nandini",
    SubItems: ["Dashboard", "Profile", "Account", "Logout"],
  },
  {
    Item: "Fresh Vegetables",
    SubItems: ["Profile", "Account", "Dashboard", "Logout"],
  },
  {
    Item: "Milk",
    SubItems: ["Profile", "Account", "Dashboard", "Logout"],
  },
  {
    Item: "Beverages",
    SubItems: ["Profile", "Account", "Dashboard", "Logout"],
  },
  {
    Item: "Bode Care",
    SubItems: ["Profile", "Account", "Dashboard", "Logout"],
  },
  {
    Item: "All Category",
    SubItems: ["Profile", "Account", "Dashboard", "Logout"],
  },
];

const NavMenuItem = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
  const [currentSubItems, setCurrentSubItems] = useState([]);

  const handleOpenSubMenu = (event, subItems) => {
    setAnchorElSubMenu(event.currentTarget);
    setCurrentSubItems(subItems);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
    setCurrentSubItems([]);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#0c5273", marginTop: "80px" }}
      >
        <Container maxWidth="lg">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-evenly",
              marginY: 1,
            }}
          >
            {NavItems.map((item, i) => (
              <React.Fragment key={i}>
                <Button
                  onClick={(event) => handleOpenSubMenu(event, item.SubItems)}
                  sx={{ color: "#fff", fontSize: "14px", textTransform: 'capitalize' }}
                >
                  {item.Item}
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id={`menu-appbar-${i}`}
                  anchorEl={anchorElSubMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElSubMenu)}
                  onClose={handleCloseSubMenu}
                >
                  {currentSubItems.map((data, index) => (
                    <MenuItem key={index} onClick={handleCloseSubMenu}>
                      <Typography textAlign="center">{data}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            ))}
          </Box>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavMenuItem;
