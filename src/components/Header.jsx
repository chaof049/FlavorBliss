import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { TbSquareLetterT } from "react-icons/tb";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import HoverComponent from "./HoverComponent";
import { useEffect, useState } from "react";
import { featureList } from "../assets/featureList";
import { useCasesList } from "../assets/useCasesList";

const Header = () => {
  let [onHoverFeatures, setOnHoverFeatures] = useState(false);
  let [onHoverUseCases, setOnHoverUseCases] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`z-[999] flex justify-between w-full top-0 bg-[#FCFCFE] backdrop-blur-md bg-opacity-85 px-32 py-2 items-center font-my-custom-font font-medium text-sm fixed duration-300 transition-all ${
          showNavbar
            ? "transform translate-y-[0]"
            : "transform -translate-y-[100%]"
        }`}
        id="navbar"
      >
        <div className="border border-white bg-white bg-opacity-20 p-[6px] rounded-2xl">
          <div className="bg-white bg-opacity-70 p-2 rounded-xl shadow-lg shadow-[rgba(254,47,102,0.49)]">
            <img src="./logo.png" alt="logo" className="w-auto h-6 "></img>
          </div>
        </div>

        <div className="flex ">
          <NavLink to="/" className="px-4 text-[#FE2F67] relative">
            <span className="absolute -left-[1px] top-[3px]">
              <GoHomeFill />
            </span>
            Homepage
          </NavLink>
          <NavLink
            to="/features"
            className=" px-5 text-[#3A2A82] hover:text-[#FE2F67] hover:h-fit relative"
            onMouseEnter={() => {
              setOnHoverFeatures(true);
            }}
            onMouseLeave={() => {
              setOnHoverFeatures(false);
            }}
          >
            {onHoverFeatures ? (
              <HoverComponent
                list={featureList}
                title="Feature"
                icon={<FaStar />}
              />
            ) : (
              <></>
            )}
            <span className="absolute -left-[1px] top-[3px]">
              <FaStar />
            </span>
            <div className="absolute top-[250%] p-2 z-10 hidden  group-hover:block"></div>
            Features
            <span className="absolute top-[4px]">
              <MdKeyboardArrowDown />
            </span>
          </NavLink>

          <NavLink
            to="/use-cases"
            className=" px-5 text-[#3A2A82] hover:text-[#FE2F67] relative"
            onMouseEnter={() => {
              setOnHoverUseCases(true);
            }}
            onMouseLeave={() => {
              setOnHoverUseCases(false);
            }}
          >
            {onHoverUseCases ? (
              <HoverComponent
                list={useCasesList}
                title="Feature"
                icon={<FaUsers />}
              />
            ) : (
              <></>
            )}
            <span className="absolute -left-[1px] top-[3px]">
              <FaUsers />
            </span>
            UseCases
            <span className="absolute top-[4px]">
              <MdKeyboardArrowDown />
            </span>
          </NavLink>
          <NavLink
            to="/pricing"
            className=" px-5 text-[#3A2A82] hover:text-[#FE2F67] relative"
          >
            <span className="absolute -left-[1px] top-[3px]">
              <IoMdPricetag />
            </span>
            Pricing
          </NavLink>
          <NavLink
            to="/blog"
            className=" px-5 text-[#3A2A82] hover:text-[#FE2F67] relative"
          >
            <span className="absolute -left-[1px] top-[3px]">
              <TbSquareLetterT />
            </span>
            Blog
          </NavLink>
        </div>
        <div className="flex">
          <button className=" px-2 text-[#FE2F67]">Login</button>
          <div className="bg-white bg-opacity-70 p-2 rounded-xl">
            <button className=" px-3 py-1 pr-7 text-base text-white bg-[#FE2F67] hover:bg-[#3A2A82] rounded-xl relative shadow-lg shadow-[rgba(254,47,102,0.55)]">
              Register
              <span className="absolute right-2 top-[8px]">
                <BsFillArrowRightSquareFill />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
