import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 10px;
  text-decoration: none;
  font-size: 18px;
  background: #eeeeee;
  border-radius: 4px;
  margin:0px 0px 10px 0px;

  // &:hover {
  //   background: #252831;
  //   border-left: 4px solid #632ce4;
  //   cursor: pointer;
  // }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: black;
`;

const DropdownLink = styled(Link)`
  background: #f7f7f7;
  height: 30px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  padding-bottom: 10px ;


  // &:hover {
  //   background: #632ce4;
  //   cursor: pointer;
  // }
`;

const IconWrapper = styled.div`
  svg {
    color: #ff0000; 

  }
`;
const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  height: 23px;
  width: 23px;
  appearance: none;
  border: 3px solid #c4c4c4;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(true);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink onClick={() => item.subNav && showSubnav()}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          <IconWrapper>
            {item.subNav ? (subnav ? item.iconOpened : item.iconClosed) : null}
          </IconWrapper>
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((subItem, index) => {
          return (
            <>
              <DropdownLink to={subItem.path} key={index} >
              <StyledCheckboxInput />
                <SidebarLabel>{subItem.title}</SidebarLabel>
              </DropdownLink>
            </>
          );
        })}
    </>
  );
};

export default SubMenu;
