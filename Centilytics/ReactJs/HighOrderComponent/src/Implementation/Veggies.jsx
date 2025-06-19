import React, { useState } from 'react'
import withFilteration from './withFilteration';
const vegetables = [
  "Carrot",
  "Broccoli",
  "Spinach",
  "Cauliflower",
  "Potato",
  "Tomato",
  "Cabbage",
  "Onion",
  "Garlic",
  "Peas",
  "Capsicum",
  "Pumpkin",
  "Radish",
  "Beetroot",
  "Cucumber"
];
const Veggies = (props) => {
    // console.log(props)
    // const [veggies, setVeggeis] = useState("")
    // const filteredFruits = fruits.filter((elem) => elem.toLowerCase().includes(fruit.toLowerCase()))
  

    //every array contain the empty string  
  return (
    <div className='vegis'>
        {/* <input type="text" placeholder='enter vegis' value={veggies} onChange = {(e)=>{
              setVeggeis(e.target.value);
        }}/> */}
        <div className='vegis-list'>{
        props.filterArr.map(function(elem){
            return <h3>{elem}</h3>
        })
        }</div>
    </div>
  )
}

export default withFilteration(Veggies,vegetables)