import React from 'react'
import { FaSearch, FaHome } from 'react-icons/fa'
import { CgProfile } from 'react-icons/Cg'
import { BiAddToQueue } from 'react-icons/Bi'
import Link from 'next/link'


const Sidebar = () => {
  return (

    <div className=" mr-18 h-screen bg-[#1e1f23]  space-y-3 border-r border-r-gray-800  ">

      <div className='flex flex-col px-4 space-y-8 items-center '>
        <h1 className='text-white font-bold mt-10 text-2xl  '>SOCIO-CHAIN</h1>
        <div className="flex w-full bg-slate-700 justify-center items-center px-2 py-1 rounded-full text-white space-x-2">
          <FaSearch size={14} />
          <input className="bg-transparent w-full outline-none text-lg" placeholder='Search' />
        </div>
      </div>

      <div className='px-2'>
        <h1 className='text-slate-200 mt-10 text-xl px-5'>General</h1>
        <ul className='mt-5 text-white flex flex-col space-y-3'>
          <Link href='/' className='flex items-center space-x-4 text-xl hover:bg-gray-700 hover:text-blue-500 py-2 px-4 transition duration-200 rounded-3xl font-out tracking-wide '><FaHome /><span>Home</span></Link>
          <Link href='/' className='flex items-center space-x-4 text-xl hover:bg-gray-800 hover:text-blue-500 py-2 px-4 transition duration-200 rounded-3xl tracking-wide'><BiAddToQueue /><span>New Post</span></Link>

          <Link href='/' className='flex items-center space-x-4 text-xl hover:bg-gray-700 hover:text-blue-500 py-2 px-4 transition duration-200 rounded-3xl tracking-wide'><CgProfile /><span>Profile</span></Link>


        </ul>
      </div>



    </div>

  )
}

export default Sidebar