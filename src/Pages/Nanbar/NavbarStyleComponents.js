import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import _default from "../../themes/default";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  // height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
export const NavLogo = styled(LinkR)`
  width: 18%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;
export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
  padding: 0 6px 0px -40px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 550px;
    height: 40px;
    border-radius: 5px;
    padding-left: 40px; /* Adjust padding for icon */
  }

  svg {
    position: absolute;
    left: 10px; /* Adjust icon position */
    color: gray;
  }
`;
export const Img = styled.img`
  //   position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  //   border-radius: 50%;
  //   border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
export const Logaion = styled.div`
  //   background-color: '#eeeeee';
  border-radius: 5px;
  width: 17%;
  height: 7vh;
`;
export const Texticon = styled.p`
  color: #606060; /* Set text color */
  font-size: 13px; /* Set font size */
  font-weight: bold; /* Set font weight (normal, bold, etc.) */
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  margin-top: 0px; /* Set margin-top */
  padding: 8px;
  cursor: pointer;
`;
export const Logaionbutton = styled.div`
  //   background-color: '#eeeeee';
  border-radius: 5px;
  width: 13%;
  height: 7vh;
  cursor: pointer;
`;
export const Loginbutton = styled.p`
  color:white; /* Set text color */
  font-size: 13px; /* Set font size */
  font-weight: bold; /* Set font weight (normal, bold, etc.) */
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 0px; /* Set margin-top */
  padding: 13px; /
  cursor: pointer;
`;
export const Deleteicon = styled.div`
  //   background-color: '#eeeeee';
  border-radius: 5px;
  // width: 5%;
  // height: 6vh;
  padding: 8px 8px 4px 8px;
`;
// export const NavLink = styled.a`
//   color:black;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   &:hover : {
//     background-color: red;
//   }

//   &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
//   }
// `;
export const NavLink = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: 0 0.5em;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, #F4885A 0%, #FFFFFF9E 69%);
    z-index: -1;
    transition: transform 1s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
export const NavButton = styled.button`
  width: 100%;
  height: 6vh;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;
export const Loginimage = styled.div`
  //   background-color: '#eeeeee';
  gap: 10px;
  border-radius: 5px;
  width: 18%;
  // height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Boximage = styled.div`
  width: 49%;
  height:4vh;
  display: flex;
  cursor: pointer;
`;
export const FilterNav = styled.div`
  text-align: start;
`;
export const ProductCounts = styled.p`
font-size: 22px;
color: #a4a4a4;
font-weight: lighter;
margin-bottom: 15px;
`;

export const FilterButton = styled.div`
display: flex;
justify-content: space-between;
`;

export const Grid = styled.div`
    text-align: start;
`;
export const Choose = styled.p`
  font-size: 14px;
  font-weight: lighter;
  text-align: center;
`;

export const ImageLogin = styled.img`
  width: 20%;
`;

export const ImageName = styled.p`
  font-size: 10px;
`;

export const LoginCointaner = styled.div`
  text-align: start;
`;

export const LoginHeading = styled.p`
  font-size: 18px;
  text-align: start;
  font-weight: 600;
  margin: 10px 0px 0px 0px;
  color: white;
`;

export const Otp = styled.p`
  font-size: 12px;
  text-align: start;
  margin: 0px 0px 40px 0px;
  text-decoration: underline;
  text-decoration-color: #ff8800;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  color: white;
`;

export const Policy = styled.p`
  font-size: 12px;
  text-align: center;
  // color: #70705e;
  color: white;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const SocialMedia = styled.div`
    display: flex;
    
`

export const SocialTitle = styled.p`
    font-size: 10px;
    text-align: center;
`

export const SocialImg = styled.img`
    width: 100%;
`