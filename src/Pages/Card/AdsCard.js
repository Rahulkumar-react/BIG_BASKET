import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const SectionHeading = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: start;
  margin-top: 30px;
  margin-bottom: 14px;
`;

const SectionImage = styled.img`
  width: 100%;
  border-radius: 11px;
`;

const ImgParentStyle = {
    paddingTop: 0.1, 
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    '&:hover': {
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
    }
  };


const AdsCard = ({Images, heading}) => {
  return (
    <Box>
      <SectionHeading>{heading}</SectionHeading>
      <Grid container sx={{ gap: 1, justifyContent: "space-around" }}>
        {
          Images.map((items) => (
            <Grid
            xs={12}
            sm={4}
            md={1.7}
            sx={ImgParentStyle}
          >
            <SectionImage src={items.items} alt="" />
          </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default AdsCard