import { Link, NavLink } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showPopup, setIShowPopup] = useState(false);
  const [slideDown, setSlideDown] = useState(false);

  const handleMouseEnter = (active) => {
    if (window.screen.width > 1024) {
      setIShowPopup(active);
    }
  };

  const handlePageClick = () => {
    if (window.screen.width < 1024) {
      setIShowPopup(!showPopup);
    }
  };

  const handleHamburgerClick = () => {
    setSlideDown(!slideDown);
  };

  return (
    <div className="px-4 py-4 lg:px-12 lg:py-0 sticky top-0 flex flex-wrap justify-between items-center border-b border-[#ffffff1a] bg-white z-[10]">
      <div>
        <h1 className="text-primary text-4xl font-custom2">
          <Link to="/" className="flex items-center gap-2">
            <FaAsterisk /> Terapia
          </Link>
        </h1>
      </div>

      <button
        className=" bg-white block lg:hidden border border-primary rounded-md px-5 py-3"
        onClick={handleHamburgerClick}
      >
        <GiHamburgerMenu className="text-primary text-xl" />
      </button>

      <div
        className={`bg-white flex items-start lg:items-center gap-2 lg:gap-6 flex-col lg:flex-row w-[100%] lg:w-auto transition-all duration-300 ease-in-out ${
          slideDown ? "max-h-[1000px]" : "max-h-0 lg:max-h-[500px]"
        } overflow-hidden lg:overflow-visible`}
      >
        <div className="flex items-start lg:items-center gap-2 lg:gap-6 flex-col lg:flex-row w-[100%] lg:w-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-normal py-2 lg:py-5 lg:border-b-2 ${
                isActive
                  ? "text-primary lg:border-primary"
                  : "text-[var(--text-gray)] lg:border-transparent"
              } hover:text-primary hover:border-primary`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-base font-normal py-2 lg:py-5 lg:border-b-2 ${
                isActive
                  ? "text-primary lg:border-primary"
                  : "text-[var(--text-gray)] lg:border-transparent"
              }  hover:text-primary hover:border-primary`
            }
          >
            About
          </NavLink>
          <div className="relative w-[100%] lg:w-auto">
            <p
              className={`text-base font-normal py-2 lg:py-5 lg:border-b-2  lg:border-transparent hover:lg:border-primary text-[var(--text-gray)] flex items-center gap-2 w-max lg:w-auto ${
                showPopup ? "text-primary lg:border-primary" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(true)}
              onMouseLeave={() => handleMouseEnter(false)}
              onClick={handlePageClick}
            >
              Pages <IoIosArrowDown />
            </p>

            <div
              className={`flex flex-col gap-1.5 w-[100%] lg:w-auto static lg:absolute transition-all duration-300 ease-in-out shadow-lg z-[999] bg-white border rounded-xl border-[var(--text-gray)] lg:border-none ${
                showPopup
                  ? "max-h-[500px] block opacity-100 p-2"
                  : "max-h-[0px] hidden opacity-0"
              }`}
            >
              <NavLink to="/appointment">Appointment</NavLink>
              <NavLink to="/feature">Features</NavLink>
              <NavLink to="/blog">Our Blog</NavLink>
              <NavLink to="/team">Our Team</NavLink>
              <NavLink to="/testimonial">Testimonial</NavLink>
            </div>
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-base font-normal py-2 lg:py-5 lg:border-b-2 ${
                isActive
                  ? "text-primary lg:border-primary"
                  : "text-[var(--text-gray)] lg:border-transparent"
              } hover:text-primary hover:border-primary`
            }
          >
            Sevices
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-base font-normal py-2 lg:py-5 lg:border-b-2 ${
                isActive
                  ? "text-primary lg:border-primary"
                  : "text-[var(--text-gray)] lg:border-transparent"
              } hover:text-primary hover:border-primary`
            }
          >
            Contact Us
          </NavLink>
        </div>
        <Link to="#" className="common-button">
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
