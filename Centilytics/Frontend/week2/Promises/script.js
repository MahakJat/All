// const promiseOne = new Promise((resolve, reject) => {
//   //performs an async operation
//   setTimeout(function () {
//     console.log("asyn task done");
//     resolve(); //jab promise resolve hoga
//   }, 1000);
// });

// // then jab chalta hai jab promise resolve ho jata hai
// promiseOne.then(function () {
//   console.log("promise resovle");
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("task completed");
//     resolve({ username: "mahak", age: 20 });
//   }, 1000);
// });

// promiseTwo.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "mahak", age: 20 });
//     } else {
//       reject("error , something went wrong");
//     }
//   }, 1000);
// });

// // const returnValue = promiseFour.then((user)=>{
// //   return user.username
// // }).catch(()=>{
// //     console.log("error")
// // })
// // console.log(returnValue) //this will give promise pending

// promiseFour
//   .then((user) => {
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally will run even the promise is resolved or rejected");
//   });


// async function consumePromise() {
//     try{
//         const response = await promiseFour
//         console.log(response)
//     }catch(error){
//         console.log((error))
//     }
// }
// consumePromise()

// async function getAllUser() {
//     try{
//         const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100');//hume nhi pata ki data kab tak aayega
//         const data = await response.json(); // aur kab tak json me convert hoga
//         console.log(data);  
//     }catch(error){
//       console.log(error)
//     }
// }
// getAllUser()


var str = "123c"
console.log(isNaN(str));