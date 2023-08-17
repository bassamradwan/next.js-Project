import { Content } from "@/Styles/styled.general";
import { Select } from "antd";
import { StyledSelect, MyOffersLine, MyOffersTitle, TableWrapper } from "../styles/styled.Offers";
import { useState } from "react";
import OffersTableComponent from "./SubComponents/OffersTableComponent";

const filterBy = ["latest", "oldest"];
const MyOffersComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");

  const onChange = (value: string | unknown) => {
    setSelectedFilter(value as string);
  };
  return (
    <Content >
      <MyOffersLine>
        <MyOffersTitle>My Offers</MyOffersTitle>

        <StyledSelect
          showSearch
          optionFilterProp="children"
          defaultValue={selectedFilter}
          onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input: string, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {filterBy.map((status, index) => (
            <Select.Option key={index} value={status}>
              {status}
            </Select.Option>
          ))}
        </StyledSelect>
      </MyOffersLine>
      <TableWrapper>
        <OffersTableComponent />
      </TableWrapper>
    </Content>
  );
};
export default MyOffersComponent;
