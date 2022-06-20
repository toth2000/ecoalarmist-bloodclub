import React from 'react'

import './input.css'
const Input1=({name,placeholder,className})=> {
  return (
    <input title={name} className={`input1 ${className}`} placeholder={placeholder} type="text" name={name} id="" />
  )
}

export default Input1