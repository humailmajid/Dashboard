import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState()

  return (
    <>
    <nav className='bg-[#FFCC00] text-black p-4 rounded-tl-full rounded-bl-full w-full h-16 px-4'>
      <div className='mx-auto flex justify-between '>

        <div className='font-inter font-medium text-xl leading-6 px-10'>
          Designer
        </div >
        <div className='font-inter font-medium text-lg leading-6'>

          <ul className='flex space-x-10 pr-20 '>
            <li>
              <Link to='/'>
                <div>
                  Home
                </div>
              </Link>
            </li>
             <li>
              <Link to='/About'>
                <div>
                  Contact
                </div>
              </Link>
            </li>
            <li>
              <Link to='/Contact'>
                <div>
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link to='/Contact'>
                <div>
                  Pricing
                </div>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    <div className=''></div>
    </>
  )
}

export default Navbar