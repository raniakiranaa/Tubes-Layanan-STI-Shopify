import React from 'react';
import Image from 'next/image';
import shopify from '../../../public/shopify.svg';
import { PiStack } from "react-icons/pi";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { FiLogIn } from 'react-icons/fi';

interface SidebarProps {
  currentPage: string;
}

const Sidebar = ({currentPage} : SidebarProps) => {
  const isCurrentPage = (pageName : string) => currentPage === pageName;
  
  return (
    <div className="bg-white" style={{ width: '230px', height: '100vh', left: 0, top: 0, position: 'fixed' }}>
      <div className="flex mt-8 ml-16">
        <Image src={shopify} alt="shopify" className="flex justify-self-center"/>
        <a className='text-kGrey-500 semibold-24 flex justify-self-center ml-4'>Shopify</a>
      </div>
      <div className="mt-8 ml-8">
        <a className='text-kGreen-200 semibold-16'>To-be Distributed</a>
        <div className="grid grid-cols-2 mt-8">
          <PiStack className={isCurrentPage('taskList') ? 'text-kGrey-500 flex justify-self-center mt-1' : 'text-kGrey-100 flex justify-self-center mt-1'} style = {{width: "20px", height: "20px"}}/>
          <a className={isCurrentPage('taskList') ? 'text-kGrey-500 semibold-18' : 'text-kGrey-100 medium-18'}>Task List</a>
        </div>
      </div>
      <div className="mt-8 ml-8">
        <a className='text-kGreen-200 semibold-16'>Distribution Monitoring</a>
        <div className="grid grid-cols-2 mt-8">
          <TbTruckDelivery className={isCurrentPage('onDelivery') ? 'text-kGrey-500 flex justify-self-center mt-1' : 'text-kGrey-100 flex justify-self-center mt-1'} style = {{width: "20px", height: "20px"}} />
          <a className={isCurrentPage('onDelivery') ? 'text-kGrey-500 semibold-18' : 'text-kGrey-100 medium-18'}>On Delivery</a>
        </div>
        <div className="grid grid-cols-2 mt-8">
          <FaMapMarkerAlt className={isCurrentPage('maps') ? 'text-kGrey-500 flex justify-self-center mt-1' : 'text-kGrey-100 flex justify-self-center mt-1'}  style = {{width: "20px", height: "20px"}}/>
          <a className={isCurrentPage('maps') ? 'text-kGrey-500 semibold-18' : 'text-kGrey-100 medium-18'}>Maps</a>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-32 ml-8">
        <FiLogIn className='text-kGrey-100 flex justify-self-center mt-1' style = {{width: "20px", height: "20px"}} />
        <a className='text-kGrey-100 medium-18'>Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;
