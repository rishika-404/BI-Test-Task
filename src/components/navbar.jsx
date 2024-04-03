import './covid19.css'
import React from 'react'
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
    return (

        <div className='h-20 w-[1300px] mx-auto flex items-center justify-between'>
            <div className='ml-20'>
                <p className='text-purple-700 font-semibold text-2xl'>Covid-19</p>
                <div>Live Tracker Dashboard</div>
            </div>
            <div className='flex justify-center items-center'>
                <input type="text"
                    placeholder='Search...'
                    className='p-3 rounded-full border-none outline-none appearance-none bg-gray-200'
                />
                <IoSearchOutline className="relative right-6 text-zinc-400" />
            </div>
            <div className='flex items-center justify-center mr-3 gap-1'>
                <img src='/profile.svg' alt='profile image' className='w-7 h-7 flex justify-center'></img>
                <img src="/vector.svg" alt="" className='w-4 h-4 ' />
                <img src='/line.svg' alt='line icon' className='w-10'></img>
                <img src='/noti.svg' alt="notification" className='w-6 h-6'></img>
                <img src='/logouticon.svg' alt='logout' className='w-5 h-5 mt-[-7px]' ></img>
            </div>
        </div>
    )
}

export default Navbar