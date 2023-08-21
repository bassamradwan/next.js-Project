import { AutoComplete, Button, Input, Select, Tabs } from "antd";
import styled from "styled-components";
const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: 0 !important;
    
  }
  .ant-tabs-tab {
    border-radius: 0 !important;
    background-color: #fff !important;
    padding: 0 15px;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      color: #00c3b4;
    }
    &:focus {
      color: #00c3b4;
    }
    &:active {
      color: #00c3b4;
    }
  }
  .ant-tabs-ink-bar {
    background-color: #00c3b4;
  }
  .ant-tabs-tab:first-child {
    border-radius: 8px 0 0 0 !important;
  }
  //   second tab
  .ant-tabs-tab:nth-child(2) {
    border-radius: 0 8px 0 0 !important;
  }
  .ant-tabs-tab-active {
    border-bottom: 2px solid #00c3b4 !important;
  }
  @media screen and (max-width: 768px) {
  }
`;
const SearchWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const StyledInput = styled(Input)`
  border: none;
  border-inline-end: 1px solid #ccc;
  border-radius: 0px;
  padding: 10px;
  height: 100%;
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

const StyledSelect = styled(AutoComplete)`
  width: 100%;
  border-inline-end: 1px solid #ccc;
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
const SelectWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const StyledButton = styled(Button)`
  width: 20%;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 90%;
  }
`;
const FirstTab = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: #fff;
  gap: 10px;
  border-radius: 0px 0px 8px 8px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const SecondTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: #fff;
  gap: 10px;
  border-radius: 0px 0px 8px 8px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export {
  StyledTabs,
  SearchWrapper,
  StyledInput,
  StyledSelect,
  SelectWrapper,
  StyledButton,
  FirstTab,
  SecondTab,
  IconImage,
};
