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

import SlideShow1 from '../../Pages/Assets/slideshow1.webp';
import SlideShow2 from '../../Pages/Assets/slideshow2.webp';
import SlideShow3 from '../../Pages/Assets/slideshow3.webp';
import SlideShow4 from '../../Pages/Assets/slideshow4.webp';

import BankOffers1 from '../../Pages/Assets/BankOffer1.png';
import BankOffers2 from '../../Pages/Assets/BankOffer2.png';
import BankOffers3 from '../../Pages/Assets/BankOffer3.png';
import BankOffers4 from '../../Pages/Assets/BankOffer2.png';

import TopOffers1 from '../../Pages/Assets/Topoffer1.webp';
import TopOffers2 from '../../Pages/Assets/Topoffer2.webp';
import TopOffers3 from '../../Pages/Assets/Topoffer3.webp';
import TopOffers4 from '../../Pages/Assets/Topoffer4.webp';

import FruitsandVegetables1 from '../../Pages/Assets/fruitsveg1.webp';
import FruitsandVegetables2 from '../../Pages/Assets/fruitsveg2.webp';
import FruitsandVegetables3 from '../../Pages/Assets/fruitsveg3.webp';
import FruitsandVegetables4 from '../../Pages/Assets/fruitsveg4.webp';

import YourDailyStaples1 from '../../Pages/Assets/yourDailyStaples1.webp';
import YourDailyStaples2 from '../../Pages/Assets/yourDailyStaples2.webp';
import YourDailyStaples3 from '../../Pages/Assets/yourDailyStaples3.webp';
import YourDailyStaples4 from '../../Pages/Assets/yourDailyStaples4.webp';
import YourDailyStaples5 from '../../Pages/Assets/yourDailyStaples5.webp';
import YourDailyStaples6 from '../../Pages/Assets/yourDailyStaples6.webp';

import Beverages1 from '../../Pages/Assets/Beverages1.webp';
import Beverages2 from '../../Pages/Assets/Beverages2.webp';
import Beverages3 from '../../Pages/Assets/Beverages3.webp';
import Beverages4 from '../../Pages/Assets/Beverages4.webp';
import Beverages5 from '../../Pages/Assets/Beverages5.webp';
import Beverages6 from '../../Pages/Assets/Beverages6.webp';

import SnacksStore1 from '../../Pages/Assets/SnacksStore1.webp';
import SnacksStore2 from '../../Pages/Assets/SnacksStore2.webp';
import SnacksStore3 from '../../Pages/Assets/SnacksStore3.webp';
import SnacksStore4 from '../../Pages/Assets/SnacksStore4.webp';

import CleaningHousehold1 from '../../Pages/Assets/Cleaning&Household1.webp';
import CleaningHousehold2 from '../../Pages/Assets/Cleaning&Household2.webp';
import CleaningHousehold3 from '../../Pages/Assets/Cleaning&Household3.webp';
import CleaningHousehold4 from '../../Pages/Assets/Cleaning&Household4.webp';


import SlideShowTop1 from '../../Pages/Assets/slideshowTop1.webp';
import SlideShowTop2 from '../../Pages/Assets/slideshowTop2.webp';

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
import SlideBar from "../../Components/SlideBar/SlideBar";

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

  const SlideShowTop = [
    { img: SlideShowTop1 },
    { img: SlideShowTop2 },
  ]

  const SlideShow = [
    { img: SlideShow1 },
    { img: SlideShow2 },
    { img: SlideShow3 },
    { img: SlideShow4 },

  ];

  const BankOffers = [
    { image: BankOffers1 },
    { image: BankOffers2 },
    { image: BankOffers3 },
    { image: BankOffers4 },];

  const TopOffers = [
    { image: TopOffers1 },
    { image: TopOffers2 },
    { image: TopOffers3 },
    { image: TopOffers4 },
  ];

  const FruitsandVegetables = [
    { image: FruitsandVegetables1 },
    { image: FruitsandVegetables2 },
    { image: FruitsandVegetables3 },
    { image: FruitsandVegetables4 },
  ];

  const YourDailyStaples = [
    { items: YourDailyStaples1 },
    { items: YourDailyStaples2 },
    { items: YourDailyStaples3 },
    { items: YourDailyStaples4 },
    { items: YourDailyStaples5 },
    { items: YourDailyStaples6 },
  ];

  const Beverages = [
    { items: Beverages1 },
    { items: Beverages2 },
    { items: Beverages3 },
    { items: Beverages4 },
    { items: Beverages5 },
    { items: Beverages6 },
  ];

  const SnacksStore = [
    { image: SnacksStore1 },
    { image: SnacksStore2 },
    { image: SnacksStore3 },
    { image: SnacksStore4 },
  ];

  const CleaningHousehold = [
    { image: CleaningHousehold1 },
    { image: CleaningHousehold2 },
    { image: CleaningHousehold3 },
    { image: CleaningHousehold4 },
  ];

  const daBeautyAndHygieneta = [
    { items: makeup },
    { items: moisturiser },
    { items: perfumes },
    { items: MensShaving },
    { items: minimum30 },
    { items: BiggerSaving }
  ];

  const HomeAndKitchen = [
    { items: Image1 },
    { items: Image2 },
    { items: Image3 },
    { items: Image4 },
    { items: Image5 },
    { items: Image6 },
  ];

  return (
    <>
      <div style={{ marginTop: "150PX" }}>
        <div style={{ marginTop: '40px' }}>
          <SlideBar Images={SlideShowTop} />
        </div>
        <ProductList />
        <OfferCard Images={BankOffers} heading={'Bank Offers'} />
        <Box sx={{ backgroundColor: "#f7f7f7" }}>
          <Typography variant="h6" sx={{ textAlign: "start", fontWeight: 'bold' }}>
            {"Best Sellers"}
          </Typography>
          <ProductCard />
        </Box>
        <OfferCard Images={TopOffers} heading={'Top Offers'} />
      </div>
      <OfferCard Images={FruitsandVegetables} heading={'Fruit and Vegetables'} />
      <AdsCard Images={YourDailyStaples} heading={'Your Daily Staples'} />
      <OfferCard Images={SnacksStore} heading={'Snacks Store'} />
      <AdsCard Images={Beverages} heading={'Beverages'} />
      <OfferCard Images={CleaningHousehold} heading={'Cleaning & Household'} />
      <AdsCard Images={daBeautyAndHygieneta} heading={'Beauty and Hygiene'} />
      <AdsCard Images={HomeAndKitchen} heading={'Home and Kitchen'} />

      <br />
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <SlideBar Images={SlideShow} />

      </div>
      <br />
    </>


  );
};

export default Home;
