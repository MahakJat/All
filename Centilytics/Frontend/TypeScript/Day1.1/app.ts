// topics 
// Primitive type (number , string , boolean)
// Array
// Tuples
// Enums
// Any ,unknown , void , null , undefined , never


let a = 12;
let b = 20;

let arr = [1,2,3 ,"sdfgh"]

let brr:number[] = [1,2,3]; //we are specifing that the number is 
// if we write string or any other type to it , it will give error

// tuples it is fixed size array where we already tell size and its type 
let tuples:[number,string] = [12 , "mahak"]

// Enumerations - enums /key value pairs (enums are like objects)

enum UserRoles{
    Admin = "admin",
    Guest = "guest",
    Super_Admin = "super_admin"
} 


enum StatusCodes{
    Abondoned  = "abondoned status code 500",
    NotFound  = "not found status code 404"
}


StatusCodes.Abondoned //to access Status code


// way to tell type 
let num:number 
num = 10;



// we hadn't tell its type so its type is Any (make sure that your variable should not be of any type)

let c;
c = 12;
c = "mahak" //this will work if the last assigned value is string otherwise give error but known will give error untill you perform check operation even that last value was string this is the js
c.toUpperCase(); 


let d:unknown 
d = 12
d = "mahak"
// d.toUpperCase(); //this is giving error because until you don't check the condition of string it will not work
// in unknown you have to first check the type then work on that 
if(typeof d === "string"){
    d.toUpperCase();
}


function abcd():void{
}
function abd():number{
    return 10;
}



let i = null; //this will be of any type

let j: null; //in this case we cannot give any value to it in future because its type is null so we use or
// j = "hello";this is an error

let f : string | null;
f = "harsh"
f = null

let k:undefined ; //no value to any varible then it is undefined


// Never are used very less it used be the code of the after the particular will never run like code after inifinte loop

function abcde():never{ //never give error if you code will terminate i.e here if inifinte loop is not there
    while(true){

    }
}

abcde(); //yaha se control kabhi nhi lautega
// this code become dull 
console.log("hello")
