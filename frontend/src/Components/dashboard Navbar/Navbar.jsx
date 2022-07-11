import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MEMBERSTATUS } from '../../redux/reducers/bcMemberReducer';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../loader1/loader';
import NavLinks from '../NavLinks/NavLinks'
import './Navbar.css'

const DashboardNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const user=useSelector((state) => state.clubMember)
  const hamburgerButtonClickHandler = () => {
    setIsDrawerOpen(prev => !prev);
  }
  useEffect(()=>{
    console.log(user);
  },[user])

  return (
    <div className='dashboard_navbar__full-div'>
      <div style = {isDrawerOpen ? {maxHeight : '500px'} : {}} className='navbar-navlinks__drawer'>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/dashboard'>Dashboard</NavLink>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/profile'>Profile</NavLink>
      </div>

      <div onClick = {hamburgerButtonClickHandler} className='navbar-hamburger__button-div'>
        <div className='navbar-hamburger__button'/>
      </div>
      <div className='dashboard-navlinks__div'>
        <NavLinks
          className
          link = '/bloodclub/dashboard'
          linkText='Dashboard'
        />
        <NavLinks
          className
          link = '/bloodclub/profile'
          linkText='Profile'
        />
      </div>
      <div className='dashboard-logout__div'>
          {user.status===MEMBERSTATUS.LOADING && <Loader/>}
          {user.status===MEMBERSTATUS.AUTHORIZED && <span>{user.data.name}</span>}
          <CustomButton className={'logout-button'} text={'LOGOUT'}/>
      </div>
    </div>
  )
}

export default DashboardNavbar