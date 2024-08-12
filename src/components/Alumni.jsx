
import AlumniLg from '../assets/Alumni_Lg.png';
import AlumniSm from '../assets/alumni-sm.png';

const AlumniSection = () =>  {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-screen-xl mx-auto px-12'>
        <h4 className='text-center text-[#183b56] font-semibold tracking-wide mb-8 text-[14px] leading-[17px]'>
          LEARN THE BEST FROM THE ALUMNI OF
        </h4>
        <img
          src={AlumniLg}
          alt='alumni'
          className='hidden md:block mx-auto mb-4'
        />
        <img
          src={AlumniSm}
          alt='alumni'
          className='block md:hidden mx-auto mb-4'
        />
        <p className='text-center text-[#5a7184] mt-6 text-[12px] font-medium'>
          and Many more
        </p>
      </div>
    </section>
  )
}

export default  AlumniSection