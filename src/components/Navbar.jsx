import React from 'react'
import NavbarTop from './NavbarTop'
import NavbarBottom  from './NavbarBottom'
import '.././index.css'

function Navbar() {
  return (
    <div className='bg-teal-300  w-[224px] h-[800px]  bg-indigo-dark '>
        <NavbarTop/>
        <NavbarBottom />
    </div>
  )
}

export default Navbar