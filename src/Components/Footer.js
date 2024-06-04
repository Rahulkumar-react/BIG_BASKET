import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from "react-mobile-app-button";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import fullLogo from "../Pages/Assets/Bigbasket.com_idoZy0ORE2_5.png";
import insta from "../Pages/Assets/icons8-instagram-48.png";
import twitterx from "../Pages/Assets/icons8-twitterx-48.png";
import yt from "../Pages/Assets/icons8-youtube-48.png";
import fb from "../Pages/Assets/icons8-facebook-48.png";
import PlayStore from "../Pages/Assets/Google-Play.png";
import { borderColor, fontSize } from "@mui/system";

const FooterTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 8px;
  color: #dddddd;
  font-size: 14px;
  font-family: ProximaNova, Helvetica, Arial, sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterSection = ({ title, links }) => (
  <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
    <FooterTitle style={{ color: "#FFFF", fontSize: "14px" }}>
      {title}
    </FooterTitle>
    {links.map((link, index) => (
      <FooterTitle key={index}>
        <a href="#" style={{ color: "#DDDDDD", textDecoration: "none", textWrap: 'nowrap' }}>
          {link}
        </a>
      </FooterTitle>
    ))}
  </Grid>
);

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ffff;
    color: black;
  }
`;

const socialIcons = [
  { icon: <FacebookIcon />, alt: "Facebook", img: fb },
  { icon: <InstagramIcon />, alt: "Instagram", img: insta },
  { icon: <XIcon />, alt: "TwitterX", img: twitterx },
  { icon: <PinterestIcon />, alt: "Pinterest", img: yt },
];

export const Footer = () => {
  const APKUrl = "##";
  const iOSUrl = "##";

  const companyLinks = [
    "About Us",
    "Become A bigbasket Rider",
    "In News",
    "Green bigbasket",
    "Privacy Policy",
    "Affiliate",
    "Terms and Conditions",
    "Careers At bigbasket",
    "bb Instant",
    "bb Daily",
    "bb Blog",
    "bbnow",
  ];

  const helpLinks = [
    "FAQs",
    "Contact Us",
    "bb Wallet FAQs",
    "bb Wallet T&Cs",
    "Vendor Connect",
  ];

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          padding: "50px 0px 50px 0px",
          display: { xs: "none", md: "block" },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              textAlign: "left",
              color: "white",
            }}
          >
            <Grid item xs={12} sm={12} md={3}>
              <FooterSection title="Bigbasket" links={companyLinks} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <FooterSection title="Help" links={helpLinks} />
            </Grid>

            <Grid item xs={12} sm={12} md={5} sx={{ paddingRight: "15px" }}>
              <img
                src={fullLogo}
                alt="Bigbasket Logo"
                style={{ width: "156px", height: "56px", marginBottom: "20px" }}
              />
              <Box sx={{ marginBottom: "24px" }}>
                <ButtonsContainer>
                  <GooglePlayButton
                    // url={APKUrl}
                    theme="dark"
                      
                  />
                  <AppStoreButton
                    url={iOSUrl}
                    theme="dark"
                    style={{ borderColor: "#DDDDDD" }}
                  />
                </ButtonsContainer>
              </Box>
              <Grid container sx={{ gap: "15px", marginBottom: "24px" }}>
                {socialIcons.map((social, index) => (
                  <SocialIcon href="#" key={index}>
                    {React.cloneElement(social.icon, {
                      sx: { fontSize: "20px" },
                    })}
                  </SocialIcon>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <hr
            style={{ borderStyle: "dashed", color: "white", borderWidth: 1 }}
          />
        </Container>
      </Box>

      {/* <Box sx={{ fontSize: "14px", display: { xs: "block", md: "none" } }}>
        <Box sx={{ backgroundColor: "#eeeeee", paddingBottom: "10px" }}>
          <FooterTitle style={{ color: "#8F8F8F", padding: "16px" }}>
            - Thats all folks -
          </FooterTitle>
          <Box sx={{ backgroundColor: "#455a64", paddingBottom: "10px" }}>
            <Box sx={{ padding: "14px" }}>
              <FooterTitle style={{ fontSize: "14px" }}>
                Shopping at your Fingertips! Download the app
              </FooterTitle>
              <ButtonsContainer>
                <GooglePlayButton
                  url={APKUrl}
                  theme="dark"
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    marginBottom: "10px",
                  }}
                />
                <AppStoreButton
                  url={iOSUrl}
                  theme="light"
                  style={{ backgroundColor: "white", borderColor: "white" }}
                />
              </ButtonsContainer>
            </Box>
          </Box>
          <Box sx={{ padding: "12px", backgroundColor: "#ffff" }}>
            <FooterTitle>Get in touch with us</FooterTitle>
            {socialIcons.map((social, index) => (
              <a href="#" key={index}>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src={social.img}
                  alt={social.alt}
                />
              </a>
            ))}
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};
