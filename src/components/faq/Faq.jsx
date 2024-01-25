import { faqData } from "../../assets/faqData";
import FaqReadMore from "./FaqReadMore";

const Faq = () => {
  return (
    <div className="lg:px-32 mb-20 ">
      <div>
        <h1 className="text-4xl text-[#3A2A82] font-semibold my-4 px-8">
          FAQ
          <p className="my-2">
            <span className="block text-[#7F76A0] text-xs font-thin">
              Improved <span className="font-semibold">conversion rates,</span>{" "}
              included <span className="font-semibold">copy-writer</span>
              and <span className="font-semibold">beautiful designs</span>
            </span>{" "}
            <span className="block text-[#7F76A0] text-xs font-semibold">
              — just a few things our clients love!
            </span>
          </p>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-3">
          {faqData.map((value, i) => {
            return (
              <div key={i} className="mb-2 my-4">
                <FaqReadMore
                  title={value.title}
                  description={value.description}
                ></FaqReadMore>
              </div>
            );
          })}
        </div>
        <div className="border border-white bg-white bg-opacity-50 p-4 rounded-2xl h-fit">
          <img src="/v4.png" alt="v4" className="rounded-2xl"></img>
        </div>
      </div>
    </div>
  );
};

export default Faq;
