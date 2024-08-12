import React from 'react';
import { FaPhone } from "react-icons/fa";
import './index.css';

export default function Masterclass() {
  return (
    <section className="bg-[#183b56] py-[64px] px-[64px] md:px-[24px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-[50%] mr-[10px] mb-[20px] relative md:w-full">
            <h2 className="text-white text-[38px] font-semibold leading-[64px] mb-0">Masterclasses from Mentors in the Community</h2>
            <p className="text-white mt-[16px] mb-[48px] text-[18px] leading-[36px] w-[430px]">Get insights directly from people who have been there and done that. These masterclasses not only provide directions to reach your career goals but also keep you inspired to dream without limitations and achieve them.</p>
            <img className="w-full" src="https://nxtwave.imgix.net/ccbp-website/professional/masterclass-community.png?auto=format,compress&q=80" alt="masterclass-community" />
            <div className="flex items-center bg-white py-[15px] w-[250px] justify-center rounded-[10px] mt-[20px]">
              <FaPhone color="#183b56" />
              <button className="pl-[10px] border-none outline-none bg-transparent text-[#183b56] text-[16px] font-medium">Request a Callback</button>
            </div>
          </div>
          <div className="w-[50%] md:w-full">
            <img className="w-full" src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/rakesh-misra-yt.png?auto=format,compress&q=80" alt="rakesh-misra-yt" />
            <div className="bg-[#fefefe] rounded-b-[8px] p-[16px] pb-[17px] pl-[12px] absolute top-0 w-full">
              <h4 className="text-[#183b56] mb-[14px] text-[20px] font-bold">Sneak Peek Of Masterclass by Rakesh Misra</h4>
              <p className="text-[#183b56] text-[16px] font-normal">Co-Founder Uhana (Acquired by VMWare), Stanford, IIT Madras</p>
            </div>
          </div>
        </div>

        <img className="hidden md:block w-full mb-[20px]" src="https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-companies-mobile.png" alt="mentor-community" />

        <div className="flex flex-col items-center md:hidden">
          <div className="flex items-center bg-white py-[15px] w-[250px] justify-center rounded-[10px] mb-[20px]">
            <FaPhone color="#183b56" />
            <button className="pl-[10px] border-none outline-none bg-transparent text-[#183b56] text-[16px] font-medium">Request a Callback</button>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-[280px] min-h-[180px] mb-[24px] mr-[16px]">
                <img className="w-full object-cover" src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Srividya+Pranavi.png?auto=format,compress&q=80" alt="srividya-pranavi" />
                <div className="bg-white rounded-b-[12px] p-[20px] pb-[12px]">
                  <h2 className="text-[#183b56] mb-[24px] text-[24px] font-medium">Srividya Pranavi</h2>
                  <div className="flex items-center py-[1rem]">
                    <img className="max-w-[20px] object-cover" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png" alt="bag" />
                    <p className="text-[#183b56] text-[16px] font-normal ml-[10px]">Machine Learning Scientist, Apple</p>
                  </div>
                  <div className="flex items-center py-[1rem]">
                    <img className="max-w-[20px] object-cover" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png" alt="graduation" />
                    <p className="text-[#183b56] text-[16px] font-normal ml-[10px]">Carnegie Mellon University, IIT Kharagpur</p>
                  </div>
                </div>
              </div>

              {/* Repeat similar blocks for other mentor cards */}
              
            </div>
          </div>
        </div>
        
        <p className="text-[#ebe6e6] text-right mt-[1rem] font-semibold">and many more...</p>
      </div>
    </section>
  );
}
