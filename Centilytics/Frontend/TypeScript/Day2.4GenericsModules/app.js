"use strict";
// Generics 
// Generics functions
// Generics class
// Generics interface
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// hume ek function bana hai joh ki koi bhi value accept kare aur usse print kare
// ----------------GENERICS IN FUNCTIONS ---------------------------------
function printing(args) {
    //to deal with this problem generics come in contact
}
printing("a");
printing(12);
// hum ek function  ko use karte waqt bata sakte hai ki function ke argument ko kis type se treat kare
// template class joh bhi hum generics me type put karge usi type me T convert ho jayega
// we can write anything instead of T
function fun(args) {
}
fun("hello");
fun(12);
function log(args) {
    console.log(args);
}
log("hello");
log(12);
function abcd(obj) {
    obj.key.charAt(0);
}
let h1;
abcd({ name: "Mahak", age: 20, key: "hello" });
// -------------------------GENERICS CLASS-------------------------------
class BottleMaker {
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("Mahak");
let b2 = new BottleMaker(20);
let b3 = new BottleMaker(23.4); //generic is not necessary 
// -----------------------------IMPORTANT----------------------------------
function funt(a, b) {
    //IntelliSense will not work untill you perform type narrowing
    if (typeof a === "string" && typeof b === 'string') {
    }
    // return "hello"; //we can se that if T is string type and if we are returning a and b no error but return string lateral gives error
    return "hello"; //or return <T> "hello"  //type asseration             // we can return the generic type only that T
}
funt("hello", "hy");
const paymentModules_1 = require("./paymentModules");
const paymentModules_2 = __importDefault(require("./paymentModules"));
(0, paymentModules_1.addPayment)(1200);
(0, paymentModules_1.getDetails)("online payment done");
let pay1 = new paymentModules_2.default(12);
let pay2 = new paymentModules_2.default(14);
console.log(pay1);
console.log(pay2);
