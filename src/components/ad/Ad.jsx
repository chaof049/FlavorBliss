import { Link } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { MdAssistantNavigation } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import AdBox1 from "./AdBox1";
import AdBox2 from "./AdBox2";

const Ad = () => {
  return (
    <div className="bg-[#F5F5FF] flex flex-col">
      <div className="bg-[#1F1540]">
        <div className="flex justify-around ">
          <p className="flex -translate-y-5">
            <img src="/trust5.png"></img>
            <img src="/trust4.png"></img>
          </p>
          <p className="flex gap-2 bg-white rounded-xl py-2 px-3 h-fit -translate-y-1/2">
            <h1 className="">Preferred Partners of |</h1>
            <img src="/ins.png" className="h-6"></img>
            <img src="/in.png" className="h-6"></img>
            <img src="/bing.png" className="h-6"></img>
          </p>
          <p className="flex -translate-y-5">
            <img src="/trust6.png"></img>
            <img src="/trust3.png"></img>
          </p>
        </div>

        <div className="text-center -translate-y-16">
          <span className="text-white">
            The secret sauce of{" "}
            <span className="text-[#FBC821]">1,500,000+</span>
            advertisers and brands.
          </span>
        </div>
        <div className="flex  justify-center my-20">
          <div className=" border-[1px] border-[#726C88] p-5 flex flex-col items-center rounded-3xl bg-white bg-opacity-10">
            <h1 className=" text-center text-white font-semibold text-xl">
              AdCreative.ai is one of
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FA6227] to-[#FBC821]">
                the top 3 fastest growing products in the world!
              </span>
            </h1>
            <img
              src="/gordon.png"
              alt="gordon"
              className="h-[350px] w-[550px] border-8 border-white rounded-3xl"
            ></img>
            <Link
              to={
                "https://www.g2.com/best-software-companies/2023/fastest-growing?rank=3#rank-3"
              }
              target="_"
              className="text-white text-xs w-full text-center pt-2"
            >
              Adcreative.ai is displayed in New York’s Times Square.
              <span className="underline">Photo by G2</span>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white text-center">
            Generate ad creatives that help you sell. Fast.
            <span className="my-1 block bg-clip-text text-transparent bg-gradient-to-r from-[#FE296E] to-[#FBC821] text-4xl font-bold">
              Using Artificial Intelligence.
            </span>
            <span className="block text-xs font-thin text-[#B5BDD6]">
              In 2023, every single thing in Digital Marketing is optimized by
              Artificial Intelligence, except Creatives. AdCreative.ai
            </span>
            <span className="block text-xs font-thin text-[#B5BDD6]">
              is here to change that, to make data-backed, result-bringing ad
              creatives accessible.
            </span>
          </h1>
        </div>
        <div className="flex justify-center flex-col-2 gap-5 h-[200px] my-8">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#F92F6A] to-[#5615AA]">
            <FaArrowAltCircleUp className="rounded-lg h-[40px] w-[40px]" />
            <h1 className="text-white text-lg font-bold">
              Up to 14x
              <span className="block text-sm">Higher Conversion Rates</span>
              <span className="block text-xs font-thin">
                Compared to creatives that are
              </span>
              <span className="block text-xs font-thin">not data-backed.</span>
            </h1>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#FBC523] to-[#FA6627]">
            <MdAssistantNavigation className="h-[40px] w-[40px]" />
            <h1 className="text-white text-lg font-bold">
              Over 95%
              <span className="block text-sm">Of the users improve CTR</span>
              <span className="block text-xs font-thin">
                In their first month, using our
              </span>
              <span className="block text-xs font-thin">creatives.</span>
            </h1>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button className="flex items-center my-4 px-3 py-3 rounded-xl bg-[#3A2A82] hover:bg-[#FE2F67] text-white font-bold shadow-md">
            Generate Ad Creatives
            <span className="ml-1">
              <BsStack />
            </span>
          </button>
          <h1 className="flex text-xs text-white">
            Try 100% free for 7 days.
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5414AC] to-[#FF286F]">
              Cancel Anytime
            </span>
          </h1>
        </div>
      </div>

      <div className="flex  flex-col w-full items-center">
        <AdBox1></AdBox1>
        <div className="flex flex-col items-center -translate-y-10">
          <button className="flex items-center my-4 px-3 py-3 rounded-xl bg-[#3A2A82] hover:bg-[#FE2F67] text-white font-bold shadow-md">
            Generate Ad Creatives
            <span className="ml-1">
              <BsStack />
            </span>
          </button>
          <h1 className="flex text-xs text-[#79709B]">
            Try 100% free for 7 days.
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5414AC] to-[#FF286F]">
              Cancel Anytime
            </span>
          </h1>
        </div>
      </div>
      <AdBox2></AdBox2>
    </div>
  );
};

export default Ad;
