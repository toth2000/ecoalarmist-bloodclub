import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks'
import './Navbar.css'

const BloodClubNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hamburgerButtonClickHandler = () => {
    setIsDrawerOpen(prev => !prev);
  }

  return (
    <div className='bc_navbar__full-div'>
      <div style = {isDrawerOpen ? {maxHeight : '500px'} : {}} className='navbar-navlinks__drawer'>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/dashboard'>Dashboard</NavLink>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/login'>Login</NavLink>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/register'>Sign-up</NavLink>
      </div>

      <div onClick = {hamburgerButtonClickHandler} className='navbar-hamburger__button-div'>
        <div className='navbar-hamburger__button'/>
      </div>
      <div className='navbar-navlinks__div'>
        <NavLinks
          className
          link = '/bloodclub/dashboard'
          linkText='Dashboard'
        />
        <NavLinks
          className
          link = '/bloodclub/login'
          linkText='Login'
        />
        <NavLinks
          className
          link = '/bloodclub/register'
          linkText='Sign-up'
        />
      </div>
    </div>
  )
}

export default BloodClubNavbar