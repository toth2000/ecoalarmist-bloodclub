import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/button1/button';
import Input from '../../Components/input1/input';
import Optfield from '../../Components/optfield/otpfield';
import {BsArrowLeft} from 'react-icons/bs';
import Loader from '../../Components/loader1/loader';
import Input2 from '../../Components/input2/input';
import DropdownInput from '../../Components/dropdownInput/dropdownInput';
import data from './info.json';

import './signup.css';
import { useEffect } from 'react';

const STATUS={
    INITIAL:"INITIAL",
    OTPSENT:"OTPSENT",
    OTPFAIL:"OTPFAIL",
    VERIFIED:"VERIFIED",
}
const Signup = () => {
  const [status, setStatus] = useState(STATUS.INITIAL);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [phone, setPhone] = useState('');
  const [slide, setSlide] = useState(1);
  const [state, setState] = useState('Andhra Pradesh');
  const [dist, setDist] = useState('Anantapur');
  const navigate = useNavigate();
  const handlePhoneSubmit = () => {
    if (phone.length < 10) {
      setStatusMessage(`Invalid Phone Number`);
      return;
    }
    setLoading(true);
    //fake async call
    setTimeout(() => {
      setLoading(false);
      setStatusMessage(null);
      setStatus(STATUS.OTPSENT);
    }, 2000);
  }
  const handleOtpValidate = (str) => {
    setLoading(true);
    setTimeout(() => {
      //fake async call
      setStatus(STATUS.VERIFIED);
      setStatusMessage(null);
      setLoading(false);
    }, 2000);
  }
  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      //fake async call
      navigate('/bloodclub/dashboard')
      setStatusMessage(null);
      setLoading(false);
    }, 2000);
  }
  return (
    <div className='bc-signup-fulldiv'>
        <div className="bc-signup-leftdiv">
            blood club member
        </div>
        <div className="bc-signup-rightdiv">
            <div className="signup-card">
                <h1 className='card-header'>Sign Up</h1>
                <div className="signup-top">
                    <div className="signup-auth">
                        {status===STATUS.INITIAL&&<div className="signup-initialstatus-div">
                          <span className='signup-lebel'>Phone no.</span>
                          <div className="signup-phone-prefix">
                            <span>+91</span>
                            <Input2 value={phone} onChange={v=>setPhone(v)} placeholder={'Enter phone Number'}/>
                          </div>
                          <Button className={'btn-auth btn-otp'} onClick={handlePhoneSubmit}>{'Get otp'}</Button>
                        </div>}
                        {status===STATUS.OTPSENT && <div className="signup-otpstatus-div">
                          <Optfield onSubmit={handleOtpValidate}/>
                          <a >resend OTP?</a>
                          <Button className={'btn-auth btn-back'} onClick={()=>setStatus(STATUS.INITIAL)}><BsArrowLeft/></Button>
                        </div>}
                        {status===STATUS.VERIFIED&&<div className='signup-slider'>
                          <div className="signup-slider-left" style={{zIndex:slide===1?1:0}}>
                            <span className='signup-lebel'>Name</span>
                            <Input2 placeholder={'Enter Your Name'}/>
                            <span className='signup-lebel'>Email</span>
                            <Input2 placeholder={'Enter Your Email'}/>
                            <span className='signup-lebel'>Phone Number</span>
                            <div className="signup-phone-prefix">
                              <span>+91</span>
                              <Input2 value={phone} disabled />
                            </div>
                            <div className="slider-2-buttons">
                              <Button onClick={()=>setSlide(2)}>{'>'}</Button>
                            </div>
                          </div>
                          <div className="signup-slider-right" style={{zIndex:slide===2?1:0}}>
                            <span className='signup-lebel'>Vill/City Name</span>
                            <Input2 />
                            <span className='signup-lebel'>Pincode</span>
                            <Input2 />
                            <span className='signup-lebel'>State</span>
                            <DropdownInput options={data.states.map(s=>s.state)} onChange={(s)=>setState(s)} value={state}/>
                            <span className='signup-lebel'>District</span>
                            <DropdownInput options={data.states.find(s=>s.state===state).districts} onChange={(s)=>setDist(s)} value={dist}/>
                            <div className="slider-2-buttons">
                              <Button  onClick={()=>setSlide(1)}>{'<'}</Button>
                              <Button  className={'signup-button'} onClick={handleSignup}>Sign up</Button>
                            </div>
                          </div>
                        </div> }
                    </div>
                    <div className='signup-status-div'>
                        {loading && <Loader className={'signup-loader'}/>}
                        {!loading && statusMessage &&<span>{statusMessage}</span>}
                    </div>
                </div>
                <div className="goto-login">
                    <span>Already a member of blood club?</span>
                    <Link className='link-signup' to={'/bloodclub/login'} >Log In</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup