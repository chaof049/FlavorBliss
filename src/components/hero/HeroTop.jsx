import { BsStack } from "react-icons/bs";
import TiltCard from "../TiltCard";
import HeroAnimation from "./HeroAnimation";
import {
  heroAnimation2Data,
  heroAnimationData,
} from "../../assets/heroAnimationData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroTop = () => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
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
        <div className="grid grid-cols-1 p-3 rounded-2xl">
          {/* <div className="flex justify-center bg-[#F4F2FB] p-3 rounded-2xl"> */}
          <Slider {...settings} className="">
            {heroAnimationData.map((value, i) => {
              return (
                <div key={i} className="w-full flex px-72">
                  <HeroAnimation value={value}></HeroAnimation>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="grid grid-cols-1 p-3 rounded-2xl px-32">

        <Slider {...settings} className="">
          {heroAnimation2Data.map((images, i) => {
            return (
              <div key={i} className="w-full">
                <TiltCard images={images}></TiltCard>
              </div>
            );
          })}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroTop;