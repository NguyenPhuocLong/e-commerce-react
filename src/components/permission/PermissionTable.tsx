import { useNavigate } from "react-router";
import { BoxIcon } from "../../icons";
import Button from "../ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TablePagination,
  TableRow,
} from "../ui/table";

import { useState } from "react";

interface Order {
  id: number;
  name: string;
  code: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    name: "Agency Website",
    code: "abc",
  },
  {
    id: 2,
    name: "Agency Website",
    code: "abc",
  },
  {
    id: 3,
    name: "Agency Website",
    code: "abc",
  },
  {
    id: 4,
    name: "Agency Website",
    code: "abc",
  },
  {
    id: 5,
    name: "Agency Website",
    code: "abc",
  },
];

export default function PermissionTable() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 pt-4 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="mb-4 flex flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Permission
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <form>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <svg
                  className="fill-gray-500 dark:fill-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z"
                    fill=""
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[42px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="min-w-[1102px]">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                ID
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Code
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.id}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.name}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.code}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex gap-5">
                    <Button
                      size="sm"
                      variant="primary"
                      endIcon={<BoxIcon className="size-5" />}
                      onClick={() => navigate("/update-permission")}
                    >
                      Sửa
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      endIcon={<BoxIcon className="size-5" />}
                      onClick={() => navigate("")}
                    >
                      Xóa
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
        <TablePagination
          currentPage={page}
          onPageChange={(page) => {
            console.log(page);
            setPage(page);
          }}
          totalPages={20}
        ></TablePagination>
      </div>
    </div>
  );
}
