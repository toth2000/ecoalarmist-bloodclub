import React from 'react'
import './CustomButton.css'

const CustomButton = ({text, onClick, style, className}) => {
  return (
    <>
        <button onClick = {() => {onClick && onClick()}} style = {style && style} className={`custom-button ${className}`}>{text}</button>
    </>
  )
}

export default CustomButton