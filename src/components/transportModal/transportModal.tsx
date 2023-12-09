import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

// Import useDisclosure from the correct path

const TransportModal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button 
            className="border-kBlue-100 text-kBlue-100 medium-14 px-8" 
            radius="sm" 
            variant="bordered" 
            size="sm"
            onPress={onOpen}
            endContent={<FaArrowRightLong color="kBlue-100"/>}
            >
        Assign
      </Button> 
      <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 semibold-32 pl-8 pt-8">Assign Transport</ModalHeader>
              <ModalBody className="px-8">
                <Input
                    autoFocus
                    label="Adress Destination"
                    color="success"
                    key={""}
                    size="lg"
                    labelPlacement="outside"
                    placeholder="Enter Destination Adress"
                    variant="bordered"
                    required
                    className="medium-16"
                    // onChange={(e) => setCustomerName(e.target.value)}
                    />
                <p className="semibold-24 pt-6">Choose Vendor</p>
                <div className="flex flex-col justify-center items-center">
                    <Table 
                        color="success"
                        shadow="none"
                        selectionMode="single" 
                        defaultSelectedKeys={["2"]} 
                        aria-label="Example static collection table"
                        className="flex"
                    >
                        <TableHeader className="bg-kGrey-200 flex-row justify-center">
                        <TableColumn>Rank</TableColumn>
                        <TableColumn>Name</TableColumn>
                        <TableColumn >Price</TableColumn>
                        <TableColumn >Delivering Time</TableColumn>
                        </TableHeader>
                        <TableBody className="flex justify-center items-center">
                        <TableRow key="1">
                            <TableCell>1</TableCell>
                            <TableCell>Gojek</TableCell>
                            <TableCell>Rp122.000</TableCell>
                            <TableCell>2-4 hours</TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>2</TableCell>
                            <TableCell>AAM 1</TableCell>
                            <TableCell>Rp31.000</TableCell>
                            <TableCell>1 day</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>3</TableCell>
                            <TableCell>AAM 2</TableCell>
                            <TableCell>Rp32.000</TableCell>
                            <TableCell>2-day</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </div>
              </ModalBody>
              <ModalFooter className="px-8 py-4">
                <Button className="bg-kGreen-200 text-white medium-16 px-16" radius="sm" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransportModal;
