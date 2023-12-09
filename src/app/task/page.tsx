"use client"

import Sidebar from '@/components/Sidebar/sidebar'
import Nav from '@/components/navigation/nav'
import TransportModal from '@/components/transportModal/transportModal'
import React from 'react'

const Task = () => {
  return (
    <div>
        <Sidebar currentPage='taskList'/>
        <TransportModal />
    </div>
  )
}

export default Task