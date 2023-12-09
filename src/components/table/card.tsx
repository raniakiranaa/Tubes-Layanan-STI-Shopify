import React from "react";
import Sidebar from '../Sidebar/sidebar';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Table} from "@nextui-org/react";
import TableComponent from "./table";
import {Pagination} from "@nextui-org/react";

export default function CardComponent() {
  return (
    <div className="ml-56 pt-4">
      <Card className="mx-auto max-w-full m-8 mt-20">
        <CardHeader className="flex gap-1">
            <p className="ml-4 mt-4 -mb-2 text-md semibold-24">On Delivery</p>
        </CardHeader>
        <CardBody>
          <div className="ml-4 mr-4">
            <TableComponent />
          </div>
        </CardBody>
        <CardFooter className="flex justify-center">
         <Pagination showControls total={10} initialPage={1} className="flex justify-center" />
        </CardFooter> 
      </Card>
    </div>
  );
}
