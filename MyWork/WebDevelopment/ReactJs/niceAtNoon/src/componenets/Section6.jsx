import React from "react";
import Section6_1 from "./Section6_1";
import Section6_2 from "./Section6_2";

const Section6 = () => {
  return (
    <section className="bg-[#E4E4E4] px-[10vh] pb-[15vh] ">
      <div className="flex  gap-5">
        <Section6_1 />
        <Section6_2 />
      </div>
      <div>
        <div className="bg-[#F4F4F1] flex items-center gap-6 rounded-[2vh] w-fit px-[3vh] py-[2vh]">
          <h1 className="font-[font-2]">Ook aan de slag met jouw merk?</h1>
          <button className="line-div-parent transition-all duration-1000 ease-in-out px-[3vh] py-[2vh] border border-black rounded-[2vh] hover:rounded-[6vh]  flex group">
            <h1 className="font-[font-2]">
              Let's meet
              <div className="line-div h-[1px] w-[0%] bg-black"></div>
            </h1>
            <i className="ri-arrow-right-line ml-[4vh] transition-transform duration-1000 group-hover:scale-125 inline-block"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section6;
