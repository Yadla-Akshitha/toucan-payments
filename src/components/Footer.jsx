import React from 'react';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <>
      <hr className="bg-white h-1 border-none"/>
      <div className="bg-bg-lightgrey2 lg:px-16 xlp:px-[25rem]">
      <hr className="border border-0 border-b-2 border-dotted mt-4 p-4 border-bg-black"/>
      <div className="mt-20">
        <p>
          <img src={logo} alt="toucan-payments" />
          <span className="text-sm font-bold">© Toucan Payments LLC 2021</span>
        </p>
        <div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
