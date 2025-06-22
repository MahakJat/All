import React from "react";

const Section3 = () => {
  return (
    <section className="px-[10vh] bg-[#E4E4E4]">
      <div className="pt-10 ">
        <p className=" text-[4vh] font-normal leading-7">
          NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon
          en allergisch <br /> voor bureau blabla, gaan we lekker samen aan de
          slag met jouw merk. En dat moet <br /> vooral leuk zijn! Want plezier
          nemen we serieus. Vanuit daar ontstaat enthousiasme, <br /> trots en
          het zelfvertrouwen om jouw merk de uitstraling te geven die het
          verdient.
        </p>
      </div>
      <button className="line-div-parent transition-all duration-1000 ease-in-out px-[3vh] py-[2vh] bg-white rounded-[2vh] mt-6 hover:rounded-[6vh] text-black flex group">
        <h1 className="font-[font-2]">
          Leer ons kennen<div className="line-div h-[1px] w-[0%] bg-black"></div>
        </h1>
        <i className="ri-arrow-right-line ml-[4vh] transition-transform duration-1000 group-hover:scale-125 inline-block"></i>
      </button>
    </section>
  );
};

export default Section3;
