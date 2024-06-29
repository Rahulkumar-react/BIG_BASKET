import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { SectionHeading } from './AdsCard';


const OfferCard = ({Images, heading}) => {

      return (
        <Grid >
          <SectionHeading>{heading}</SectionHeading>
          <Grid container spacing={2} marginBottom={2} sx={{justifyContent: 'center'}}>
            {Images.map((cardValue, index) => (
              <Grid item xs={10} sm={6} md={3} lg={3}>
                <Box
                  sx={{
                    height: "200px",
                    width: "100%",
                    alignItems: "center",
                    borderRadius: '10px',
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    '&:hover': {
                        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
                    }
                  }}
                >
                  <img
                    component="image"
                    key={index}
                    style={{ width: "100%", height: "100%" ,borderRadius:'10px'}}
                    src={cardValue.image}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      );
    };

export default OfferCard
