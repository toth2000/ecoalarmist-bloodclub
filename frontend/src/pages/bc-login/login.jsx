import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/button1/button';
import Input from '../../Components/input1/input';
import Optfield from '../../Components/optfield/otpfield';
import {BsArrowLeft} from 'react-icons/bs';

import './login.css';
const STATUS={
    INITIAL:"INITIAL",
    OTPSENT:"OTPSENT",
    OTPFAIL:"OTPFAIL"
}

const Login=()=> {
    const [status,setStatus]=useState(STATUS.INITIAL);
  return (
    <div className='bc-login-fulldiv'>
        <div className="bc-login-leftdiv">
            blood club member
        </div>
        <div className="bc-login-rightdiv">
            <div className="login-card">
                <h1 className='card-header'>Login</h1>
                <div className="login-auth">
                    {status===STATUS.INITIAL&&<Input className={'input-phone'} placeholder={'Enter phone Number'}/>}
                    {status===STATUS.OTPSENT&&<Optfield />}
                    {status===STATUS.INITIAL&&<Button className={'btn-auth btn-otp'} onClick={()=>setStatus(STATUS.OTPSENT)}>{'Get otp'}</Button>}
                    {status===STATUS.OTPSENT&&<Button className={'btn-auth btn-back'} onClick={()=>setStatus(STATUS.INITIAL)}><BsArrowLeft/></Button>}
                </div>
                <div className="goto-signup">
                    <span>Not a member of Blood Club?</span>
                    <Link className='link-signup' to={'/bloodclub/register'} >Sign-up</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login