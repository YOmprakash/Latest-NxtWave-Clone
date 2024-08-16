import React from "react";
import { FaPhone } from "react-icons/fa6";
import awards from "../assets/Images/awardImg"; // Import the default export

const AwardSection = () => {
  const {
    BestSkill,
    AwardBussiness,
    BrandLeader,
    Preferred,
    Forbes,
    TrustBrand,
    THub,
  } = awards;

  return (
    <section className="bg-[#212635] w-full">
      <div className="mx-auto flex flex-col py-[64px] px-6 md:px-4 lg:px-[64px]">
        {/* Title of the section */}
        <h1 className="text-white text-center font-semibold text-[20px] md:text-4xl leading-16 mb-0">
          Received Prestigious Awards
        </h1>

        {/*  4 Award container */}
        <div className="flex flex-col items-center justify-center w-full md:flex-row md:justify-between">
          {/* First set of awards container */}
          <div className="flex items-center justify-between w-full gap-4 mt-6 md:justify-center md:space-x-8">
            {/* Award 1 container */}
            <div className="flex items-end justify-center w-full md:w-auto">
              <img src={BestSkill} alt="best skill award" className="h-[117px] w-12 object-contain" />
              <div className="flex flex-col ml-2 text-left ">
                <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold text-[10px] md:text-xs mb-1">
                  Recognised as
                </h4>
                <h2 className="text-white font-bold text-[11px] md:text-[16px]   md:leading-6">
                  Best Tech Skilling <br/> EdTech Company
                </h2>
                <p className="text-white font-semibold text-[8px] md:text-[10px] md:leading-4 mt-1">
                  by Times Business Awards in 2022
                </p>
              </div>
            </div>

            {/* Award 2 container */}
            <div className="flex items-end justify-center w-full md:w-auto">
              <img src={TrustBrand} alt="trust brand award" className=" h-[97px] object-contain" />
              <div className="flex flex-col ml-3 text-left">
                <h4 className="bg-clip-text mb-1 text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold text-[10px] md:text-xs">
                  Recognised as
                </h4> 
                <h2 className="text-white  font-bold text-[11px]  md:text-[16px]  md:leading-6">
                  Trusted Brand in Education
                </h2>
                <p className="text-white mt-1 font-semibold text-[8px] md:text-[10px] md:leading-4">
                  by Prime Insights in 2023
                </p>
              </div>
            </div>
          </div>
          {/* Award 3 & 4 second award container*/}
          <div className="flex items-center justify-between w-full md:justify-center md:space-x-10 ">
            <img
              src={Preferred}
              alt="preferred award"
              className="h-[150px] w-[180px] object-contain"
            />

            <img
              src={BrandLeader}
              alt="brand leader award"
              className="h-[150px] w-[180px] object-contain"
            />
          </div>
        </div>

      
       

          {/* Award 6 & 7 & 8 */}
          <div className="flex flex-col items-center justify-center w-full mt-8 space-y-6 md:justify-between md:flex-row md:gap-3">
          {/* Award 6 */}
          <div className="flex flex-col items-center justify-center w-full md:max-w-xs">
            <img
              src={Forbes}
              alt="forbes award"
              className="object-contain w-full md:max-w-xs"
            />
            <p className="w-full mt-4 text-sm text-center text-white ">
              Founders Mr. Anupam Pedarla and Mr. Sashank Gujjula made it to the
              prestigious 2024 Forbes India 30 Under 30 list!
            </p>
          </div>

          {/* Award 7 */}
            <div className="flex flex-col items-center justify-center w-full md:max-w-xs">
              <img
                src={AwardBussiness}
                alt="award business"
                className="object-contain w-full mb-4 "
              />
              <p className="w-full text-sm text-center text-white ">
                Mr. Sashank Gujjula, Co-founder, NxtWave, receiving the ‘Best
                Tech Skilling EdTech Company’ award by Times Business Awards
              </p>
            </div>

            {/* Award 8 */}
            <div className="flex flex-col items-center justify-center w-full md:max-w-xs">
              <img src={THub} alt="t-hub award" className="object-contain w-full mb-4 " />
              <p className="w-full text-sm text-center text-white ">
                Mr. Sashank Gujjula, Co-founder, NxtWave, receiving the
                prestigious award by T-Hub 
              </p>
            </div>
          </div>
        </div>
   
    </section>
  );
};

export default AwardSection;
