import styled from "styled-components";
import _default from "../../themes/default";
import { InputBase } from "@mui/material";

export const CardContents = styled.div`
  padding: 5px 10px 5px 10px;
`;
export const ImageBody = styled.div`
  width: 220px;
  height: 250px;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 15px;
`;

export const Discounts = styled.p`
  position: absolute;
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  background-color: #476f00;
  color: #ffffff;
  padding: 7px 17px;
  border-radius: 8px 0px 8px 0px;
  margin: 0px;
  left: 0%;
`;

export const Sponsored = styled.p`
  background-color: #eeeeee;
  margin: 10px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: inline-block;
  border-radius: 18px;
`;
export const Category = styled.p`
  text-align: start;
  margin: 0px;
  font-size: 16px;
  color: #a8a1a1;
`;
export const ProductName = styled.p`
  font-size: 16px;
  text-align: start;
  margin: 5px 0px 2px 0px;
`;
export const Rating = styled.p`
  background-color: #e4f1cc;
  margin: 0px 0px 0px 0px;
  display: flex;
  padding: 0px 2px 0px 3px;
  border-radius: 10px;
`;
export const RatingCounts = styled.p`
  font-size: 12px;
  color: #a8a1a1;
  margin: 0px 0px 0px 0px;
`;

export const NewPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0px 0px 0px 0px;
`;
export const OldPrice = styled.p`
  text-decoration-line: line-through;
  margin: 2px 0px 0px 0px;
  font-size: 14px;
  color: #a8a1a1;
  font-weight: lighter;
`;

export const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "8px",
    border: "1px solid #ced4da",
    borderRadius: "4px",
  },
}));

export const Offer = styled.div`
  margin: 20px 0px 20px 0px;
  position: relative;
  text-align: start;
`;

export const BackImage = styled.img`
  height: 48vh;
  width: 100%;
`;
export const PersentageImage = styled.img`
  width: 17%;
  padding-left: 12px;
`;

export const OfferContent = styled.div`
  text-align: start;
  position: absolute;
  top: -20px;
`;
export const OfferHead = styled.div`
  background-color: #590098;
  width: 85%;
  border-radius: 0px 18px 18px 0px;
`;

export const OfferTitle = styled.p`
  color: #ffffff;
  padding-bottom: 2px;
  padding-left: 12px;
  margin-bottom: 8px;
`;
export const OfferDiscount = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding-left: 12px;
  margin: 0px 0px 0px 0px;
`;
export const OffDisDetails = styled.p`
  font-size: 16px;
  width: 90%;
  padding-left: 12px;
  margin: 8px 0px 10px 0px;
`;
export const OfferPrice = styled.span`
  font-size: 17px;
  font-weight: 700;
`;