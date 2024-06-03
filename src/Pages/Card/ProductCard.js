import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputBase,
  MenuItem,
  Select,
  Typography,
  Collapse,
} from "@mui/material";
import {BackImage, CardContents, Category, CustomInput, Discounts, Image, ImageBody, NewPrice, OffDisDetails, Offer, OfferContent, OfferDiscount, OfferHead, OfferPrice, OfferTitle, OldPrice, PersentageImage, ProductName, Rating, RatingCounts, Sponsored, } from './ProductCardStyle'
import React from "react";
import styled from "styled-components";
import TendorCoconut from "../Assets/tender-coconut.jpg";
import SponsoredIcon from "../Assets/sponsoredIcon.jpg";
import offerBackground from "../Assets/offerbackground.png";
import image from "../Assets/asset.webp";
import Strawberry from "../Assets/strawberry.png";
import Cucumber from "../Assets/cucumber.png";
import Broccoli from "../Assets/broccoli.png";
import Mushrooms from "../Assets/mushrooms.png";
import Kiwi from "../Assets/kiwi-green.png";
import NeemLeaves from "../Assets/neem-leaves.png";
import Avocado from "../Assets/avocado.png";
import Pear from "../Assets/pear.png";
import Dragon from "../Assets/dragon.png";
import SweetCorn  from "../Assets/sweet-corn.png";
import GradeIcon from "@mui/icons-material/Grade";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProductFilter from "../../Components/ProductFilter";


const Data = [
  {
    ProductId: 1,
    ProductName: "Strawberry",
    ProductIamge: Strawberry,
    NewPrice: 41,
    OldPrice: 56.16,
    Discount: 27,
  },
  {
    ProductId: 2,
    ProductName: "Cucumber - English (Loose)",
     ProductIamge: Cucumber,
    NewPrice: 60,
    OldPrice: 84.16,
    Discount: null,
  },
  {
    ProductId: 3,
    ProductName: "Broccoli",
     ProductIamge: Broccoli,
    NewPrice: 53,
    OldPrice: 58.16,
    Discount: 40,
  },
  {
    ProductId: 4,
    ProductName: "Mushrooms - Button",
     ProductIamge: Mushrooms,
    NewPrice: 10,
    OldPrice: 20.16,
    Discount: null,
  },
  {
    ProductId: 5,
    ProductName: "Kiwi - Green",
     ProductIamge: Kiwi,
    NewPrice: 41,
    OldPrice: 56.16,
    Discount: 70,
  },
  {
    ProductId: 6,
    ProductName: "Neem Leaves - Organically Grown",
     ProductIamge: NeemLeaves,
    NewPrice: 21,
    OldPrice: 46.16,
    Discount: 27,
  },
  {
    ProductId: 7,
    ProductName: "Avocado - Imported, Medium (Loose)",
     ProductIamge: Avocado,
    NewPrice: 100,
    OldPrice: 156.16,
    Discount: 25,
  },
  {
    ProductId: 8,
    ProductName: "Pear - Green, Imported",
     ProductIamge: Pear,
    NewPrice: 66,
    OldPrice: 88.16,
    Discount: 10,
  },
  {
    ProductId: 9,
    ProductName: "Dragon Fruit (Loose)",
     ProductIamge: Dragon,
    NewPrice: 190,
    OldPrice: 456.16,
    Discount: 67,
  },
  {
    ProductId: 10,
    ProductName: "Sweet Corn (Loose)",
     ProductIamge: SweetCorn,
    NewPrice: 90,
    OldPrice: 106.16,
    Discount: 7,
  },
];

