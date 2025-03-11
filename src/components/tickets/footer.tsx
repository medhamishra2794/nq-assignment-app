import { MdPrivacyTip } from "react-icons/md";
import { PiGlobeBold } from "react-icons/pi";



const Footer=()=>{
  return (
    <footer className="flex justify-end py-3 sm:py-5 px-5 sm:px-8">
      <div className="flex items-center gap-1 text-gray-500 cursor-pointer"><MdPrivacyTip className="text-xl" /> <span className="text-sm">Privacy Policy</span></div>
      <div className="flex items-center gap-1 text-gray-500 cursor-pointer ml-5"><PiGlobeBold className="text-xl" /> <span className="text-sm">English (EN)</span></div>
    </footer>
  )   
}

export default Footer;
