
import { FaPhone } from "react-icons/fa6";
import images from "../assets/Images/masterclassImg";
export default function Masterclass() {
  const {Rakesh,
    mobile,
    desktop,
    vamsi,
    priyatham,
    Sravya,
    Srividya} = images
  return (
    <section className="bg-[#183b56] py-[92px] md:px-[92px] px-4 font-sans">
      {/* Container for the entire section */}
      <div className=" mx-auto">
        {/* Flex container for the main content of the section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-12 ">
          {/* Left column containing text and image */}
          <div className="w-full md:w-[50%] mb-5 md:mb-0 md:mr-4">
            {/* Main heading */}
            <h2 className="text-white  text-2xl md:text-[38px] md:max-w-[500px] font-semibold md:leading-[62px] mb-4">
              Masterclasses from Mentors in the Community
            </h2>
            {/* Supporting paragraph */}
            <p className="text-[#b3bac5] text-[16px] md:text-[18px] leading-[32px] md:leading-[36px] mb-4 md:mb-12">
              Get insights directly from people who have been there and done that. These masterclasses not only provide directions to reach your career goals but also keep you inspired to dream without limitations and achieve them.
            </p>
            {/* Image related to masterclasses */}
            <img
              src={desktop}
              alt="masterclass-community"
              className="max-w-full  hidden md:block object-contain"
            />
            {/* Callback button */}
            <div className="hidden md:flex w-[240px]  items-center mt-8 bg-white py-3 px-6  rounded-[12px] cursor-pointer">
              <FaPhone color="#183b56" />
              <button type="button" className="ml-2 text-[#183b56]">
                Request a Callback
              </button>
            </div>
          </div>

          {/* Right column containing video preview and text */}
          <div className="w-full md:w-[45%]">
            {/* Image preview of the masterclass */}
            <img
              src={Rakesh}
              alt="rakesh-misra-yt"
              className="max-w-full object-cover"
            />
            {/* Text information below the image */}
            <div className="bg-white rounded-b-md p-4 pt-2">
              <h4 className="text-[#183b56] font-bold text-[20px] mb-2">
                Sneak Peek Of Masterclass by Rakesh Misra
              </h4>
              <p className="text-[#183b56] text-[14px]">
                Co-Founder Uhana (Acquired by VMWare), Stanford, IIT Madras
              </p>
            </div>
          </div>
        </div>

        {/* Image banner for the mentor community (visible on larger screens) */}
        <img
          src={mobile}
          alt="mentor-community"
          className=" md:hidden block w-full mb-8 object-contain "
        />
        {/* Callback button-2 */}
        <div className="flex justify-center">
        <div className="flex md:hidden  justify-center text-center w-[240px] items-center  bg-white py-3 px-6  rounded-[12px]">
              <FaPhone color="#183b56" />
              <button type="button" className="ml-2 text-[#183b56]">
                Request a Callback
              </button>
              </div>
            </div>

        {/*  container for mentor cards */}
        <div className="flex flex-col md:flex-row justify-between  flex-wrap pt-12 ">
          {/* Srividya card 1 */}
          <div className="md:w-[260px]  rounded-md overflow-hidden mb-6 md:mr-4">
            <img
              src={Srividya}
              alt="srividya-pranavi"
              className="max-w-full object-contain rounded-t-md"
            />
            <div className="p-5 bg-white rounded-b-md w-full h-[220px]">
              <h2 className="text-[#183b56] text-[20px]  font-semibold mb-4">
                Srividya Pranavi
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px] ">
                  Machine Learning Scientist, Apple
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-6 h-6"
                />
                <p className="ml-2 text-[#183b56] text-[16px] ">
                  Carnegie Mellon University,<br/> IIT Kharagpur
                </p>
              </div>
            </div>
          </div>

           {/* Sravya card 2 */}
           <div className="md:w-[260px]  overflow-hidden rounded-md  mb-6 md:mr-4">
            <img
              src={Sravya}
              alt="Sravya-Nimmagadda"
              className="max-w-full object-contain rounded-t-md"
            />
            <div className="p-5 bg-white rounded-b-md w-full">
              <h2 className="text-[#183b56] text-[20px] font-semibold mb-4">
              Sravya Nimmagadda
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                Senior Deep Learning  Scientist, <br/>Autonomous Vehicles at NVIDIA
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-6 h-6"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                Stanford, IIT Madras
                </p>
              </div>
            </div>
          </div>

          {/* Priyatham card 3 */}
          <div className="md:w-[260px] rounded-md overflow-hidden mb-6 md:mr-4">
            <img
              src={priyatham}
              alt="Priyatham-Bollimpalli"
              className="max-w-full object-contain rounded-t-md"
            />
            <div className="p-5 bg-white rounded-b-md w-full">
              <h2 className="text-[#183b56] text-[20px]  font-semibold mb-4">
              Priyatham Bollimpalli
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                Data & Applied Scientist II , Microsoft
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-6 h-6"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                Carnegie Mellon University,<br /> IIT Guwahati
                </p>
              </div>
            </div>
          </div>


            {/* Vamsi card 4 */}
            <div className="md:w-[260px]  overflow-hidden rounded-md mb-6">
            <img
              src={vamsi}
              alt="Vamsi-Krishna"
              className="max-w-full object-contain rounded-t-md"
            />
            <div className="p-5 bg-white rounded-b-md h-[220px] ">
              <h2 className="text-[#183b56] text-[20px]  font-semibold mb-4">
              Vamsi Krishna
              </h2>
              <div className="flex items-center mb-2">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/bag-image.png"
                  alt="bag"
                  className="w-5 h-5"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                AI & Quantum Computing, Google
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/graduation-image.png"
                  alt="graduation"
                  className="w-6 h-6"
                />
                <p className="ml-2 text-[#183b56] text-[16px]">
                Georgia Institute of <br />  Technology, IIT Madras
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-right text-[#ebe6e6] text-[16px] font-semibold">and many more...</p>
      </div>
    </section>
  );
}
