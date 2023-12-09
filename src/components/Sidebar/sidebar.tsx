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
    <div className="bg-white z-50 border-r-1" style={{ width: '230px', height: '100vh', left: 0, top: 0, position: 'fixed' }}>
      <div className="flex mt-8 justify-center">
        <Image src={shopify} alt="shopify" className="flex justify-self-center"/>
        <a className='text-kGrey-500 semibold-24 flex justify-self-center ml-4'>Shopify</a>
      </div>
      <div>
        <div className="mt-8 ">
          <a className='text-kGreen-200 pl-8 semibold-16'>To-be Distributed</a>
          <div className="flex gap-6 mt-8 justify-center">
            <a href='/task'>
              <PiStack className={isCurrentPage('taskList') ? 'text-kGrey-500 flex justify-self-center mt-1' : 'text-kGrey-100 flex justify-self-center mt-1'} style = {{width: "20px", height: "20px"}}/>
            </a>
            <a href="/task" className={isCurrentPage('taskList') ? 'text-kGrey-500 semibold-18' : 'text-kGrey-100 medium-18'}>Task List</a>
          </div>
        </div>
        <div className="mt-8">
          <a className='text-kGreen-200 pl-8 semibold-16'>Distribution Monitoring</a>
          <div className="flex gap-6 mt-8 pl-14 justify-start">
            <a href='/delivery'>
              <TbTruckDelivery className={isCurrentPage('onDelivery') ? 'text-kGrey-500 flex justify-self-center mt-1' : 'text-kGrey-100 flex justify-self-center mt-1'} style = {{width: "20px", height: "20px"}} />
            </a>
            <a href="/delivery" className={isCurrentPage('onDelivery') ? 'text-kGrey-500 semibold-18' : 'text-kGrey-100 medium-18'}>On Delivery</a>
          </div>
          <div className="flex gap-6 mt-8 pl-14 justify-start">
            <a href="/map">
              <FaMapMarkerAlt className={isCurrentPage('maps') ? 'text-kGrey-500 flex justify-self-center mt-1' : 'text-kGrey-100 flex justify-self-center mt-1'}  style = {{width: "20px", height: "20px"}}/>
            </a>
            <a href="/map" className={isCurrentPage('maps') ? 'text-kGrey-500 semibold-18' : 'text-kGrey-100 medium-18'}>Maps</a>
          </div>
        </div>
      </div>
      <div className='flex items-end'>
        <div className="flex gap-6 mt-8 pl-14 justify-start">
          <FiLogIn className='text-kGrey-100 flex justify-self-center mt-1' style = {{width: "20px", height: "20px"}} />
          <a className='text-kGrey-100 medium-18'>Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
