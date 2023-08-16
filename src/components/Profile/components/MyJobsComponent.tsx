import { Content } from "@/Styles/styled.general";
import { Select } from "antd";
import { StyledSelect, MyJobsLine, MyJobHeading } from "../styles/styled.MyJobs";
import ProfileAd from "@/components/AdsList/Profile";
import { useState } from "react";

const jobStatus = ["Completed", "In Progress", "cancelled"];

const MyJobsComponent = () => {
  const [selectedStatus, setSelectedStatus] = useState("Completed");
  const onChange = (value: string | unknown) => {
    setSelectedStatus(value as string);
  };
  return (
    <Content padding="20">
      {/* filter select [completed,in progress,Done] antd , And Heading */}
      <MyJobsLine>
        <MyJobHeading>My Jobs</MyJobHeading>
        {/* antd select with jobStatus*/}
        <StyledSelect
          showSearch
          optionFilterProp="children"
          defaultValue={selectedStatus}
          onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input: string, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {jobStatus.map((status, index) => (
            <Select.Option key={index} value={status}>
              {status}
            </Select.Option>
          ))}
        </StyledSelect>
      </MyJobsLine>
      {/* List of Ads */}
      <ProfileAd $columnsCount={1} filterBy={selectedStatus} />
    </Content>
  );
};
export default MyJobsComponent;
