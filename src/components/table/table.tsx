import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const columns = [
    {
      key: "transaction_code",
      label: "TRANSACTION CODE",
    },
    {
      key: "vendor",
      label: "VENDOR",
    },
    {
      key: "plate_number",
      label: "PLATE NUMBER",
    },
    {
        key: "driver_name",
        label: "DRIVER NAME",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

const rows = [
    {
        key: "1",
        transaction_code: "PCK000000-11",
        vendor: "Gojek",
        plate_number: "B 0000 S",
        driver_name: "Mulyana",
        status: "Done"
    },
    {
        key: "2",
        transaction_code: "PCK000000-12",
        vendor: "Grab",
        plate_number: "B 0000 S",
        driver_name: "Mulyani",
        status: "On Delivery"
    },
    {
        key: "3",
        transaction_code: "PCK000000-13",
        vendor: "Grab",
        plate_number: "B 0000 S",
        driver_name: "Mulyani",
        status: "On Delivery"
    },
    {
        key: "4",
        transaction_code: "PCK000000-14",
        vendor: "Grab",
        plate_number: "B 0000 S",
        driver_name: "Mulyani",
        status: "On Delivery"
    },
    {
        key: "5",
        transaction_code: "PCK000000-15",
        vendor: "Grab",
        plate_number: "B 0000 S",
        driver_name: "Mulyani",
        status: "Done"
    },
    {
        key: "6",
        transaction_code: "PCK000000-16",
        vendor: "Grab",
        plate_number: "B 0000 S",
        driver_name: "Mulyani",
        status: "On Delivery"
    },
    {
      key: "7",
      transaction_code: "PCK000000-17",
      vendor: "Grab",
      plate_number: "B 0000 S",
      driver_name: "Mulyani",
      status: "On Delivery"
    },
    {
      key: "8",
      transaction_code: "PCK000000-18",
      vendor: "Grab",
      plate_number: "B 0000 S",
      driver_name: "Mulyani",
      status: "Done"
    },
    {
      key: "9",
      transaction_code: "PCK000000-19",
      vendor: "Grab",
      plate_number: "B 0000 S",
      driver_name: "Mulyani",
      status: "Done"
    },
    {
      key: "10",
      transaction_code: "PCK000000-20",
      vendor: "Grab",
      plate_number: "B 0000 S",
      driver_name: "Mulyani",
      status: "Done"
    },

  ];

export default function TableComponent() {
    return (
      <Table removeWrapper aria-label="On Delivery Table">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} className="text-kGrey-400" style={{ textAlign: "center" }}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} style={{ textAlign: "center" }}>
            {(columnKey) => (
              <TableCell>
                {columnKey === 'status' ? (
                  getKeyValue(item, columnKey) === 'Done' ? (
                    <span className="text-kGreen-300">
                      {getKeyValue(item, columnKey)}
                    </span>
                  ) : (
                    <span className="text-kYellow">
                      {getKeyValue(item, columnKey)}
                    </span>
                  )
                ) : (
                  columnKey === 'transaction_code' ? (
                    <span className="text-black">
                      {getKeyValue(item, columnKey)}
                    </span>
                  ) : (
                    <span className="text-kGrey-300">
                      {getKeyValue(item, columnKey)}
                    </span>
                  )
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
};