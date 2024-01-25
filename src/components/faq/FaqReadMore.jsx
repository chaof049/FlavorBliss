/* eslint-disable react/prop-types */

import { useState } from "react";

const FaqReadMore = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="border border-[#FEFEFE] py-4 px-8 bg-[#F9F9FE] rounded-2xl w-auto">
      <h2
        onClick={toggleReadMore}
        className={`flex justify-between font-semibold ${
          isExpanded ? "text-[#FF2F66] text-base" : "text-[#3A2A83] text-sm"
        }`}
      >
        <div>{props.title}</div>
        <div>{isExpanded ? "-" : "+"}</div>
      </h2>

      {isExpanded && (
        <p className="text-[#C0BDD3] text-xs">{props.description}</p>
      )}
    </div>
  );
};

export default FaqReadMore;
