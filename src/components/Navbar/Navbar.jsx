import { Link, NavLink } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showPopup, setIShowPopup] = useState(false);
  const [slideDown, setSlideDown] = useState(false);

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
          <div className="group relative w-[100%] lg:w-auto">
            <p
              className="text-base font-normal py-2 lg:py-5 lg:border-b-2  lg:border-transparent hover:lg:border-primary text-[var(--text-gray)] flex items-center gap-2 w-max lg:w-auto group-hover:text-primary group-hover:lg:border-primary"
              onClick={handlePageClick}
            >
              Pages <IoIosArrowDown />
            </p>

            <div
              className={` flex-col gap-1.5 w-[100%] lg:w-auto static lg:absolute transition-all duration-300 ease-in-out shadow-lg z-[999] bg-white border rounded-xl border-[var(--text-gray)] lg:border-none max-h-[0px] overflow-hidden hidden group-hover:max-h-[500px] group-hover:flex ${
                showPopup ? "max-h-[500px]" : "max-h-[0px]"
              }`}
            >
              <NavLink
                to="/appointment"
                className="hover:text-white hover:bg-primary px-4 py-2"
              >
                Appointment
              </NavLink>
              <NavLink
                to="/feature"
                className="hover:text-white hover:bg-primary px-4 py-2"
              >
                Features
              </NavLink>
              <NavLink to="/blog" className="hover:text-white hover:bg-primary px-4 py-2">
                Our Blog
              </NavLink>
              <NavLink to="/team" className="hover:text-white hover:bg-primary px-4 py-2">
                Our Team
              </NavLink>
              <NavLink
                to="/testimonial"
                className="hover:text-white hover:bg-primary px-4 py-2"
              >
                Testimonial
              </NavLink>
            </div>
          </div>
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
