import React, { useState } from 'react'


import './dropdownInput.css';

const DropdownInput=({options,onChange,value})=> {
    const [focus,setFocus]=useState(false);
  return (
    <div className="dropdowninput-fulldiv">
      <select id="cars" name="cars" value={value} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e)=>onChange && onChange(e.target.value)}>
          {options && options.map(o=><option value={o} key={o}>{o}</option>)}
      </select>
      <div className="dropdowninput-background" style={{transform:`scaleX(${focus?1:0})`}}></div>
    </div>
  )
}

export default DropdownInput