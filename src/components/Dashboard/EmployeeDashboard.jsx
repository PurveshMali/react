import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div class=''>
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard
