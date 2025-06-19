// type inference
// understanding type inference
// type annotation

// type inference means we you directly assign value to a variable and by seeing that value  the type of variable is decided that is type inference
let a = 12 ; //a type is decided as number by the value we assigned to it so this is type inference 
    // value ko dekh ke variable aapne type decide kar le that is type inference (automatic)
    

    
// type annotation
let b : number;
let c : number | boolean | string;

c = 10
c = true
c = "Mahak"

function abcd(a:number , b:string):void{

}

// Interfaces and type aliases
// Defining interfaces
// using interfaces to define object shapes
// extending interfaces
// types aliases
// intersection types


// INTERFACES 

// the interface is user defined data type its is like a class
// interface is like blue print
interface User{
    name:string;
    email:string
    password:string,
    gender?: string, //? is used for the optional property you can give it or not , Not necessary
}

function getDataOfUser(obj : User){
    
}
//it is necessary to give all the fields of the object otherwise it will give error
getDataOfUser({name : "xcvbnm",email: "test@test.com",password: "test@123"})

const obj2 = {
 name:"mahak",
 email:"mahak@123.com",
 password:"123"
}
getDataOfUser(obj2)

getDataOfUser({name:"asdf",email:"sdfgh",password:"ddfgbh",gender:"female"})


// ------------------------------------------------

// EXTENDING INTERFACES 
// entending is like inheritance

interface User1{
    name:string,
    age:number,
    email:string,
    password:string,
    gender?:string,
}

// interface Admin will have the properties of its own and that of User1
interface Admin extends User1{
    isAdmin : boolean,
}

function newFun(obj:User1):void{
    // here this obj will have the properties of the User1 interface only
}

function newFun2(obj:Admin):void{
    // here this obj will have the properties of the User1 and admin 
}

// -----------------------------------

interface interface_1{
    name:string
}
interface interface_1{
    email:string
}

// if you make two interfaces of the same name then they get merged together to one interface

function fun(obj : interface_1){
    obj.email = "sdfg",
    obj.name = 'dfvgh'
}


// FUNDAMENTAL OF TYPE ALIASES
// Type aliases are used in TypeScript to create custom names for types, making code more readable, reusable, and maintainable
// aliases means give name to the type 

// ------------------------------------
type num  = number;

let e : num;

// -----------------------------------


let f : string | number | null;  //we can replace this to our own type name 

type value = string | number | null;
let g:value;


// ---------------------------------
type args = string | null;

function abd(obj : args){
}

abd("dsfgh");
abd(null);

// ---------------------------------

type UserType = {
    id : number,
    name:string,
    age:number,
}

let user_1 : UserType = {id:12 , name :"mahak", age:15}
let user_2 : UserType;
user_2 ={id:12 , name :"mahak", age:15};

// -----------------------------------