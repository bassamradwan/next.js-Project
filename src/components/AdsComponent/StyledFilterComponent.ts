import { AutoComplete, Form, Input } from "antd";
import styled from "styled-components";

interface FilterWrapperProps {
  isMobileFilter: boolean;
}
export const FilterWrapper = styled.form<FilterWrapperProps>`

    display: flex;
    flex-direction: column;
    row-gap: 20px;
    border-radius: 8px;
    background: #F8F8F8;
    padding: 39.383px 26.5px;
    @media (max-width: 768px) {
      display: ${props => (props.isMobileFilter ? "flex" : "none")};
      position: absolute;
    background: white;
    z-index: 1;
    right: 20px;
    top: 41px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    }

}
`;

export const PriceRangeHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
`;
export const ExperienceYear = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;
export const StyledInput = styled(Input)`
  border: none;
  border-radius: 0px;
  padding: 10px;
  .ant-input {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    &::placeholder {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
  }
`;

export const StyledSelect = styled(AutoComplete)`
  width: 100%;
  padding: 0 5px;
  .ant-select-selector {
    border: none !important;
    padding: 0 5px !important;
  }
  // when active remove border
  .ant-select-selector:focus {
    border: none !important;
    box-shadow: none !important;
  }
  @media screen and (max-width: 768px) {
    border: none;
  }
`;
export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const IconImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
