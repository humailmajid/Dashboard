import React from 'react';
import {  BsFillChatSquareDotsFill, BsThreeDots } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdMarkEmailRead, MdDashboard } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdChatboxes, IoIosStar, IoMdLogOut } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  
  return (
    
    <div className="fixed mt-2 left-0 h- w-64 bg-[#24144C] text-white px-4 py-6 rounded-tr-3xl rounded-br-3xl overflow-hidden">
      <ul className="space-y-2 mt-10 text-lg text-[FFFFFF] font-medium">
        <li className="flex items-center px-2 py-2 rounded-md bg-[#24144C]">
          <BsFillChatSquareDotsFill className="mr-2" style={{color: '#FFCC00'}}/>
          Reported Threats
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <RiUserSettingsLine className="mr-2" style={{color: '#FFCC00'}}/>
          User Management
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <MdMarkEmailRead className="mr-2" style={{color: '#FFCC00'}}/>
          Campaign Creation
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <FaCheckCircle className="mr-2" style={{color: '#FFCC00'}}/>
          Active Campaigns
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <MdDashboard className="mr-2" style={{color: '#FFCC00'}}/>
          Leaderboard
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <IoMdChatboxes className="mr-2" style={{color: '#FFCC00'}}/>
          Campaign result
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <IoIosStar className="mr-2" style={{color: '#FFCC00'}}/>
          Previous Campaigns
        </li>
        <li className="flex items-center px-2 py-2 rounded-md">
          <FaGear className="mr-2" style={{color: '#FFCC00'}}/>
          Help
        </li>
      </ul>
      <div className='pt-40 pb-10'>
        <div className="flex justify-center">
          <BsThreeDots className=''/>
        </div>
        <button className=" w-full py-4 items-center justify-center rounded-tl-full rounded-bl-full border-2 border-[#FFCC00] rounded-tr-full rounded-br-full  hover:bg-[#FFCC00] hover:text-[#1F0E36] flex font-bold text-lg">
          <IoMdLogOut className='mr-2' style={{color: '#FFCC00'}}/>
          Logout
        </button>
      </div>
      
    </div>
  );
};

export default Sidebar;
