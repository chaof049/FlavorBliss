import { partners } from "../../assets/partners";
import HeroAnimationBottom from "./HeroBottomBox";

const HeroBottom = () => {
  return (
    <div className="mt-16">
      <h1 className="text-xl font-bold text-center text-[#3A2A82]">
        Millions of creatives generated every single day
        <span className="block text-[#7C739E] text-xs">
          Powering the world’s best advertisers, from startups led by solo
          founders to global enterprises.
        </span>
      </h1>
      <div className="mt-4">
        <div className="flex justify-center items-center flex-wrap gap-4 p-8 rounded-2xl">
          {partners.map((value, i) => {
            return (
              <div key={i} className="h-[4.5rem]">
                <HeroAnimationBottom image={value.image}></HeroAnimationBottom>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
