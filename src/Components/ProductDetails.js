import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import ProductImage from "../Pages/Assets/neem-leaves.png";
import Qualitylogo from "../Pages/Assets/quality.png";
import Timelogo from "../Pages/Assets/time.png";
import Freedelivery from "../Pages/Assets/freedelevery.png";
import Return from "../Pages/Assets/return.png";
import styled from "styled-components";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// Styled Components
const Images = styled.img`
  width: 90%;
`;

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: start;
  margin: 10px 0 10px 0;
`;

const MRP = styled.span`
  text-decoration-line: line-through;
`;

const Price = styled.p`
  font-size: 18px;
  text-align: start;
  margin: 5px 0 5px 0;
`;

const Discount = styled.p`
  color: #178207;
  text-align: start;
  margin: 5px 0 5px 0;
`;

const PackageSize = styled.p`
  font-size: 16px;
  font-weight: bolder;
  text-align: start;
`;

const Kilogram = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: start;
  margin: 0px;
`;

const PriceCard = styled.p`
  font-size: 16px;
  text-align: start;
  margin: 5px 0 5px 0;
`;

const KgSelect = styled.p`
  text-align: start;
  display: flex;
  align-items: center;
  margin: 0px;
  column-gap: 7px;
`;

const MRPCard = styled.span`
  text-decoration-line: line-through;
  font-size: 15px;
  color: #909090;
`;

const SaveAmt = styled.p`
  color: #178207;
  font-size: 15px;
  text-align: start;
  margin: 0px;
  background-color: #f1f8e6;
  padding: 3px;
  border-radius: 3px;
`;

const Heading = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Quality = styled.p`
  font-size: 17px;
  margin: 3px 0px 0px 0px;
  font-weight: 600;
`;

const Info = styled.p`
  font-size: 16px;
  margin: 0px;
  color: #a4a4a4;
`;

const CardImg = styled.img`
  width: 25%;
`;

const ProductInfo = styled.div`
  border: 2px solid;
  border-radius: 15px;
  border-color: #909090;
  padding: 15px;
`;

const ProInfoHead = styled.p`
  text-align: start;
  font-size: 17px;
  font-weight: 600;
`;

const ProInfo = styled.p`
  text-align: start;
  font-size: 15px;
`;

// ToggleButton Component
const ToggleButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  // background-color: ${(props) => (props.active ? "#dc3545" : "#007bff")};
  color: block;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:focus {
    outline: none;
  }
