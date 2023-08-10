import { Content } from "@/Styles/styled.general";
import { Select } from "antd";
import { StyledSelect, MyOffersLine, MyOffersTitle, TableWrapper } from "../../Profile/styles/styled.Offers";
import { useState } from "react";
import OrderTableComponent from "./SubComponents/OrderTableComponent";

const filterBy = ["latest", "oldest"];
const MyOrdesComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");

  const onChange = (value: string | unknown) => {
    console.log(`selected ${value}`);
    setSelectedFilter(value as string);
  };

  return (
    <Content padding="20">
      <MyOffersLine>
        <MyOffersTitle>My Orders</MyOffersTitle>

        <StyledSelect
          showSearch
          optionFilterProp="children"
          defaultValue={selectedFilter}
          onChange={onChange}
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
        <OrderTableComponent />
      </TableWrapper>
    </Content>
  );
};
export default MyOrdesComponent;
