import React from 'react'

const Input=({name,placeholder})=> {
  return (
    <div>
        <input title={name} placeholder={placeholder} type="text" name={name} id="" />
    </div>
  )
}

export default Input