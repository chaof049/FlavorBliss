const Pricing1 = () => {
  return (
    <div className="pt-32 lg:p-32">
      <div className="px-14 justify-center text-center lg:text-left ">
        <h1 className="text-4xl text-[#3A2A82] text-center lg:text-left mb-4">
          How
          <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5515AB] to-[#FE296E]">
            Does our AI work?
          </span>
        </h1>
        <div className="flex justify-center">
          <p className=" text-[#7B729D] leading-4  text-center lg:text-left text-xs mb-4 font-normal max-w-lg lg:w-8/12">
            AdCreative.ai is a data company that possesses one of the largest
            databases of high-conversion-rate ad creatives. It is the only
            company capable of generating conversion-focused ad creatives using
            generative AI.
          </p>
        </div>
      </div>
      <div className="hidden  relative lg:flex flex-col-4 mt-4 px-14 h-[500px]">
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
            className="absolute lg:top-[85px] xl:top-[60px] left-0 "
          ></img>
          <div className="top-[35%] w-[100%] flex absolute -right-[30px] z-50 justify-between items-center ">
            <div>
              <img
                src="/shape1.png"
                alt="shape"
                className="p-2  xl:scale-100"
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
      <div className=" lg:hidden">
        <div className="bg-md-pattern bg-no-repeat bg-top  flex flex-col items-center bg-cover w-full">
          <div className=" text-white">
            <div className="flex flex-col  px-20 py-8 sm:px-52 sm:py-8 items-center text-center border-b border-dashed border-b-white ">
              <div>
                {" "}
                <h1 className="text-lg sm:text-2xl mb-2 font-semibold ">
                  Creative Collection
                </h1>
                <p className="text-xs sm:text-sm mb-2 text-wrap">
                  We gather creative content from all the prominent social and
                  display platforms.
                </p>
              </div>
              <div className="flex justify-center ">
                <img src="/shape1.png" alt="shape" className="scale-95"></img>
              </div>
            </div>
            <div className="flex flex-col px-20 py-8 sm:px-52 sm:py-8 items-center text-center border-b border-dashed border-b-white ">
              <div>
                <h1 className="text-lg sm:text-2xl mb-2 font-semibold ">
                  Creative Analysis
                </h1>
                <p className="text-xs sm:text-sm mb-2 text-wrap">
                  We analyze each of the gathered creatives and create over 80
                  data-points per image.
                </p>
              </div>
              <div>
                <img src="/shape2.png" alt="shape" className="scale-95"></img>
              </div>
            </div>
            <div className="flex flex-col px-20 py-8 sm:px-52 sm:py-8 items-center text-center border-b border-dashed border-b-white ">
              <div>
                <h1 className="text-lg sm:text-2xl mb-2 font-semibold ">
                  Machine Learning
                </h1>
                <p className="text-xs sm:text-sm mb-2 text-wrap">
                  Using the data-points and the performance of the creative, we
                  train our unique machine learning model.
                </p>
              </div>
              <div>
                <img src="/shape3.png" alt="shape" className="scale-95"></img>
              </div>
            </div>
            <div className="flex flex-col px-20 py-8 sm:px-52 sm:py-8 items-center text-center border-b border-dashed border-b-white ">
              <div className="text-black">
                <h1 className="text-lg sm:text-2xl mb-2 font-semibold ">
                  Creative Generation
                </h1>
                <p className="text-xs sm:text-sm mb-2 text-wrap">
                  Our unique generative AI swiftly generates high-ROI ad
                  creatives and ranks them according to their anticipated
                  conversion rates.
                </p>
              </div>
              <div>
                <img
                  src="/shape4-mb.png"
                  alt="shape"
                  className="scale-95"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-white mt-4 bg-white bg-opacity-40 p-2 rounded-xl">
                <img
                  src="/logo.png"
                  alt="shape"
                  className="p-2 h-10 w-15 bg-[#4F15AD] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex py-8 px-4 lg:px-48">
        <h1 className="text-md font-semibold text-wrap">
          “AdCreative.ai is more than just an AI company;{" "}
          <span className="text-[#FF2F66]">
            they have one of the largest high-conversion ad creative databases
          </span>
          , if not the largest.”
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="/semrush.png" className="semrush mb-8"></img>
      </div>
    </div>
  );
};

export default Pricing1;
