import React, { useState } from 'react'
import withFilteration from './withFilteration';
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Pomegranate",
  "Cherry",
  "Peach",
  "Guava",
  "Lychee",
  "Dragonfruit",
  "Pear",
  "Apricot",
  "Plum"
];
const Fruits = ({filterArr}) => {
  // const [fruit, setFruits] = useState("")  
  
  // const filteredFruits = fruits.filter((elem) => elem.toLowerCase().includes(fruit.toLowerCase()))
  
  return (
    <div className='fruit'>
    {/* <input type="text" placeholder='enter vegis' value={fruit} onChange = {(e)=>{
          setFruits(e.target.value);
    }}/> */}
    <div className='fruit-list'>{
    filterArr.map(function(elem){
        return <h3>{elem}</h3>
    })
    }</div>
</div>
  )
}

export default withFilteration(Fruits,fruits);