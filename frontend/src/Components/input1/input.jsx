import React from 'react'

import './input.css'
const Input1=({name,placeholder,className,onChange,value})=> {
  return (
    <input title={name} className={`input1 ${className}`} value={value} onChange={(e)=>onChange && onChange(e.target.value)} placeholder={placeholder} type="text" name={name} id="" />
  )
}

export default Input1