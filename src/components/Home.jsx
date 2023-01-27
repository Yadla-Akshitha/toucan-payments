import React from 'react';
import toucanDashboard from "../assets/images/toucan_banner_1.png";

const Home = () => {
  return (
    <div className="font-roboto mt-20 lg:mt-24">
      {/**Dashboard */}
      <div className="flex flex-col md:flex-row justify-center items-center md:pl-8">
        <div className="mx-4 mt-[60px] md:mt-0 text-left md:w-1/2 lg:pl-[23rem] lg:mx-0">
          <h1 className="font-bold leading-tight text-[26px] lg:text-[36px] lg:w-[470px] text-gray-700">Merchant Acquiring and Aggregation Made Simple</h1>
          <div className="text-base text-gray-700 mt-[10px] lg:w-[470px]">
            <p>Modular services that help you choose and pay for just what you need.</p>
            <p className=" mt-3 mb-0 text-opacity-80">Address financial hurdles as businesses go global. Toucan&apos;s modules help you power payments for your merchants and cater to their collection, remittance, reporting, decision making, disputes and everything in between.</p>
            <p className="uppercase text-500 tracking-wide text-medium mt-[21px]">Empower business finance in the new digital era.</p>
            <button type="button" className="rounded w-48 h-12 bg-[#ffb74d] mt-6">REQUEST DEMO</button>
          </div>
        </div>
        <div className="mt-8 md:m-0 md:w-1/2">
          <img src={toucanDashboard} alt="toucan-dashboard" className="w-full object-cover" />
        </div>
      </div>
      <div>
        {/** trusted brands */}
      </div>
      <div>
        {/** powerful modules */}
      </div>
      <div>
        {/** Why Toucan */}
      </div>
      <div>
        {/** Developer */}
      </div>
      <div>
        {/** Contact us */}
      </div>
      <div>
        {/** stories */}
      </div>
    </div>
  );
};

export default Home;
