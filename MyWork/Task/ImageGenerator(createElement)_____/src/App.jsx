
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);  //multiple images ko hold karne ke liya hai
  const imageRefs = useRef([]); //same ref hum kai objects ko dege

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const createImage = () => {
    const topPosition = Math.random() * 60;
    const leftPosition = Math.random() * 90;
    const rotation = Math.random() * 360;
    const randomIndex = Math.floor(Math.random() * data.length);

    if (data[randomIndex]) {
      setImages((prevImages) => [
        ...prevImages, //prevImages ko hum store karlege taki woh bhi hume show ho agar ye nhi karge toh pervious images chali jayegi
        {
          id: prevImages.length, 
          src: data[randomIndex].download_url,
          top: topPosition,
          left: leftPosition,
          rotation: rotation,
        },
      ]);
    }
  };

  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center gap-3">
      <button
        onClick={createImage}
        className="py-1 px-4 border border-black rounded-xl font-semibold font-[gilroy]"
      >
        Create Element
      </button>
      <div className="w-[96vw] h-[90vh] border border-[1vh] border-black relative">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt="Sample Image"
            width={200}
            height={200}
            ref={(el) => (imageRefs.current[index] = el)}  ///
            style={{
              position: 'absolute',
              top: `${image.top}%`,
              left: `${image.left}%`,
              transform: `rotate(${image.rotation}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;



// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
  
//   const [data, setdata] = useState([]);
//   const [previousImages, setpreviousImages] = useState([])
//   const [topPosition, setTopPosition] = useState(0);
//   const [leftPosition, setLeftPosition] = useState(0);
//   const [rotation, setRotation] = useState(0);
//   const [randomIndex, setRandomIndex] = useState(0);
//   const imageRef = useRef(null)
  
  

//   const getData = async()=>{
//     const response = await axios.get("https://picsum.photos/v2/list");
//     setdata(response.data);
//     console.log(data[0].
//       download_url)
//   }

//   useEffect(function(){
//      getData();
//   },[])

//   const changeValues = ()=>{
    
//     setTopPosition(Math.random() * 50);  
//     setLeftPosition(Math.random() * 40);  
//     setRotation(Math.random()*360);
//     setRandomIndex(Math.floor(Math.random()*(data.length - 1)));
    
//     if(imageRef.current){
//       imageRef.current.style.position = 'absolute';
//       imageRef.current.style.top = `${topPosition}%`
//       imageRef.current.style.left = `${leftPosition}%`
//      imageRef.current.style.transform = `rotate(${rotation}deg)`
//     }
//     setpreviousImages([...previousImages,{}])
  
//   }

  



//   return (
//     <div className='w-screen h-screen flex-col flex justify-center items-center gap-3'>
//        <button onClick={()=>{
//         changeValues()
//        }} className='py-1 px-4 border border-black rounded-xl font-semibold font-[gilroy]'>Create Element</button>
//        <div className='w-[96vw] h-[90vh] border border-[1vh] border-black'>
//        <img 
//               ref={imageRef} 
//               src={data[randomIndex].download_url} 
//               className='w-32 h-32 absolute mt-2' 
//               alt=""
//             />
//        </div>
       
//     </div>
//   )
// }

// export default App
