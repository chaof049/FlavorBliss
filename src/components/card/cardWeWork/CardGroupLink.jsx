import { useState } from "react";
import { CardWeWork } from "./CardWeWork";
import { CardWeWork2 } from "./CardWeWork2";
import { CardWeWork3 } from "./CardWeWork3";

export const CardGroupWeWork = () => {
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
      <div className=" translate-x-[40%]">
        <CardWeWork isHovered={isHovered} />
      </div>
      <div className=" z-20">
        <CardWeWork2 isHovered={isHovered} />
      </div>
      <div className=" -translate-x-[40%] z-10">
        <CardWeWork3 isHovered={isHovered} />
      </div>
    </div>
  );
};

export default CardGroupWeWork;

