/* eslint-disable react/prop-types */

const HoverComponent = (props) => {
  return (
    <div className=" absolute pt-8 top-0 left-0 w-48 rounded-md flex flex-col z-50">
      <div className="bg-[#FFFFFF] pt-2 pb-2 z-10 w-full text-[#3A2A82] rounded-t-xl relative">
        <div className="absolute top-[11px] left-1">
          {props.icon ? props.icon : <></>}
        </div>
        <span className={`${props.icon ? "ml-6" : ""}`}>{props.title}</span>
      </div>
      <div className="z-10 rounded-b-xl bg-[#F8F8F9] p-1">
        {props.list.map((value, i) => {
          return (
            <>
              {typeof value === "object" ? (
                <div
                  key={i}
                  className=" flex items-center text-[#3A2A82] hover:text-[#FE2F67] z-10 w-full bg-[#FFFFFF] my-1 rounded-md "
                >
                  <img
                    src={value.icon}
                    alt="icons"
                    className="h-4 w-4 mr-1"
                  ></img>
                  {value.title}
                </div>
              ) : (
                <div
                  key={i}
                  className=" text-[#3A2A82] hover:text-[#FE2F67] z-10 w-full bg-[#FFFFFF] my-1 rounded-md "
                >
                  {value}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HoverComponent;
