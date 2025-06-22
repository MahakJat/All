import React from 'react';

const Button = (props) => {
  console.log(props);
  return (
    <button    style={{
      paddingLeft: `${props.rounded}px`,
      paddingRight: `${props.rounded}px`,
      borderRadius: `${props.rounded}px`,
    }} className={`py-4 bg-red-400  text-white text-xl`}>
      {props.text}
    </button>
  );
};


// You're right! Unfortunately, Tailwind CSS doesn't support
//  dynamic class names with units like that out of the box. When you use classes like
//  px-${props.rounded} in the JSX, Tailwind CSS won't parse them properly 
// because the class names are generated at build time.

export default Button;
