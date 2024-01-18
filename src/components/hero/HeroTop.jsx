import { BsStack } from "react-icons/bs";
import TiltCard from "../TiltCard";
import HeroAnimation from "./HeroAnimation";
import { heroAnimationData } from "../../assets/heroAnimationData";

const HeroTop = () => {
  return (
    <div className="border-2 border-white flex flex-col items-center rounded-lg bg-white bg-opacity-30">
      <img
        src="/hero_logo.png"
        alt="hero_logo"
        className="h-16 w-50 mt-16"
      ></img>
      <h1 className=" text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5614AD] to-[#FF2F67] mt-6">
        #1 most used
        <span className="block">AI tool for advertising</span>
      </h1>
      <h1 className="text-3xl font-bold text-center text-[#3A2A82] my-6">
        Generate ad creatives that outperform
        <span className="block">your competitors.</span>
      </h1>
      <button className="flex items-center px-3 py-3 rounded-xl bg-[#FE2F67] hover:bg-[#3A2A82] text-white font-bold shadow-md">
        Try For Free Now
        <span className="ml-1">
          <BsStack />
        </span>
      </button>
      <div className="mt-4 flex flex-col items-center">
        <div className="grid grid-cols-4 gap-2  bg-[#F4F2FB] p-3 rounded-2xl">
          {heroAnimationData.map((value, i) => {
            return (
              <div key={i}>
                <HeroAnimation
                  title={value.title}
                  image={value.image}
                ></HeroAnimation>
              </div>
            );
          })}
        </div>
        <TiltCard></TiltCard>
      </div>
    </div>
  );
};

export default HeroTop;
