import { useState } from "react";
import { Content } from "@/Styles/styled.general";
import { Select } from "antd";
import { StyledSelect, MyFavouriteLine, MyFavouriteHeading } from "../../Profile/styles/styled.Favourites";
import AdsListComponent from "@/components/AdsList/General";

const filterBy = ["latest", "oldest"];
const FavouratesComponent = () => {
  const [filter, setFilter] = useState("latest");
  const onChange = (value: string | unknown) => {
    setFilter(value as string);
  };
  return (
    <Content padding="20">
      {/* filter select [latest, oldest ] antd , And Heading */}
      <MyFavouriteLine>
        <MyFavouriteHeading>My Favourites</MyFavouriteHeading>
        {/* antd select with filterBy*/}
        <StyledSelect
          showSearch
          optionFilterProp="children"
          defaultValue={filter}
          onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input: string, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {filterBy.map((filter, index) => (
            <Select.Option key={index} value={filter}>
              {filter}
            </Select.Option>
          ))}
        </StyledSelect>
      </MyFavouriteLine>

      {/* List of Ads */}
      <AdsListComponent $columnsCount={1} favourate={true} />
    </Content>
  );
};
export default FavouratesComponent;
