import React from 'react'
import { HiDownload } from 'react-icons/hi';

import './dashboardCard.css';

const DashboardCard=()=> {
    const date=new Date();
    return (
    <div className='card-fulldiv'>
        <span className='card-date'>{date.toDateString()}</span>
        <div className='card-download-div'>
            <HiDownload className='card-download_icon'/>
            download
        </div>
    </div>
  )
}

export default DashboardCard