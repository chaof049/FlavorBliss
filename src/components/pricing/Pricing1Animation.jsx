/* eslint-disable react/prop-types */

const Pricing1Animation = (props) => {
  return (
    <div className=" bg-white bg-opacity-15 border border-[#5D5676] rounded-2xl h-full px-5">
      <img
        src={props.image}
        alt="logo"
        className="h-8 p-2 -translate-y-[60%] bg-[#FF2F66] rounded-lg shadow-md shadow-[#ff2f66ce]"
      ></img>

      <div className="h-full">
        <h1 className="text-lg text-white font-semibold py-2">{props.title}</h1>

        <p className="text-xs text-[#8881A6] text-wrap">{props.description}</p>
        <button className="text-xs text-white font-normal py-4">
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default Pricing1Animation;
