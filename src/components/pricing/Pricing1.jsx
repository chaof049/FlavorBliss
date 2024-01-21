const Pricing1 = () => {
  return (
    <div className="p-4 md:p-32">
      <div className="px-14">
        <h1 className="text-4xl text-[#3A2A82] text-center md:text-left">
          How
          <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5515AB] to-[#FE296E]">
            Does our AI work?
          </span>
          <span className="block text-[#7B729D] text-xs">
            AdCreative.ai is a data company that possesses one of the largest
            databases of high-conversion-rate ad
          </span>
          <span className="block text-[#7B729D] text-xs">
            creatives. It is the only company capable of generating
            conversion-focused ad creatives using generative AI.
          </span>
        </h1>
      </div>
      <div className="relative flex flex-col-4 mt-4 px-14 h-[500px]">
        <div className=" flex-1 border border-dashed border-y-0 border-black px-3">
          <h1 className="text-md font-semibold pt-2">Creative Collection</h1>
          <p className="text-xs text-[#7B729D] text-wrap">
            We gather creative content from all the prominent social and display
            platforms.
          </p>
        </div>
        <div className="flex-1 border border-dashed border-l-0 border-y-0 border-black px-3">
          <h1 className="text-md font-semibold pt-2">Creative Analysis</h1>
          <p className="text-xs text-[#7B729D] text-wrap">
            We analyze each of the gathered creatives and create over 80
            data-points per image.
          </p>
        </div>
        <div className="flex-1 border border-dashed border-l-0 border-y-0 border-black px-3">
          <h1 className="text-md font-semibold pt-2">Machine Learning</h1>
          <p className="text-xs text-[#7B729D] text-wrap">
            Using the data-points and the performance of the creative, we train
            our unique machine learning model.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-between border border-dashed border-l-0 border-y-0 border-black px-3">
          <div className="">
            <h1 className="text-md font-semibold pt-2">Creative Generation</h1>
            <p className="text-xs text-[#7B729D] text-wrap">
              Our unique generative AI swiftly generates high-ROI ad creatives
              and ranks them according to their anticipated conversion rates.
            </p>
          </div>
          <div>
            <h1 className="text-wrap text-right font-semibold pb-4">
              450,000,000+
              <span className="block text-xs font-thin text-[#827BA3]">
                Creatives analyzed to this day.
              </span>
            </h1>
          </div>
        </div>
        <div>
          <img
            src="/bg-md.png"
            alt="mid-bg"
            className="absolute top-[60px] left-0 "
          ></img>
          <div className="top-[35%] w-[100%] flex absolute -right-[30px] z-50 justify-between items-center ">
            <div>
              <img
                src="/shape1.png"
                alt="shape"
                className="p-2 scale-95 xl:scale-100"
              ></img>
            </div>
            <div>
              <img
                src="/shape2.png"
                alt="shape"
                className="p-2 scale-95 xl:scale-100"
              ></img>
            </div>
            <div>
              <img
                src="/shape3.png"
                alt="shape"
                className="p-2 scale-95 xl:scale-100"
              ></img>
            </div>
            <div>
              <img
                src="/shape4.png"
                alt="shape"
                className="p-2 scale-95 xl:scale-100"
              ></img>
            </div>
            <div className="border border-white  bg-white bg-opacity-40 p-2 rounded-xl">
              <img
                src="/logo.png"
                alt="shape"
                className="p-2 h-10 w-15 bg-[#4F15AD] rounded-xl"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex py-8 px-48">
        <h1 className="text-md font-semibold text-wrap">
          “AdCreative.ai is more than just an AI company;{" "}
          <span className="text-[#FF2F66]">
            they have one of the largest high-conversion ad creative databases
          </span>
          , if not the largest.”
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="/semrush.png" className="semrush"></img>
      </div>
    </div>
  );
};

export default Pricing1;
