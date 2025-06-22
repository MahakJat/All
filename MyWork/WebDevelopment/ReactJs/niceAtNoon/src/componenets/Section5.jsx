import React from 'react'

const Section5 = () => {
  return (
    <section className='pt-[5vh] pb-[8vh] px-[10vh] bg-[#E4E4E4]'>
        <div className='transition-all duration-1000 ease-in-out h-[80vh] w-[90vw] rounded-[5vh] hover:rounded-[20vh] overflow-hidden relative flex justify-center items-center group '>
              <div className='transition-all duration-1000 ease-in-out h-[25vw] w-[25vw] bg-[url(https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN-p-800.jpg)] bg-cover bg-center z-10 absolute rounded-[10vh] opacity-0 group-hover:opacity-100'></div> 
              <img className='transition-all duration-1000 ease-in-out hover:scale-110' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-1600.jpg" alt="" />            
        </div>
        <div className='mt-[4vh]'>
            <h1 className='font-semibold font-[font-1]  text-[#A3A4A7] '>Nieuw Schaijk</h1>
            <h1 className='font-[font-3] text-[2.5vh]'>De smaak van thuis</h1>
            <div className='flex gap-2 mt-5'>
                <h1 className='uppercase border px-3 py-[0.2vh] border-black rounded-[1vh] text-[1.5vh]'>Brand Story</h1>
                <h1 className='uppercase border px-3 py-[0.2vh] border-black rounded-[1vh] text-[1.5vh]'>Merkidentiteit</h1>
            </div>
        </div>
    </section>
  )
}

export default Section5