import { useState } from "react";
import { CardUA } from "./CardUA";
import { CardUA2 } from "./CardUA2";
import { CardUA3 } from "./CardUA3";
import { CardUA4 } from "./CardUA4";
import { CardUA5 } from "./CardUA5";

export const CardGroupUA = () => {
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
        <CardUA isHovered={isHovered} />
      </div>
      <div className=" translate-x-[40%]">
        <CardUA2 isHovered={isHovered} />
      </div>
      <div className=" z-20">
        <CardUA3 isHovered={isHovered} />
      </div>
      <div className=" -translate-x-[40%] z-10">
        <CardUA4 isHovered={isHovered} />
      </div>
      <div className=" -translate-x-[80%]">
        <CardUA5 isHovered={isHovered} />
      </div>
    </div>
  );
};

export default CardGroupUA;

