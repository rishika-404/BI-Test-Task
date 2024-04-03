import React from 'react';
import { MdDashboard, MdCoronavirus } from 'react-icons/md';
import { PiSmileySadDuotone } from 'react-icons/pi';
import { HiBeaker } from 'react-icons/hi2';
import { FaHandHoldingUsd, FaBars } from 'react-icons/fa';
import { TiMessageTyping } from 'react-icons/ti';
import { CiSettings } from 'react-icons/ci';

const Sidebar = () => {
    return (
        <div className='w-16 h-[800px] flex flex-col justify-between items-center text-2xl text-gray-400 absolute top-[63px]  rounded-full bg-blue-800 '>
            <div className="mx-auto text-3xl text-white mt-3">
                <MdCoronavirus />
            </div>
            <nav className="flex flex-col justify-center gap-4 mx-auto text-xl text-zinc-300 ">
                <span className="opacity-75 hover:opacity-100 cursor-pointer">
                    {" "}
                    <MdDashboard />{" "}
                </span>
                <span className="opacity-75 hover:opacity-100 cursor-pointer">
                    {" "}
                    <PiSmileySadDuotone />{" "}
                </span>
                <span className="opacity-75 hover:opacity-100 cursor-pointer">
                    {" "}
                    <HiBeaker />{" "}
                </span>
                <span className="opacity-75 hover:opacity-100 cursor-pointer">
                    {" "}
                    <FaHandHoldingUsd />{" "}
                </span>
                <span className="opacity-75 hover:opacity-100 cursor-pointer">
                    {" "}
                    <TiMessageTyping />{" "}
                </span>
            </nav>
            <div className='mb-4 cursor-pointer'>
                <CiSettings />
            </div>
        </div>
    );
};

export default Sidebar;
