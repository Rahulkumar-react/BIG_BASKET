import { Box, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Card1 from "../Assets/topstrip1.png";
import card2 from "../Assets/topstrip2.png";
import card3 from "../Assets/topstrip3.png";
import card4 from "../Assets/topstrip4.png";
import card5 from "../Assets/topstrip5.png";
import card6 from "../Assets/topstrip6.png";

import Image1 from '../Assets/Image1.png';
import Image2 from '../Assets/Image2.png';
import Image3 from '../Assets/Image3.png';
import Image4 from '../Assets/Image4.png';
import Image5 from '../Assets/Image5.png';
import Image6 from '../Assets/Image6.png';

import makeup from "../Assets/makeup.png";
import moisturiser from "../Assets/moisturiser.png";
import perfumes from "../Assets/perfumes.png";
import MensShaving from "../Assets/mens-shaving.png";
import minimum30 from "../Assets/minimum-30.png";
import BiggerSaving from "../Assets/bigger-saving.png";


import ProductCard from "../Card/ProductCard";
import OfferCard from "../Card/OfferCard";
import Navbar from "../Nanbar";
import AdsCard from "../Card/AdsCard";

const ProductList = () => {
  const cards = [
    { imag: Card1 },
    { imag: card2 },
    { imag: card3 },
    { imag: card4 },
    { imag: card5 },
    { imag: card6 },
  ];
  return (
    // <Grid sx={{ margin: "25px" }}>
    <Grid container spacing={2} sx={{ paddingY: 5 }}>
      {cards.map((cardValue, index) => (
        <Grid item sm={12} md={6} lg={2}>
          <Box
            sx={{
              height: "52px",
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
    // </Grid>
  );
};
const Home = () => {
  const cards = [
    { imag: Card1 },
    { imag: card2 },
    { imag: card3 },
    { imag: card4 },
    { imag: card5 },
    { imag: card6 },
  ];
  
  const daBeautyAndHygieneta = [
    {items: makeup},
    {items: moisturiser},
    {items: perfumes},
    {items: MensShaving},
    {items: minimum30},
    {items: BiggerSaving}
  ]

  const HomeAndKitchen = [
    {items: Image1},
    {items: Image2},
    {items: Image3},
    {items: Image4},
    {items: Image5},
    {items: Image6},
  ]

  
  return (
    <>
    <div style={{ marginTop: "150PX" }}>
      <ProductList />
      <Typography variant="h6" sx={{ textAlign: "start" ,fontWeight:'bold'}}>
        {"Bank Offers"}
      </Typography>
      <OfferCard />
      <Box sx={{ backgroundColor: "#f7f7f7"}}>
      <Typography variant="h6" sx={{ textAlign: "start" ,fontWeight:'bold'}}>
        {"Best Sellers"}
      </Typography>
        <ProductCard />
      </Box>
      <Typography variant="h6" sx={{ textAlign: "start" ,fontWeight:'bold'}}>
        {"Top Offers"}
      </Typography>
      <OfferCard />
    </div>
    <AdsCard Images={daBeautyAndHygieneta} heading={'Beauty and Hygiene'}/>
    <AdsCard Images={HomeAndKitchen} heading={'Home and Kitchen'}/>
    <br/> 
    </>
  
    
  );
};

export default Home;
