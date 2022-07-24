import React from 'react'
import './CustomButton.css'

const CustomButton = ({text, onClick, style, className, type}) => {
  return (
    <>
        <button type = {type && type} onClick = {() => {onClick && onClick()}} style = {style && style} className={`custom-button ${className}`}>{text}</button>
    </>
  )
}

export default CustomButton