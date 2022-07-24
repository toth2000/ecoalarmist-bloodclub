import React, { useEffect } from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput'
import Input2 from '../../Components/input2/input'
import { MdOutlineDriveFileRenameOutline, MdOutlinePhone, MdBloodtype, MdKeyboardArrowDown } from 'react-icons/md'
import './PatientFormPage.css'
import CustomButton from '../../Components/CustomButton/CustomButton'

const PatientFormPage = () => {

  const arrowButtonClickHandler = () => {
    window.scrollTo({top : window.innerHeight, left : 0, behavior : 'smooth'});
  }

  const formOnSubmitHandler = async() => {
    
  }

  return (
    <>
      <div className='patient-form-page__full-div'>
          <div className='patient-form-page__logo-div'>
            <div className='patient-form-page__tagline__div'>
              <span className='patient-form-page__logo-div__text'>At your doorstep</span>
              <br/>
              <MdBloodtype className='patient-form-page__logo-div__blood-icon'/>
            </div>
              <div onClick = {arrowButtonClickHandler} className='patient-form-page__bottom-arrow__div'>
                <MdKeyboardArrowDown className='patient-form-page__bottom-arrow patient-form-page__bottom-arrow1'/>
                <MdKeyboardArrowDown className='patient-form-page__bottom-arrow patient-form-page__bottom-arrow2'/>
              </div>
          </div>
          <div className='patient-form-page__form-div'>
            <form onSubmit = {formOnSubmitHandler} className='patient-form-page__form'>

              <span className='patient-form-page__header'>For your service</span>
              <MdBloodtype
                className='patient-form-page__header__blood-icon'
              />

              <br/>
              <br/>
              <br/>
              <div className='underline' style = {{width : 'calc(100% + 80px)', transform : 'translateX(-40px)'}}/>
              <br/>

              <CustomInput
                icon = {<MdOutlineDriveFileRenameOutline/>}
                placeholder = 'Patient name'
                name = 'patientName'
                type = 'text'
                width = '100%'
              />
              <br/>
              <CustomInput
                icon = {<MdOutlinePhone/>}
                placeholder = 'Phone No.'
                name = 'phoneNo'
                type = 'text'
                width = '100%'
              />
              <br/>
              <div className='underline' style={{margin : '20px auto', width : '100%'}}/>
              <br/>
              <CustomButton
                type = 'submit'
                text = 'REQUEST FOR BLOOD'
              />
            </form>
          </div>
      </div>
    </>
  )
}

export default PatientFormPage