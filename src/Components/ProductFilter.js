import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HomeIcon from "@mui/icons-material/Home";
import TuneIcon from "@mui/icons-material/Tune";
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
  const handlecontent = () => {
    setIcon(!icon);
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ mt: 3 }}>
      <FilterNav>
        <div role="presentation" onClick={handleClick}>
          
          {/* <Breadcrumbs aria-label="breadcrumb">
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
          </Breadcrumbs> */}
        </div>
        <ProductCounts>Exotic Fruits & Veggies(439)</ProductCounts>
        <FilterButton>
          <Grid>
            <Button
              variant="outlined"
              startIcon={icon ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              onClick={handlecontent}
              sx={{
                color: "black",
                borderColor: "black",
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
            <Button
              variant="outlined"
              endIcon={<TuneIcon />}
              sx={{
                color: "black",
                borderColor: "black",
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
    </Box>
  );
};

export default ProductFilter;
