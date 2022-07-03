import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/button1/button';
import Input from '../../Components/input1/input';
import Optfield from '../../Components/optfield/otpfield';
import {BsArrowLeft} from 'react-icons/bs';

import './login.css';
import Loader from '../../Components/loader1/loader';
import Input2 from '../../Components/input2/input';

const STATUS={
    INITIAL:"INITIAL",
    OTPSENT:"OTPSENT",
    OTPFAIL:"OTPFAIL",
    VERIFIED:"VERIFIED",
}
const Login=()=> {
    const [status,setStatus]=useState(STATUS.INITIAL);
    const [loading,setLoading]=useState(false);
    const [statusMessage,setStatusMessage]=useState(null);
    const [phone,setPhone]=useState('');
    const navigate=useNavigate();

    const handlePhoneSubmit=()=>{
        if(phone.length<10){
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
    const handleLogin=(str)=>{
        setLoading(true);
        setTimeout(() => {
            //fake async call
            setStatus(STATUS.VERIFIED);
            navigate('/bloodclub/dashboard')
            setStatusMessage(null);
            setLoading(false);
        }, 2000);
    }
  return (
    <div className='bc-login-fulldiv'>
        <div className="bc-login-leftdiv">
            blood club member
        </div>
        <div className="bc-login-rightdiv">
            <div className="login-card">
                <h1 className='card-header'>Login</h1>
                <div className="login-top">
                    <div className="login-auth">
                    {status===STATUS.INITIAL&&<div className="login-initialstatus-div">
                        <span className='login-lebel'>Phone no.</span>
                        <div className="login-phone-prefix">
                            <span>+91</span>
                            <Input2 className={'input-phone'} value={phone} onChange={v=>setPhone(v)} placeholder={'Enter phone Number'}/>
                        </div>
                        <Button className={'btn-auth btn-otp'} onClick={handlePhoneSubmit}>{'Get otp'}</Button>
                    </div>}
                    {status===STATUS.OTPSENT && <div className="login-otpstatus-div">
                        <Optfield onSubmit={handleLogin}/>
                        <a >resend OTP?</a>
                        <Button className={'btn-auth btn-back'} onClick={()=>setStatus(STATUS.INITIAL)}><BsArrowLeft/></Button>
                    </div>}
                    </div>
                    <div className='login-status-div'>
                        {loading && <Loader className={'login-loader'}/>}
                        {!loading && statusMessage &&<span>{statusMessage}</span>}
                    </div>
                </div>
                <div className="goto-signup">
                    <span>Want to become a member of blood club?</span>
                    <Link className='link-signup' to={'/bloodclub/register'} >Sign-up</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login