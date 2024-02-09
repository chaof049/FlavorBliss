import { useState } from "react";
import { CardTesla } from "./CardTesla";
import { CardTesla2 } from "./CardTesla2";
import { CardTesla3 } from "./CardTesla3";
import { CardTesla4 } from "./CardTesla4";
import { CardTesla5 } from "./CardTesla5";

export const CardGroupTesla = () => {
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
      <div className="translate-x-[80%]">
        <CardTesla isHovered={isHovered} />
      </div>
      <div className="translate-x-[40%]">
        <CardTesla2 isHovered={isHovered} />
      </div>
      <div className=" z-20">
        <CardTesla3 isHovered={isHovered} />
      </div>
      <div className="-translate-x-[40%] z-10">
        <CardTesla4 isHovered={isHovered} />
      </div>
      <div className="-translate-x-[80%]">
        <CardTesla5 isHovered={isHovered} />
      </div>
    </div>
  );
};

export default CardGroupTesla;
