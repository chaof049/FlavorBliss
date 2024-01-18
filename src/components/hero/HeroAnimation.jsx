/* eslint-disable react/prop-types */

const HeroAnimation = (props) => {
  return (
    <div className="bg-[#FDFDFD] rounded-2xl flex justify-between flex-col w-[120px] h-[110px] items-center">
      <div className="rounded-b-lg bg-[#F1EFFB] mt-1 px-6 shadow-lg shadow-blue-100">
        <p>{props.title}</p>
      </div>

      {props.image.includes("/") ? (
        <div className="flex-1 flex  items-center justify-center">
          <img src={props.image} alt="logo"></img>
        </div>
      ) : (
        <div className="flex-1 flex  items-center justify-center">
          {props.image}
        </div>
      )}
    </div>
  );
};

export default HeroAnimation;
