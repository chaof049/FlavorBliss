import { pricingList1Data } from "../../assets/pricingList1Data";
import Pricing1Animation from "./Pricing1Animation";
import { BsStack } from "react-icons/bs";
import Pricing2Animation from "./Pricing2Animation";
import { pricingList2Data } from "../../assets/pricingList2Data";

const Pricing2 = () => {
  return (
    <>
      <div className=" px-4 md:px-32 absolute z-10">
        <div className="bg-[#1F1541] py-8 px-16 rounded-3xl">
          <div className="pt-4">
            <h1 className="text-2xl text-[#BBC4DC]">
              AdCreative.ai
              <span className="block text-bold text-[#FFFFFF]">
                Who can use it?
              </span>{" "}
              <span className="text-xs block">
                E-commerce stores, startups or marketing agencies with many
                accounts… Basically
              </span>
              <span className="text-xs block">
                anyone{" "}
                <span className="font-semibold">
                  who needs an unfair advantage
                </span>{" "}
                thanks to our unique A.I.
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            {pricingList1Data.map((value, i) => {
              return (
                <div key={i} className="">
                  <Pricing1Animation
                    image={value.image}
                    title={value.title}
                    description={value.description}
                    button={value.button}
                  ></Pricing1Animation>
                </div>
              );
            })}
          </div>
          <div className="translate-y-20">
            <button className="flex items-center my-4 px-3 py-3 rounded-xl border border-white border-opacity-20 bg-white hover:bg-[#3A2A82] text-[#FE2F67] hover:text-white font-bold shadow-md">
              Generate Ad Creatives
              <span className="ml-1">
                <BsStack />
              </span>
            </button>
            <h1 className="flex text-xs text-white">
              Try 100% free for 7 days.
              <span className="font-semibold">Cancel Anytime</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="md:p-16 p-4">
        <div className="bg-[#FF2F66] p-4 md:p-20 rounded-3xl translate-y-[30%] md:px-16">
          <div className="px-20 mt-1 translate-y-[300%]">
            <h1 className="text-white text-3xl">
              See results from day one.
              <span className="block font-bold">
                Pricing that pays for itself.{" "}
              </span>
              <span className="block text-xs">
                Whether you are a startup, an agency, or an enterprise, let
                AdCreative.ai pay for itself on your first ad.
              </span>
            </h1>
          </div>
          <div className="bg-white bg-opacity-50 p-4 rounded-2xl border border-[#FDFDFF] translate-y-[50%]">
            <div className="-translate-y-[100%] flex gap-4 px-4">
              <p className="bg-[#1F1540] text-white rounded-xl px-8 py-2">
                Monthly
              </p>
              <p className="bg-white text-[#1F1540] p-2 rounded-xl">
                Yearly (50% OFF)
              </p>
            </div>
            <div className="border border-white bg-white bg-opacity-30 p-2 rounded-2xl">
              <div className="bg-white text-black flex w-full justify-between p-4 rounded-2xl items-center">
                <p>
                  From Nepal? We offer a 50% discount on any plan for our users
                  in Nepal
                </p>
                <button className="bg-[#FF2F66] hover:bg-[#1F1540] text-white rounded-lg p-2 font-semibold">
                  Sign up to claim the discount
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              {pricingList2Data.map((value, i) => {
                return (
                  <div key={i} className="">
                    <Pricing2Animation pricingList={value}></Pricing2Animation>
                  </div>
                );
              })}
            </div>
            <div className="bg-white  mt-8 -mb-4 rounded-b-2xl p-2 ">
              <h1 className="text-center text-xs">
                Looking for a custom plan?
                <span className="text-[#FF2F66] underline underline-offset-2">
                  Sign up
                </span>{" "}
                now and request a custom plan on our Upgrade Page.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing2;
