import React from 'react'
import logo from './../assets/Images/logo.png'

function Header() {
  return (
<div className="flex items-center mt-[5%]">
  {/* <img src={logo} className="w-[30px] mr-4" alt="Logo" /> */}

  {/* Center the ul using flex-grow or flex-1 */}
  <ul className="flex flex-1 justify-center gap-4 md:gap-14">
    <li className="hover:font-bold cursor-pointer">Home</li>
    <li className="hover:font-bold cursor-pointer">About</li>
    <li className="hover:font-bold cursor-pointer">Contact</li>
  </ul>
</div>
  )
}

export default Header