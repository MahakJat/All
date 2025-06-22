import React from "react";

const Section4 = () => {
  return (
    <section className="pt-20 text-center px-[10vh] bg-[#E4E4E4]">
      <div className="relative">
        <h1 className="capitalize font-medium">cases</h1>
        <h1 className="uppercase text-[18vh] font-[font-2] leading-[0.9] font-semibold mt-14">
          Head Turning
          <br />
          Projects
        </h1>
        <h1 className="font-[font-2] bg-[#F4C727] w-fit px-6 py-4 rounded-[3vh] absolute left-[55vw] top-[42vh] text-[2.2h] rotate-[-10deg]">
          Gotta see 'm all
        </h1>
      </div>
      <div className="w-[90vw] flex justify-end">
        <button className="line-div-parent transition-all duration-1000 ease-in-out px-[3vh] py-[2vh] border border-black rounded-[2vh] mt-6 hover:rounded-[6vh]  flex group">
          <h1 className="font-[font-2]">
            Alle projecten
            <div className="line-div h-[1px] w-[0%] bg-black"></div>
          </h1>
          <i className="ri-arrow-right-line ml-[4vh] transition-transform duration-1000 group-hover:scale-125 inline-block"></i>
        </button>
      </div>
    </section>
  );
};

export default Section4;
