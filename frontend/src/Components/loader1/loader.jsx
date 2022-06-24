import React from 'react'
import './loader.css';
const Loader=({className})=> {
  return (
    <div className={`loader-1-fulldiv ${className}`}>
        <bar></bar>
        <bar></bar>
        <bar></bar>
    </div>
  )
}

export default Loader