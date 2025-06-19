// Generics 
// Generics functions
// Generics class
// Generics interface

// hume ek function bana hai joh ki koi bhi value accept kare aur usse print kare

// ----------------GENERICS IN FUNCTIONS ---------------------------------
function printing(args:any){ //agar hum any use karte hai toh args. karne pe koi property nhi milegi //aur agar any use karge toh typescript use karne se kya matlab
    //to deal with this problem generics come in contact
}
printing("a")
printing(12);

// hum ek function  ko use karte waqt bata sakte hai ki function ke argument ko kis type se treat kare


// template class joh bhi hum generics me type put karge usi type me T convert ho jayega
// we can write anything instead of T
function fun<T>(args:T){
      
}
fun<string>("hello")
fun<number>(12);

function log<T>(args:T){
 console.log(args)   
}


log<string>("hello");
log<number>(12);

// it is not necessary to use generics with function call but necessary while function declaration

// -------------------------GENERICS IN INTERFACES---------------------------------
// for interface it is necessary to give type of generic where ever you use it not like function and class where we just need to write generics in the creation of class and function
interface someType<T>{
    name : string;
    age : number;
    key:T;
}

function abcd(obj:someType<string>){ //here we have to tell that which type of the key is there
   obj.key.charAt(0);
}

let h1 :someType<string>; 

abcd({name:"Mahak",age:20,key:"hello"})


// -------------------------GENERICS CLASS-------------------------------

class BottleMaker<T>{
    constructor(public key : T){}
}
let b1 = new BottleMaker<string>("Mahak");
let b2 = new BottleMaker<number>(20);
let b3 = new BottleMaker(23.4); //generic is not necessary 

// -----------------------------IMPORTANT----------------------------------

function funt<T>(a:T , b:T):T{
    //IntelliSense will not work untill you perform type narrowing
    if(typeof a === "string" && typeof b === 'string'){
    
    } 
    // return "hello"; //we can se that if T is string type and if we are returning a and b no error but return string lateral gives error
    return "hello" as T; //or return <T> "hello"  //type asseration             // we can return the generic type only that T

}
funt<string>("hello","hy")


import { getDetails , addPayment } from "./paymentModules";
import payment from "./paymentModules";
addPayment(1200);
getDetails("online payment done")

let pay1 = new payment(12);
let pay2 = new payment(14);
console.log(pay1);
console.log(pay2);


