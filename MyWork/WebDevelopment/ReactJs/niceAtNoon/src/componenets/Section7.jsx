import React from "react";

const Section7 = () => {
  return (
    <section className="pb-[7vh] pt-[14vh] px-[10vh] bg-[#F4F4F1]">
      <div className="flex justify-between items-center mb-10">
        <div className="flex flex-col gap-10">
          <h1 className="font-medium">Services</h1>
          <h1 className="text-2xl leading-6 font-semibold">
            Zo onderscheiden we je <br /> van de norm
          </h1>
        </div>
        <button className="line-div-parent transition-all duration-1000 ease-in-out px-[3vh] py-[2vh] flex bg-black rounded-[2vh] mt-6 hover:rounded-[6vh] text-white  group">
          <h1>
            Lees meer <div className="line-div h-[1px] w-[0%] bg-white"></div>
          </h1>
          <i className="ri-arrow-right-line ml-[4vh] transition-transform duration-1000 group-hover:scale-125 inline-block"></i>
        </button>
      </div>

      <div className="flex justify-between">
        <div className="h-[70vh] w-[45vh]  rounded-[5vh] overflow-hidden group">
          <div className="transition-all duration-300 ease-in-out h-[60%] w-full group-hover:rounded-[10vh] overflow-hidden">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg"
              alt=""
            />
          </div>
          <div className="transition-all duration-300 px-[6vh] bg-[#AA81B7] h-[40%] w-full group-hover:rounded-[10vh]">
            <div className="flex justify-between  py-[4vh] items-center text-white capitalize text-[3.2vh] font-medium">
              <h1>Brand Story</h1>
              <i class="transition-all duration-300 ri-arrow-right-line opacity-0 group-hover:opacity-100"></i>
            </div>
            <p className="text-white">
              Samen creeren we een sterk <br />
              fundament voor een <br />
              onweerstaambaar design.
            </p>
          </div>
        </div>

        <div className="h-[70vh] w-[45vh]  rounded-[5vh] overflow-hidden group">
          <div className="transition-all duration-300 ease-in-out h-[60%] w-full group-hover:rounded-[10vh] overflow-hidden">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg"
              alt=""
            />
          </div>
          <div className="transition-all duration-300 px-[6vh] bg-[#10100F] h-[40%] w-full group-hover:rounded-[10vh]">
            <div className="flex justify-between  py-[4vh] items-center text-white capitalize text-[3.2vh] font-medium">
              <h1>Merkidentiteit</h1>
              <i class="transition-all duration-300 ri-arrow-right-line opacity-0 group-hover:opacity-100"></i>
            </div>
            <p className="text-white">
              De visuele van jouw
              <br />
              merkverhall. Een herkenbaar <br />
              onweerstaambaar merkbeeld.
            </p>
          </div>
        </div>

        <div className="h-[70vh] w-[45vh]  rounded-[5vh] overflow-hidden group">
          <div className="transition-all duration-300 ease-in-out h-[60%] w-full group-hover:rounded-[10vh] overflow-hidden">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg"
              alt=""
            />
          </div>
          <div className="transition-all duration-300 px-[6vh] bg-[#36A96A] h-[40%] w-full group-hover:rounded-[10vh]">
            <div className="flex justify-between  py-[4vh] items-center text-white capitalize text-[3.2vh] font-medium">
              <h1>Webdesign</h1>
              <i class="transition-all duration-300 ri-arrow-right-line opacity-0 group-hover:opacity-100"></i>
            </div>
            <p className="text-white">
              Merkgerichte website op een <br />
              methodische wijze .Custom <br />
              made & tailor made.
            </p>
          </div>
        </div>

        <div className="h-[70vh] w-[45vh]  rounded-[5vh] overflow-hidden group">
          <div className="transition-all duration-300 ease-in-out h-[60%] w-full group-hover:rounded-[10vh] overflow-hidden">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-500.jpg"
              alt=""
            />
          </div>
          <div className="transition-all duration-300 px-[6vh] bg-[#FA8A58] h-[40%] w-full group-hover:rounded-[10vh]">
            <div className="flex justify-between  py-[4vh] items-center text-white capitalize text-[3.2vh] font-medium">
              <h1>A la carte</h1>
              <i class="transition-all duration-300 ri-arrow-right-line opacity-0 group-hover:opacity-100"></i>
            </div>
            <p className="text-white">
              Samen creeren we een sterk <br />
              fundament voor <br />
              onweerstaambaar design.
            </p>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Section7;
