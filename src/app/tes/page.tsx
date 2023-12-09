"use client"

import Sidebar from '@/components/Sidebar/sidebar'
import Nav from '@/components/navigation/nav'
import TransportModal from '@/components/transportModal/transportModal'
import React from 'react'

const page = () => {
  return (
    <div>
        <Sidebar currentPage='Task List'/>
        <TransportModal />
    </div>
  )
}

export default page