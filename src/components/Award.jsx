import React from 'react'
import { FaPhone } from 'react-icons/fa6' 
const AwardSection = () => {
  return (
    <section className='bg-[#212635] w-full'> {/* Section background color */}
      <div className='mx-auto flex flex-col py-[64px] px-[64px]'> {/* Container with padding and centered content */}
        
        {/* Title of the section */}
        <h1 className='text-white text-center font-semibold text-4xl leading-16 mb-0'>
          Received Prestigious Awards
        </h1>

<div className='flex flex-col items-center justify-center md:gap-[80px] w-full '>
        
        <div className='flex flex-row items-center justify-between w-full mt-6 md:flex-col '>
          
          {/* Award 1 container */}
          <div className='flex items-center justify-between'>
            <img
              src='https://nxtwave.imgix.net/ccbp-website/Home/best-skill.png'
              alt='award'
              className='h-28'
            />
            <div className='ml-3'>
              <h4 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold text-sm'>
                Recognised as
              </h4>
              <h2 className='text-white font-bold text-xs leading-6'>
                Best Tech Skilling EdTech Company
              </h2>
              <p className='text-white font-semibold text-xs leading-4'>
                by Times Business Awards in 2022
              </p>
            </div>
          </div>

          {/* Award 2 container */}
          <div className='flex items-center justify-between mt-6 md:mt-0'>
            <img
              src='https://nxtwave.imgix.net/ccbp-website/Home/trusted-brand.png'
              alt='award'
              className='h-28'
            />
            <div className='ml-3'>
              <h4 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold text-sm'>
                Recognised as
              </h4>
              <h2 className='text-white font-bold text-xs leading-6'>
                Trusted Brand in Education
              </h2>
              <p className='text-white font-semibold text-xs leading-4'>
                by Prime Insights in 2023
              </p>
            </div>
          </div>
        </div>

  

        {/* Second set of awards (side-by-side images) */}
        <div className='flex items-center justify-center gap-12 mt-5'>
          <img
            src='https://nxtwave.imgix.net/ccbp-website/Home/preferred.png'
            alt='award'
            className='h-28 w-28'
          />
          <img
            src='https://nxtwave.imgix.net/ccbp-website/Home/brands-leaders.png'
            alt='award'
            className='h-28 w-28'
          />
        </div>
        </div>

        {/* Third set of awards (text with image) */}
        <div className='flex flex-col items-center mt-12 space-y-8'>
          
          {/* Award 3 */}
          <div className=' flex flex-col items-center'>
            <img
              src='https://nxtwave.imgix.net/ccbp-website/Home/forbes-30-v3.png'
              alt='award'
              className='max-w-xs object-contain'
            />
            <p className='text-white text-center text-sm mt-4'>
              Founders Mr. Anupam Pedarla and Mr. Sashank Gujjula made it to the prestigious 2024
              Forbes India 30 Under 30 list!
            </p>
          </div>

          {/* Award 4 & 5 */}
          <div className='flex flex-col md:flex-row md:space-x-8'>
            <div className='flex flex-col items-center'>
              <img
                src='https://nxtwave.imgix.net/ccbp-website/Home/award-by-time-business.png'
                alt='award'
                className='max-w-xs'
              />
              <p className='text-white text-center text-sm mt-4'>
                Mr. Sashank Gujjula, Co-founder, NxtWave, receiving the ‘Best Tech Skilling EdTech
                Company’ award by Times Business Awards
              </p>
            </div>

            <div className='flex flex-col items-center mt-6 md:mt-0'>
              <img
                src='https://nxtwave.imgix.net/ccbp-website/Home/t-hub-award.png'
                alt='award'
                className='max-w-xs'
              />
              <p className='text-white text-center text-sm mt-4'>
                Mr. Sashank Gujjula, Co-founder, NxtWave, receiving the prestigious award by T-Hub
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className='flex items-center justify-center bg-white mt-6 py-4 px-8 rounded-lg mx-auto'>
          <FaPhone color='#183b56' /> {/* Phone icon */}
          <button
            type='button'
            className='ml-3 text-indigo-900 text-lg font-medium'>
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  )
}

export default AwardSection
