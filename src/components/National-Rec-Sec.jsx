import { FaPhone } from "react-icons/fa6";

export default function NationalRecognizeSection() {
    return (
        <section className="bg-white">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center px-4 py-8 md:px-11 md:py-16">
                <h2 className="text-[#183b56] font-semibold text-2xl md:text-3xl leading-8 md:leading-11 mb-0 tracking-tight">
                    <span className="text-[#1565d8]">National Level Recognition</span> for NxtWave Students
                </h2>
                <div className="flex flex-col items-center justify-center gap-5 mt-10 md:flex-row">
                    <img 
                        src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/recognision-img1.png" 
                        alt="national-recognize-section" 
                        className="w-full max-w-[300px] md:max-w-[500px]" 
                    />
                    <img 
                        src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/recognision-img2.png" 
                        alt="national-recognize-section" 
                        className="w-full max-w-[300px] md:max-w-[500px]" 
                    />
                </div>
                <div className="flex flex-col items-center justify-center bg-[#212635] rounded-xl text-center p-4 mt-7">
                    <p className="text-white text-xl font-normal tracking-wide">Honored by</p>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffb800] to-[#ff5c00] font-semibold text-2xl leading-[22px]">
                        Shri Dharmendra Pradhan ji
                    </h2>
                    <h4 className="text-white text-xl font-medium leading-8">Union Minister for Education | Skill Development | Entrepreneurship</h4>
                    <span className="text-white text-lg font-medium leading-7">Govt. of India - 2023</span>
                </div>
                <div className='flex items-center justify-center bg-[#1565d8] py-[15px] px-[28px] rounded-lg mt-5'>
                    <FaPhone color='#fff' />
                    <button 
                        type='button' 
                        className='ml-2 bg-transparent text-white text-lg font-medium cursor-pointer'
                    >
                        Request a Callback
                    </button>
                </div>
            </div>
        </section>
    );
}
