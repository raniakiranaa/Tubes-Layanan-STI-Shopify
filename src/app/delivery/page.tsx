"use client"

import Sidebar from '@/components/Sidebar/sidebar'
import Nav from '@/components/navigation/nav'
import TransportModal from '@/components/transportModal/transportModal'
import React from 'react'

const Delivery = () => {
  return (
    <div>
        <Sidebar currentPage='onDelivery'/>
        <TransportModal />
    </div>
  )
}

export default Delivery