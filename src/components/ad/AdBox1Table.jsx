/* eslint-disable react/prop-types */

const AdBox1Table = (props) => {
  return (
    <div className=" bg-white bg-opacity-25 hover:bg-opacity-70 border border-white rounded-2xl w-auto h-[450px] p-3">
      <img src={props.image} alt="logo" className="h-[250px] w-[400px]"></img>

      <div className="px-3 py-5">
        <h1 className="text-lg text-[#3A2A82] font-semibold py-2">
          {props.title}
        </h1>

        <p className="text-xs text-[#8881A6]">{props.description}</p>

        <button className="text-xs text-[#3A2A82] font-normal py-4 flex justify-between w-full">
          {props.button}
          {props.newFeature ? (
            <p className="text-[#FF2F66] bg-[#FFEBF0] text-xs rounded-3xl px-2">
              NEW FEATURE!
            </p>
          ) : (
            <></>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdBox1Table;
