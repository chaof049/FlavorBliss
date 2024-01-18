import HeroBottom from "./HeroBottom";
import HeroTop from "./HeroTop";

const Hero = () => {
  return (
    <div className="bg-[url('/hero-bg.png')] p-12">
      <HeroTop></HeroTop>
      <HeroBottom></HeroBottom>
    </div>
  );
};

export default Hero;
