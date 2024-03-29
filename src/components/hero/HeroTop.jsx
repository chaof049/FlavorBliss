import { BsStack } from "react-icons/bs";
import HeroAnimation from "./HeroAnimation";
import { heroAnimationData } from "../../assets/heroAnimationData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hamburger from "../Hamburger";
import Language from "../Language";
import { CardGroupTesla } from "../card/cardTesla/CardGroupAnimation";
import CardGroupUA from "../card/cardUA/CardGroupUA";
import CardGroupLink from "../card/cardLink/CardGroupLink";
import CardGroupWeWork from "../card/cardWeWork/CardGroupLink";
// import { useState } from "react";

const HeroTop = () => {
  // let [onHoverLanguage, setOnHoverLanguage] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    // centerMode: true,
  };
  return (
    <div className="border-2 border-white  rounded-lg bg-white bg-opacity-30 relative">
      <Hamburger></Hamburger>
      <div className="absolute lg:right-4 text-xs font-semibold mt-4 mx-2">
        <Language></Language>
      </div>
      <div className="flex flex-col items-center">
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
        <button className="flex items-center px-3 py-3 rounded-xl bg-[#FE2F67] hover:bg-[#3A2A82] text-white font-bold shadow-lg shadow-[#fe2f669d] hover:shadow-[#3a2a82a3]">
          Try For Free Now
          <span className="ml-1">
            <BsStack />
          </span>
        </button>
        <div className="mt-4 flex flex-col items-center">
          <div className="grid grid-cols-1 px-14 md:p-3 rounded-2xl">
            <Slider {...settings} className="">
              {heroAnimationData.map((value, i) => {
                return (
                  <div
                    key={i}
                    className="w-full flex md:px-12 lg:px-48 xl:px-72"
                  >
                    <HeroAnimation value={value}></HeroAnimation>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-1">
          <Slider {...settings} className="px-4">
            <div>
              <CardGroupTesla />
            </div>
            <div>
              <CardGroupUA />
            </div>
            <div>
              <CardGroupWeWork />
            </div>
            <div>
              <CardGroupLink />
            </div>
          </Slider>
        </div>
        <div className="lg:hidden">
          <img src="/hero/teslaC.webp" alt="tesla"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
