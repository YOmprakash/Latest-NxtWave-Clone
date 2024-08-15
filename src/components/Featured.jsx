import Desktop from "../assets/featured-lg.png";
import Mobile from "../assets/featured-sm.avif";
import Button from "./Button";


export default function FeaturedSection() {
  return (
    <section className="px-6 py-16 bg-white md:px-12">
      <div className="flex flex-col items-center justify-center mx-auto mb-4 ">
        <h2 className="text-[#183b56] text-center uppercase font-semibold text-sm md:text-2xl mb-8">
          Featured in
        </h2>
        <img
          src={Desktop}
          alt="desktop-feature"
          className="hidden object-contain w-full md:block"
        />
        <img
          src={Mobile}
          alt="mobile-feature"
          className="block object-contain w-full md:hidden"
        />
        <div className="flex items-center justify-center mt-8">
          <Button/>
        </div>
      </div>
    </section>
  );
}
