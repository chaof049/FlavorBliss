import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
// import { FaStar } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { IoMdPricetag } from "react-icons/io";
// import { TbSquareLetterT } from "react-icons/tb";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const [showNavbar, setShowNavbar] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="absolute top-0 right-0 bg-white md:hidden">
      <input
        type="checkbox"
        id="menu-toggle"
        className="hidden"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="cursor-pointer p-4">
        {/* Open State */}
        <img
          src="/hamburger/hamburgerLine.png"
          alt="Open Menu"
          className={`w-10 h-10 menu-icon ${
            isOpen ? "hidden" : ""
          } p-2 bg-white rounded-xl`}
        />
        {/* Closed State */}
        <img
          src="/hamburger/hamburgerCross.png"
          alt="Closed Menu"
          className={`w-10 h-10 menu-icon ${
            isOpen ? "" : "hidden"
          } p-2 bg-white rounded-xl`}
        />
      </label>

      <div
        className={`menu ${
          isOpen ? "block" : "hidden"
        }  flex flex-col items-end`}
      >
        <div className="mb-4">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <ul>
          <li className="mx-2 my-6 md:my-0">
            <NavLink to="/" className="px-4 text-[#FE2F67] relative">
              <span className="absolute -left-[1px] top-[3px]">
                <GoHomeFill />
              </span>
              Homepage
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;

{
  /* <nav
  className={`z-[999] hidden md:flex md:items-center md:justify-between w-full top-0 bg-[#FCFCFE] backdrop-blur-md bg-opacity-85 px-32 py-2 items-center font-medium text-sm fixed duration-300 transition-all ${
    showNavbar ? "transform translate-y-[0]" : "transform -translate-y-[100%]"
  }`}
  id="navbar"
>
  <div className="border border-white w-fit bg-white bg-opacity-20 p-[6px] rounded-2xl flex justify-between items-center">
    <img
      src="/logo.png"
      alt="logo"
      className="bg-white bg-opacity-70 p-2 rounded-xl shadow-lg shadow-[rgba(254,47,102,0.49)] h-10"
    ></img>
  </div>
  <ul className="md:flex md:items-center z-[-1] md:z-auto">
    <li className="mx-2 my-6 md:my-0">
      <NavLink to="/" className="px-4 text-[#FE2F67] relative">
        <span className="absolute -left-[1px] top-[3px]">
          <GoHomeFill />
        </span>
        Homepage
      </NavLink>
    </li>
    <li className="mx-2 my-6 md:my-0">
      <NavLink
        to="/features"
        className="px-4 text-[#3A2A82] hover:text-[#FE2F67] relative"
      >
        <span className="absolute -left-[1px] top-[3px]">
          <FaStar />
        </span>
        <div className="absolute top-[250%] p-2 z-10 hidden  group-hover:block"></div>
        Features
        <span className="absolute top-[4px]">
          <MdKeyboardArrowDown />
        </span>
      </NavLink>
    </li>
    <li className="mx-2 my-6 md:my-0">
      <NavLink
        to="/use-cases"
        className="px-4 text-[#3A2A82] hover:text-[#FE2F67] relative"
      >
        <span className="absolute -left-[1px] top-[3px]">
          <FaUsers />
        </span>
        UseCases
        <span className="absolute top-[4px]">
          <MdKeyboardArrowDown />
        </span>
      </NavLink>
    </li>
    <li className="mx-2 my-6 md:my-0">
      <NavLink
        to="/pricing"
        className="px-5 text-[#3A2A82] hover:text-[#FE2F67] relative"
      >
        <span className="absolute -left-[1px] top-[3px]">
          <IoMdPricetag />
        </span>
        Pricing
      </NavLink>
    </li>
    <li className="mx-2 my-6 md:my-0">
      <NavLink
        to="/blog"
        className="px-5 text-[#3A2A82] hover:text-[#FE2F67] relative"
      >
        <span className="absolute -left-[1px] top-[3px]">
          <TbSquareLetterT />
        </span>
        Blog
      </NavLink>
    </li>
  </ul>
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
</nav>; */
}
