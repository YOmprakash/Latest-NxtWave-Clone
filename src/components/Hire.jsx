import sm from '../assets/hiring-companies-mobile.png';
import lg from '../assets/hiring-companies-lg.png';
import Button from './Button';

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
          <div>
            <Button />
          </div>
          <button
            type='button'
            className='text-[#1565d8] border-2 border-[#1565d8] py-3 px-12  rounded-[12px] bg-transparent font-medium text-sm'
          >
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
}
