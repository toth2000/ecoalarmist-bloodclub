import React from 'react'
import { useState } from 'react'

import './input.css'
const Input2=({name,placeholder,className,onChange,value,disabled,type})=> {
  const [focus,setFocus]=useState(false);
  return (
    <div className="input2-fulldiv">
      <input disabled={disabled?true:false} typeof={type} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} title={name} className={`input2 ${className}`} value={value} onChange={(e)=>onChange && onChange(e.target.value)} placeholder={placeholder} type="text" name={name} id="" />
      <div className='input2-background' style={{transform:`scaleX(${focus?1:0})`}}></div>
    </div>
  )
}

export default Input2