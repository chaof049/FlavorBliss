import { BsStack } from "react-icons/bs";
import { footer2Data, footer3Data, footer4Data } from "../assets/footerBox";
import { FooterBox, FooterBox2, FooterBox3 } from "./FooterBox";

const Footer = () => {
  return (
    <div>
      <div className="overflow-hidden relative">
        <div className="flex justify-center font-semibold">
          <h1 className="text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4F14AD] to-[#FE276E]">
            #1 most used & most talked-about
            <span className="text-4xl block text-center">
              Generative AI for advertisers
            </span>
          </h1>
        </div>
        <div className="flex gap-4 lg:px-16 pt-6">
          {footer2Data.map((value, i) => {
            return (
              <div key={i}>
                <FooterBox
                  title={value.title}
                  description={value.description}
                ></FooterBox>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 py-4 opacity-40">
          {footer3Data.map((value, i) => {
            return (
              <div key={i}>
                <FooterBox2
                  title={value.title}
                  description={value.description}
                ></FooterBox2>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 opacity-20">
          {footer4Data.map((value, i) => {
            return (
              <div key={i}>
                <FooterBox3
                  title={value.title}
                  description={value.description}
                ></FooterBox3>
              </div>
            );
          })}
        </div>
        <div className="bottom-[50%] absolute flex justify-center w-full">
          <button className="flex items-center px-3 py-3 rounded-xl bg-[#FE2F67] hover:bg-[#3A2A82] text-white text-xs font-bold shadow-lg shadow-[#fe2f669d] hover:shadow-[#3a2a82a3]">
            Try For Free Now
            <span className="ml-1">
              <BsStack />
            </span>
          </button>
        </div>
        <img
          src="/bottom-v.png"
          alt="bottom-v"
          className="absolute bottom-0"
        ></img>
      </div>
      <div className="bg-[#1F1540]">
        <div className="md:px-16 lg:px-48 py-12">
          <div className="flex  flex-col-reverse md:flex-row relative h-auto lg:h-[200px] border border-[#5E5776] bg-white bg-opacity-20 p-8 rounded-xl">
            <div className="flex-1 flex flex-col w-full">
              <h1 className="text-xl text-[#BBC4DC] text-center md:text-left">
                READY TO START?
                <span className="text-2xl font-bold text-[#FFFFFF] block">
                  Bring your ad creative game
                  <span className="block">
                    to the next level with AdCreative.ai!
                  </span>
                </span>
              </h1>
              <div className="flex flex-col md:flex-row items-center">
                <button className="flex items-center text-xs mr-2 my-2 px-3 py-3 rounded-xl border border-white border-opacity-20 bg-white hover:bg-[#3A2A82] text-[#FE2F67] hover:text-white font-bold shadow-md">
                  Generate Ad Creatives
                  <span className="ml-1">
                    <BsStack />
                  </span>
                </button>
                <h1 className=" text-xs text-white ">
                  Try 100% free for 7 days.
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FE296E] to-[#FBC821]">
                    Cancel Anytime
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex-1 lg:absolute w-[300px] lg:w-[400px] xl:w-[500px]  lg:bottom-4 lg:-right-6 xl:-right-6 xl:bottom-0">
              <img src="/ghost.png" alt="ghost" className=""></img>
            </div>
          </div>
        </div>
        <div className="translate-y-[20%] grid md:grid-cols-1 gap-12 justify-items-center">
          <div>
            <img
              src="/footer/product1.png"
              alt="product"
              className="h-10"
            ></img>
          </div>
          <div>
            <img
              src="/footer/product2.png"
              alt="product"
              className="h-10"
            ></img>
          </div>
        </div>
        <div className=" bg-[#181231] py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 px-32">
            <div className="text-[#BBC4DC] text-xs text-center md:text-left">
              <div className="flex h-12">
                <img
                  src="/footer/adFooter.png"
                  alt="logo"
                  className="py-2"
                ></img>
              </div>

              <p className="py-2">Made with ♥ in Paris!</p>
              <p className="py-2">2022 AdCreative.ai | All rights reserved.</p>
              <p className="py-2">
                <span className="font-semibold">Need help?</span> Reach us at:{" "}
                <span className="font-semibold">contact@adcreative.ai</span>
              </p>
            </div>
            <div className="text-[#BBC4DC] text-center text-xs my-6">
              <p className="py-2 font-semibold">PAGES</p>
              <p className="py-2">Home Page</p>
              <p className="py-2">Who Is For?</p>
              <p className="py-2">Pricing</p>
              <p className="py-2">Generate Creatives</p>
              <p className="py-2">Generate Texts & Headlines</p>
              <p className="py-2">Creative Insights</p>
              <p className="py-2">Blog</p>
            </div>
            <div className="text-[#BBC4DC] text-center text-xs md:text-right my-4">
              <p className="py-2 font-semibold">ADCREATIVE.AI</p>
              <p className="py-2">Terms and Conditions</p>
              <p className="py-2">Privacy Policy</p>
              <p className="py-2">Affiliate</p>
              <div className="my-4">
                <div className="flex justify-center md:justify-end h-6">
                  <img src="/footer/footerBot.png" alt="logo"></img>
                </div>

                <p>
                  For support and refund-related
                  <span className="block">
                    inquiries, please write to us at
                  </span>
                  <span className="text-[#FBC821] block">
                    contact@adcreative.ai
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#0B071A]">
            <p className="text-white text-xs text-center py-2">
              AdCreative.ai is the main sponsor of Ad World Conference, the
              world’s largest advertising event
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="flex gap-2 bg-white rounded-3xl py-2 px-3 h-fit -translate-y-1/2">
            <h1 className="text-xs text-center">Official Channels |</h1>
            <img src="/footer/inFooter.png" className="h-5 mr-2"></img>
            <img src="/footer/twitterFooter.png" className="h-5 mr-2"></img>
            <img src="/footer/youtubeFooter.png" className="h-5 mr-2"></img>
            <img src="/footer/igFooter.png" className="h-5 mr-2"></img>
            <img src="/footer/pinFooter.png" className="h-5 mr-2"></img>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
