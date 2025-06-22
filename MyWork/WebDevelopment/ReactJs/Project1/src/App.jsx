import './App.css'

// function app(){
//    return "Hello EveryOne"
// }

// function app(){
//    return <div>
//       <h1>Helllow guyyyyyyyyyyyyyyyyyyyyyyyyyys</h1>
//       <h1>Today is My Birthdayyyyyyyyyyyyyyyyyy</h1>
//    </div>
// }

// function app(){
//    const arr = ["Mahak" , "Isha", "Manisha", "Muskan"];
//    return <div>
//       {
//         arr.map(function(elem){
//           return <h1>Hello {elem}</h1>
//         })
//       }  
//    </div>
// }

function app(){
   const arr = [
    {
      name : "Mahak",
      age:21
    },
    {
      name : "Isha",
      age:20
    },
    {
      name : "Manisha",
      age:20
    },
    {
      name : "Muskan",
      age:20
    },
    {
      name:"wasi",
      age:21
    }
   ]
   return <div>
       {
         arr.map(function(elem){
            return <div>
                <h1>Name: {elem.name}</h1>
                <h1>Age: {elem.age}</h1>
            </div>
         })
       }
   </div>
}
export default app