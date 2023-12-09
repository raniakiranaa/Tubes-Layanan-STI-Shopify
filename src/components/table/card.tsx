import React from "react";
import Sidebar from '../Sidebar/sidebar';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Table} from "@nextui-org/react";
import TableComponent from "./table";
import {Pagination} from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <Sidebar currentPage='onDelivery'/>
      <Card className="max-w-[980px] mt-20 ml-64">
        <CardHeader className="flex gap-1">
          {/* <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col"> */}
            <p className="ml-4 text-md semibold-24">On Delivery</p>
            {/* <p className="text-small text-default-500">nextui.org</p>
          </div> */}
        </CardHeader>
        {/* <Divider/> */}
        <CardBody>
          {/* <p>Make beautiful websites regardless of your design experience.</p> */}
          <TableComponent />
        </CardBody>
        {/* <Divider/> */}
        <CardFooter className="flex justify-center">
         <Pagination showControls total={10} initialPage={1} className="flex justify-center" />
         {/* <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link> */}
        </CardFooter> 
      </Card>
    </div>
  );
}
