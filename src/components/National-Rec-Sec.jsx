import Button from "./Button";
import Image1 from "../assets/recognision-img1.png";
import Image2 from "../assets/recognision-img2.png";
export default function NationalRecognizeSection() {
    return (
        <section className="font-sans bg-white ">
            <div className=" mx-auto flex flex-col items-center justify-center px-4 py-[64px] md:px-11 ">
                <h2 className="text-[#183b56] font-semibold text-2xl md:text-[38px] md:leading-[58px] lg:text-[48px]  tracking-tight">
                    <span className="text-[#1565d8]">National Level Recognition</span> for NxtWave Students
                </h2>
                <div className="flex flex-col items-center justify-center gap-5 mt-10 md:flex-row">
                    <img 
                        src={Image1}
                        alt="national-recognize-section-image1 " 
                        className="w-full max-w-[320px] object-contain md:max-w-[400px] lg:max-w-[500px]" 
                    />
                    <img 
                        src={Image2}
                        alt="national-recognize-section-image2 " 
                        className="w-full object-contain max-w-[320px] md:max-w-[400px] lg:max-w-[500px]" 
                    />
                </div>
                <div className="flex flex-col items-center justify-center bg-[#212635] rounded-xl text-center p-4 mt-7">
                    <p className="text-white text-xl md:text-[22px] font-normal mb-2 tracking-wide">Honored by</p>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffb800] to-[#ff5c00] font-semibold text-[26px] md:text-[28px] mb-2 leading-[22px]">
                        Shri Dharmendra Pradhan ji
                    </h2>
                    <h4 className="text-white text-[16px] md:text-lg font-medium leading-tight">Union Minister for Education | Skill Development | Entrepreneurship</h4>
                    <span className="text-white text-[16px] md:text-lg font-medium leading-6">Govt. of India - 2023</span>
                </div>
                <div className="mt-8">
                    <Button />
                </div>
            </div>
        </section>
    );
}
