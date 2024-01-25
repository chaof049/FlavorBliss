import { BsStack } from "react-icons/bs";
import AdBox2Right from "./AdBox2Right";
import { adBox2Data } from "../../assets/adBoxesData";

const AdBox2 = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-48 my-8">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl text-[#3A2A82] text-center font-semibold md:text-left">
          Why
          <span className="block font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5515AA] to-[#FE296E]">
            AdCreative.ai?
          </span>
          <span className="block text-xs text-[#79709B]">
            Let our artificial intelligence generate creatives that convert,
            <p className="block">
              <span className="font-semibold">
                so you can save time and money to scale.
              </span>
              Check out why and{" "}
            </p>
            how you should use Adcreative.ai
          </span>
        </h1>
        <div className="flex flex-col items-center md:items-start w-full">
          <button className=" flex items-center my-4 px-3 py-3 rounded-xl bg-[#3A2A82] hover:bg-[#FE2F67] text-white font-bold shadow-lg shadow-[#3a2a82a3] hover:shadow-[#fe2f669d]">
            Generate Ad Creatives
            <span className="ml-1">
              <BsStack />
            </span>
          </button>
          <h1 className="flex text-xs text-[#887FA8]">
            Try 100% free for 7 days.
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5414AC] to-[#FF286F]">
              Cancel Anytime
            </span>
          </h1>
        </div>
      </div>
      <div className="flex-1 h-[70vh] overflow-y-scroll no-scrollbar py-10">
        {adBox2Data.map((value, i) => {
          return (
            <div key={i} className="mb-10">
              <AdBox2Right
                image={value.image}
                title={value.title}
                description={value.description}
              ></AdBox2Right>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdBox2;
