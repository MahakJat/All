import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[8vh]">
      <div className="flex justify-between px-[10vh] ">
        <div>
          <h1 className="font-[font-2] text-[7vh]">Let's turn some heads!</h1>
          <button className="line-div-parent transition-all duration-1000 ease-in-out px-[3vh] py-[2vh] border border-white rounded-[2vh] mt-6 hover:rounded-[6vh]  flex group">
            <h1 className="font-[font-2] text-white">
              Contacts
              <div className="line-div h-[1px] w-[0%] bg-white"></div>
            </h1>
            <i className=" text-white ri-arrow-right-line ml-[4vh] transition-transform duration-1000 group-hover:scale-125 inline-block"></i>
          </button>
        </div>

        <div className="flex gap-9 text-[#E4E4E4] items-start">
            <div>
                <h1 className="text-[2.8vh] font-[font-1] leading-[2.8]">Socials</h1>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Instagram</a></h3>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >LinkedIn</a></h3>
            </div>
            <div>
                <h1 className="text-[2.8vh] font-[font-1] leading-[2.8]">Sitemap</h1>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Home</a></h3>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Projecten</a></h3>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Over</a></h3>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Contact</a></h3>
            </div>
            <div>
                <h1 className="text-[2.8vh] font-[font-1] leading-[2.8]">Info</h1>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Algemene voorwaarden</a></h3>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Privacybeleid</a></h3>
                <h3 className="uppercase hover:underline text-[1.5vh] leading-[2.5] font-[font-2]" ><a href="" >Cookiebeleid</a></h3>
                
            </div>
        </div>
      </div>
      <img className="mt-[15vh]"
        src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png"
        loading="lazy"
        sizes="100vw"
        srcset="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-500.png 500w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-800.png 800w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-1080.png 1080w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png 1920w"
        alt=""
        class="block"
      />
    </footer>
  );
};

export default Footer;
