import { FaPhone } from "react-icons/fa6";

const Button = () => {
  return (
    <div className="flex items-center bg-[#1565d8] hover:bg-blue-700 text-white text-[16px] font-medium py-3 px-8 rounded-[12px]">
<FaPhone/>
<button className="pl-2">Request a Callback</button>
    </div>

  )
}

export default Button