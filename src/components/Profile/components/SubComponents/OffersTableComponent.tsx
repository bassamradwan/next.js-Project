import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Table, Tag } from "antd";
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
import useUser from "@/hooks/useUser";
import { Id } from "@/types";
import { useRouter } from "next/router";

const OffersTableComponent = () => {
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | undefined>(undefined);
  const [sortedColumn, setSortedColumn] = useState<string | undefined>(undefined);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});
  const route = useRouter();
  const userId = useMemo(() => route.query.id, [route.query.id]);
  const { offers, getUserOffers } = useUser();

  const handleTableChange = useCallback((pagination: any, filters: any, sorter: any) => {
    setSortOrder(sorter.order);
    setSortedColumn(sorter.columnKey);
    setFilters(filters);
  }, []);

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
      sortOrder: sortedColumn === "cost" ? sortOrder : undefined,
      filters: [
        { text: "32", value: "32" },
        { text: "42", value: "42" },
      ],
      filteredValue: filters.cost || null,
      render: (cost: number) => `${cost}`,
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
      sortOrder: sortedColumn === "status" ? sortOrder : undefined,
      filters: [
        { text: "Pending", value: "pending" },
        { text: "Completed", value: "completed" },
      ],
      filteredValue: filters.status || null,
    },
  ];

  const data = useMemo(() => {
    return offers?.map(item => ({
      key: item.id.toString(),
      adTitle: item.order?.name,
      description: item.order?.description,
      city: item.order?.city?.en,
      created_at: item?.order.created_at,
      cost: item.order?.expected_cost,
      status: item?.status,
    }));
  }, [offers]);

  useEffect(() => {
    try {
      if (userId) {
        getUserOffers(userId as Id);
      }
    } catch (error) {}
  }, [getUserOffers, userId]);

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={handleTableChange} pagination={false} />
    </div>
  );
};

export default OffersTableComponent;
