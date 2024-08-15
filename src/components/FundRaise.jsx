import pacific from '../assets/greater-pacific.svg';
import oriosPatner from '../assets/oris-partner.png';
import betterPartner from '../assets/better-partner.png';
import Button from './Button';
export default function FundraisingSection() {
  return (
    <section className="bg-[#f9fbfe]">
      <div className=' mx-auto py-8  md:py-24 md:px-12 px-4'>
        <h2 className='text-light-blue  text-2xl md:text-5xl text-center font-semibold leading-[38px]  mb-6 md:mb-6 md:leading-[64px]  md:max-w-[800px] max-w-[268px] mx-auto'>
        Announcing Our Latest Fundraise
        of INR 275 Crores Led by
        </h2>
        
        
        <div className='bg-[url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/desktop-confetti-1.svg")] bg-contain mt-8 bg-center flex justify-center mb-6 max-w-2xl mx-auto'>
          <img
            src={pacific}
            alt='confetti'
            className='md:w-[500px] object-contain w-[350px]'
          />
        </div>
        <p className='text-light-blue text-center text-[16px] font-semibold md:text-[28px] mb-16 mt-8 '>
        Celebrating continued support from our existing partners
        </p>
        <div className='flex items-center justify-center mb-6 gap-8'>
          <img
            src={oriosPatner}
            alt='orios' 
             className='object-contain md:w-[300px]  w-[150px] '
          />
          <img
            src={betterPartner}
            alt='better'  
            className='object-contain md:w-[300px] w-[150px] '
          />
        </div>
        <p className='text-gray-500 text-sm text-center'>
        and more 
        </p>
        <div className='flex items-center flex-col md:flex-row justify-center pt-8 gap-4'>
          <Button/>
          <button type='button' className='ml-2 bg-transparent  text-blue py-2 px-4 '>
          know more
          </button>
        </div>
      </div>
    </section>
  );
}
