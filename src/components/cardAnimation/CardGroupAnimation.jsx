import { useState } from "react";
import { CardAnimation } from "./CardAnimation";
import { CardAnimation2 } from "./CardAnimation2";
import { CardAnimation3 } from "./CardAnimation3";
import { CardAnimation4 } from "./CardAnimation4";
import { CardAnimation5 } from "./CardAnimation5";

export const CardGroupAnimation = () => {
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
      <div className="translate-x-[80%] ">
        <CardAnimation isHovered={isHovered} />
      </div>
      <div className="translate-x-[40%]">
        <CardAnimation2 isHovered={isHovered} />
      </div>
      <div className="z-20">
        <CardAnimation3 isHovered={isHovered} />
      </div>
      <div className="-translate-x-[40%] z-10">
        <CardAnimation4 isHovered={isHovered} />
      </div>
      <div className="-translate-x-[80%]">
        <CardAnimation5 isHovered={isHovered} />
      </div>
    </div>
  );
};

export default CardGroupAnimation;
