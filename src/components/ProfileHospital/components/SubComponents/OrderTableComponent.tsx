import React, { useState } from "react";
import { Button, Table, Tag } from "antd";
import { DateTimeFormatOptions } from "next-intl";

import {
  AdLine,
  AdTitle,
  AdWrapper, CursorPointer,
  DateIcon,
  DateLine,
  DateText,
  LocationIcon,
  LocationLine,
  LocationText,
  Type
} from "../../../Profile/styles/styled.offersTable";
import { Id } from "@/types";
import { toast } from "react-toastify";
import useOrders from "@/hooks/useOrders";
import { useRouter } from "next/router";

const OrderTableComponent = () => {
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | undefined>(undefined);
  const [sortedColumn, setSortedColumn] = useState<string | undefined>(undefined);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const router = useRouter();

  const { orders, remove } = useOrders();

  // Format Date
  function formatDate(dateString: string) {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  }

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
      sortOrder: sortedColumn === "adTitle" ? sortOrder : undefined,
      filters: [
        { text: "John Brown", value: "John Brown" },
        { text: "Jim Green", value: "Jim Green" },
        { text: "Joe Black", value: "Joe Black" },
      ],
      filteredValue: filters.adTitle || null,

      render: (text: string, record: any) => (
        <CursorPointer
          key={record.key}
          onClick={() => {
            router.push(`/orders/${record.key}`);
          }}
        >
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
        </CursorPointer>
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
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "";
        switch (status) {
          case "Pending":
            color = "orange";
            break;
          case "Accepted":
            color = "red";
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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const Delete = ({ id }: { id: Id }) => {
    const onDelete = async () => {
      try {
        await remove(id);
        toast.success("Order deleted successfully");
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    return <Button onClick={onDelete}>Delete</Button>;
  };

  const data = orders?.map(item => ({
    key: item.id.toString(),
    adTitle: item.name,
    description: item.description,
    city: item.city.en,
    created_at: formatDate(item.created_at),
    cost: item.expected_cost,
    status: item.status,
    action: <Delete id={item.id} />,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={handleTableChange} pagination={false} />
    </div>
  );
};

export default OrderTableComponent;
