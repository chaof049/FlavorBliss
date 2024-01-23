/* eslint-disable react/prop-types */

import Select from "react-select";

const Pricing2Animation = (props) => {
  return (
    <div className=" bg-white border text-black border-[#F5F5FF] rounded-2xl h-full px-8 py-4">
      <h1 className="text-lg font-semibold">{props.pricingList.title}</h1>

      <p className="text-xs text-wrap pb-2">{props.pricingList.description}</p>
      <button className="bg-[#F5F5FF] p-4 text-sm rounded-lg ">
        {/* {Array.isArray(props.pricingList.button1) ? ( */}
        {typeof props.pricingList.button1 === "object" ? (
          <Select
            className="w-full"
            placeholder={props.pricingList.button1.title}
            options={props.pricingList.button1.options}
          ></Select>
        ) : (
          <>{props.pricingList.button1}</>
        )}
      </button>
      {props.pricingList.list.map((value, i) => {
        return (
          <ul key={i}>
            <li>
              &#10003;{" "}
              <span className="underline underline-offset-2 text-xs">
                {value}
              </span>
            </li>
          </ul>
        );
      })}
      <button className="text-white bg-[#FF2F66] p-4 rounded-xl">
        {props.pricingList.button2}
      </button>
    </div>
  );
};

export default Pricing2Animation;
