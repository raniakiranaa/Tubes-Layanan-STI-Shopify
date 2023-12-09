import React from 'react';
import Sidebar from '../Sidebar/sidebar';

const Table = () => {
  return (
    <div>
        <Sidebar currentPage='onDelivery'/>
        <div className="mt-20 ml-64 bg-white shadow-md sm:rounded-lg" style = {{ width: '940px', height: "450px"}}>
            <h1 className="bold-28">On Delivery</h1>
        </div>
    </div>
  )
};

export default Table;