import HeroBottom from "./HeroBottom";
import HeroTop from "./HeroTop";

// import { CardGroupAnimation } from "../cardAnimation/CardGroupAnimation";



const Hero = () => {
  return (
    <div className="bg-[url('/hero-bg.png')] bg-cover p-4 md:p-16">

      <HeroTop></HeroTop>
      <HeroBottom></HeroBottom>
    </div>
  );
};

export default Hero;
