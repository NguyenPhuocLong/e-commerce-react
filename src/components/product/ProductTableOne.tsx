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

interface Product {
  id: number;
  product_id: string;
  category: string;
  product_name: string;
  price: string;
  quantity: number;
  description: string;
  slug: string;
  image: string;
  status: string;
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    product_id: "P-0001",
    category: "clothing",
    product_name: "Premium Leather Jacket",
    price: "$199.99",
    quantity: 25,
    description: "High quality leather jacket with premium finishing",
    slug: "premium-leather-jacket",
    image: "/images/user/user-22.jpg",
    status: "In Stock",
  },
  {
    id: 2,
    product_id: "P-0002",
    category: "clothing",
    product_name: "Wireless Headphones",
    price: "$89.99",
    quantity: 50,
    description: "Noise cancelling wireless headphones with 20h battery life",
    slug: "wireless-headphones",
    image: "/images/user/user-22.jpg",
    status: "In Stock",
  },
  {
    id: 3,
    product_id: "P-0003",
    category: "clothing",
    product_name: "Smart Watch Series 5",
    price: "$299.99",
    quantity: 10,
    description: "Latest smartwatch with heart rate monitor and GPS",
    slug: "smart-watch-series-5",
    image: "/images/user/user-22.jpg",
    status: "Low Stock",
  },
  {
    id: 4,
    product_id: "P-0004",
    category: "clothing",
    product_name: "Casual Denim Shirt",
    price: "$49.99",
    quantity: 0,
    description: "Comfortable denim shirt for casual everyday wear",
    slug: "casual-denim-shirt",
    image: "/images/user/user-22.jpg",
    status: "Out of Stock",
  },
  {
    id: 5,
    product_id: "P-0005",
    category: "clothing",
    product_name: "Ergonomic Office Chair",
    price: "$159.99",
    quantity: 15,
    description: "Adjustable office chair with lumbar support",
    slug: "ergonomic-office-chair",
    image: "/images/user/user-22.jpg",
    status: "In Stock",
  },
];

export default function ProductTableOne() {
  const [page, setPage] = useState(1);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 pt-4 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="mb-4 flex flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Products List
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <form className="flex items-center gap-3">
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
                placeholder="Search products..."
                className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[42px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
              />
            </div>
            {/* <button 
              type="button" 
              className="inline-flex items-center justify-center h-[42px] rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Product
            </button> */}
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
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Image
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Product ID
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Product Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Quantity
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="w-10 h-10 overflow-hidden rounded">
                    <img
                      width={40}
                      height={40}
                      src={product.image}
                      alt={product.product_name}
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {product.product_id}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-800 text-start text-theme-sm dark:text-white/90">
                  <div>
                    <span className="font-medium block">{product.product_name}</span>
                    <span className="text-xs text-gray-500 block truncate max-w-[200px]">
                      {product.description}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {product.category}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {product.price}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {product.quantity}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <Badge
                    size="sm"
                    color={
                      product.status === "In Stock"
                        ? "success"
                        : product.status === "Low Stock"
                        ? "warning"
                        : "error"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <div className="flex items-center space-x-2">
                    <button 
                      className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3.5 w-3.5 mr-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                    <button 
                      className="inline-flex items-center justify-center rounded-md bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3.5 w-3.5 mr-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Delete
                    </button>
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
