import React from 'react'
import { CiWallet } from "react-icons/ci";
import '.././index.css'
import { GoHomeFill} from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";


function NavbarTop() {
  return (
    <div>
        <div className='w-[208px] h-[36px] rounded-sm px-2 py-4 gap-3 flex flex-row  '>
            <GoHomeFill/>
            <p className='w-[40px] h-[20px] pb-3 text-white text-red-500 bg-white '>Home</p>
        </div>
        <div className='w-[208px] h-[36px] rounded-sm px-2 py-4 gap-3 flex flex-row '>
            <GoHomeFill/>
            <p className='w-[40px] h-[20px] '>Home</p>
        </div>
        <div className='w-[208px] h-[36px] rounded-sm px-2 py-4 gap-3 flex flex-row '>
            <GoHomeFill/>
            <p className='w-[40px] h-[20px] '>Home</p>
        </div>
        <div className='w-[208px] h-[36px] rounded-sm px-2 py-4 gap-3 flex flex-row '>
            <CiDeliveryTruck />
            <p className='w-[40px] h-[20px] '>Home</p>
        </div>
        <div className='w-[208px] h-[36px] rounded-sm px-2 py-4 gap-3 flex flex-row '>
            <GoHomeFill/>
            <p className='w-[40px] h-[20px] '>Home</p>
        </div>
    </div>
  )
}

export default NavbarTop