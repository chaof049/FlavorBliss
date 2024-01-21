/* eslint-disable react/prop-types */

const HeroAnimation = (props) => {
  return (
    <div className="grid grid-cols-4 justify-items-center bg-[#F4F2FB] p-3 rounded-2xl">
      {props.value.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-[#FDFDFD] rounded-2xl flex justify-between flex-col w-[120px] h-[110px] items-center"
          >
            <div className="rounded-b-lg bg-[#F1EFFB] mt-1 px-6 shadow-lg shadow-blue-100">
              <p>{item.title}</p>
            </div>

            {item.image.includes("/") ? (
              <div className="flex-1 flex  items-center justify-center">
                <img src={item.image} alt="logo"></img>
              </div>
            ) : (
              <div className="flex-1 flex  items-center justify-center">
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
