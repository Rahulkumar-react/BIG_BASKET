import React from "react";
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
} from "../Pages/Card/ProductCardStyle";
import Strawberry from "../Pages/Assets/strawberry.png";
import Cucumber from "../Pages/Assets/cucumber.png";
import Broccoli from "../Pages/Assets/broccoli.png";
import SponsoredIcon from "../Pages/Assets/sponsoredIcon.jpg";
import offerBackground from "../Pages/Assets/offerbackground.png";
import image from "../Pages/Assets/asset.webp";
import { Box, Container } from "@mui/system";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import CancelIcon from "@mui/icons-material/Cancel";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

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
];
const SimilarProducts = () => {
  const [kilogram, setKilogram] = React.useState("");
  const [showOffer, setShowOffer] = React.useState(false);
  const navicate = useNavigate();
  const handleChange = (event) => {
    setKilogram(event.target.value);
  };

  const handleOfferClick = () => {
    setShowOffer(!showOffer);
  };
  const handleClick = () => {
    const url = "/ProductDetails"; // Define the URL
    window.open(url, "_blank"); // Open the URL in a new tab
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 2.5,
          mb: 4,
          backgroundColor: "#f7f7f7",
          paddingLeft: 2,
          paddingTop: 2,
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          Similar Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: 2,
            paddingTop: 2,
            paddingBottom: 1,
          }}
        >
          {Data.map((items) => (
            <Card
              sx={{
                width: { xs: "100%", sm: 264 },
                mb: 2,
                display: "flex",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
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
                      <ImageBody onClick={handleClick}>
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
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "1.5px 10px 3px 10px",
                          }}
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
      </Box>
    </Container>
  );
};

export default SimilarProducts;
