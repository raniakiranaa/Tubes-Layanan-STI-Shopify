"use client"

import Sidebar from '@/components/Sidebar/sidebar'
import Nav from '@/components/navigation/nav'
import TransportModal from '@/components/transportModal/transportModal'
import React from 'react'
import Table from '@/components/table/card'

const Delivery = () => {
  return (
    <div>
        <Sidebar currentPage='onDelivery'/>
        <Table />
        {/* <Sidebar currentPage='onDelivery'/> */}
    </div>
  )
}

export default Delivery