import React from "react";

const Section6_1 = () => {
  return (
    <section className="">
      <div className="transition-all duration-1000 bg-black overflow-hidden ease-in-out h-[40vw] w-[45vw] rounded-[5vh] hover:rounded-[20vh]  relative flex justify-center items-center group ">
        <div className="transition-all duration-1000 ease-in-out h-[23vw] w-[23vw] bg-[url(https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-1600.jpg)] bg-cover bg-center z-10 absolute rounded-[10vh] opacity-0 group-hover:opacity-100"></div>
        <img
          className="transition-all duration-1000 ease-in-out hover:scale-125 w-[100%] h-[100%] object-cover"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-1600.jpg"
          alt=""
        />
      </div>
      <div className="mt-[4vh]">
        <h1 className="font-semibold font-[font-1]  text-[#A3A4A7] ">
        Gaaf Creaties
        </h1>
        <h1 className="font-[font-3] text-[2.5vh]">Creating mood-boosting experiences</h1>
        <div className="flex gap-2 mt-3">
          <h1 className="uppercase border px-3 py-[0.2vh] border-black rounded-[1vh] text-[1.5vh]">
            Brand Story
          </h1>
          <h1 className="uppercase border px-3 py-[0.2vh] border-black rounded-[1vh] text-[1.5vh]">
            Merkidentiteit
          </h1>
          <h1 className="uppercase border px-3 py-[0.2vh] border-black rounded-[1vh] text-[1.5vh]">
            webdesign
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Section6_1;
