import sm from '../assets/recognised-sm.png';
import lg from '../assets/recognised-lg.png';

const Recognization = () => {
  return (
    <section className="flex bg-[#f9fbf] flex-col justify-center  py-12 mx-auto">
      <p className="py-4 text-[#183b56] text-center text-sm uppercase mb-8 font-semibold leading-[17px] tracking-[0.5px]">
        RECOGNISED BY
      </p>
      <img
        src={lg}
        alt="allumuni"
        className="w-full px-16 mb-4 hidden md:block object-contain"
      />
      <img
        src={sm}
        alt="allumuni"
        className="w-full px-16 mb-4 block md:hidden object-contain"
      />
    </section>
  );
}

export default Recognization