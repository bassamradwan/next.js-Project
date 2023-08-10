import styled from "styled-components";
import { Select } from "antd";

export const MyOffersLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: 100%;
`;
export const MyOffersTitle = styled.h4`
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
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
