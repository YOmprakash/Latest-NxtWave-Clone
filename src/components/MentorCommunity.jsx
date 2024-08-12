import React from 'react'
import { FaPhone } from "react-icons/fa6";

export default function MentorComunity() {
  return (
    <section className='bg-white block'>
      <div className='max-w-[1200px] mx-auto py-16 px-16'>
        <h2 className='text-[#183b56] text-left text-[38px] font-semibold mb-6 leading-[44px]'>Mentor Community</h2>
        <p className='text-[#5a7184] text-[16px] font-normal leading-[28px] mb-3'>
          Our mentor community strongly believes in the power of sharing!<br />
          We collaborate with professionals from great companies to guide you on this exciting journey.
        </p>
        <img src='https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-companies.png?auto=format,compress&q=80' alt='mentor-community' className='w-full hidden md:block' />
        <img src='https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-mobile.png' alt='mentor-community' className='w-full md:hidden' />
        <p className='text-[#ebe6e6] text-[16px] font-semibold text-right mt-4'>and many more</p>
        <div className='flex items-center justify-center mt-6'>
          <FaPhone color='#fff' />
          <button type='button' className='ml-2 bg-[#183b56] text-white py-2 px-4 rounded'>
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  )
}
