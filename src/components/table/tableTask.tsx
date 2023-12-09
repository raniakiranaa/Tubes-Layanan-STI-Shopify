import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button} from "@nextui-org/react";
import TransportModal from "../transportModal/transportModal";

const columns = [
    {
      key: "transaction_code",
      label: "TRANSACTION CODE",
    },
    {
      key: "packing",
      label: "PACKING DATE",
    },
    {
      key: "delivery",
      label: "DELIVERY DATE",
    },
    {
        key: "status",
        label: "STATUS",
    },
    {
        key: "assign",
        label: "ASSIGNED TO",
    },
];

const rows = [
    {
        key: "1",
        transaction_code: "PCK000000-11",
        packing: "16 August 00.00",
        delivery: "16 August 00.00",
        status: "Assigned",
        assign: "Kurir Internal"
    },
    {
        key: "2",
        transaction_code: "PCK000000-12",
        packing: "16 August 00.00",
        delivery: "16 August 00.00",
        status: "Assign",
        assign: "-"
    },
    {
        key: "3",
        transaction_code: "PCK000000-13",
        packing: "16 August 00.00",
        delivery: "16 August 00.00",
        status: "Assigned",
        assign: "Si Cepat"
    },
    {
        key: "4",
        transaction_code: "PCK000000-14",
        packing: "16 August 00.00",
        delivery: "16 August 00.00",
        status: "Assign",
        assign: "-"
    },
    {
        key: "5",
        transaction_code: "PCK000000-15",
        packing: "16 August 00.00",
        delivery: "16 August 00.00",
        status: "Assign",
        assign: "-"
    },
    {
        key: "6",
        transaction_code: "PCK000000-16",
        packing: "16 August 00.00",
        delivery: "16 August 00.00",
        status: "Assign",
        assign: "-"
    },

  ];

export default function TableComponent() {
    return (
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} style={{ textAlign: "center" }}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} style={{ textAlign: "center" }}>
            {(columnKey) => (
              <TableCell>
                {columnKey === 'status' ? 
                  getKeyValue(item, columnKey) === 'Assign' ? (
                    <TransportModal />
                  ) : (
                    <Button
                      className="text-kGreen-300 medium-14 px-8"
                      radius="sm"
                      variant="light"
                      size="sm"
                      isDisabled
                    >
                      Assign
                    </Button>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
              </TableCell>
            )}
          </TableRow>
        )}
        </TableBody>
      </Table>
    );
}