const ProductCard = () => {
  const [kilogram, setKilogram] = React.useState("");
  const [showOffer, setShowOffer] = React.useState(false);

  const handleChange = (event) => {
    setKilogram(event.target.value);
  };

  const handleOfferClick = () => {
    setShowOffer(!showOffer);
  };

  return (
    <>
      {/* <Grid>
        <ProductFilter />
      </Grid> */}
      <Box sx={{mb: 10, display: "flex", flexWrap: "wrap", columnGap: 2 }}>
        {Data.map((items) => (
          <Card
            sx={{ width: { xs: "100%", sm: 264 }, mb: 2, display: "flex" }}
            key={items.ProductId}
          >
            <CardContent>
              <Collapse in={!showOffer} timeout={2000}>
                <Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      border: "1px solid #eeeeee",
                      position: "relative",
                      borderRadius: "8px",
                    }}
                  >
                    <ImageBody>
                      <Image src={items.ProductIamge} alt="Tender Coconut" />
                    </ImageBody>
                    <Discounts
                      style={{
                        visibility: !items.Discount ? "hidden" : "block",
                      }}
                    >
                      {items.Discount}% OFF
                    </Discounts>
                  </Grid>
                  <Grid sx={{ textAlign: "start" }}>
                    <Sponsored>
                      <Grid
                        sx={{ display: "flex",alignItems: 'center', padding: "1.5px 10px 3px 10px" }}
                      >
                        <img src={SponsoredIcon} alt="Sponsored" />
                        <Typography sx={{ fontSize: "12px" }}>
                          Sponsored
                        </Typography>
                      </Grid>
                    </Sponsored>
                    <Category>Fresho</Category>
                  </Grid>
                  <ProductName>{items.ProductName}</ProductName>
                  <Grid sx={{ display: "flex", columnGap: 0.6 }}>
                    <Rating>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          marginTop: "2.5px",
                          color: "#476f00",
                        }}
                      >
                        3.9
                      </Typography>
                      <GradeIcon
                        fontSize="small"
                        sx={{ marginTop: "1px", color: "#476f00" }}
                      />
                    </Rating>
                    <RatingCounts>424 Ratings</RatingCounts>
                  </Grid>
                  <FormControl sx={{ mt: 1, minWidth: "100%" }}>
                    <Select
                      sx={{ paddingY: 0 }}
                      value={kilogram}
                      onChange={handleChange}
                      displayEmpty
                      input={<CustomInput />}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem sx={{ marginTop: 2 }} value="">
                        250 Ml
                      </MenuItem>
                      <MenuItem value={10}>500ml</MenuItem>
                      <MenuItem value={20}>1 kg</MenuItem>
                      <MenuItem value={30}>1.5 kg</MenuItem>
                    </Select>
                  </FormControl>
                  <Grid sx={{ display: "flex", columnGap: 0.5, mb: 5 }}>
                    <NewPrice>₹{items.NewPrice}</NewPrice>
                    <OldPrice>₹{items.OldPrice}</OldPrice>
                  </Grid>
                  <Grid>
                    <Button
                      sx={{
                        visibility: !items.Discount ? "hidden" : "block",
                        width: "100%",
                        borderColor: "#add566",
                        background:
                          "linear-gradient(90deg, #FFFFFF 0%, #63FF0057 100%)",
                        color: "#476f00",
                        "&:hover": {
                          borderColor: "#add566",
                        },
                      }}
                      variant="outlined"
                      size="small"
                      onClick={handleOfferClick}
                    >
                      Har Din Sasta!
                    </Button>
                  </Grid>
                </Grid>
              </Collapse>
              <Collapse in={showOffer} timeout={2000}>
                <Grid>
                  <Category>Fresho</Category>
                  <ProductName>
                    Tender Coconut Water With Pulpy Malai
                  </ProductName>
                  <Grid sx={{ display: "flex", columnGap: 0.5 }}>
                    <NewPrice>₹{items.NewPrice}</NewPrice>
                    <OldPrice>₹{items.OldPrice}</OldPrice>
                  </Grid>
                  <Grid sx={{ textAlign: "end" }}>
                    <CancelIcon
                      sx={{ color: "black" }}
                      onClick={handleOfferClick}
                    />
                  </Grid>
                  <Offer>
                    <BackImage src={offerBackground} alt="" />
                    <OfferContent>
                      <PersentageImage src={image} alt="" />
                      <OfferHead>
                        <OfferTitle>Har Din Sasta!</OfferTitle>
                      </OfferHead>
                      <OfferDiscount>{items.Discount}% Off!</OfferDiscount>
                      <OffDisDetails>
                        Get up to <OfferPrice>5</OfferPrice> qty at{" "}
                        <OfferPrice>₹43</OfferPrice> and additional Qty at{" "}
                        <OfferPrice>₹{items.Discount}</OfferPrice>
                      </OffDisDetails>
                    </OfferContent>
                  </Offer>
                </Grid>
              </Collapse>
              <Grid container sx={{ mt: 1 }}>
                <Grid
                  sx={{
                    border: "1px solid",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  xs={2}
                >
                  <TurnedInNotIcon />
                </Grid>
                <Grid xs={10} sx={{ textAlign: "end" }}>
                  <Button
                    sx={{
                      width: "97%",
                      "&:hover": {
                        backgroundColor: "#cc0000",
                        color: "#ffffff",
                      },
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ProductCard;
