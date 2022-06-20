import React from 'react'

import './button.css'
const Button=({name,className,onClick,children})=> {
  return (
    <button className={`button1-btn ${className}`} onClick={()=>onClick && onClick()} name={name}>{children}</button>
  )
}

export default Button