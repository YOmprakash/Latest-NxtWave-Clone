import Desktop from "../assets/featured-lg.png";
import Mobile from "../assets/featured-sm.avif";
import { FaPhone } from "react-icons/fa6";

export default function FeaturedSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className=" mb-4 mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[#183b56] text-center uppercase font-semibold text-sm md:text-2xl mb-8">
          Featured in
        </h2>
        <img
          src={Desktop}
          alt="desktop-feature"
          className="w-full hidden md:block object-contain"
        />
        <img
          src={Mobile}
          alt="mobile-feature"
          className="w-full block md:hidden object-contain"
        />
        <div className="flex items-center justify-center py-4 px-5 bg-[#1565d8] rounded-lg mt-8">
          <FaPhone color="#fff" />
          <button
            type="button"
            className="ml-2 cursor-pointer text-white text-lg bg-transparent border-none outline-none"
          >
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  );
}
