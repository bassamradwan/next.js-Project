// import { Table, Tag } from "antd";
// import { useState } from "react";
// import {
//   AdLine,
//   AdTitle,
//   AdWrapper,
//   DateIcon,
//   DateLine,
//   DateText,
//   LocationIcon,
//   LocationLine,
//   LocationText,
//   Type,
// } from "../../styles/styled.offersTable";
// import useOffers from "../../../../hooks/useOffer";
// import { json } from "stream/consumers";

// const OffersTableComponent = () => {
//   const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | undefined>(undefined);
//   const [sortedColumn, setSortedColumn] = useState<string | undefined>(undefined);
//   const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

//   const id = +location.pathname.split("/")[2];
//   const { offers } = useOffers(id);

//   const handleTableChange = (pagination: any, filters: any, sorter: any) => {
//     setSortOrder(sorter.order);
//     setSortedColumn(sorter.columnKey);
//     setFilters(filters);
//   };

//   const columns = [
//     {
//       title: "Ad Title",
//       dataIndex: "adTitle",
//       key: "adTitle",
//       sorter: (a: any, b: any) => a.adTitle.localeCompare(b.adTitle),
//       // sortOrder: sortedColumn === "adTitle" && sortOrder,
//       // filters: [
//       //   { text: "John Brown", value: "John Brown" },
//       //   { text: "Jim Green", value: "Jim Green" },
//       //   { text: "Joe Black", value: "Joe Black" },
//       // ],
//       filteredValue: filters.adTitle || null,
//       render: (text: string) => (
//         <div>
//           {offers.map((item, index) =>
//             <AdWrapper key={index} >
//               <AdTitle>{item.order.name}</AdTitle>
//               <Type>{item.order.description}</Type>
//               <AdLine>
//                 <LocationLine>
//                   <LocationIcon />
//                   <LocationText>{item.order.city.en}</LocationText>
//                 </LocationLine>
//                 <DateLine>
//                   <DateIcon />
//                   <DateText>{item.created_at}</DateText>
//                   <h1>{item.created_at}</h1>
//                 </DateLine>
//               </AdLine>
//             </AdWrapper>
//           )}
//         </div>

//       ),
//     },
//     {
//       title: "Cost",
//       dataIndex: "cost",
//       key: "cost",
//       sorter: (a: any, b: any) => a.cost - b.cost,
//       sortOrder: sortedColumn === "cost" && sortOrder,
//       filters: [
//         { text: "32", value: "32" },
//         { text: "42", value: "42" },
//       ],
//       filteredValue: filters.cost || null,
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => {
//         let color = "";
//         switch (status) {
//           case "pending":
//             color = "orange";
//             break;
//           case "completed":
//             color = "green";
//             break;
//           default:
//             color = "blue";
//             break;
//         }
//         return <Tag color={color}>{status.toUpperCase()}</Tag>;
//       },
//       sorter: (a: any, b: any) => a.status.localeCompare(b.status),
//       sortOrder: sortedColumn === "status" && sortOrder,
//       filters: [
//         { text: "Pending", value: "pending" },
//         { text: "Completed", value: "completed" },
//       ],
//       filteredValue: filters.status || null,
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//     },
//   ];

//   const data = [
//     {
//       key: "1",
//       adTitle: "John Brown",
//       cost: 32,
//       status: "pending",
//       action: "Delete",
//     },
//     {
//       key: "2",
//       adTitle: "Jim Green",
//       cost: 42,
//       status: "completed",
//       action: "Delete",
//     },
//     {
//       key: "3",
//       adTitle: "Joe Black",
//       cost: 32,
//       status: "pending",
//       action: "Delete",
//     },
//   ];

//   return (
//     // @ts-ignore
//     <div>
//       <Table columns={columns} dataSource={data} onChange={handleTableChange} pagination={false} />

      
//     </div>
//   );
// };

// export default OffersTableComponent;


// //copy
// {/* <AdWrapper >

// <AdTitle>{offer.order.name}</AdTitle>
// <Type>Anesthesia devices</Type>
// <AdLine>
//   <LocationLine>
//     <LocationIcon />
//     <LocationText>cairo</LocationText>
//   </LocationLine>
//   <DateLine>
//     <DateIcon />
//     <DateText>12/12/2021</DateText>
//   </DateLine>
// </AdLine>
// </AdWrapper> */}

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
