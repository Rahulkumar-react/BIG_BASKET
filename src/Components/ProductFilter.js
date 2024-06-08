import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Menu,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HomeIcon from "@mui/icons-material/Home";
import TuneIcon from "@mui/icons-material/Tune";
import MenuItem from '@mui/material/MenuItem';


const FilterRelevance = ['Relevance',
'Price - Low to High',
'Price - High to Low',
'Rupee Saving - High to Low',
'Rupee Saving - Low to High',
'% Off - High to Low']

const FilterNav = styled.div`
  text-align: start;
`;

const ProductCounts = styled.p`
  font-size: 22px;
  color: #a4a4a4;
  font-weight: lighter;
  margin-bottom: 15px;
`;

const FilterButton = styled.div`
  display: flex;
  justify-content: space-between;
`;



const ProductFilter = () => {
  const [icon, setIcon] = useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handlecontent = () => {
    setIcon(!icon);
  };

  const handleOpenUserMenu = (event) =>  {
    setAnchorElUser(event.currentTarget);
  }
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        position: "relative", // or 'absolute' depending on your layout needs
        top: "28px",
      }}
    >
      {/* <Container maxWidth= 'lg'> */}
      <FilterNav>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", fontSize: "15px" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", fontSize: "15px" }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Fruits & Vegetables
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Exotic Fruits & Veggies
            </Typography>
          </Breadcrumbs>
        </div>
        <ProductCounts>Exotic Fruits & Veggies(439)</ProductCounts>
        <FilterButton>
          <Grid>
            <Button
              variant="outlined"
              startIcon={icon ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              onClick={handlecontent}
              sx={{
                paddingY: 0.9,
                color: "black",
                backgroundColor: "white",
                borderColor: "#b3b3b3",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  ".MuiButton-startIcon": {
                    color: "white",
                  },
                },
              }}
            >
              {icon ? "Hide Filter" : "Show Filter"}
            </Button>
          </Grid>


          <Grid>
            <Button onClick={handleOpenUserMenu}
              variant="outlined"
              endIcon={<TuneIcon />}
              sx={{
                paddingY: 0.9,
                color: "black",
                backgroundColor: "white",
                borderColor: "#b3b3b3",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  ".MuiButton-startIcon": {
                    color: "white",
                  },
                },
              }}
            >
              Relevance
            </Button>
            <Menu
            sx={{ mt: '56px', fontSize: '14px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {FilterRelevance.map((Relevance) => (
                <MenuItem key={Relevance} onClick={handleCloseUserMenu} >
                  <Typography sx={{ fontSize: '14px', borderTopWidth: '1px'}}  textAlign="center">{Relevance}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>


        </FilterButton>
      </FilterNav>
      <hr
        style={{
          marginTop: "20px",
          borderStyle: "dashed",
          borderWidth: "1px",
          color: "#d5d5d5",
        }}
      />
      {/* </Container> */}
    </Box>
  );
};

export default ProductFilter;
