import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icons/mobile-menu.svg';
import logo_circle from '../assets/images/logo_circle.svg';

const Nav = () => {
  const [ sidebar, setSidebar ] = useState(false);
  const ref = useRef();
  const button = document.getElementById('menu-button');
  
  useEffect(() => {
    const checkIfClickedOutside = e => {
      console.log(e.target);
      console.log(button);
      console.log(e.target !== button);
      if (sidebar && ref.current && !ref.current.contains(e.target) && e.target !== button ) {
        setSidebar(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [sidebar])
  
  const handleClick = () => {
    if (sidebar === false) {
      setSidebar(true);
    }else {
      setSidebar(false)
    }
  }

  const handleClose = () => {
    setSidebar(false);
  }

  return (
    <div className="w-full h-[59px] fixed top-0 lg:h-20 bg-gray-50">
      <nav className="w-full px-2 md:px-6 lg:px-[25rem] z-0 flex justify-between items-center">
        <Link to="/"><img src={logo} alt="logo" className="h-[30px] mt-5 w-auto lg:h-[32px]" /></Link>
        <div className="flex">
          <ul className="hidden lg:flex justify-center items-center">
            <li className="w-full text-left px-4">Product</li>
            <li className="w-full text-left px-4">Pricing</li>
            <li className="w-full text-left px-4">Developer</li>
            <li className="w-full text-left px-4" onClick={() => {handleClose()}}><Link to="/support">Support</Link></li>
            <li className="w-full text-left px-4" onClick={() => {handleClose()}}><Link to="/about">About</Link></li>
            <li className="w-full">
              <button type="button" className="rounded w-48 h-12 bg-[#ffb74d] hover:bg-[#e65100] hover:text-white">REQUEST DEMO</button>
            </li>
          </ul>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => handleClick()}>
              <img src={menu} id="menu-button"  alt="menu-icon" />
            </button>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      <div ref={ref} className={(sidebar)? "w-4/5 md:2/4 bg-[#191612] h-full visible fixed inset-0 z-30" : "invisible"}>
        <div className="h-32 w-full flex justify-center border-gray-500 border-b">
          <img src={logo_circle} alt="Toucan_payments_logo" className="w-12" />
        </div>
        <ul className="">
          <li className="w-full border-gray-500 py-2 border-b text-left px-4 text-white">Product</li>
          <li className="w-full border-gray-500 py-2 border-b text-left px-4 text-white">Pricing</li>
          <li className="w-full border-gray-500 py-2 border-b text-left px-4 text-white">Developer</li>
          <li className="w-full border-gray-500 py-2 border-b text-left px-4 text-white" onClick={() => {handleClose()}}><Link to="/support">Support</Link></li>
          <li className="w-full border-gray-500 py-2 border-b text-left px-4 text-white" onClick={() => {handleClose()}}><Link to="/about">About</Link></li>
          <li className="w-full border-gray-500 py-2 border-b text-left px-4 text-white">Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
