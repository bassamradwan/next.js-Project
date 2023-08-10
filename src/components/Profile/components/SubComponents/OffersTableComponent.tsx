import React, { useState } from "react";
import { Table, Tag } from "antd";
import useOffers from "../../../../hooks/useOffer";
import {
  AdLine,
  AdTitle,
  AdWrapper,
  DateIcon,
  DateLine,
  DateText,
  LocationIcon,
  LocationLine,
  LocationText,
  Type,
} from "../../styles/styled.offersTable";

const OffersTableComponent = () => {
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | undefined>(undefined);
  const [sortedColumn, setSortedColumn] = useState<string | undefined>(undefined);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const id = +location.pathname.split("/")[2];
  const { offers } = useOffers(id);
console.log(offers);

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setSortOrder(sorter.order);
    setSortedColumn(sorter.columnKey);
    setFilters(filters);
  };

  const columns = [
    {
      title: "Ad Title",
      dataIndex: "adTitle",
      key: "adTitle",
      sorter: (a: any, b: any) => a.adTitle.localeCompare(b.adTitle),
      filteredValue: filters.adTitle || null,
      render: (text: string, record: any) => (
        <div>
          <AdWrapper>
            <AdTitle>{record.adTitle}</AdTitle>
            <Type>{record.description}</Type>
            <AdLine>
              <LocationLine>
                <LocationIcon />
                <LocationText>{record.city}</LocationText>
              </LocationLine>
              <DateLine>
                <DateIcon />
                <DateText>{record.created_at}</DateText>
                <h1>{record.created_at}</h1>
              </DateLine>
            </AdLine>
          </AdWrapper>
        </div>
      ),
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: (a: any, b: any) => a.cost - b.cost,
      sortOrder: sortedColumn === "cost" && sortOrder,
      filters: [
        { text: "32", value: "32" },
        { text: "42", value: "42" },
      ],
      filteredValue: filters.cost || null,
      render: (cost: number) => `${cost}`
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "";
        switch (status) {
          case "pending":
            color = "orange";
            break;
          case "completed":
            color = "green";
            break;
          default:
            color = "blue";
            break;
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
      sortOrder: sortedColumn === "status" && sortOrder,
      filters: [
        { text: "Pending", value: "pending" },
        { text: "Completed", value: "completed" },
      ],
      filteredValue: filters.status || null,
    },
  ];

  const data = offers?.map(item => ({
    key: item.id.toString(),
    adTitle: item.order.name,
    description: item.order.description,
    city: item.order.city.en,
    created_at: item.created_at,
    cost: item.order.expected_cost,
    status: item.status,
  }));

  console.log(data);
  
  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={handleTableChange} pagination={false} />
    </div>
  );
};

export default OffersTableComponent;
