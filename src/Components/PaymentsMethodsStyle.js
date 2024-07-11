
import styled from "styled-components";

export const Link = styled.a`
  color: black;
`;
export const Mobiklinka = styled.a`
  color: red;
  font-weight: 500;
  text-decoration: none;
  padding-left: 10px;
`;
export const TabHeading = styled.span`
  color: black;
  text-transform: none;
  text-align: start;
`;
export const TabHeadingbody = styled.span`
  color: #00000080;
  fontsize: 8px;
`;
export const IconBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "10%",
  padding: "0px 15px 0px 0px",
};

export const IconBoxStyleMobik = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "17%",
  padding: "0px 15px 0px 0px",
};

export const ImgIconStyle = styled.img`
  width: 100%;
  height: auto;
  aligncontent: center;
`;
export const AccordionSummaryHeading = styled.span`
  text-align: justify;
  font-size: 14px;
  color: #222222;
  padding: 0px 50px 0px 0px;
`;
export const MobikAccordionSummaryHeading = {
  textAlign: "justify",
  fontSize: "14px",
  color: "#222222",
  paddingLeft: "0px",
};
export const AccordionSummaryBody = styled.span`
  text-align: justify;
  color: green;
  font-size: 13px;
`;
export const MobikAccordionSummary = {
  textAlign: "justify",
  color: "green",
  fontSize: "13px",
};

export const AccordionHover = {
  border: "1px solid #dfdfdf",
  marginTop: "20px",
  "&:hover": {
    boxShadow:
      "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)",
  },
};

export const Tabverticalstyle = {
  padding: "26px 26px 26px 16px",
  textAlign: "left",
  alignItems: "start",
  backgroundColor: "#e4e4e4",
  "&.Mui-selected": {
    backgroundColor: "white", // Selected tab background color
    color: "#202020", //selected tab moveing color or Hover tab text color
  },
};