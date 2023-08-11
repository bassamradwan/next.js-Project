import { Select } from "antd";
import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  width: 100%;
`;
export const Result = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const MobileFilterButton = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    width: 35.46px;
    height: 35.46px;
  }
`;

export const StyledSelect = styled(Select)`
  width: 200px;
  @media (max-width: 768px) {
    width: 100px;
  }
`;
