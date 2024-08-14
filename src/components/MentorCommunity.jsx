import React from 'react'
import { FaPhone } from "react-icons/fa6";
import sm from '../assets/mentor-comu-mobile.avif';
import lg from '../assets/mentor-com-lg.avif';

export default function MentorComunity() {
  return (
    <section className='bg-white w-full '>
      <div className=' mx-auto py-16 md:px-16 px-4'>
        <h2 className='text-[#183b56] text-left text-[28px] md:text-[38px] font-semibold mb-4 leading-[44px]'>Mentor Community</h2>
        <p className='text-[#5a7184]  text-[16px] font-normal md:leading-[28px] mb-8'>
          Our mentor community strongly believes in the power of sharing!<br />
          We collaborate with professionals from great companies to guide you on this exciting journey.
        </p>
        <img src={lg} alt='mentor-community-lg' className='w-full hidden md:block' />
        <img src={sm} alt='mentor-community-sm' className='w-full md:hidden' />
        <p className='text-[#5a7184] text-[16px] font-semibold text-right mt-4'>and many more</p>
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
