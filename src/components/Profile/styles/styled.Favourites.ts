import styled from "styled-components";
import { Select } from "antd";

export const MyFavouriteLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: 100%;
`;
export const MyFavouriteHeading = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledSelect = styled(Select)`
  width: 200px;
  @media (max-width: 768px) {
    width: 100px;
  }

  // .ant-select-selector {
  //   border-radius: 5px;
  //   border-color: #d9d9d9;
  // }

  // .ant-select-selection-placeholder {
  //   color: #bfbfbf;
  // }

  // .ant-select-arrow {
  //   color: #bfbfbf;
  // }
`;
