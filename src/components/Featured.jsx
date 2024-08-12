import React from 'react';
import { FaPhone } from 'react-icons/fa6';

export default function FeaturedSection() {
  return (
    <section className='bg-white py-16 px-12'>
      <div className='max-w-[1260px] mb-4 mx-auto flex flex-col items-center justify-center'>
        <h2 className='text-[#183b56] text-center tracking-[0.5px] uppercase font-semibold text-lg mb-8'>
          Featured in
        </h2>
        <img
          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/as-seen-in/featured-in-section-desktop.png'
          alt='desktop-feature'
          className='w-full hidden md:block'
        />
        <img
          src='https://nxtwave.imgix.net/ccbp-website/intensive/as-seen-in/featured-in-section-mobile.png?auto=format,compress&q=80'
          alt='mobile-feature'
          className='w-full block md:hidden'
        />
        <div className='flex items-center justify-center py-4 px-5 bg-[#1565d8] rounded-lg mt-8'>
          <FaPhone color='#fff' />
          <button
            type='button'
            className='ml-2 cursor-pointer text-white text-lg bg-transparent border-none outline-none'
          >
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  );
}
