import { BsStack } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#1F1540]">
      <div className="md:p-48">
        <div className="flex  flex-col-reverse md:flex-row border border-[#5E5776] bg-white bg-opacity-20 p-8 rounded-xl">
          <div className="flex-1">
            <h1 className="text-base text-[#BBC4DC]">
              READY TO START?
              <span className="text-wrap text-lg font-semibold text-[#FFFFFF] block">
                Bring your ad creative game to the next level with
                AdCreative.ai!
              </span>
            </h1>
            <button className="flex items-center my-2 px-3 py-3 rounded-xl border border-white border-opacity-20 bg-white hover:bg-[#3A2A82] text-[#FE2F67] hover:text-white font-bold shadow-md">
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
          <div className="flex-1">
            <img src="/ghost.png" alt="ghost" className="h-[200px]"></img>
          </div>
        </div>
      </div>
      <div className="translate-y-[20%] grid md:grid-cols-1 gap-12 justify-items-center">
        <div>
          <img src="/footer/product1.png" alt="product" className="h-10"></img>
        </div>
        <div>
          <img src="/footer/product2.png" alt="product" className="h-10"></img>
        </div>
      </div>
      <div className=" bg-[#181231] py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 px-32">
          <div className="text-[#BBC4DC] text-xs text-left">
            <div className="flex h-12">
              <img src="/footer/adFooter.png" alt="logo" className="py-2"></img>
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
                <span className="block">inquiries, please write to us at</span>
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
  );
};

export default Footer;
