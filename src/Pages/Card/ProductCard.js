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
import {
  BackImage,
  CardContents,
  Category,
  CustomInput,
  Discounts,
  Image,
  ImageBody,
  NewPrice,
  OffDisDetails,
  Offer,
  OfferContent,
  OfferDiscount,
  OfferHead,
  OfferPrice,
  OfferTitle,
  OldPrice,
  PersentageImage,
  ProductName,
  Rating,
  RatingCounts,
  Sponsored,
} from "./ProductCardStyle";
import React, { useState } from "react";
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
import SweetCorn from "../Assets/sweet-corn.png";
import GradeIcon from "@mui/icons-material/Grade";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProductFilter from "../../Components/ProductFilter";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
  // {
  //   ProductId: 4,
  //   ProductName: "Mushrooms - Button",
  //    ProductIamge: Mushrooms,
  //   NewPrice: 10,
  //   OldPrice: 20.16,
  //   Discount: null,
  // },
  // {
  //   ProductId: 5,
  //   ProductName: "Kiwi - Green",
  //    ProductIamge: Kiwi,
  //   NewPrice: 41,
  //   OldPrice: 56.16,
  //   Discount: 70,
  // },
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

const ProductCard = ({ url }) => {
  const [kilogram, setKilogram] = React.useState("");
  const [showOffer, setShowOffer] = React.useState(false);
  const [cartStyle, setCartStyle] = useState(false);
  const [orderCounts, setOrderCounts] = useState({});
  const navicate = useNavigate();
  const handleChange = (event) => {
    setKilogram(event.target.value);
  };

  const handleOfferClick = () => {
    setShowOffer(!showOffer);
  };
  const handleClick = () => {
    const url = "/ProductDetails";
    window.open(url, "_blank");
  };

  const handleChangeCart = () => {
    setCartStyle(!cartStyle);
  };

  const OrderCountAdd = (productId) => {
    setOrderCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const OrderCountLess = (productId) => {
    setOrderCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max(0, (prevCounts[productId] || 0) - 1),
    }));
  };

  return (
    <>
      {/* <Grid>
        <ProductFilter />
      </Grid> */}
      {/* <Grid container sx={{justifyContent: 'space-between',mt: 2.5,
          mb: 10,}}>
        {Data.map((items, e) => (
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                // width: { xs: "100%", sm: 264 },
                width: '90%',
                mb: 2,
                display: "flex",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 5px",
                borderRadius: "20px",
              }}
              key={items.ProductId}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "space-between",
                   width: '100%'
                }}
              >
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
                    <ImageBody onClick={handleClick}>
                      <Image src={items.ProductIamge} alt="Tender Coconut" />
                    </ImageBody>
                    <Discounts>
                      {!cartStyle ? (
                        <FavoriteBorderIcon onClick={handleChangeCart} />
                      ) : (
                        <FavoriteIcon
                          sx={{ color: "red" }}
                          onClick={handleChangeCart}
                        />
                      )}
                    </Discounts>
                  </Grid>
                  <ProductName>{items.ProductName}</ProductName>
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
                </Grid>
                <Grid container sx={{ marginTop: "auto" }}>
                  <Grid
                    xs={12}
                    sx={{
                      textAlign: "end",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      columnGap: 2,
                    }}
                  >
                    {(orderCounts[items.ProductId] || 0) < 1 ? (
                      <Button
                        sx={{
                          width: "100%",
                          justifyContent: "space-between",
                          "&:hover": {
                            backgroundColor: "#cc0000",
                            color: "#ffffff",
                          },
                        }}
                        variant="outlined"
                        color="error"
                        endIcon={<AddIcon />}
                        onClick={() => OrderCountAdd(items.ProductId)}
                      >
                        Add
                      </Button>
                    ) : (
                      <>
                        <Grid
                          sx={{
                            border: "1px solid",
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                            borderRadius: "50%",
                          }}
                        >
                          <RemoveIcon
                            onClick={() => OrderCountLess(items.ProductId)}
                          />
                        </Grid>
                        <Typography sx={{ fontSize: "18px" }}>
                          {" "}
                          {orderCounts[items.ProductId]}
                        </Typography>

                        <Grid
                          sx={{
                            border: "1px solid",
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                            borderRadius: "50%",
                          }}
                        >
                          <AddIcon
                            onClick={() => OrderCountAdd(items.ProductId)}
                          />
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Box
        sx={{
          mt: 2.5,
          mb: 10,
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: 'space-evenly',
          columnGap: {sm: 1, md: 2, lg: 2},
        }}
      >
        {Data.map((items, e) => (
          <Card
            sx={{
              width: { xs: "100%", sm: 264 },
              mb: 2,
              display: "flex",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 5px",
              borderRadius: '20px',
            }}
            key={items.ProductId}
          >
            <CardContent
              sx={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "space-between",
                width: '100%'
              }}
            >
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
                  <ImageBody onClick={handleClick}>
                    <Image src={items.ProductIamge} alt="Tender Coconut" />
                  </ImageBody>
                  <Discounts>
                    {!cartStyle ? (
                      <FavoriteBorderIcon onClick={handleChangeCart} />
                    ) : (
                      <FavoriteIcon
                        sx={{ color: "red" }}
                        onClick={handleChangeCart}
                      />
                    )}
                  </Discounts>
                </Grid>
                <ProductName>{items.ProductName}</ProductName>
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
              </Grid>
              <Grid container sx={{ marginTop: "auto" }}>
                <Grid
                  xs={12}
                  sx={{
                    textAlign: "end",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    columnGap: 2
                  }}
                >
                  {(orderCounts[items.ProductId] || 0) < 1 ? (<Button
                    sx={{
                      width: "100%",
                      justifyContent: 'space-between',
                      "&:hover": {
                        backgroundColor: "#cc0000",
                        color: "#ffffff",
                      },
                    }}
                    variant="outlined"
                    color="error"
                    endIcon={<AddIcon />}
                    onClick={() => OrderCountAdd(items.ProductId)}
                  >
                    Add
                  </Button>)
                  : 
                  (<>
                  <Grid sx={{ border: "1px solid",  display: "flex",
                    alignItems: "center", padding: 1, borderRadius: '50%' }}>
                    <RemoveIcon onClick={() => OrderCountLess(items.ProductId)}/>
                  </Grid>
                  <Typography sx={{fontSize: "18px"}}> {orderCounts[items.ProductId]}</Typography>
                 
                  <Grid sx={{ border: "1px solid",  display: "flex",
                    alignItems: "center", padding: 1, borderRadius: '50%' }}>
                    <AddIcon onClick={() => OrderCountAdd(items.ProductId)}/>
                  </Grid></>)}
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
