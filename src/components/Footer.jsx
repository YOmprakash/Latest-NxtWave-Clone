import React from 'react';

export default function Footer() {
  return (
    <div className='bg-gray-800 p-6'>
      <img
        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_White_logo.svg'
        alt='footer-logo'
        className='mb-6'
      />
      <div className='text-white'>
        <h6 className='text-lg mb-4'>Reach Us</h6>
        <div className='flex items-center mb-4'>
          <img
            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/whatsapp-icon.svg'
            alt='whatsapp-icon'
            className='mr-4'
          />
          <div>
            <p>
              +919390111761
              <br />
              (whatsapp)
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <img
            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/email.icon.svg'
            alt='email-icon'
            className='mr-4'
          />
          <div>
            <p>support@nxtwave.tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
