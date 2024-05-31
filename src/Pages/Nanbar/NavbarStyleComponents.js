import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import _default from "../../themes/default";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  // z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
export const NavLogo = styled(LinkR)`
  width: 20%;
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
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 6vh;
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
  padding: 8px; /
  cursor: pointer;
`;
export const Logaionbutton = styled.div`
  //   background-color: '#eeeeee';
  border-radius: 5px;
  width: 13%;
  height: 6vh;
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
  width: 5%;
  height: 6vh;
`;
export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  //   font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
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
`;
export const Loginimage = styled.div`
  //   background-color: '#eeeeee';
  border-radius: 5px;
  width: 18%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Boximage = styled.div`
  width: 49%;
  height:4vh;
  display: flex;
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