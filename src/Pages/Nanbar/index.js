import React from "react";
import { FaBars } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import Delete from "../Assets/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiNENjMzMzMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZ.svg";
import Logo from "../Assets/logo.png";
import Next from "../Assets/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iZmFsc2UiIGNsYXNzPSJjdXJzb3ItcG9pbnRlciI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im05L.svg";
import Smart from "../Assets/Smart_basket-250124-1.png";
import Offer from "../Assets/hp_cmc_m_offer_28_220921_all.png";
import {
  Boximage,
  Deleteicon,
  Img,
  Logaion,
  Logaionbutton,
  Loginbutton,
  Loginimage,
  MobileIcon,
  Nav,
  NavButton,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  SearchContainer,
  Texticon,
} from "./NavbarStyleComponents";
import Sidebar from "../../Components/Sidebar";
import { Container } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
          <NavLogo>
            <Img
              src={Logo}
              style={{ height: "50%", width: "60%" }}
              alt="hero-image"
            />
          </NavLogo>
          <NavItems>
            <SearchContainer>
              <SearchIcon />
              <input type="text" placeholder="Search for Products..." />
            </SearchContainer>
            <Logaion style={{ background: "#eeeeee" }}>
              <Texticon>
                Get it in 2 hrs
                <br />
                600032,Chennai
              </Texticon>
            </Logaion>
            <Logaionbutton style={{ background: "#202020" }}>
              <Loginbutton>Login/SingUp</Loginbutton>
            </Logaionbutton>
            <Deleteicon style={{ background: "#fae6e6" }}>
              <Img
                style={{ height: "38px", width: "38px", padding: "6px" }}
                src={Delete}
                alt="Delete-image"
              />
            </Deleteicon>
          </NavItems>
        </NavbarContainer>
      </Nav>

      <Nav style={{ boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}>
        <NavbarContainer>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
          <NavLogo>
            <NavButton style={{ background: "#476F00" }}>
              Shop by<b style={{ fontWeight: "bold" }}> Category</b>
            </NavButton>
          </NavLogo>
          <NavItems>
            <NavLink>Exotic Fruits & Vegg</NavLink>
            <NavLink />
            <NavLink>Tea</NavLink>
            <NavLink />
            <NavLink>Ghee</NavLink>
            <NavLink />
            <NavLink>Nandini</NavLink>
            <NavLink>
              {" "}
              <Img
                style={{ height: "20px", width: "20px", padding: "6px" }}
                src={Next}
                alt="Delete-image"
              />
            </NavLink>
          </NavItems>
          <Loginimage>
            <Boximage>
              <Img src={Smart} />
            </Boximage>
            <Boximage>
              <Img src={Offer} />
            </Boximage>
          </Loginimage>
        </NavbarContainer>
      </Nav>
      {/* <Container > */}
        {/* <NavbarContainer> */}
          
        {/* </NavbarContainer> */}
      {/* </Container > */}
    </>
  );
};

export default Navbar;
