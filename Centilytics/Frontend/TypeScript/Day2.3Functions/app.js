"use strict";
// functions 
// functions types
// optional and default parameters
// Rest parameters
// overloads
// FUNCTIONS
// what is a function
// A function is a block of reusable code that performs a specific task. It helps in organizing code,
//  improving reusability, and making programs more readable and maintainable
// void is the return type
function abcd() {
}
// TYPES OF FUNCTIONS
// a function is coming in argument then its type is given is (arguments...)=>return type (of the function in the argument )
function abd(name, callBackFunction) {
}
abd("Mahak", (value) => {
    console.log("helo");
});
function acd(name, age, cb) {
    cb("kuch value");
    // callback function pura cb me gaya then we can call cb 
}
acd("mahak", 20, (args) => {
    console.log("hellllllllllllllo");
    console.log(args);
});
//-----------------------OPTIONAL AND DEFAULT PARAMETERS---------------------------
// optional
function parameters(gender) {
    console.log(gender);
}
parameters("female");
parameters();
// default
function defaultparameter(universityName = "rgpv") {
    console.log(universityName);
}
defaultparameter("medicap");
defaultparameter();
//-------------------------------- REST PARAMETERS---------------------
// ... rest / spread operator
// function ke parameter me agar ... lagaye hai toh that is rest operator // waha par diya gaye saare argument array me aa jayege
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function friend(...arr) {
    console.log(arr);
}
friend("Mahak", "Isha", "Muskan", "Manisha", "Ani", "Aavi");
// all the value will be placed in arr2
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
// ------------------------FUNCTION OVERLOADING--------------------------------
function fun1() {
}
function fun1(name) {
}
