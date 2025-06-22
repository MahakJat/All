import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const growthRef = useRef(null);
  const btnRef = useRef(null);
  const intervalRef = useRef(null);

// if i was writing the set interval code in the function it was going infinite

  const startDownload = () => {
    if (btnRef.current) {
      btnRef.current.innerHTML = 'Downloading...';
    }

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          if (btnRef.current) {
            btnRef.current.innerHTML = 'Downloaded';
          }
          return 100; 
        }
        return prevCount + 1;
      });
    }, 100);
  };

  useEffect(() => {
    if (growthRef.current) {
      growthRef.current.style.width = `${count}%`;
    }
  }, [count]);

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="w-[30vw] h-[28vh] rounded-3xl bg-white text-right p-[3vh] pt-[4vh]">
        <h1 className="text-[4.3vh] font-bold mr-2 font-[monospace]">{count}%</h1>
        <div className="w-[97%] h-3 rounded-full bg-[#bababa] mt-4">
          <div ref={growthRef} className="h-full rounded-full bg-green-800"></div>
        </div>
        <button
          ref={btnRef}
          onClick={startDownload}
          className="bg-[#0E482B] text-white text-xl capitalize px-6 mr-2 py-2 rounded-xl mt-6"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default App;
