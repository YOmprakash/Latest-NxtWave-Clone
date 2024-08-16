
import { FaMapLocationDot } from 'react-icons/fa6';
import whatsApp from '../assets/whatsapp-icon.svg';
import email from   '../assets/email.icon.svg';
import Logo from '../assets/Nxtwave_White_logo.svg';
import visa from  '../assets/visa-icon.svg';
import mastercard from  '../assets/master-card-icon.svg';
import Razorpay from  '../assets/Razor-pay-icon.svg';
import upi from  '../assets/upi-icon.svg';
import rupay from  '../assets/rupay-icon.svg';
import payment from  '../assets/payment-method-icon.svg';
const Footer = () => {
  return (
    <footer className="bg-[#0d2436] text-white py-8 px-4 md:py-7 md:px-[10%]">
      <div className="container flex flex-col items-start justify-between px-2 mx-auto md:items-center md:flex-row md:space-x-10">
        {/* Left Section */}
        <div className="space-y-4">
          <img src={Logo} alt="NxtWave" className="w-[120px] object-contain" />
          <div>
            <h3 className="text-lg text-[#5a7184] font-bold pt-2">Reach Us</h3>
            <div className="flex items-center pt-6 pb-4 space-x-2">
              <img src={whatsApp}  alt="Whatsapp"   className=''/>
             
              <p className='text-[#959ead] font-normal text-sm'>+919390111761 <br/> (WhatsApp only)</p>
            
              
            </div>
            <div className="flex items-center space-x-2 ">
              <img src={email} alt="Email" className='text-blue'/>
              <p className='text-[#959ead] font-normal text-sm'>support@nxtwave.tech</p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col w-full mt-8 space-y-4 md:space-y-0 md:pl-16 ">
         
            <h3 className="text-lg font-bold text-[#5a7184] text-left pb-4">Quick Links</h3>
            <div className='flex flex-row justify-between w-full mt-4 '>
            <div className='w-1/2 space-y-2 text-left'>
            <ul className="space-y-3  text-[#959ead] text-sm font-normal">
              <li>Home</li>
              <li>Academy</li>
              <li>Intensive</li>
              <li>Hire with us</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
            </div>
          
            <div className='w-1/2 space-y-2'>
            <ul className="space-y-3 text-[#959ead] text-sm font-normal">
              <li>About Us</li>
              <li>Reviews</li>
              <li>Community</li>
              <li>4.0 Champions</li>
              <li>NxtWave Review</li>
              <li>Python Tutorial</li>
            </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg text-[#5a7184] font-bold">Payment Methods</h3>
          <div className="flex flex-col justify-center">
          <div className='flex flex-wrap justify-start gap-6'>
          <img src={visa} alt="Visa" className="h-8" />
          <img src={mastercard} alt="MasterCard" className="h-8" />
          <img src={payment} alt="Payment" className="h-8" />
          <img src={Razorpay} alt="RazorPay" className="h-8" />
          <img src={upi} alt="UPI" className="h-8" />
          <img src={rupay} alt="Rupay" className="h-8" />
         
        </div>
          <div className="flex items-start mt-6">
          <FaMapLocationDot/>
            <p className="text-sm text-[#959ead] font-normal ml-2 w-[250px] ">NxtWave, WeWork Rajapushpa Summit, Nanakramguda Rd, Financial District, Manikonda Jagir, Telangana 500032</p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
