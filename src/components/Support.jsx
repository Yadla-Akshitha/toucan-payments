import React from 'react';
import email from "../assets/images/icons/email.svg";
import location from "../assets/images/icons/locations.svg";
import phone from "../assets/images/icons/phone.svg";
import operational_hours from "../assets/images/icons/oprational_hourse.svg";
import end_to_end from "../assets/images/End-to-End_support.png";

function Support() {
  return (
    <div className="bg-bg-lightgrey2 mt-16">
      <div className="px-2 bg-primary2 text-white">
        <h1 className="font-extrabold text-[28px] pt-10">Support</h1>
        <p className="text-bg-lightgrey2 text-lg pb-4 pt-3">Got a query on the platform? let us clarify it to you!</p>
      </div>
      <div className="px-3">
        <h2 className="text-[28px] font-bold pt-10">Reach Us Here</h2>
        <p className="text-bg-black mt-2">Dedicated Support team to assist you 24/7</p>
        <div className="w-full bg-white rounded-xl shadow-2xl mb-9 pb-8">
          <div>
            <div className="flex item-start m-4 pt-6">
              <img src={email} alt="image" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">Email</p>
                <p className="text-bg-black text-sm">sales@toucanus.com</p>
              </div>
            </div>
            <div className="flex item-start m-4 pt-4">
              <img src={location} alt="location" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">US Office</p>
                <p className="text-bg-black text-sm">805 Savannah Trl, South Lake, TX 76092</p>
              </div>
            </div>
            <div className="flex item-start m-4 pt-4">
              <img src={phone} alt="phone_no" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">Phone no.</p>
                <p className="text-bg-black text-sm">+91 6309701112</p>
              </div>
            </div>
            <div className="flex item-start m-4 pt-4">
              <img src={location} alt="location" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">India Office</p>
                <p className="text-bg-black text-sm">Plot No. 45, Phase 1, Kavuri Hills, Hyderabad-500033, Telangana, India.</p>
              </div>
            </div>
            <div className="flex item-start m-4 pt-4">
              <img src={operational_hours} alt="location" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">Operational Hours</p>
                <p className="text-bg-black text-sm">
                  <span>Mon - Fri : 9AM - 7PM</span><br />
                  <span>Sat : 9AM - 1PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-yellow w-11/12 mx-auto py-2 rounded-2xl">
            <h2 className="text-[32px] text-text font-bold leading-tight text-center py-8">Dedicated support team to assist you 24/7</h2>
            <div className="text-center">
              <button className="bg-secondary text-white p-2 rounded-md w-52 uppercase">Request a call back</button>
            </div>
            <img src={end_to_end} alt="end_to_end" className="w-8/12 text-center my-4 mx-auto" />
          </div>
        </div>
      </div>

      <h2 className=" text-center mx-4 font-extrabold text-[28px]">Frequently Asked Questions</h2>
    </div>
  );
}

export default Support;
