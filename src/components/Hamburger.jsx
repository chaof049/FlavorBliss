import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaStar, FaUsers } from "react-icons/fa";
import { IoMdArrowDropright, IoMdPricetag } from "react-icons/io";
import { TbSquareLetterT } from "react-icons/tb";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 lg:hidden w-full h-full">
      <div className="w-full flex p-2 justify-end">
        <button
          className="border border-white bg-white bg-opacity-20 rounded-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/hamburger/hamburgerLine.png"
            alt="Open Menu"
            className={`w-9 h-9 menu-icon p-[10px] bg-white rounded-xl`}
          />
        </button>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className={`menu absolute left-0 top-0 w-full h-full bg-white bg-opacity-80 backdrop-blur-[2px] z-20 ${
          isOpen ? "block" : "hidden"
        }  flex flex-col`}
      >
        <header className="flex justify-between p-2">
          <img src="/logo.png" />
          <button
            className="border border-white bg-white bg-opacity-40 rounded-2xl p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="/hamburger/hamburgerCross.png"
              alt="Open Menu"
              className={`w-9 h-9 menu-icon p-[10px] bg-white rounded-xl`}
            />
          </button>
        </header>
        <section className=" px-4 py-8">
          <ul className="px-4 font-bold text-">
            <li className="my-6 bg-white rounded-md w-full flex items-center py-2">
              <NavLink
                to="/"
                className="px-4 text-[#FE2F67] flex items-center gap-4"
              >
                <GoHomeFill className="text-3xl" />
                Homepage
              </NavLink>
            </li>

            <li className=" my-6  rounded-md w-full flex items-center">
              <NavLink
                to="/features"
                className="px-4 text-[#3A2A82] hover:text-[#FE2F67] w-full flex items-center justify-between"
              >
                <span className="flex items-center gap-4">
                  <FaStar className="text-3xl" />
                  Features
                </span>
                <IoMdArrowDropright className="text-2xl" />
              </NavLink>
            </li>

            <li className="my-6  rounded-md w-full flex items-center">
              <NavLink
                to="/use-cases"
                className="px-4 text-[#3A2A82] hover:text-[#FE2F67] w-full flex items-center justify-between"
              >
                <span className="flex items-center gap-4">
                  <FaUsers className="text-3xl" />
                  UseCases
                </span>
                <IoMdArrowDropright className="text-2xl" />
              </NavLink>
            </li>

            <li className="my-6  rounded-md w-full flex items-center">
              <NavLink
                to="/pricing"
                className="px-5 text-[#3A2A82] hover:text-[#FE2F67] flex items-center gap-4"
              >
                <IoMdPricetag className="text-3xl" />
                Pricing
              </NavLink>
            </li>

            <li className="my-6  rounded-md w-full flex items-center">
              <NavLink
                to="/blog"
                className="px-5 text-[#3A2A82] hover:text-[#FE2F67] flex items-center gap-4"
              >
                <TbSquareLetterT className="text-3xl" />
                Blog
              </NavLink>
            </li>
          </ul>
        </section>

        <button className=" absolute bottom-10 left-4  w-[10rem] flex items-center justify-between px-3 py-3 rounded-xl bg-[#FE2F67] hover:bg-[#3A2A82] text-white font-bold shadow-lg shadow-[#fe2f669d] hover:shadow-[#3a2a82a3]">
          Logout <BsArrowRightSquareFill className="text-xl rounded-md" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hamburger;
