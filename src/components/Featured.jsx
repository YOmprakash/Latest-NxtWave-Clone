import Desktop from "../assets/featured-lg.png";
import Mobile from "../assets/featured-sm.avif";
import Button from "./Button";


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
        <div className="flex items-center justify-center  mt-8">
          <Button/>
        </div>
      </div>
    </section>
  );
}
