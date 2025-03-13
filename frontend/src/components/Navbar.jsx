import React from 'react'
import { MdWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = ({theme , handletheme}) => {

  return (
    <div className='w-full flex justify-between px-7 py-3 shadow-xl dark:bg-gray-800 dark:text-white'>
        <h1 className='text-3xl bold'>React Todo</h1>
        <button 
        onClick={handletheme}
        className='py-2 text-2xl rounded border-2 px-4'>
          {theme ? <MdWbSunny /> : <IoMoonSharp />}
        </button>
    </div>
  )
}

export default Navbar