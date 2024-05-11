import React from 'react'
import Sidebar from '../components/home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex gap-3 h-[98vh]'>
      <div className=' w-1/6 border border-gray-500 rounded-xl p-4 flex flex-col justify-between '><Sidebar/></div>
      <div className=' w-5/6 border border-gray-500 rounded-xl p-4 '>
        <Outlet/>
      </div>

    </div>
  )
}

export default Home