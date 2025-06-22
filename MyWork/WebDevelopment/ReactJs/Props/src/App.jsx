import React from 'react';
import Button from './components/Button';
import Image from './components/Image';
const App = () => {
  var arr = ["10", 'Button', 'red-400'];
  var image = ["https://images.unsplash.com/photo-1733393735327-eb1a9d357af4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1733234976328-f77f08f4379d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button rounded={arr[0]} text={arr[1]} color={arr[2]} />
      {/* <Image source = {image[0]} />
      <Image source = {image[1]} />
      <Image source = {image[2]} /> */}
      {
        image.map(function(elem){
          return <Image source={elem}/>
        })
      }
    </div>
  );
};

export default App;
