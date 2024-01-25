/* eslint-disable react/prop-types */
import { useState } from "react";
import { languageOptions } from "../assets/languageSelector";
import { CiSearch } from "react-icons/ci";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <div
        className={`flex items-center justify-between p-2 bg-white group-hover:bg-white rounded-lg ${
          isDropdownVisible ? "rounded-b-none" : ""
        } cursor-pointer`}
      >
        <h1>{selectedLanguage.title}</h1>
        <img src={selectedLanguage.image} alt="flag" className="ml-2 w-4 h-4" />
      </div>
      {isDropdownVisible && (
        <ul className="absolute w-full bg-white rounded-b-lg h-[200px] overflow-y-scroll overflow-x-hidden no-scrollbar p-1">
          <li className="relative p-1">
            <input
              className="w-full p-[6px] border focus:outline-none focus:border-blue-400 rounded-md"
              placeholder="Search"
            />
            <span className="absolute right-[6px] top-3 ml-[1px] text-[15px]">
              <CiSearch />
            </span>
          </li>
          {languageOptions.map((value, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-[6px] cursor-pointer hover:bg-[#FF2F66] rounded-lg"
              onClick={() => handleLanguageSelect(value)}
            >
              <h1 className="truncate">{value.title}</h1>
              <img src={value.image} alt="flag" className="w-4 h-4" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
