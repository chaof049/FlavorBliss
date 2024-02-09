/* eslint-disable react/prop-types */

const HeroAnimation = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-2 bg-[#F4F2FB] p-3 rounded-2xl">
      {props.value.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-[#FDFDFD] rounded-2xl flex justify-between flex-row md:flex-col w-full md:w-[120px] md:h-[110px] items-center"
          >
            <div className="rounded-b-lg md:bg-[#F1EFFB] mt-1 px-6 md:shadow-lg md:shadow-blue-100 ">
              <p>{item.title}</p>
            </div>

            {item.image.includes("/") ? (
              <div className="flex-1 flex  items-center justify-center w-24 ">
                <img src={item.image} alt="logo"></img>
              </div>
            ) : (
              <div className="flex-1  flex  items-center justify-center text-xs px-4 text-wrap">
                {item.image}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeroAnimation;
