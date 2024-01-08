import React from 'react'
import { CiWallet } from "react-icons/ci";
import '.././index.css'


function NavbarBottom() {
  return (
    <div className='flex flex-row w-[192px] h-[54px] pl-3 pt-3 bg-gray-800  gap-[10px] border-2 bg-indigo-light  text-white'>
        <div className='w-[36px] h-[36px] p-1.5'>
            <CiWallet className='w-[24px] h-[24px]'/>
        </div >
        <div className='w-[101px] h-[16px] gap-[2px]'>
            <p className='leading-4 text-sm text-opacity-80 font-normal text-white '>Available credits</p>
            <p className='leading-4 text-sm font-medium  text-white'>222.10</p>
        </div>
        
    </div>
  )
}

export default NavbarBottom