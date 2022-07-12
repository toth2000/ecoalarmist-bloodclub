import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, MEMBERSTATUS } from '../../redux/reducers/bcMemberReducer';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../loader1/loader';
import NavLinks from '../NavLinks/NavLinks'
import './Navbar.css'

const DashboardNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const user=useSelector((state) => state.clubMember);
  const dispath=useDispatch();
  const hamburgerButtonClickHandler = () => {
    setIsDrawerOpen(prev => !prev);
  }
  const handleLogout=()=>{
    dispath(logout());
  }

  return (
    <div className='dashboard_navbar__full-div'>
      <div style = {isDrawerOpen ? {maxHeight : '500px'} : {}} className='navbar-navlinks__drawer'>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/dashboard'>Dashboard</NavLink>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/profile'>Profile</NavLink>
          <button className='navbar-mobile__navlinks logout-button_mobile' onClick={handleLogout}>
            Logout
          </button>
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
          <CustomButton className={'logout-button'} text={'LOGOUT'} onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default DashboardNavbar