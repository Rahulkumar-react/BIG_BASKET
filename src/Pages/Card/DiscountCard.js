import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Images1 from "../Assets/OfferImg1.png";
import Images2 from "../Assets/OfferImg2.png";
import Images3 from "../Assets/OfferImg3.png";
import Images4 from "../Assets/OfferImg4.png";
import Images5 from "../Assets/OfferImg5.png";
import Images6 from "../Assets/OfferImg6.png";

const DiscountImg = [
    { items: Images1 },
    { items: Images2 },
    { items: Images3 },
    { items: Images4 },
    { items: Images5 },
    { items: Images6 },
]

const DiscountCard = () => {
  return (
    <Container maxWidth="lg" sx={{ ".MuiContainer-root": { padding: 0 } }}>
      <Grid container sx={{ justifyContent: "space-between", rowGap: 1 }}>
        {
            DiscountImg.map((img) => (
                <Grid xs={12} sm={5.8} md={3.8}>
                <img
                  style={{ width: "100%", borderRadius: "18px" }}
                  src={img.items}
                  alt=""
                />
              </Grid>
            ))
        }
      </Grid>
    </Container>
  );
};

export default DiscountCard;
