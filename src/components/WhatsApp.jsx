import Whatsapp from '../assets/whatsapp-icon-1.png'
const WhatsApp = () => {
  return (
    <div className="z-[1000]   bg-[#23b33a] flex justify-center items-center mb-0 mr-4 md:mr-12 fixed bottom-[5%] right-0 px-4 py-3 shadow-md rounded-full">
        <h2 className='pl-2 pr-2 text-sm text-white'>Chat with us</h2>
        <img src={Whatsapp} alt="Whatsapp" className='w-8 h-8' />
    </div>
  )
}

export default WhatsApp