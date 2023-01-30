import React from 'react';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <div className="bg-bg-lightgrey2 lg:px-[25rem]">
      <hr className="border border-0 border-b-2 border-dotted p-4 border-bg-black"/>
      <div>
        <p>
          <img src={logo} alt="toucan-payments" />
          <span className="text-sm font-bold">© Toucan Payments LLC 2021</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
