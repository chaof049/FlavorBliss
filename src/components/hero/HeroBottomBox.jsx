/* eslint-disable react/prop-types */

const HeroAnimationBottom = (props) => {
  return (
    <div className="bg-[#FAF9FD] bg-opacity-60 border border-white rounded-2xl p-5 h-[4rem] w-[7rem] flex justify-center items-center">
      <img src={props.image} alt="logo" className="bg-cover"></img>
    </div>
  );
};

export default HeroAnimationBottom;
