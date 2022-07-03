import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks'
import './Navbar.css'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hamburgerButtonClickHandler = () => {
    setIsDrawerOpen(prev => !prev);
  }

  return (
    <div className='navbar__full-div'>
      <div style = {isDrawerOpen ? {maxHeight : '500px'} : {}} className='navbar-navlinks__drawer'>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/'>HOME</NavLink>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/bloodclub/login'>Blood Club</NavLink>
          <NavLink className='navbar-mobile__navlinks' style = {({isActive}) => isActive ? {color : '#ED3237'} : {}} to = '/patient/form'>Request Blood</NavLink>
      </div>

      <div onClick = {hamburgerButtonClickHandler} className='navbar-hamburger__button-div'>
        <div className='navbar-hamburger__button'/>
      </div>
      <div className='navbar-navlinks__div'>
        <NavLinks
          className
          link = '/'
          linkText='Home'
        />
        <NavLinks
          className
          link = '/bloodclub/login'
          linkText='Blood Club'
        />
        <NavLinks
          className
          link = '/patient/form'
          linkText='Request Blood'
        />
      </div>
    </div>
  )
}

export default Navbar