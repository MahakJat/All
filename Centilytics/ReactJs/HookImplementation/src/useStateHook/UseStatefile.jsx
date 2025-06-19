import React from 'react'
import { useState } from 'react'
import './use.scss'
const UseStatefile = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const counterIncrement = ()=>{
        setValue(value+1);
        console.log(value);
        setValue(value+1);
        console.log(value);
        setValue(value+1);
        console.log(value);
    }

    // Jab hum setCount me ek function dete hain, toh React uss function ko khud call karta hai, aur current/latest state ko uss function ka argument banata hai.
    const counterIncrement2 = ()=>{
        setValue2(prev => prev + 1);
        console.log(value2);
        setValue2(prev => prev + 1);
        console.log(value2);
        setValue2(prev => prev + 1);
        console.log(value2);
    }

    const counter = (prev)=>{
        // setCount me hum joh function dene hai usko react call karata hai aur usme current updated state ki value as the argument send karta hai
        return prev + 1;
    }
  return (
    <div className='useStatediv'>
      <div>
      <h1>this is the value {value}</h1> 
      {/* we you click this button then the value will be updated by one not by 3 because the react performs batching when there is the change in same state so it does not render again and again it render only once to increase performace so when you are refering to the count the count is not updated because rendering is not done on console also it shows the previous count value*/}
      <button onClick={counterIncrement}>Click</button>
      </div>
       <div>

      {/* we you click this button then the value will be updated by 3 because in this case the react  queues the values and then its updates on render that why in console it shows the previous value only but update on the ui correct  */}
              {/*isme prev value ko access kiya ja raha hai jo ki queue me change ho rahi hai likin upar count ko access kiya ja raha hai joh ki 0 hi  */}
                {/*  prev ka value current updated state hoti hai.*/}
                {/* Maan lo value2 = 0 tha button dabane se pehle.

            Tumne teen baar setValue2(prev => prev + 1) likha, toh React ne ye kiya:

            Pehla update: prev = 0 tha, toh ban gaya 1

            Dusra update: prev = 1, toh ban gaya 2

            Teesra update: prev = 2, toh ban gaya 3

            React sabhi updates ko line mein lagata hai (queue karta hai), fir ek baar mein teeno apply karke UI update karta hai. */}
    
       <h2>this is the value {value2}</h2>
       <button onClick={counterIncrement2}>click</button>
       </div>

       <div>
       <h1> value is {value3}</h1>
       <button onClick={() => setValue3(counter)}>click</button>

       </div>
    </div>
  )
}

export default UseStatefile


// // prev is not a variable that you declared.

// prev is the latest state value jo React tumhe deta hai us moment pe.

// Tumhare function ko call React karta hai, aur har baar usme prev ka value current updated state hoti hai.