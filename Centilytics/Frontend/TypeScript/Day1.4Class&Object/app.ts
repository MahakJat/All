/*
  Classes and objects
  Class definition
  Constructors
  Access modifiers (public , private , protected)
  Readonly properties
  Optional properties
  Parameter properties
  Getters and setters
  Static members
  Abstract classes and method
*/

// CLASSES

class Devices{
    name = "lg";
    price = 12000;
    category ="digital"
}

let d1 = new Devices();
let d2 = new Devices();

// -------------------------class & constructor------------------------


class BottleMaker{
  constructor(public name:string , public price:number){}
}

// class ke chalte hi constructor sabse pehle chalta hai
let bottle = new BottleMaker("Mahak",1200);

//-------------------------------------------------------

class HumanMaker{
  age = 0
  constructor(public name :string ,public gender:string){}
}


let human_1 = new HumanMaker("mahak" , "female");
let human_2 = new HumanMaker("Aavi", "Female");

//-----------------------------------------------------

class HumanMaker_1{
  constructor(public name :string ,public gender:string , public age:number = 0){}
}
let human_3 = new HumanMaker_1("mahak" , "female"); //if we don't send age then it is by default zero 
// if we had not given default value in the constructor and also not giving the value in the creation of object then that will  give error
let human_4 = new HumanMaker_1("mahak","female",20)

// -----------constructor woh magata hai joh hume set karna hai 


// another way of creating constructor 
/*class Music{
    public name;
    public artist;
    public thumbnail;
    public length;
    public free;
    constructor(name :string , artist : string , thumbnail:string,length : number , free:boolean){
      this.name = name,
      this.artist = artist,
      this.thumbnail = thumbnail,
      this.length = length,
      this.free = free
    }
}
*/


// short hand 

// class Music{
//   constructor(public name:string 
//     ,public artist:string ,
//      public length : number 
//      ,public isFree:boolean,
//      public thumbnail:string = "something.png"){
//     // if user will not give thumbnail that its value will be set to the something.png i.e default value 
//   }
// }

// let music_1 = new Music("ain't me " , "selena gomez", 1200, false,);


// -----------------------------------------------------------------------

// THIS PART WILL GIVE ERROR BECAUSE WE CAN NOT PLACE THE OPTIONAL FEILDS IN BETWEEN IF WE HAVE TO DO SO THEN GIVE THEIR VALUES AS UNDEFIEND OR ORDER THEM TO LAST

class Music{
  constructor(public name:string ,
    public artist:string ,
     public length : number ,
     public thumbnail:string = "something.png"
     ,public isFree:boolean
     ){
    // if user will not give thumbnail that its value will be set to the something.png i.e default value 
  }
}

// THIS IS AN ERROR
// let music_1 = new Music("ain't me " , "selena gomez",20, , false);
let music_1 = new Music("ain't me " , "selena gomez",20,undefined , false)






// DOUBT ONLY ONE DEFAULT VALUE IS VISIBLE NOT ALL DEFAULT VALUES ARE VISIBLE

// class Music_1 {
//   constructor(
//     public name: string,
//     public artist: string,
//     public length: number,
//     public isFree: boolean, // Placing `isFree` before `thumbnail`
//     public thumbnail: string = "something.png" ,// Optional at the end
//     public isAvailabe:boolean = false
//   ) {}
// }

// let music_2 = new Music_1("ain't me", "Selena Gomez", 20, false,undefined,undefined);
// console.log(music_2);

//------------------------------------------------------------------



// TO HANDLE DEFAULT PARAMETER

class Music_2 {
  constructor(
    public name: string,
    public thumbnail: string = "something.png" ,
    public length: number,
  ) {
      if(!thumbnail){
        this.thumbnail = thumbnail //means if thumbnail is a falsy value then set the default value to it
      }
    }
 }

 let music_3 = new Music_2("hello",undefined,20);

 music_3.name = "sa re ga ma pa"

 
//-----------------------------------------------------------------------------

// ------------------------------THIS KEYWORD----------------------------------
//this keyword is used to access the data member and member method of the class with in the class 


class abcd{
  name = "Mahak";
  changeSomeStuff(){
    this.name = "Aavi"
  }
  changeSomeMoreStuff(){
    this.changeSomeStuff();
  }
}


class BottleMakerr{
  constructor(public name : string){
// by public name the two things will happen -  public name varible will be created and there is  name parameter name so this.name is the variable of the Bottle maker and the varible name
    // and the  this.name = name;

    // by this much code the name varible is create and its value is also set (this.name = name)
  }
}

let bottle_5 = new BottleMakerr("Hello");
// the downward code is the extended vision of the above code

// class BottleMakerr{
//   public name;
//    constructor(name:string){
//     this.name = name
//   }
// }

/////////// Two Way///////////////////


// 1 way
// class BottleMakerr{
//   public name;
//    constructor(name:string){
//     this.name = name
//   }
// }

// 2 way
// class BottleMakerr{
//   constructor(public name : string){}
// }


class NewBottleMaker{
   constructor(public name:string){}
}