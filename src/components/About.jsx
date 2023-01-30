import React from 'react';
import team_banner from "../assets/images/about-us-banner.png";
import CountUp from 'react-countup';

const About = () => {
  return (
    <div className="pb-14">
      <div className="bg-bg-yellow mt-14 px-4 lg:px-[25rem] lg:flex justify-center items-center">
        <div>
          <h1 className="font-semibold text-[26px] leading-tight pt-20">Our Mission is to Simplify Merchant Acquiring and Aggregation</h1>
          <p className="mt-6 text-base font-bold">Established in 2019 by a group of successful entrepreneurs and payments industry veterans, Toucan strives towards filling in existing gaps in the industry with the expertise of its located in Hyderabad, Telangana. We are a new-age fintech company that offers a futuristic platform for banks and financial institutions for merchant acquiring processing. With its custom-built and highly adaptive design, it helps acquirers and financial services players to seamlessly manage their merchant portfolios. Built with a global outlook, Toucan is a powerful tool that empowers acquirers and aggregators to assist merchants to scale beyond boundaries.</p>
          <div className="flex flex-col lg:flex-row items-start my-8">
            <p className="flex flex-col items-start my-4 lg:mr-20">
              <span className="text-white text-[32px] font-bold"><CountUp start={0} end={2019} /></span>
              <span className="text-[12px]">FOUNDED</span>
            </p>
            <p className="flex flex-col items-start my-4">
              <p className="text-white text-[32px] font-bold">TEXAS<span className="text-[12px]">, USA</span></p>
              <span className="text-[12px]">HEAD QUATER</span>
            </p>
          </div>
        </div>
        <img src={team_banner} alt="team_banner" className="w-8/12 mx-auto py-8"/>
      </div>
      <div className="bg-primary2 text-white">
        <h2 className="text-6xl font-bold text-center pt-10">Join our Team</h2>
        <p className="text-sm text-center m-4 lg:mx-auto lg:w-5/12">Help us on our quest to make an excellent software even better. Let us work together towards a common goal that makes payments as simple as it can get.</p>
        <div className="text-center font-semibold pb-14">
          <button type="button" className="bg-accent text-black uppercase mx-auto p-3 rounded-sm">see current openings</button>
        </div>
      </div>
    </div>
  );
};

export default About;