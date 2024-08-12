import sm from '../assets/hiring-companies-mobile.png';
import lg from '../assets/hiring-companies-lg.png';
import { FaPhone } from 'react-icons/fa';

export default function HiringCompaniesSection() {
  return (
    <section className='bg-white w-full font-sans'>
      <div className=' mx-auto flex flex-col items-center  px-7 md:px-[64px] py-[64px]'>
        <h2 className='text-gray-900 text-[28px] text-center md:text-4xl md:w-[510px] font-semibold mb-8 md:leading-[64px] '>
          <span className='text-blue'>1700+</span> Companies have hired NxtWave learners
        </h2>
        <img
          src={lg}
          alt='Companies that have hired NxtWave learners - desktop view'
          className='w-full hidden md:block mb-6 object-contain'
        />
        <img
          src={sm}
          alt='Companies that have hired NxtWave learners - mobile view'
          className='w-full md:hidden mb-6'
        />
        <p className='text-gray-600 text-lg mt-6'>
          and many more...
        </p>
        <div className='flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-4'>
          <div className='flex items-center bg-blue py-3 px-8 rounded-lg'>
            <FaPhone color='#fff' className='mr-2' />
            <button
              type='button'
              className='text-white font-medium text-lg bg-transparent border-0 outline-none'
            >
              Request a Callback
            </button>
          </div>
          <button
            type='button'
            className='text-blue border-2 border-blue py-3 px-8 rounded-lg bg-transparent font-medium text-lg'
          >
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
}
