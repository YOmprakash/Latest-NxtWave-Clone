import React from "react";
import { FaPhone } from "react-icons/fa6";
import mentors from "../assets/Images/mentorImg";

const  MentorSection=()=> {
  const {
    Rahul,
    Avinash,
    Revanth,
    Pavan,
    Pranavi,
    Rakesh,
    Student,
    Sriram,
    Trivikram,
    ccbp,
  } = mentors;
  
  return (
    <section className="bg-[#f9fbfe]  py-16">
      {/* Main container for the entire section */}
      <div className="w-full mx-auto px-6 md:px-[64px]">
        
        {/* Section heading */}
        <h2 className="text-[#183b56] tracking-[-.5px] mt-0 mb-[48px] font-sans text-2xl md:text-[38px] font-semibold md:leading-[64px]">
          Our top notch teams involved in helping you learn programming, not just coding.
        </h2>
        
        {/* Container for trainer and student cards */}
        <div className="bg-[#f9fbfe] w-full border border-[#cbd5e1] rounded-[16px] justify-center mb-0 block">
          
          {/* Card section for trainers and product developers */}
          <div className="pt-8  flex justify-center flex-col md:flex-row items-center">
            {/* Column container for card sections */}
            <div className="flex flex-col m-auto pb-0">
              
              {/* Trainer cards section */}
              <div className="text-center mb-[16px] w-full">
                {/* Trainer card heading */}
                <h4 className="text-[#183b56] text-left mb-[12px] text-[14px] font-medium leading-[24px]">
                  <span className="text-[18px] font-semibold">Trainers</span> are alumni of IITs and Top MNCs
                </h4>
                
                {/* Trainer images and info */}
                <div className="flex items-center gap-[16px]">
                  
                  {/* Rahul Trainer card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Rahul}
                      alt="rahul"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium  text-[14px] text-center">
                      <h1 className="mt-1">Rahul</h1>
                      <p className="text-[#535353]  text-[12px]  mb-[6px]">
                        Ex. Amazon
                      </p>
                    </div>
                  </div>
                  
                  {/* Avinash Trainer card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Avinash}
                      alt="Avinash Dara"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium  text-[14px] text-center">
                      <h1 className="mt-1">Avinash Dara</h1>
                      <p className="text-[#535353]  text-[12px]  mb-[6px]">
                        Ex. Nvidia
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#5a7184] text-[12px] text-center mt-[10px] mb-[32px]">and more...</p>
              </div>
              
              {/* Product developers cards section */}
              <div className="text-center mb-[16px]">
                <h4 className="text-[#183b56] text-left mb-[12px] text-[14px] font-medium leading-[24px]">
                  Get doubts resolved by{" "}
                  <span className="text-[18px] font-semibold leading-[28px]">Product Developers</span>
                </h4>
                
                <div className="flex items-center gap-[16px]">
                  
                  {/* Revanth developer card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Revanth}
                      alt="Revanth"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium text-[14px] text-center">
                      <h1 className="mt-1">Revanth</h1>
                      <p className="text-[#535353] text-[12px]  mb-[6px]">
                        Backend Architect <br />
                        IIT Guwahati
                      </p>
                    </div>
                  </div>
                  
                  {/* Pavan Product developer card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Pavan}
                      alt="Pavan"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium  text-[14px] text-center">
                      <h1 className="mt-1">Pavan</h1>
                      <p className="text-[#535353]  text-[12px]  mb-[6px]">
                        Software Development Lead BIT Mesra
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#5a7184] text-[12px] text-center mt-[10px] mb-[32px]">and more...</p>
              </div>
            </div>
            
            {/* Student card section */}
            <div className="hidden md:block  border border-[#cbd5e1] rounded-[16px] self-center overflow-hidden ">
              <img
                src={Student}
                alt="student"
                className="h-[255px] w-full object-contain"
              />
              <div className="text-center bg-white  rounded-[16px] flex flex-col items-center mt-[-39px] p-[10px_0] relative">
                <p className="text-[#183b56] text-lg">Student at</p>
                <img src={ccbp} alt="CCBP" className="object-contain" />
              </div>
            </div>
            
            {/* Career coaches and Expert  cards section */}
            <div className="flex flex-col m-auto pb-0">
              {/* Career coaches cards section */}
              <div className="text-center mb-[16px]">
                <h4 className="text-[#183b56] text-left mb-[12px] text-[14px] font-medium ">
                  <span className="text-[18px] font-semibold ">Career Coaches</span> help you land your first job
                </h4>
                
                <div className="flex items-center gap-[16px]">
                  
                  {/* Sriram coach card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Sriram}
                      alt="Sriram Teja"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium text-center text-[14px]">
                      <h1 className="mt-1">Sriram Teja</h1>
                      <p className="text-[#535353] text-[12px] mb-[6px] ">
                        AIR 84, IIT Bombay
                      </p>
                    </div>
                  </div>
                  
                  {/* Trivikram Career coach card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Trivikram}
                      alt="Trivikram"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium  text-[14px] text-center">
                      <h1 className="mt-1">Trivikram</h1>
                      <p className="text-[#535353]  text-[12px]  mb-[6px]">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#5a7184] text-[12px] text-center mt-[10px] mb-[32px]">and more...</p>
              </div>
              
              {/* Expert  cards section */}
              <div className="text-center mb-[16px]">
                <h4 className="text-[#183b56] text-left mb-[12px] text-[14px] font-medium leading-[24px]">
                Gain expert insights from  <span className="text-[18px] font-semibold leading-[28px]">Masterclasses</span> 
                </h4>
                
                <div className="flex items-center gap-[16px]">
                  
                  {/* Rakesh leader card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Rakesh}
                      alt="Rakesh"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium  text-[14px] text-center">
                      <h1 className="mt-1">Rakesh</h1>
                      <p className="text-[#535353] text-[12px]  mb-[6px]">
                      Cofounder, Uhana<br/>
                      Stanford Alumnus
                      </p>
                    </div>
                  </div>
                  
                  {/* Pranavi Business leader card */}
                  <div className="w-[160px] border border-[#cbd5e1] rounded-[8px] overflow-hidden shadow-[1px_1px_2px_rgba(96,97,112,.16)]">
                    <img
                      src={Pranavi}
                      alt="Pranavi"
                      className="w-full object-contain"
                    />
                    <div className="text-[#183b56] font-medium  text-[14px] text-center">
                      <h1 className="mt-1">Pranavi</h1>
                      <p className="text-[#535353] text-[12px] mb-[6px]">
                      Machine Learning
                      Scientist, Apple
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#5a7184] text-[12px] text-center mt-[10px] mb-[32px]">and more...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
        <button className="flex text-white items-center  bg-blue py-3 px-6 rounded-lg mt-8 gap-2">
          
          <FaPhone color='#fff'/>
              Request a Callback
              
      </button>
      </div>
        
         </div>
        
    </section>
  );
}

export default MentorSection;

