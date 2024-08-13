import React from 'react';
import { FaPhone } from "react-icons/fa6";

export default function Masterclass() {
  return (
    <section className="bg-[#183b56] py-16 px-16 md:px-6">
      {/* Container for the entire section */}
      <div className="max-w-[1200px] mx-auto">
        {/* Flex container for the main content of the section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Left column containing text and image */}
          <div className="w-full md:w-1/2 mb-5 md:mb-0 md:mr-4">
            {/* Main heading */}
            <h2 className="text-white text-[38px] font-semibold leading-tight mb-4">
              Masterclasses from Mentors in the Community
            </h2>
            {/* Supporting paragraph */}
            <p className="text-white text-[18px] leading-[36px] mb-12">
              Get insights directly from people who have been there and done that. These masterclasses not only provide directions to reach your career goals but also keep you inspired to dream without limitations and achieve them.
            </p>
            {/* Image related to masterclasses */}
            <img
              src="https://nxtwave.imgix.net/ccbp-website/professional/masterclass-community.png?auto=format,compress&q=80"
              alt="masterclass-community"
              className="w-full"
            />
            {/* Callback button */}
            <div className="flex items-center mt-4 bg-white py-2 px-4 rounded shadow-md cursor-pointer">
              <FaPhone color="#183b56" />
              <button type="button" className="ml-2 text-[#183b56]">
                Request a Callback
              </button>
            </div>
          </div>

          {/* Right column containing video preview and text */}
          <div className="w-full md:w-1/2">
            {/* Image preview of the masterclass */}
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/rakesh-misra-yt.png?auto=format,compress&q=80"
              alt="rakesh-misra-yt"
              className="w-full"
            />
            {/* Text information below the image */}
            <div className="bg-white rounded-b-md p-4 mt-2">
              <h4 className="text-[#183b56] font-bold text-[20px] mb-2">
                Sneak Peek Of Masterclass by Rakesh Misra
              </h4>
              <p className="text-[#183b56] text-[16px]">
                Co-Founder Uhana (Acquired by VMWare), Stanford, IIT Madras
              </p>
            </div>
          </div>
        </div>

        {/* Image banner for the mentor community (visible on larger screens) */}
        <img
          src="https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-companies-mobile.png"
          alt="mentor-community"
          className="hidden md:block w-full mb-8"
        />

        {/* Flex container for mentor cards */}
        <div className="flex flex-wrap justify-center mb-8">
          {/* Mentor card 1 */}
          <div className="w-[280px] bg-white rounded-md shadow-lg mb-6 md:mr-4">
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Srividya+Pranavi.png?auto=format,compress&q=80"
              alt="srividya-pranavi"
              className="w-full object-cover rounded-t-md"
            />
            <div className="p-5">
              <h2 className="text-[#183b56] text-[24px] font-medium mb-4">
                Srividya Pranavi
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Machine Learning Scientist, Apple
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Carnegie Mellon University, IIT Kharagpur
                </p>
              </div>
            </div>
          </div>

          {/* Mentor card 2 */}
          <div className="w-[280px] bg-white rounded-md shadow-lg mb-6 md:mr-4">
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Sravya+Nimmagadda.png?auto=format,compress&q=80"
              alt="srividya-pranavi"
              className="w-full object-cover rounded-t-md"
            />
            <div className="p-5">
              <h2 className="text-[#183b56] text-[24px] font-medium mb-4">
                Srividya Pranavi
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Machine Learning Scientist, Apple
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Carnegie Mellon University, IIT Kharagpur
                </p>
              </div>
            </div>
          </div>

          {/* Mentor card 3 */}
          <div className="w-[280px] bg-white rounded-md shadow-lg mb-6 md:mr-4">
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Priyatham+Bollimpalli.png?auto=format,compress&q=80"
              alt="srividya-pranavi"
              className="w-full object-cover rounded-t-md"
            />
            <div className="p-5">
              <h2 className="text-[#183b56] text-[24px] font-medium mb-4">
                Srividya Pranavi
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Machine Learning Scientist, Apple
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Carnegie Mellon University, IIT Kharagpur
                </p>
              </div>
            </div>
          </div>

          {/* Mentor card 4 */}
          <div className="w-[280px] bg-white rounded-md shadow-lg mb-6">
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/vamsi-krishna.png?auto=format,compress&q=80"
              alt="srividya-pranavi"
              className="w-full object-cover rounded-t-md"
            />
            <div className="p-5">
              <h2 className="text-[#183b56] text-[24px] font-medium mb-4">
                Srividya Pranavi
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Machine Learning Scientist, Apple
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                  Carnegie Mellon University, IIT Kharagpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
