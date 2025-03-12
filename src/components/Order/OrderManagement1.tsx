import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TablePagination,
    TableRow,
  } from "../ui/table";
  
  import Badge from "../ui/badge/Badge";
  import { useState } from "react";
  
  interface Order {
    id: number;
    userId: number;
    fullname: string;
    address: string;
    email: string;
    phone: string;
    status: string;
  }
  
  // Define the table data using the interface
  const tableData: Order[] = [
    {
      id: 1,
      userId: 101,
      fullname: "Lindsey Curtis",
      address: "123 Main St, New York, NY",
      email: "lindsey@example.com",
      phone: "+1 123 456 7890",
      status: "Active",
    },
    {
      id: 2,
      userId: 102,
      fullname: "Kaiya George",
      address: "456 Oak St, Los Angeles, CA",
      email: "kaiya@example.com",
      phone: "+1 987 654 3210",
      status: "Pending",
    },
    {
      id: 3,
      userId: 103,
      fullname: "Zain Geidt",
      address: "789 Pine St, Chicago, IL",
      email: "zain@example.com",
      phone: "+1 555 678 9012",
      status: "Active",
    },
    {
      id: 4,
      userId: 104,
      fullname: "Abram Schleifer",
      address: "321 Elm St, Houston, TX",
      email: "abram@example.com",
      phone: "+1 444 222 3333",
      status: "Cancel",
    },
    {
      id: 5,
      userId: 105,
      fullname: "Carla George",
      address: "654 Maple St, Miami, FL",
      email: "carla@example.com",
      phone: "+1 999 888 7777",
      status: "Active",
    },
  ];
  
  export default function OrderManagement1() {
    const [page, setPage] = useState(1);
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 pt-4 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="mb-4 flex flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Order Management
          </h3>
        </div>
        <div className="min-w-full">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader>ID</TableCell>
                <TableCell isHeader>User ID</TableCell>
                <TableCell isHeader>Full Name</TableCell>
                <TableCell isHeader>Address</TableCell>
                <TableCell isHeader>Email</TableCell>
                <TableCell isHeader>Phone</TableCell>
                <TableCell isHeader>Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.userId}</TableCell>
                  <TableCell>{order.fullname}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.phone}</TableCell>
                  <TableCell>
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
          <TablePagination
            currentPage={page}
            onPageChange={(page) => setPage(page)}
            totalPages={10}
          />
        </div>
      </div>
    );
  }
  