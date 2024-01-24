import { Link } from "react-router-dom";
import { BsStack } from "react-icons/bs";
import AdBox1 from "./AdBox1";
import AdBox2 from "./AdBox2";

const Ad = () => {
  return (
    <div className="bg-[#F5F5FF] flex flex-col">
      <div className="bg-[#1F1540]">
        <div className="flex justify-around ">
          <p className="md:flex -translate-y-2 hidden w-20 h-20">
            <img src="/banners/banner1.png"></img>
            <img src="/banners/banner2_4.png"></img>
          </p>
          <p className="flex justify-center items-center gap-2 bg-white rounded-3xl py-2 px-3 h-fit -translate-y-1/2">
            <h1 className="text-xs">Preferred Partners of |</h1>
            <img src="/upIcons/fb.png" className="h-5 mr-2"></img>
            <img src="/upIcons/ins.png" className="h-5 mr-2"></img>
            <img src="/upIcons/in.png" className="h-5 mr-2"></img>
            <img src="/upIcons/google.png" className="h-5 mr-2"></img>
            <img src="/upIcons/bing.png" className="h-5 mr-2"></img>
          </p>
          <p className="md:flex -translate-y-2 hidden w-20 h-20">
            <img src="/banners/banner3.png"></img>
            <img src="/banners/banner2_4.png"></img>
          </p>
        </div>

        <div>
          <div className="text-center">
            <span className="text-white">
              The secret sauce of{" "}
              <span className="text-[#FBC821]">1,500,000+</span>
              advertisers and brands.
            </span>
          </div>
          <div className="flex  justify-center my-20 px-4">
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
          <div className="flex justify-center md:hidden h-20 mb-20">
            <img src="/banners/fall1.png"></img>
            <img src="/banners/fall2.png"></img>
            <img src="/banners/fall3.png"></img>
            <img src="/banners/fall4.png"></img>
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

        <div className="flex justify-center gap-5 h-[200px] my-8">
          <div className="p-4 w-auto rounded-2xl bg-gradient-to-b from-[#F92F6A] to-[#5615AA]">
            <img src="/arrows/up.png" alt="upArrow" className="h-9 mb-2"></img>
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
          <div className="p-4 w-auto rounded-2xl bg-gradient-to-b from-[#FBC523] to-[#FA6627]">
            <img src="/arrows/nav.png" alt="upArrow" className="h-9 mb-2"></img>
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
          <button className="flex items-center my-4 px-3 py-3 rounded-xl bg-[#3A2A82] hover:bg-[#FE2F67] text-white font-bold shadow-lg shadow-[#3a2a82a3] hover:shadow-[#fe2f669d]">
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
        {/* AD BOX 1 */}
        <AdBox1></AdBox1>
        <div className="flex flex-col items-center -translate-y-10">
          <button className="flex items-center my-4 px-3 py-3 rounded-xl bg-[#3A2A82] hover:bg-[#FE2F67] text-white font-bold shadow-lg shadow-[#3a2a82a3] hover:shadow-[#fe2f669d]">
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
      {/* AD BOX2 */}
      <AdBox2></AdBox2>
    </div>
  );
};

export default Ad;
