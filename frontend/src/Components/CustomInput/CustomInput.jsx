import React from 'react'
import './CustomInput.css'

const CustomInput = ({icon, placeholder, text, onChange, className, name, type, style, height, width}) => {
    return (
        <div style = {{height : height ? height : 'fit-content', width : width ? width : 'fit-content'}} className='custom-input__wrapper-div'>
            {icon && <div className='custom-input__icon'>
                {icon}
            </div>}
            <input style = {{style}} onChange = {() => {onChange && onChange()}} required className={`custom-input ${className}`} type={type ? type : 'text'} name={name && name} />
            <span style = {{left : !icon && '0'}} className='custom-input-placeholder'>{placeholder ? placeholder : 'placeholder'}</span>
        </div>
    )
}

export default CustomInput