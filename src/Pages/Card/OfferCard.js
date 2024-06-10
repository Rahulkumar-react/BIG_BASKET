import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import card6 from "../Assets/Card1.png";
import card4 from "../Assets/card2.png";
import card2 from "../Assets/card3.png";
import { SectionHeading } from './AdsCard';

const OfferCard = () => {
const cards =[
    { imag: card2 },
    { imag: card6 },
    { imag: card4 },
    { imag: card6 },
]
      return (
        <Grid >
          <SectionHeading></SectionHeading>
          <Grid container spacing={2} sx={{ paddingY: 5 }}>
            {cards.map((cardValue, index) => (
              <Grid item sm={12} md={6} lg={3}>
                <Box
                  sx={{
                    height: "200px",
                    width: "100%",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    component="img"
                    key={index}
                    style={{ width: "100%", height: "100%" }}
                    src={cardValue.imag}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      );
    };

export default OfferCard
