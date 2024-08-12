

export default function FundraisingSection() {
  return (
    <section className='bg-[url("https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/63f3882642772970018a63c8_BG%20(5).png")] bg-cover bg-no-repeat bg-gray-100 md:bg-none'>
      <div className='max-w-screen-lg mx-auto text-center py-24 px-12 md:px-4'>
        <h2 className='text-blue-900 text-4xl font-bold leading-tight mb-6 md:text-2xl md:mb-6'>
          Fundraising Section Heading
        </h2>
        <h4 className='text-blue-900 text-2xl font-bold leading-tight mb-6 md:text-lg md:mb-4'>
          Fundraising Section Subheading
        </h4>
        <p className='text-gray-500 text-sm mb-16'>
          This is some description text for the fundraising section. It provides additional information and context.
        </p>
        <div className='bg-[url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/desktop-confetti-1.svg")] bg-cover bg-center mb-6 max-w-lg mx-auto'>
          <img
            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/desktop-confetti-1.svg'
            alt='confetti'
            className='w-full max-w-xs'
          />
        </div>
        <div className='flex items-center justify-center mb-6'>
          <img
            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/celebration-icon.svg'
            alt='celebration'
            className='w-full max-w-xs h-20 mr-9 md:max-w-xs md:h-10 md:mr-5'
          />
          <img
            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/celebration-icon.svg'
            alt='celebration'
            className='w-full max-w-xs h-20'
          />
        </div>
      </div>
    </section>
  );
}
