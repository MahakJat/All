import React from 'react'
import { map, Observable } from 'rxjs'

const OperatorsPipes = () => {

   const user = {
      data:[
         {
            status:"active",
            age:20
         },
          {
            status:"inactive",
            age:18
         },
          {
            status:"active",
            age:5
         },
          {
            status:"inactive",
            age:20
         },
      ]
   }

   const user2 = {
      data:[
         {
            status:"active",
            age:20
         },
          {
            status:"inactive",
            age:18
         },
          {
            status:"active",
            age:51
         },
          {
            status:"inactive",
            age:20
         },
      ]
   }

 const observable = new Observable((subscriber)=>{
   //observable can emit multipe data
   //   subscriber.next(user); //now this value will go in the pipe not in the observer method after all ther operation do in the pipe then the last value will go in the observer next
     subscriber.next(user2) //if error will occur there then the next subsriber where you are passing the different value will be ingonered
   //  subscriber.complete() if you call the complement method then the next next function will be ignored
     subscriber.next(user); 
 

   }).pipe(
   map((value)=>{ //value which is passed in the subscriber
     console.log("first operator")
     return value.data; //just returning the value //this will be send to next operator
   }),
   map((value)=>{
    console.log("second operator");
    return value.filter((elem) => elem.status === 'active' );
   }),
   map((value)=>{
    return value.reduce((sum,user)=>sum+user.age , 0) /value.length;
   }),
   map((value)=>{
   if(value < 18) throw new Error("age is less then 18")
      return value;
   })
 );
//  if error occur then the error method hits  not next method
 const observer = {
   next:(value)=>{
       console.log("value " ,value)
   },
   error:(error)=>{
    console.log("error occured :" ,error)
   },
   complete:()=>{
      console.log("complete")
   }
 }

// const observable = new Observable((subscriber) => {
//   subscriber.next('A');              // Sends value to observer
//   subscriber.next('B');
//   subscriber.complete();             // Ends the stream
//   subscriber.next('C');              // ❌ Will be ignored (stream is complete)
//   subscriber.error('Oops!');         // ❌ Also ignored (already completed)
// });

// after error and completion the next will not work
 observable.subscribe(observer)
  return (
     <div>operators</div>
  )
}

export default OperatorsPipes