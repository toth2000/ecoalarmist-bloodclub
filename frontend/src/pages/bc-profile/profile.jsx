import React from 'react'
import {FaMale} from 'react-icons/fa'

import './profile.css';

const BC_PROFILE=()=> {
  return (
    <div className='profile-fulldiv'>
        <div className="profile-userinfo">
          <div className="profile-userinfo-left">
            <div className='userinfo-circle'><FaMale/></div>
            <div className="userinfo__user">
              <div className="user_verified">
                <h2>User Name</h2>
              </div>
              <span className='profile-bloodgroup'>A+</span>
            </div>
          </div>
          <div className="profile-userinfo-right">
            {<span className='member-status status-eligible'>Eligible</span>}
            {/* {<span className='member-status status-unverified'>Un-Verified</span>} */}
            {/* {<span className='member-status status-uneligible'>Un-eligible</span>} */}
          </div>
        </div>
        <div className="profile-credentials">
          <label htmlFor="phone">Phone Number</label>
          <div className='phone-number-edit'>
            <span>+91 {37232738273}</span>
          </div>
        </div>
        <div className="email-credentials">
          <label htmlFor="email">Email</label>
          <div className='email-edit'>
            <span>abc@gmail.com</span>
          </div>
        </div>
        <div className="profile-location">
          <span className='profile-location_heading'>Location</span>
          <div className="profile-location_area">
              <label htmlFor="area">Vill/City</label>
              <div className='area-edit'>
                <span>Dummy Area</span>
              </div>
          </div>
          <div className="profile-location_pincode">
              <label htmlFor="pincode">Pincode</label>
              <div className='pincode-edit'>
                <span>726 231</span>
              </div>
          </div>
          <div className="profile-location_state">
              <label htmlFor="state">State</label>
              <div className='state-edit'>
                <span>State Name</span>
              </div>
          </div>
          <div className="profile-location_district">
              <label htmlFor="district">District</label>
              <div className='district-edit'>
                <span>Distric Name</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default BC_PROFILE