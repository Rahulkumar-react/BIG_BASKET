import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { Box } from "@mui/material";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  // font-size: 2rem;
  // height: 80px;
  margin: -9px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  width: 280px;
  height: 100vh;
  border: 1px solid #eeeeee;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  /* Removed fixed positioning */
  margin-left: ${({ sidebar }) => (sidebar ? "250px" : "0")};
  transition: margin-left 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0; /* Initially set the width to zero */
    transition: width 0.3s; /* Add transition for smooth effect */
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Show scrollbar on hover */
  &:hover {
    &::-webkit-scrollbar {
      width: 6px; /* Width of the scrollbar thumb on hover */
    }
  }

  /* Hide the scrollbar track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 100%; /* Set width to 100% on smaller screens */
    margin-left: ${({ sidebar }) =>
      sidebar
        ? "0"
        : "-100%"}; /* Hide the sidebar by default on smaller screens */
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  // background: #eeeeee;
`;
const Heading = styled.p`
  font-weight: 666;
  font-size: 19px;
`;
const Container = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  border: 0.1px solid #f7f7f7;
  margin-bottom: 10px;
  border-radius: 3px;
`;
const SubHeading = styled.p`
  margin-left: 20px;
`;
const InnerContainer = styled.div`
  width: 80%;
`;

const Sidebar = () => {
  const category = {
    categories: ["Bakery, Cakes & Dairy", "Beauty & Hygiene"],
    categoryArray: [
      { category: "Dairy" },
      { category: "Bath & Hand Wash" },
      { category: "Feminine Hygiene" },
      { category: "Hair Care" },
    ],
  };
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>

            <Heading>Shop by Category</Heading>
            <Container>
              <InnerContainer>
                {category.categories.map((item, index) => (
                  <div key={`category-${index}`}>
                    <Heading>{item}</Heading>
                    {category.categoryArray.map((subItem, subIndex) => (
                      <SubHeading key={`subcategory-${subIndex}`}>
                        {subItem.category}
                      </SubHeading>
                    ))}
                  </div>
                ))}
              </InnerContainer>
            </Container>
            <Heading>Refined by</Heading>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
