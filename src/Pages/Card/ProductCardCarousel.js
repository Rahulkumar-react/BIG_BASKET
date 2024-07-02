import React, { useState } from "react";
import Slider from "react-slick";
import {
  CustomInput,
  Discounts,
  Image,
  ImageBody,
  NewPrice,
  OldPrice,
  ProductName,
} from "./ProductCardStyle";
import {
  Button,
  ButtonBase,
  Card,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image1 from "../Assets/carouselImage/Image1.png";
import Image2 from "../Assets/carouselImage/Image2.png";
import Image3 from "../Assets/carouselImage/Image3.png";
import Image4 from "../Assets/carouselImage/Image4.png";
import Image5 from "../Assets/carouselImage/Image5.png";
import Image6 from "../Assets/carouselImage/Image6.png";
import Image7 from "../Assets/carouselImage/Image7.png";
import Image8 from "../Assets/carouselImage/Image8.png";
import Image9 from "../Assets/carouselImage/Image9.png";
import Image10 from "../Assets/carouselImage/Image10.png";
import { Box } from "@mui/system";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
const carouselData = [
  {
    ProductId: 1,
    ProductImage: Image1,
    ProductName: "Maaza Mango Drink 1.2 L",
    NewPrice: 59.0,
    OldPrice: 79.0,
    Discount: 27,
  },
  {
    ProductId: 2,
    ProductImage: Image2,
    ProductName: " Refined Sunflower Oil 1 L",
    NewPrice: 90.0,
    OldPrice: 109.0,
    Discount: 250,
  },
  {
    ProductId: 3,
    ProductImage: Image3,
    ProductName: "Bharat Chana Dal 1 kg",
    NewPrice: 50.0,
    OldPrice: 79.0,
    Discount: 37,
  },
  {
    ProductId: 4,
    ProductImage: Image4,
    ProductName: "Maggi Masala Noodles 560 g",
    NewPrice: 80.0,
    OldPrice: 130.0,
    Discount: 87,
  },
  {
    ProductId: 5,
    ProductImage: Image5,
    ProductName: "Dark Fantasy Cookie 275 g",
    NewPrice: 150.0,
    OldPrice: 300.0,
    Discount: 17,
  },
  {
    ProductId: 6,
    ProductImage: Image6,
    ProductName: "Unibic Fruit&Nut Cookies 500 g",
    NewPrice: 400.0,
    OldPrice: 609.0,
    Discount: 30,
  },
  {
    ProductId: 7,
    ProductImage: Image7,
    ProductName: "Good Life Toor Dal 2 kg",
    NewPrice: 79.0,
    OldPrice: 99.0,
    Discount: 50,
  },
  {
    ProductId: 8,
    ProductImage: Image8,
    ProductName: "Rice Bran Blended Oil 1L",
    NewPrice: 98.0,
    OldPrice: 120.0,
    Discount: 37,
  },
  {
    ProductId: 9,
    ProductImage: Image9,
    ProductName: "Fortune Sunlite Refined Sunflower Oil 1 L",
    NewPrice: 100.0,
    OldPrice: 169.0,
    Discount: 38,
  },
  {
    ProductId: 10,
    ProductImage: Image10,
    ProductName: "Good Life Refined Sunflower Oil 1 L",
    NewPrice: 189.0,
    OldPrice: 200.0,
    Discount: 70,
  },
];

const ProductCardCarousel = () => {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      >
        <ExpandCircleDownIcon
          sx={{
            color: "rgb(15, 60, 201,0.8)",
            transform: "rotate(-90deg)",
            mt: -5,
          }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          opacity: 100,
        }}
        onClick={onClick}
      >
        <ExpandCircleDownIcon
          sx={{
            color: "rgb(15, 60, 201,0.8)",
            transform: "rotate(90deg)",
            mt: -5,
          }}
        />
      </div>
    );
  }

  const settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
    <Box className="slider-container" sx={{ marginY: 3 }}>
      <div
        style={{
          width: "100%",
          display: display ? "block" : "none",
        }}
      >
        <Slider {...settings}>
          {carouselData.map((items, e) => (
            <>
              <Card
                elevation={0}
                sx={{
                  width: { xs: "100%", sm: 264 },
                  mb: 2,
                  display: "flex",
                  mr: "auto",
                  ml: "auto",
                  border: "none",
                }}
                key={items.ProductId}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "space-between",
                    width: "100%",
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
                        <Image src={items.ProductImage} alt="Tender Coconut" />
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
                    <FormControl sx={{ mt: 1.5, minWidth: "100%" }}>
                      <Select
                        sx={{
                          paddingY: 0,
                          "& .MuiInputBase-input": {
                            border: "none",
                            backgroundColor: "#f2f2f2",
                          },
                        }}
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
                    <Grid sx={{ columnGap: 0.5, mb: 2, mt: 0.5 }}>
                      <NewPrice>₹{items.NewPrice}</NewPrice>
                      <Grid sx={{ display: "flex", alignItems: 'center', columnGap: 1 }}>
                        <OldPrice>₹{items.OldPrice}</OldPrice>
                        <Typography sx={{fontSize: '13px', backgroundColor: '#e5f7ee' , padding: '1.5px 5px', borderRadius: '5px'}}>{items?.Discount}% OFF</Typography>
                      </Grid>
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
                            borderRadius: "18px",
                            width: "100%",
                            "&:hover": {
                              backgroundColor: "#cc0000",
                              color: "#ffffff",
                            },
                          }}
                          size="large"
                          variant="outlined"
                          color="error"
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
            </>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export default ProductCardCarousel;
