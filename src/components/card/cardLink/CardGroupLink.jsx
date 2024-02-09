import { useState } from "react";
import { CardLink } from "./CardLink";
import { CardLink2 } from "./CardLink2";
import { CardLink3 } from "./CardLink3";
import { CardLink4 } from "./CardLink4";
import { CardLink5 } from "./CardLink5";


export const CardGroupLink = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" translate-x-[80%]">
        <CardLink isHovered={isHovered} />
      </div>
      <div className=" translate-x-[40%]">
        <CardLink2 isHovered={isHovered} />
      </div>
      <div className=" z-20">
        <CardLink3 isHovered={isHovered} />
      </div>
      <div className=" -translate-x-[40%] z-10">
        <CardLink4 isHovered={isHovered} />
      </div>
      <div className=" -translate-x-[80%]">
        <CardLink5 isHovered={isHovered} />
      </div>
    </div>
  );
};

export default CardGroupLink;

