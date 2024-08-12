import { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { FaArrowDown, FaArrowRightLong, FaArrowUpRightDots } from "react-icons/fa6";
import Logo from "../assets/logo.svg";
import PopupImage1 from "../assets/intensive.svg"; // Replace with your image paths
import PopupImage2 from "../assets/Academy.svg"; // Replace with your image paths

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="bg-white sticky top-0 z-40  ">
      <div className="w-full md:w-[90%] mx-auto text-[16px] flex justify-between text-light-blue  font-sans items-center p-4">
        <a href="/">
          <img src={Logo} className="w-[84px]" alt="Nxtwave" />
        </a>
        <div className="hidden md:flex space-x-8 mr-8 ">
          <a href="/" className=" hover:text-blue font-medium">
            Home
          </a>
          <div className="relative">
            <button 
              onClick={togglePopup} 
              className=" hover:text-blue font-medium flex  space-x-1"
            >
              <span>Programs</span>
              <IoIosArrowDown size={18} className="self-end"/>
            </button>
            {/* Popup Container */}
            {showPopup && (
              <div className="w-[135px] z-4 absolute top-full -left-4 mt-2 bg-white shadow-md border border-[#cbd5e1] border-solid rounded-md p-2 flex flex-col  justify-start space-y-4">
                <img src={PopupImage1} alt="Popup Image 1" className="w-[91px] h-10 object-contain" />
                <img src={PopupImage2} alt="Popup Image 2" className="w-[91px] h-10 object-contain" />
              </div>
            )}
          </div>
          <a href="/" className=" hover:text-blue font-medium">
            Reviews
          </a>
          <a href="/" className=" hover:text-blue font-medium">
            Hire with Us
          </a>
          <div className="flex items-center space-x-2 font-medium text-[#1565d8] ">
            <p >Login</p>
            <FaArrowRightLong className="text-blue-600" size={18} />
          </div>
        </div>
        <div className="block md:hidden">
          <IoMdMenu
            size={24}
            className=""
            onClick={toggleHamburger}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md absolute w-full ${
          hamburger ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto p-4 space-y-4">
          <a
            href="/"
            className="block  hover:text-blue-600"
            onClick={toggleHamburger}
          >
            Home
          </a>
          <a
            href="/"
            className="block  hover:text-blue-600"
            onClick={toggleHamburger}
          >
            Programs
          </a>
          <a
            href="/"
            className="block  hover:text-blue-600"
            onClick={toggleHamburger}
          >
            Reviews
          </a>
          <a
            href="/"
            className="block  hover:text-blue-600"
            onClick={toggleHamburger}
          >
            Hire with Us
          </a>
          <div
            className="flex items-center space-x-2"
            onClick={toggleHamburger}
          >
            <p className="">Login</p>
            <FaArrowRightLong className="text-blue-600" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