`;

const ProductDetails = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };

  const ProductStyle = {
    margin: "auto",
    border: {xs: 'none', sm: '1px solid #eeeeee'},
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          columnGap: { xs: 0, md: 4 },
        }}
      >
        <Grid
          xs={12}
          sm={4}
          md={2}
          lg={1}
          sx={{
            display: {xs: 'none', sm: 'flex'},
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Grid sx={{...ProductStyle, width:{sm: '40%', md: '60%', lg: '100%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
          <Grid sx={{...ProductStyle, width:{sm: '40%', md: '60%', lg: '100%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
          <Grid sx={{...ProductStyle, width:{sm: '40%', md: '60%', lg: '100%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
          <Grid sx={{...ProductStyle, width:{sm: '40%', md: '60%', lg: '100%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
        </Grid>
        <Grid xs={8} md={7} lg={5} sx={{ width: "70%", border:{sm: 'none', sm: '1px solid #eeeeee'} }}>
          <Images src={ProductImage} alt="" />
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={2}
          lg={1}
          sx={{
            display: {xs: 'flex', sm: 'none'},
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Grid sx={{...ProductStyle, width:{xs: '30%', sm: '40%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
          <Grid sx={{...ProductStyle, width:{xs: '30%', sm: '40%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
          <Grid sx={{...ProductStyle, width:{xs: '30%', sm: '40%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
          <Grid sx={{...ProductStyle, width:{xs: '30%', sm: '40%'}}}>
            <Images src={ProductImage} alt="" />
          </Grid>
        </Grid>
        <Grid xs={12} md={7} lg={5}>
          <Box>
            <Typography sx={{ textAlign: "start" }}>
              <a style={{ color: "#909090" }} href="#javascript">
                Fresho
              </a>
            </Typography>
            <Paragraph>Fresho Neem Leaves - Organically Grown, 50 g</Paragraph>
            <Typography sx={{ textAlign: "start", color: "#909090" }}>
              MRP:<MRP>$250</MRP>
            </Typography>
            <Price>Price:$200</Price>
            <Discount>
              You Save:$20% OFF{" "}
              <Typography sx={{ color: "#909090" }}>
                (inclusive of all taxes)
              </Typography>
            </Discount>
            <Grid container rowGap={2} columnGap={1}>
              <Grid xs={12} sm={6}>
                <Button
                  sx={{
                    width: "100%",
                    paddingY: 1.5,
                    backgroundColor: "#cc0000",
                    "&:hover": {
                      backgroundColor: "#cc0000",
                    },
                  }}
                  variant="contained"
                >
                  Add to basket
                </Button>
              </Grid>
              <Grid xs={12} sm={5}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    paddingY: 1.5,
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  <BookmarkBorderIcon />
                  Save for later
                </Button>
              </Grid>
            </Grid>
            <PackageSize>Pack sizes</PackageSize>
            <Box>
              <Card variant="outlined" sx={{ marginBottom: 1 }}>
                <Grid container sx={{ margin: 0.5 }}>
                  <Grid xs={6}>
                    <Kilogram>1 kg</Kilogram>
                  </Grid>
                  <Grid sx={6}>
                    <Box>
                      <PriceCard>$200</PriceCard>
                      <KgSelect>
                        <MRPCard>$250</MRPCard>
                        <SaveAmt>27% OFF</SaveAmt>
                      </KgSelect>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              <Card variant="outlined" sx={{ marginBottom: 1 }}>
                <Grid container sx={{ margin: 0.5 }}>
                  <Grid xs={6}>
                    <Kilogram>500 g</Kilogram>
                  </Grid>
                  <Grid sx={6}>
                    <Box>
                      <PriceCard>$100</PriceCard>
                      <KgSelect>
                        <MRPCard>$70</MRPCard>
                        <SaveAmt>27% OFF</SaveAmt>
                      </KgSelect>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              <Card variant="outlined" sx={{ marginBottom: 1 }}>
                <Grid container sx={{ margin: 0.5 }}>
                  <Grid xs={6}>
                    <Kilogram>250 g</Kilogram>
                  </Grid>
                  <Grid sx={6}>
                    <Box>
                      <PriceCard>$50</PriceCard>
                      <KgSelect>
                        <MRPCard>$40</MRPCard>
                        <SaveAmt>27% OFF</SaveAmt>
                      </KgSelect>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <hr
        style={{
          marginTop: "40px",
          borderStyle: "dashed",
          borderWidth: "1px",
          color: "#909090",
        }}
      />
      <Grid>
        <Heading>Why choose Bigbasket?</Heading>
        <Grid container spacing={2} marginY={5}>
          <Grid
            xs={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              variant="outlined"
              sx={{
                marginBottom: 1,
                backgroundColor: "#f7f7f7",
                border: "none",
                width: "90%",
              }}
            >
              <Grid sx={{ marginY: 2 }}>
                <CardImg src={Qualitylogo} alt="" />
                <Quality>Quality</Quality>
                <Info>You can trust</Info>
              </Grid>
            </Card>
          </Grid>
          <Grid
            xs={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              variant="outlined"
              sx={{
                marginBottom: 1,
                backgroundColor: "#f7f7f7",
                border: "none",
                width: "90%",
              }}
            >
              <Grid sx={{ marginY: 2 }}>
                <CardImg src={Timelogo} alt="" />
                <Quality>On time</Quality>
                <Info>Guarantee</Info>
              </Grid>
            </Card>
          </Grid>
          <Grid
            xs={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              variant="outlined"
              sx={{
                marginBottom: 1,
                backgroundColor: "#f7f7f7",
                border: "none",
                width: "90%",
              }}
            >
              <Grid sx={{ marginY: 2 }}>
                <CardImg src={Freedelivery} alt="" />
                <Quality>Free</Quality>
                <Info>Delivery</Info>
              </Grid>
            </Card>
          </Grid>
          <Grid
            xs={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              variant="outlined"
              sx={{
                marginBottom: 1,
                backgroundColor: "#f7f7f7",
                border: "none",
                width: "90%",
              }}
            >
              <Grid sx={{ marginY: 2 }}>
                <CardImg src={Return} alt="" />
                <Quality>Return Policy</Quality>
                <Info>No Question asked</Info>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <hr
        style={{
          borderStyle: "dashed",
          borderWidth: "1px",
          color: "#909090",
        }}
      />
      <Grid>
        <Paragraph>Fresho Neem Leaves - Organically Grown</Paragraph>
        <ProductInfo>
          <Box>
            <Grid container>
              <Grid xs={10}>
                <ProInfoHead>About the Product</ProInfoHead>
              </Grid>
              <Grid xs={2}>
                <ToggleButtonStyled active={isActive1} onClick={handleClick1}>
                  <FontAwesomeIcon icon={isActive1 ? faMinus : faPlus} />
                </ToggleButtonStyled>
              </Grid>
            </Grid>
            <ProInfo>
              {!isActive1 ? (
                "Neem is a normal herb that has many good looks benefits. Its extracts have been used in the Ayurvedic tradition for thousands of years for maintaining fitness and overall well-being."
              ) : (
                <>
                  Neem is a normal herb that has many good looks benefits. Its
                  extracts have been used in the Ayurvedic tradition for
                  thousands of years for maintaining fitness and overall
                  well-being. Neem leaves & flowers are measured safe to take
                  internally on a regular or daily basis. Product image shown is
                  for representation purpose only, the actually product may vary
                  based on season, produce & availability.
                </>
              )}
            </ProInfo>
          </Box>
          <hr
            style={{
              borderStyle: "dashed",
              borderWidth: "1px",
              color: "#909090",
            }}
          />
          <Box>
            <Grid container>
              <Grid xs={10}>
                <ProInfoHead>Benefits</ProInfoHead>
              </Grid>
              <Grid xs={2}>
                <ToggleButtonStyled active={isActive2} onClick={handleClick2}>
                  <FontAwesomeIcon icon={isActive2 ? faMinus : faPlus} />
                </ToggleButtonStyled>
              </Grid>
            </Grid>
            <ProInfo>
              <ul>
                {!isActive2 ? (
                  <li>
                    Neem leaf & flowers has antifungal and antibacterial
                    properties, making it effective in treating dandruff.
                  </li>
                ) : (
                  <>
                    <li>
                      Neem leaf & flowers has antifungal and antibacterial
                      properties, making it effective in treating dandruff.
                    </li>
                    <li>
                      It also relieves dryness and itching, strengthens hair and
                      promotes hair growth.
                    </li>
                    <li>
                      It also soothes irritation, prevents dryness and flaking.
                    </li>
                  </>
                )}
              </ul>
            </ProInfo>
          </Box>
          <hr
            style={{
              borderStyle: "dashed",
              borderWidth: "1px",
              color: "#909090",
            }}
          />
          <Box>
            <Grid container>
              <Grid xs={10}>
                <ProInfoHead>About the Product</ProInfoHead>
              </Grid>
              <Grid xs={2}>
                <ToggleButtonStyled active={isActive3} onClick={handleClick3}>
                  <FontAwesomeIcon icon={isActive3 ? faMinus : faPlus} />
                </ToggleButtonStyled>
              </Grid>
            </Grid>
            <ProInfo>
              {!isActive3 ? (
                <>
                  EAN Code: 30006410
                  <br />
                  Country of origin: India
                  <br />
                  Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd,
                  No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark:
                  Above HDFC Bank Bangalore, Karnataka 560071
                  <br />
                </>
              ) : (
                <>
                  EAN Code: 30006410
                  <br />
                  Country of origin: India
                  <br />
                  Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd,
                  No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark:
                  Above HDFC Bank Bangalore, Karnataka 560071
                  <br />
                  Best before __PSL__ days from delivery date
                  <br />
                  Disclaimer: The expiry date shown here is for indicative
                  purposes only. Please refer to the information provided on the
                  product package received at delivery for the actual expiry
                  date.
                  <br />
                  For Queries/Feedback/Complaints, Contact our Customer Care
                  Executive at: Phone: 1860 123 1000 | Address: Innovative
                  Retail Concepts Private Limited, Ranka Junction 4th Floor, Tin
                  Factory bus stop. KR Puram, Bangalore - 560016
                  Email:customerservice@bigbasket.com{" "}
                </>
              )}
            </ProInfo>
          </Box>
        </ProductInfo>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
