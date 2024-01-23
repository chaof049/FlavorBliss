/* eslint-disable react/prop-types */
import { useState } from "react";
import { languageOptions } from "../assets/languageSelector";

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
      <div className="flex items-center justify-between p-3 bg-white group-hover:bg-white rounded-xl cursor-pointer">
        <h1>{selectedLanguage.title}</h1>
        <img src={selectedLanguage.image} alt="flag" className="ml-2 w-4 h-4" />
      </div>
      {isDropdownVisible && (
        <ul className="absolute w-full bg-white rounded">
          {languageOptions.map((value, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#FF2F66]"
              onClick={() => handleLanguageSelect(value)}
            >
              <h1 className="">{value.title}</h1>
              <img src={value.image} alt="flag" className="ml-2 w-4 h-4" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
