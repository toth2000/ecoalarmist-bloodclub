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
import CustomButton from '../../Components/CustomButton/CustomButton';
import data from './info.json';
import {useDispatch} from 'react-redux';
import { authenticate } from '../../redux/reducers/bcMemberReducer';

import './signup.css';

const BLOODGROUP=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
const GENDER={
  MALE:"Male",
  FEMALE:"Female",
  OTHERS:"Others"
}

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
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [area,setArea]=useState('');
  const [pincode,setPincode]=useState('');
  const [age,setAge]=useState();
  const [termsStatus,setTermsStatus]=useState(false);
  const [gender,setGender]=useState(GENDER.MALE);
  const [bloodGroup,setBloodGroup]=useState(BLOODGROUP[0]);

  const dispatch=useDispatch()
  
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
    if(!area.trim().length>0){
      setStatusMessage("Enter the area");
      return;
    }
    if(pincode.trim().length!==6){
      setStatusMessage("Enter a valid pincode");
      return;
    }
    if(!termsStatus){
      setStatusMessage("Please accept the terms and conditions");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      //fake async call
      const memberStatus=false;
      dispatch(authenticate({
        name,email,group:bloodGroup,id:'1234',accesstoken:'accesstoken',refreshtoken:'refreshtoken',isVerified:memberStatus,
        phone
      }))
      navigate('/bloodclub/dashboard');

      setStatusMessage(null);
      setLoading(false);
    }, 2000);
  }
  const handleSlider=()=>{
    if(name.trim().length>=4 && email.trim().length>=5 && age)setSlide(2);
    else{
      setStatusMessage("Missing Fields either name,email,age");
    }
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
                            <Input2 fullClassName={'signup-phone-input'} value={phone} onChange={v=>setPhone(v)}/>
                          </div><br/>
                          <CustomButton  onClick={handlePhoneSubmit} text={'GET OTP'}/>
                        </div>}
                        {status===STATUS.OTPSENT && <div className="signup-otpstatus-div">
                          <Optfield onSubmit={handleOtpValidate}/>
                          <a >resend OTP?</a><br/>
                          <CustomButton  onClick={()=>setStatus(STATUS.INITIAL)} text={<BsArrowLeft/>}/>
                        </div>}
                        {status===STATUS.VERIFIED&&<div className='signup-slider'>
                          <div className="signup-slider-left" style={{zIndex:slide===1?1:0}}>
                            <span className='signup-lebel'>Name</span>
                            <Input2 onChange={(n)=>setName(n)} value={name}/>
                            <span className='signup-lebel'>Email</span>
                            <Input2 onChange={(n)=>setEmail(n)} value={email}/>
                            <span className='signup-lebel'>Phone Number</span>
                            <div className="signup-phone-prefix">
                              <span>+91</span>
                              <Input2 fullClassName={'signup-phone-input'} value={phone} disabled />
                            </div>
                            <div className='signup-age-sex'>
                              <div className="signup-age-sex__age">
                                <span className='signup-lebel'>Age</span>
                                <Input2 onChange={(n)=>setAge(n)} value={age} />
                              </div>
                              <div className="signup-age-sex__sex">
                                <span className='signup-lebel'>Sex</span>
                                <DropdownInput  options={[GENDER.MALE,GENDER.FEMALE,GENDER.OTHERS]} onChange={(n)=>setGender(n)} value={gender}  fullClassName={'signup-input_small'}/>
                              </div>
                              <div className="signup-age-sex__group">
                                <span className='signup-lebel'>Group</span>
                                <DropdownInput  options={BLOODGROUP} onChange={(n)=>setBloodGroup(n)} value={bloodGroup} fullClassName={'signup-input_small'}/>
                              </div>
                            </div>
                            <div className="slider-2-buttons">
                              <Button onClick={handleSlider}>Next</Button>
                            </div>
                          </div>
                          <div className="signup-slider-right" style={{zIndex:slide===2?1:0}}>
                            <span className='signup-lebel'>Vill/City Name</span>
                            <Input2 onChange={(n)=>setArea(n)} value={area} />
                            <span className='signup-lebel'>Pincode</span>
                            <Input2  onChange={(n)=>setPincode(n)} value={pincode}/>
                            <span className='signup-lebel'>State</span>
                            <DropdownInput options={data.states.map(s=>s.state)} onChange={(s)=>setState(s)} value={state}/>
                            <span className='signup-lebel'>District</span>
                            <DropdownInput options={data.states.find(s=>s.state===state).districts} onChange={(s)=>setDist(s)} value={dist}/>
                            <div className='signup-terms'>
                              <input type='checkbox' onChange={(e)=>setTermsStatus(e.target.checked)} value={termsStatus} />
                              <span>I aggree to the </span>
                              <span>terms and conditions</span>
                            </div>
                            <div className="slider-2-buttons">
                              <Button onClick={()=>setSlide(1)}>{'<'}</Button>
                              <Button className={'signup-button'} onClick={handleSignup}>Sign up</Button>
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