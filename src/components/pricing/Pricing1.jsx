const Pricing1 = () => {
  return (
    <div className="p-32">
      <div>
        <h1 className="text-4xl text-[#3A2A82]">
          How
          <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5515AB] to-[#FE296E]">
            Does our shape work?
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
      <div className="relative flex flex-col-4 mt-4 h-[500px]">
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
            className="absolute top-[60px] left-0 scale-[1.05]"
          ></img>
          <div className="top-[155px] w-[120%] flex absolute left-0 z-50 justify-between items-center">
            <div>
              <img src="/shape1.png" alt="shape" className="z-20  p-2"></img>
            </div>
            <div>
              <img src="/shape2.png" alt="shape" className="z-20  p-2"></img>
            </div>
            <div>
              <img src="/shape3.png" alt="shape" className="z-20  p-2"></img>
            </div>
            <div>
              <img src="/shape4.png" alt="shape" className="z-20  p-2"></img>
            </div>
            <div>
              <img src="/shape4.png" alt="shape" className="z-20  p-2"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing1;
