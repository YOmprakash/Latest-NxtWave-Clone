import React from 'react'
import { FaPhone } from "react-icons/fa6";

export default function MentorSection() {
  return (
    <section className='bg-white py-16'>
      <div className='max-w-[1200px] mx-auto'>
        <h2 className='text-2xl font-semibold text-center text-[#183b56] mb-10'>
          Our top-notch teams are involved in helping you learn programming, not just coding.
        </h2>

        <div className='space-y-10'>
          <div className='flex flex-wrap justify-between gap-8'>
            {/* Trainers Section */}
            <div className='flex-1'>
              <div className='bg-[#f7f7f7] p-6 rounded-lg shadow'>
                <h4 className='text-lg font-semibold mb-4'>
                  <span className='text-[#183b56]'>Trainers</span> are alumni of IITs and Top MNCs
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/Rahul_trainer.png' alt='rahul' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Rahul</h1>
                      <p className='text-sm text-gray-600'>Ex. Amazon</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/avinash-image-v2.png' alt='Avinash Dara' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Avinash Dara</h1>
                      <p className='text-sm text-gray-600'>Ex. Nvidia</p>
                    </div>
                  </div>
                </div>
                <p className='text-sm text-gray-600 mt-4'>and more...</p>
              </div>
            </div>

            {/* Product Developers Section */}
            <div className='flex-1'>
              <div className='bg-[#f7f7f7] p-6 rounded-lg shadow'>
                <h4 className='text-lg font-semibold mb-4'>
                  Get doubts resolved by <span className='text-[#183b56]'>Product Developers</span>
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/revanth_product_developer.jpg?auto=format,compress&q=80' alt='Revanth' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Revanth</h1>
                      <p className='text-sm text-gray-600'>Backend Architect <br /> IIT Guwahati</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img src='https://nxtwave.imgix.net/ccbp-website/Home/pavan-img-trainer.png?auto=format,compress&q=80' alt='Pavan' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Pavan</h1>
                      <p className='text-sm text-gray-600'>Software Development Lead <br /> BIT Mesra</p>
                    </div>
                  </div>
                </div>
                <p className='text-sm text-gray-600 mt-4'>and more...</p>
              </div>
            </div>

            {/* Career Coaches Section */}
            <div className='flex-1'>
              <div className='bg-[#f7f7f7] p-6 rounded-lg shadow'>
                <h4 className='text-lg font-semibold mb-4'>
                  <span className='text-[#183b56]'>Career Coaches</span> help you land your first job
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/sriram_teja_career_coach.png' alt='Sriram Teja' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Sriram Teja</h1>
                      <p className='text-sm text-gray-600'>AIR 84, IIT Bombay</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/Trivikram_career_coach.png' alt='Trivikram' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Trivikram</h1>
                      <p className='text-sm text-gray-600'>AIR 93, IIT Delhi</p>
                    </div>
                  </div>
                </div>
                <p className='text-sm text-gray-600 mt-4'>and more...</p>
              </div>
            </div>

            {/* Masterclasses Section */}
            <div className='flex-1'>
              <div className='bg-[#f7f7f7] p-6 rounded-lg shadow'>
                <h4 className='text-lg font-semibold mb-4'>
                  Gain expert insights from <span className='text-[#183b56]'>Masterclasses</span>
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/Master_class_Rakesh_misra.png?auto=format,compress&q=80' alt='Rakesh Misra' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Rakesh Misra</h1>
                      <p className='text-sm text-gray-600'>Cofounder, Uhana <br /> Stanford Alumnus</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/pranavi_master_class.png?auto=format,compress&q=80' alt='Pranavi' className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                      <h1 className='text-md font-semibold text-[#183b56]'>Pranavi</h1>
                      <p className='text-sm text-gray-600'>Machine Learning <br /> Scientist, Apple</p>
                    </div>
                  </div>
                </div>
                <p className='text-sm text-gray-600 mt-4'>and more...</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <FaPhone color='#fff' />
          <button type='button' className='ml-2 bg-[#183b56] text-white py-2 px-4 rounded'>
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  )
}
