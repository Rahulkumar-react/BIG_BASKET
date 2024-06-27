import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import veg from "../Pages/Assets/veg-placeholder.png";
import fruits from "../Pages/Assets/fruits-vegetables.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Footer } from "./Footer";

const ViewMore = () => {
  return (
    <Box sx={{ marginY: 3 }}>
      <Container maxWidth="lg" sx={{marginBottom: 3}}>
        <Box sx={{ marginBottom: 4, textAlign: "center" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            You may like to view more in
          </Typography>
          <Grid
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              paddingX: 1.5,
              paddingY: 0.8,
              borderRadius: "18px",
              marginY: 2,
            }}
          >
            <Typography>COUNTRY OF ORIGIN : India</Typography>
            <NavigateNextIcon fontSize="small" />
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: 4,
            border: "1px solid #dddddd",
            paddingY: 2,
            borderRadius: "8px",
            backgroundColor: "#f7f7f7",
          }}
        >
          <Grid container sx={{ justifyContent: "space-around" }}>
            <Grid xs={12} md={5.5}>
              <Card sx={{ padding: 2 }}>
                <Grid container>
                  <Grid xs={3}>
                    <img style={{ width: "80%" }} src={veg} alt="" />
                  </Grid>
                  <Grid xs={6} sx={{ marginY: "auto" }}>
                    <Typography sx={{ textWrap: "nowrap", marginBottom: 1 }}>
                      View More Products From Fresho!
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#202020",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#202020",
                        },
                      }}
                    >
                      View All
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12} md={5.5}>
              <Card sx={{ padding: 2 }}>
                <Grid container>
                  <Grid xs={3}>
                    <img style={{ width: "80%" }} src={fruits} alt="" />
                  </Grid>
                  <Grid xs={6} sx={{ marginY: "auto" }}>
                    <Typography sx={{ textWrap: "nowrap", marginBottom: 1 }}>
                      View More Products From Other Flowers
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#202020",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#202020",
                        },
                      }}
                    >
                      View All
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            More Information
          </Typography>
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "17px" }}>
              Fruits & Vegetables
            </Typography>
            <NavigateNextIcon fontSize="small" />
            <Typography sx={{ fontSize: "17px" }}>
              Flower Bouquets, Bunches
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", columnGap: 1 }}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#404040",
                "&:hover": {
                  color: "#5e9400",
                },
              }}
            >
              Bouquets
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>|</Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#404040",
                "&:hover": {
                  color: "#5e9400",
                },
              }}
            >
              Marigold
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>|</Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#404040",
                "&:hover": {
                  color: "#5e9400",
                },
              }}
            >
              Other Flowers
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>|</Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#404040",
                "&:hover": {
                  color: "#5e9400",
                },
              }}
            >
              Roses
            </Typography>
          </Grid>
          <Typography sx={{ fontSize: "17px", marginTop: 2 }}>
            Brands
          </Typography>
          <Grid sx={{ display: "flex", columnGap: 1 }}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#404040",
                "&:hover": {
                  color: "#5e9400",
                },
              }}
            >
              fresho!
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>|</Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#404040",
                "&:hover": {
                  color: "#5e9400",
                },
              }}
            >
              fresho! Other Flowers
            </Typography>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ViewMore;
