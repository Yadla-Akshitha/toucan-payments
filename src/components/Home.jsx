import React from 'react';
import { Link } from "react-router-dom";
import toucanDashboard from "../assets/images/toucan_banner_1.png";
import shopeefix from "../assets/images/Shopeefix_Logo.png";
import Qfix from "../assets/images/Qfix_Navy_Logo.png";
import bhagwaanji from "../assets/images/Bhagwaanji_logo.png";
import { flexible_objects } from '../objects/flexibility';
import sandbox from "../assets/images/icons/Libraries.svg";
import API_integration from "../assets/images/icons/API_Inegration.svg";
import Developer from "../assets/images/Developer.png";
import end_to_end from "../assets/images/End-to-End_support.png";
import CarouselComponent from './CarouselComponent';
import 'swiper/css';
import StoriesComponent from './StoriesComponent';

const Home = () => {
  return (
    <div className="bg-bg-lightgrey2 mt-[59px] lg:pb-14">
      {/**Dashboard */}
      <div className="flex flex-col md:flex-row justify-center items-center lg:justify-between md:pl-4 md:pt-24">
        <div className="mx-4 mt-[60px] md:mt-0 text-left md:w-1/2 lg:pl-12 xl:pl[25rem] lg:mx-0">
          <h1 className="font-bold leading-tight text-[26px] lg:text-[36px] lg:w-[470px] text-gray-700 lg:mt-20">Merchant Acquiring and Aggregation Made Simple</h1>
          <div className="text-base text-gray-700 mt-[10px] lg:w-[470px]">
            <p>Modular services that help you choose and pay for just what you need.</p>
            <p className=" mt-3 mb-0 text-opacity-80">Address financial hurdles as businesses go global. Toucan&apos;s modules help you power payments for your merchants and cater to their collection, remittance, reporting, decision making, disputes and everything in between.</p>
            <p className="uppercase text-500 tracking-wide text-medium mt-[21px]">Empower business finance in the new digital era.</p>
            <button type="button" className="rounded w-48 h-12 bg-[#ffb74d] mt-6 font-bold">REQUEST DEMO</button>
          </div>
        </div>
        <div className="mt-8 md:m-0 md:w-1/2 lg:w-2/5">
          <img src={toucanDashboard} alt="toucan-dashboard" className="w-full object-cover" />
        </div>
      </div>
      {/** trusted brands */}
      <div className="px-10 md:px-16 xl:px-[25rem] py-12 my-14 bg-bg-lightgrey">
          <h2 className="text-gray-500 text-lg font-bold">Trusted by brands you know</h2>
        <div className="flex justify-center items-center md:justify-start my-4">
          <img src={shopeefix} alt="shopeefix" className="w-28 lg:w-40 m-2 lg:mr-6" />
          <img src={Qfix} alt="shopeefix" className="w-20 lg:w-34 m-2 lg:mr-6" />
          <img src={bhagwaanji} alt="shopeefix" className="w-28 lg:w-40 m-2" />
        </div>
      </div>
      {/** powerful modules */}
      <div className="xl:px-[25rem] px-10 py-12 md:px-16 z-0">
        <h3 className="text-secondary text-lg font-bold my-3">Toucan Powerful Modules</h3>
        <h4 className="text-4xl font-bold my-2">Lead the new digital business landscape</h4>
        <CarouselComponent />
      </div>
      {/** Why Toucan */}
      <div className="px-2 py-8 text-left md:px-16 xl:px-[25rem] border">
        <h3 className="text-secondary font-bold text-lg">Why Toucan</h3>
        <p className="font-roboto font-semibold sm:w-64 text-[18px] lg:text-4xl lg:my-4 lg:w-3/4">Flexibility enabled platform that suits multiple merchant types and sizes</p>
        <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:mt-12">
          {
            flexible_objects.map((item) => (
              <div key={item.id} className="w-full md:w-72 xl:w-[340px] mt-4 px-4 md:my-6 ">
                <img src={item.icon} alt={item.title} className="w-10 md:w-12" />
                <h4 className="mt-4 mb-2 font-bold">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
      {/** Developer */}
      <div className="bg-primary2 text-white p-4 py-10 md:px-10 lg:px-16 xl:px-[25rem] lg:flex lg:flex-row lg:justify-center lg:items-center lg:py-12">
        <div>
          <h4 className="text-secondary mt-4 font-bold text-lg">Developer</h4>
          <h5 className="text-[26px] leading-8 my-2 text-left font-extrabold">Lead the new digital business landscape</h5>
          <p className="text-sm text-grey text-opacity-100">Rich and omni channel user interface along with engaging and intuitive operating environment makes the platform easier to use.</p>
          <div className="my-4">
            <div className="flex flex-row items-start my-8">
              <img src={API_integration} alt="API_integration" />
              <div className="px-4">
                <p className="text-base font-bold">API Integration</p>
                <p className="text-sm text-grey py-2">Acquirers and aggregators can simply plug and pl1y with APIs relevant to their business.</p>
                <p className="text-accent">View Details (arrow icon)</p>
              </div>
            </div>
            <div className="flex flex-row items-start mt-12">
              <img src={sandbox} alt="libraries" className="w-8" />
              <div className="px-4">
                <p className="text-base font-bold">Sandbox</p>
                <p className="text-sm text-grey py-2">The Toucan sandbox is a virtual testing environment that simulates the live Toucan production environment."</p>
                <p className="text-accent">View Details (arrow icon)</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Developer} alt="developer" />
        </div>
      </div>
      {/** Contact us */}
      <div className="px-8 md:px-16 xl:px-[25rem]">
        <div className="mt-24 bg-bg-yellow rounded-3xl w-11/12 md:w-full mx-auto text-center lg:flex lg:flex-row lg:pb-10 lg:pl-10 lg:justify-start items-center xl:px-8">
          <div className="lg:w-1/2 lg:flex flex-col justify-start items-start">
            <h2 className="uppercase lg:text-left text-[28px] text-primary font-black m-4 px-4 pt-8 lg:px-0 lg:text-[48px] leading-tight">Your needs, <br/>our solutions!</h2>
            <div className="px-4 m-4">
              <Link to="/contact"><button className="uppercase bg-secondary text-white py-3 font-extrabold tracking-wider w-48 rounded">Contact us</button></Link>
            </div>
          </div>
          <img src={end_to_end} alt="end-to-end-support" className="w-11/12 lg:w-96 py-4 mx-auto xl:w-[510px]" />
        </div>
        <div>
          <h6 className="text-secondary font-bold text-[18px] px-5 pt-10">Customer And Partner Stories</h6>
          <div className="border h-60"><StoriesComponent /></div>
        </div>
      </div>
      <div>
        {/** stories */}
      </div>
    </div>
  );
};

export default Home;
