import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  IoLocationSharp,
  IoCall,
  IoMail,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";

const BlueHeader = () => {
  return (
    <div className="bg-[#202135] px-12 py-2 justify-between items-center hidden lg:flex">
      <div className="contact-links flex items-center gap-4">
        <Link
          to="#"
          className="text-[var(--text-white)] text-base/6  flex items-center gap-2"
        >
          <IoLocationSharp className="text-primary text-base" />
          Find A Location
        </Link>

        <Link
          to="#"
          className="text-[var(--text-white)] text-base/6  flex items-center gap-2"
        >
          <IoCall className="text-primary text-base" />
          +01234567890
        </Link>

        <Link
          to="#"
          className="text-[var(--text-white)] text-base/6  flex items-center gap-2"
        >
          <IoMail className="text-primary text-base" />
          Example@gmail.com
        </Link>
      </div>

      <div className="social-links  flex items-center gap-4">
        <Link
          to="#"
          className="w-[32px] h-[32px] bg-white group hover:bg-primary rounded-[50%] flex justify-center items-center border-2 border-white"
        >
          <FaFacebookF className="group-hover:text-white" />
        </Link>
        <Link
          to="#"
          className="w-[32px] h-[32px] bg-white group hover:bg-primary rounded-[50%] flex justify-center items-center border-2 border-white"
        >
          <IoLogoTwitter className="group-hover:text-white" />
        </Link>
        <Link
          to="#"
          className="w-[32px] h-[32px] bg-white group hover:bg-primary rounded-[50%] flex justify-center items-center border-2 border-white"
        >
          <IoLogoInstagram className="group-hover:text-white" />
        </Link>
        <Link
          to="#"
          className="w-[32px] h-[32px] bg-white group hover:bg-primary rounded-[50%] flex justify-center items-center border-2 border-white"
        >
          <FaLinkedinIn className="group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default BlueHeader;
