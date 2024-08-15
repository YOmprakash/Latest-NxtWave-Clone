
import Button from "./Button";

const LandingPage = () => {
  return (
    // Main Section Container with padding and background color
    <section className="w-full bg-gray-50 py-16 px-6 md:px-[74px]">
      {/* Centered Container to hold the content */}
      <div className="flex items-center justify-center font-sans">
        {/* Left Section: Text and Award Images */}
        <div className="flex-col items-center justify-start max-w-[500px] text-left mr-12 hidden md:flex">
          <h1 className="text-light-blue  mt-[-20px] mb-0 text-[44px] leading-[64px] font-semibold w-[400px] ">
            Designed to transform you into a highly skilled Software
            Professional
          </h1>
          <div className="mt-8 flex flex-col items-center">
            <p className="text-gray-600 mt-0 mb-0 font-semibold text-[16px] leading-6">
              Recognized as the Greatest Brand in Education
            </p>
            {/* Award Design Image */}
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/award-design-line-desktop-2x.png?auto=format,compress&q=80"
              alt="Award Design"
              className="w-[252px] mt-4"
            />
            <div className="mt-4 flex justify-center items-center">
              {/* Award 1 Design Image */}
              <img
                src="https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award1-design-desktop-2x.png?auto=format,compress&q=80"
                alt="Award 1 Design"
                className="max-w-[189px]"
              />
              {/* Most Preferred Brands Award Image */}
              <img
                src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/most-preffered-brands-award.png?auto=format,compress&q=80"
                alt="Most Preferred Brands Award"
                className="max-w-[189px] ml-4"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Card Containers */}
        <div className="flex items-center w-full flex-col md:flex-row">
          {/* First Card Container */}
          <div className="w-full   z-20 md:w-[320px] min-h-[470px] bg-white border border-gray-300 rounded-[12px] shadow-lg mb-8 md:mb-0 md:mr-6">
            {/* Logo and Person Image */}
            <div className="flex justify-center  items-start ">
              <img
                src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg"
                alt="Academy Logo"
                className="w-[140px] mt-8 ml-5"
              />
              <img
                src="https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png?auto=format,compress&q=80"
                alt="Academy Person"
                className="relative top-[-28px] w-[130px]"
              />
            </div>
            {/* Text and Button Container */}
            <div className="z-10  h-[370px] md:h-[419px] custom-gradient  rounded-b-lg mt-[-115px] flex flex-col md:pt-12 px-6">
              {/* Tags and Heading */}
              <span className="uppercase z-10 self-start bg-[#e0e7ff] text-[#3730a3] font-semibold text-xs rounded-lg  p-1 mb-2 ">
                post 12TH / intermediate
              </span>
              <span className="uppercase z-10 self-start bg-cyan-100 text-cyan-800 font-semibold text-xs rounded-lg p-1 mb-4 ">
                1st , 2nd , 3rd year
              </span>
              <h1 className="text-light-blue text-xl font-semibold mb-6 leading-[32px]">
                Learn like top IITians <br />
                and achieve high-paid <br /> software jobs
              </h1>
              {/* Batch Information */}
              <div className="flex justify-between items-center h-12">
                <div>
                  <p className="uppercase text-[#64748b] text-xs font-semibold mb-1">
                    BATCH STARTS
                  </p>
                  <p className="text-light-blue  text-[16px] font-semibold">
                    Today
                  </p>
                </div>
                {/* Limited Seats Information */}
                <div className="flex items-start h-12">
                  <img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/hero-section-vector-fire.svg"
                    alt="Fire Icon"
                  />
                  <p className="text-light-blue text-sm ml-1 font-medium leading-6">
                    Limited Seats
                    <br /> Available
                  </p>
                </div>
              </div>
              {/* Request Callback Button */}
              <div className="mt-4">

              <Button />
              </div>
              {/* Know More Button */}
              <button
                type="button"
                className="mt-4 mb-6 bg-transparent font-semibold text-blue w-full p-3 rounded-lg focus:outline-none"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Second Card Container */}
          <div className="w-full   z-20 md:w-[320px] min-h-[470px] bg-white border border-gray-300 rounded-[12px] shadow-lg mb-8 md:mb-0 md:mr-6">
            {/* Logo and Person Image */}
            <div className="flex justify-center items-start pl-6">
              <img
                src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive-3-0-logo.svg"
                alt="Intensive Logo"
                className="w-[140px] mt-8"
              />
              <img
                src="https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png?auto=format,compress&q=80"
                alt="Intensive Person"
                className="relative top-[-28px] w-[130px] "
              />
            </div>
            {/* Text and Button Container */}
            <div className="z-10  h-[370px] md:h-[419px]   rounded-b-lg mt-[-115px] flex flex-col md:pt-12 px-6">
              {/* Tags and Heading */}
              <div className="flex items-center z-10 mb-2">
                <span className="uppercase self-start bg-green-100 text-green-800 font-semibold text-xs rounded-lg px-2 py-1 mr-2">
                  Graduates
                </span>
                <span className="uppercase self-start bg-[#e0e7ff] text-[#3730a3] font-semibold text-xs rounded-lg px-2 py-1">
                  final year
                </span>
              </div>
              <span className="uppercase self-start bg-yellow-100 text-yellow-800 font-semibold text-xs rounded px-2 py-1 mb-4 inline-block">
                ANY BRANCH OR DEGREE
              </span>
              <h1 className="text-light-blue text-xl font-semibold mb-6 leading-[32px]">
                A Proven Program <br />
                to make you a <br />
                Software Developer
              </h1>
              {/* Batch Information */}
              <div className="flex justify-between items-center h-12">
                <div>
                  <p className="uppercase text-[#64748b] text-xs font-semibold mb-1">
                    BATCH STARTS
                  </p>
                  <p className="text-light-blue  text-[16px] font-semibold">
                    Today
                  </p>
                </div>
                {/* Limited Seats Information */}
                <div className="flex items-start h-12">
                  <img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/hero-section-vector-fire.svg"
                    alt="Fire Icon"
                  />
                  <p className="text-light-blue text-sm ml-1 font-medium leading-6">
                    Limited Seats
                    <br /> Available
                  </p>
                </div>
              </div>
              {/* Book A Free Demo Button */}
              <button
                type="button"
                className="mt-4  bg-button-bg text-white  p-3 w-full py-3 rounded-lg focus:outline-none"
              >
                Book A Free Demo
              </button>
              {/* Know More Button */}
              <button
                type="button"
                className="pt-4 bg-transparent font-semibold text-blue w-full  rounded-2xl focus:outline-none "
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
