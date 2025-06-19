import React from "react";
import { useState } from "react";

const Virtuallist = ({ list, height, itemHeight, containerWidth }) => {
  const [indices, setIndices] = useState({
    startIndex: 0,
    endIndex: Math.floor(height / itemHeight),
  });
  const scrollHandler = (e) => {
    const scrollTop = e.target.scrollTop;
    //  scrolltop / itemHeight se pata chal jayega ki kitne element upar chale gaye hai aur jitne element upar chale gaye aur jitne element upar gaye hai woh apne newStart index ho jayega 4 element upar gaye toh 4th index is new index upar jane wale element is (0,1,2,3)
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    //  endIndexx = newStartIndex + totalItemThatCanfitin the container
    setIndices({ startIndex: newStartIndex, endIndex: newEndIndex });
  };
  // agar particular portion dikhna hai toh start index and end index important hai tabhi hum slicing kar payege
  // hum element kitne dikhe hai container is equal totalheight of the container / itemHeight = isse ye pata chal jayega ki kitne element banege container height mein
  const virtualList = list.slice(indices.startIndex, indices.endIndex + 1);
  // list me jise hi agar upar ke ek elem scroll kare toh nichse se elem add karte jayege jisse aisa lage ki scroll ho raha hai jitne index upar move kiya utne elem niche add kar do means end index and start index change kar do (its is like pagination)
  return (
    <div
      className="virtuallist" //give same height and width to the main parent container in which size you want to show the list
      style={{
        position:'relative',
        height,
        width: containerWidth, //this div is the scrollable container.
        overflowY: "auto", // ✅ Enable scrolling //ye div ki wajah se scrolling ho rahi hai toh isliye scroll handlere ispe lagega
      }}
      onScroll={scrollHandler}
    >
      <div className="parent-v" style={{ height: list.length * itemHeight , position:'relative'  }}>
      {/* position absolute kyuki jab scroll karege toh elem to updata ho jayege likin div bhi upar chala jayega toh jitne div upar jayega hum usse utne se niche shift kar dege toh lege ki div same position pe hai aur scroll kar raha hai balki aisa hoga ki parent div scroll kar rahe hoga aur hum is top is niche bhej dege */}
        {/* give the more height to the second parent to make the illusion of the scrolling of the list the second parent will scroll and it will look like that the list is moving */}
        <div style={{
          position: "absolute",
          top: indices.startIndex * itemHeight,
          }
        }>
            {virtualList.map((elem, index) => (
          <div className="elem" style={{ height: itemHeight}} key={index}>
            {elem}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Virtuallist;

// import React, { useState, useRef, useEffect } from 'react';

// const Virtuallist = ({ list, height, itemHeight, containerWidth }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const containerRef = useRef(null);

//   const totalItems = list.length;
//   const visibleCount = Math.ceil(height / itemHeight);
//   const buffer = 3; // render a few extra items above and below

//   const handleScroll = () => {
//     const scrollTop = containerRef.current.scrollTop;
//     const newStartIndex = Math.floor(scrollTop / itemHeight);
//     setStartIndex(newStartIndex);
//   };

//   const endIndex = Math.min(startIndex + visibleCount + buffer, totalItems);
//   const offsetY = startIndex * itemHeight;

//   const visibleItems = list.slice(startIndex, endIndex);

//   return (
//     <div
//       className="virtuallist"
//       ref={containerRef}
//       onScroll={handleScroll}
//       style={{
//         height: `${height}px`,
//         width: `${containerWidth}px`,
//         overflowY: 'auto',
//         position: 'relative',
//         border: '1px solid black',
//       }}
//     >
//       <div style={{ height: `${list.length * itemHeight}px`, position: 'relative' }}>
//         <div
//           style={{
//             position: 'absolute',
//             top: offsetY,
//             width: '100%',
//           }}
//         >
//           {visibleItems.map((elem, i) => (
//             <div key={i} style={{ height: `${itemHeight}px`, borderBottom: '1px solid #ccc' }}>
//               {elem}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Virtuallist;
