"use client"

import Sidebar from '@/components/Sidebar/sidebar'
import Nav from '@/components/navigation/nav'
import TransportModal from '@/components/transportModal/transportModal'
import React from 'react'
import Table from '@/components/table/cardTask'

const Task = () => {
  return (
    <div>
        <Table />
        <Sidebar currentPage='taskList'/>
        <TransportModal />
    </div>
  )
}

export default Task