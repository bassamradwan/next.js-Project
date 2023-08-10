import { Select } from "antd";
import { PaginationWrapper, Result, MobileFilterButton, StyledSelect } from "./StyledPagination";
import { Ad } from "@/hooks/useAds";

const ShowBy = ["Ascending", "Descending"];
const availablePages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
interface PaginationComponentProps {
  isMobileFilter?: boolean;
  handleShowFilter?: () => void;
  pagination?: any;
  ads?: Ad[];
}
const PaginationComponet = (props: PaginationComponentProps) => {
  return (
    <PaginationWrapper>
      <Result>Show 1 to 10 of 1000 results</Result>
      {/* select for show by... with default and 
          desc,asc ..
       */}
      <StyledSelect
        showSearch
        optionFilterProp="children"
        defaultValue="default"
        filterOption={(input: string, option: any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {ShowBy.map((showBy, index) => (
          <Select.Option key={index} value={showBy}>
            {showBy}
          </Select.Option>
        ))}
      </StyledSelect>

      {/* select for pages i.e page 1, page2 */}
      <StyledSelect
        showSearch
        optionFilterProp="children"
        defaultValue="page-1"
        filterOption={(input: string, option: any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {availablePages.map((page, index) => (
          <Select.Option key={index} value={page}>
            page-{page}
          </Select.Option>
        ))}
      </StyledSelect>
      <MobileFilterButton
        src="filter.png"
        onClick={() => {
          console.log("clicked");
          console.log("moblile filter", props.isMobileFilter);
          props.handleShowFilter && props.handleShowFilter();
        }}
      />
    </PaginationWrapper>
  );
};

export default PaginationComponet;
