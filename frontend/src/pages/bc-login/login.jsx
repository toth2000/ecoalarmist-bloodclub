//login page for bloodclub members
//uses custom components such as Loader,Input2,CustomButtom
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Optfield from '../../Components/optfield/otpfield';
import {BsArrowLeft} from 'react-icons/bs';
import Loader from '../../Components/loader1/loader';
import Input2 from '../../Components/input2/input';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../redux/reducers/bcMemberReducer';

import './login.css';

//status of the user who is trying to login
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
    const dispatch=useDispatch();

    const handlePhoneSubmit=()=>{
        if(phone.length<10){
            setStatusMessage(`Invalid Phone Number`);
            return;
        }
        setLoading(true);
        //fake async call for sending otp to the phone number
        setTimeout(() => {
            setLoading(false);
            setStatusMessage(null);
            setStatus(STATUS.OTPSENT);
        }, 2000);
    }
    const handleLogin=(str)=>{
        setLoading(true);
        setTimeout(() => {
            //fake async call for login
            //will take phone and otp as input
            //returns name,email,group,id,accesstoken,refreshtoken,phone,isVerified
            setStatus(STATUS.VERIFIED);
            dispatch(authenticate({
                name:'Dummy name',
                email:'Dummy name',group:'A+',
                id:'1234',accesstoken:'accesstoken',
                refreshtoken:'refreshtoken',
                phone,
                isVerified:true
            }))
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
                    {/* Initial screen */}
                    {status===STATUS.INITIAL&&<div className="login-initialstatus-div">
                        <span className='login-lebel'>Phone no.</span>
                        <div className="login-phone-prefix">
                            <span>+91</span>
                            <Input2 value={phone} onChange={v=>setPhone(v)} />
                        </div><br/>
                        <CustomButton onClick={handlePhoneSubmit} text={'GET OTP'} />
                    </div>}
                    {/* fires up after sending otp */}
                    {status===STATUS.OTPSENT && <div className="login-otpstatus-div">
                        <Optfield onSubmit={handleLogin}/>
                        <a >resend OTP?</a><br/>
                        <CustomButton onClick={()=>setStatus(STATUS.INITIAL)} text={<BsArrowLeft/>} />
                    </div>}
                    </div>
                    {/* loader */}
                    <div className='login-status-div'>
                        {loading && <Loader className={'login-loader'}/>}
                        {!loading && statusMessage &&<span>{statusMessage}</span>}
                    </div>
                </div>
                {/* redirect link to signup */}
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