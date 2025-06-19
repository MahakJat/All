import React from 'react'

const ToDoList = () => {
  return (
    <div>ToDoList</div>
  )
}

export default ToDoList


// import { useState } from 'react';
// import { Copy, Check } from 'lucide-react';

// export default function ColorPicker() {
//   const [color, setColor] = useState('#3B82F6');
//   const [copied, setCopied] = useState(false);
//   const [sliders, setSliders] = useState({
//     r: 59,
//     g: 130,
//     b: 246
//   });

//   // Convert hex to RGB
//   const hexToRgb = (hex) => {
//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result ? {
//       r: parseInt(result[1], 16),
//       g: parseInt(result[2], 16),
//       b: parseInt(result[3], 16)
//     } : null;
//   };

//   // Convert RGB to hex
//   const rgbToHex = (r, g, b) => {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };

//   const handleColorChange = (e) => {
//     const newColor = e.target.value;
//     setColor(newColor);
//     const rgb = hexToRgb(newColor);
//     if (rgb) {
//       setSliders(rgb);
//     }
//   };

//   const handleSliderChange = (e, channel) => {
//     const value = parseInt(e.target.value);
//     const newSliders = { ...sliders, [channel]: value };
//     setSliders(newSliders);
//     setColor(rgbToHex(newSliders.r, newSliders.g, newSliders.b));
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   // Generate color swatches
//   const colorSwatches = [
//     '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', 
//     '#EC4899', '#6B7280', '#000000', '#FFFFFF', '#84CC16'
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen p-6 flex justify-center items-center">
//       <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">रंग चयनकर्ता</h1>
        
//         <div className="mb-6 flex flex-col items-center">
//           <div 
//             className="w-32 h-32 rounded-lg shadow-md mb-4" 
//             style={{ backgroundColor: color }}
//           ></div>
          
//           <input 
//             type="color" 
//             value={color} 
//             onChange={handleColorChange}
//             className="w-16 h-16 cursor-pointer"
//           />
//         </div>
        
//         <div className="space-y-6 mb-6">
//           {/* RGB Sliders */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">R (लाल)</label>
//             <div className="flex items-center">
//               <input 
//                 type="range" 
//                 min="0" 
//                 max="255" 
//                 value={sliders.r} 
//                 onChange={(e) => handleSliderChange(e, 'r')}
//                 className="w-full mr-2"
//                 style={{ accentColor: 'rgb(239, 68, 68)' }}
//               />
//               <span className="w-12 text-center">{sliders.r}</span>
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">G (हरा)</label>
//             <div className="flex items-center">
//               <input 
//                 type="range" 
//                 min="0" 
//                 max="255" 
//                 value={sliders.g} 
//                 onChange={(e) => handleSliderChange(e, 'g')}
//                 className="w-full mr-2"
//                 style={{ accentColor: 'rgb(16, 185, 129)' }}
//               />
//               <span className="w-12 text-center">{sliders.g}</span>
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">B (नीला)</label>
//             <div className="flex items-center">
//               <input 
//                 type="range" 
//                 min="0" 
//                 max="255" 
//                 value={sliders.b} 
//                 onChange={(e) => handleSliderChange(e, 'b')}
//                 className="w-full mr-2"
//                 style={{ accentColor: 'rgb(59, 130, 246)' }}
//               />
//               <span className="w-12 text-center">{sliders.b}</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Color values with copy button */}
//         <div className="space-y-4 mb-6">
//           <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
//             <div className="font-mono">HEX: {color}</div>
//             <button 
//               onClick={() => copyToClipboard(color)}
//               className="p-2 hover:bg-gray-200 rounded transition"
//             >
//               {copied ? <Check size={16} /> : <Copy size={16} />}
//             </button>
//           </div>
          
//           <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
//             <div className="font-mono">RGB: {sliders.r}, {sliders.g}, {sliders.b}</div>
//             <button 
//               onClick={() => copyToClipboard(`rgb(${sliders.r}, ${sliders.g}, ${sliders.b})`)}
//               className="p-2 hover:bg-gray-200 rounded transition"
//             >
//               {copied ? <Check size={16} /> : <Copy size={16} />}
//             </button>
//           </div>
//         </div>
        
//         {/* Color swatches */}
//         <div>
//           <h3 className="text-sm font-medium text-gray-700 mb-2">रंग सुझाव</h3>
//           <div className="grid grid-cols-5 gap-2">
//             {colorSwatches.map(swatch => (
//               <button 
//                 key={swatch} 
//                 className="w-12 h-12 rounded shadow-sm hover:scale-110 transition cursor-pointer"
//                 style={{ backgroundColor: swatch }}
//                 onClick={() => {
//                   setColor(swatch);
//                   const rgb = hexToRgb(swatch);
//                   if (rgb) {
//                     setSliders(rgb);
//                   }
//                 }}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }