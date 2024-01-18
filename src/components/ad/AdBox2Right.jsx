/* eslint-disable react/prop-types */

const AdBox2Right = (props) => {
  return (
    <div className="border border-white bg-white bg-opacity-50 px-8 pb-8 rounded-2xl">
      <div className=" -translate-y-1/2 border border-white w-fit bg-white bg-opacity-20 p-[6px] rounded-2xl">
        <img
          src={props.image}
          alt="image"
          className=" h-10 bg-[#FFEBF0] p-2 rounded-xl"
        ></img>
      </div>

      <h1 className="text-[#3A2A82] text-lg font-semibold">{props.title}</h1>
      <p className="text-[#79709B] text-xs">{props.description}</p>
    </div>
  );
};

export default AdBox2Right;
