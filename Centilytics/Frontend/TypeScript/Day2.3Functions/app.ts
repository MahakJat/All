// // functions 
// // functions types
// // optional and default parameters
// // Rest parameters
// // overloads

// // FUNCTIONS
// // what is a function
// // A function is a block of reusable code that performs a specific task. It helps in organizing code,
// //  improving reusability, and making programs more readable and maintainable
 
// // void is the return type
// function abcd():void{
 
// }
// // TYPES OF FUNCTIONS


// // a function is coming in argument then its type is given is (arguments...)=>return type (of the function in the argument )
// function abd(name:string , callBackFunction:(value:string) => void){
// }

// abd("Mahak",(value:string):void=>{
//     console.log("helo")
// })

// function acd(name:string,age:number,cb:(args:string)=>void){
//     cb("kuch value");

//     // callback function pura cb me gaya then we can call cb 
// }
// acd("mahak",20,(args:string)=>{
//     console.log("hellllllllllllllo")
//     console.log(args)
// })


// //-----------------------OPTIONAL AND DEFAULT PARAMETERS---------------------------


// // optional
// function parameters(gender?:string){
//      console.log(gender)
// }
// parameters("female");
// parameters();

// // default

// function defaultparameter(universityName: string = "rgpv"){
//     console.log(universityName)
// }
// defaultparameter("medicap")
// defaultparameter();


// //-------------------------------- REST PARAMETERS---------------------
// // ... rest / spread operator

// // function ke parameter me agar ... lagaye hai toh that is rest operator // waha par diya gaye saare argument array me aa jayege

// function sum(...arr:number[]){
//     console.log(arr);
// }
// sum(1,2,3,4,5,6,7,8,9,10);

// function friend(...arr:string[]){
//     console.log(arr);
// }

// friend("Mahak","Isha","Muskan","Manisha","Ani","Aavi");


// // all the value will be placed in arr2
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1];

// ------------------------FUNCTION OVERLOADING--------------------------------
// to do function overloading in the type script first you need to write its signature

function printName(name:string):void;
function printName(name:string, age:number):number;

function printName(name:string , age?:number){
    if(typeof name === 'string' && age === undefined){
        // definition of the function with single parameter
        console.log(name);
    }else if(typeof name === 'string' && typeof age === "number"){
        console.log(name , age)
        return age;
    }
}

printName("Mahak");
printName("mahak",20)
