import { adBox1Data } from "../../assets/adBox1Data";
// import Ad from "./Ad";
import AdBox1Table from "./AdBox1Table";

const AdBox1 = () => {
  return (
    <div className="">
      <h1 className="text-[#3A2A82] text-lg text-center mt-28">
        All-in-One
        <span className="my-1 block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F14AD] to-[#FE276E]">
          Advertising Powerhouse
        </span>
        <span className="block text-xs text-[#847BA4] mb-6">
          Generate any asset, track competitors, and create reports — all using
          AI.
        </span>
      </h1>
      <div className="bg-white bg-opacity-10 w-full flex items-center flex-col border border-white p-16 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 rounded-2xl ">
          {adBox1Data.map((value, i) => {
            return (
              <div key={i}>
                <AdBox1Table
                  image={value.image}
                  title={value.title}
                  description={value.description}
                  button={value.button}
                  newFeature={value.newFeature}
                ></AdBox1Table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdBox1;
