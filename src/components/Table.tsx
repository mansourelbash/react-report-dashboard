import { Table } from "flowbite-react";

const dummyData = [
  { productName: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
  { productName: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
  { productName: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
  { productName: "iPhone 12", color: "Black", category: "Mobile", price: "$999" },
  { productName: "Apple Watch Series 6", color: "Gold", category: "Wearable", price: "$399" },
  { productName: "AirPods Pro", color: "White", category: "Accessories", price: "$249" },
  { productName: "iPad Pro 11", color: "Space Gray", category: "Tablet", price: "$799" },
  { productName: "HP Spectre x360", color: "Silver", category: "Laptop", price: "$1399" },
  { productName: "Lenovo ThinkPad X1", color: "Black", category: "Laptop", price: "$1700" },
  { productName: "Samsung Galaxy S21", color: "Phantom Gray", category: "Mobile", price: "$799" }
];

export function TableComponent() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {dummyData.map((item, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.productName}
              </Table.Cell>
              <Table.Cell>{item.color}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
