import React from 'react'
import DashboardCard from '../../Components/dashboardCard/dashboardCard';

import './dashboard.css';

function Dashboard() {
  return (
    <div className='bc-dashboard-fulldiv'>
      <DashboardCard/>
      <DashboardCard/>
      <DashboardCard/>
    </div>
  )
}

export default Dashboard