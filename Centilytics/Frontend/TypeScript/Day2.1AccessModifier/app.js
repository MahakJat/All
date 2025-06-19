"use strict";
// Access modifier - Public (default) , Private , Protected 
// ---------------------------Private--------------------------
class BottleMaker {
    constructor(name) {
        this.name = name;
    }
}
let bottle = new BottleMaker("Milton");
// bottle.name = "thermas" ; 
//this will give error but will compile  //that's the thing will ts it gives error but still compiles it and the name of the bottle will change
class BottleMaker_1 {
    constructor(name) {
        this.name = name;
        this.name = name; //can access private in the constructor
    }
    changing() {
        this.name = "Mahak"; //can access private variable in the method of the same class   
    }
}
let b1 = new BottleMaker_1("Aavi");
b1.name = "hello"; //name will be change but will give ts is giving error
//----------------------------Public-------------------------------
class BottleMaker_2 {
    constructor(name) {
        this.name = name;
    }
}
class MetalBottleMaker extends BottleMaker_2 {
}
let b5 = new BottleMaker_2("Milton");
// -------------------------------Protected-------------------------------------
class BottleMaker_3 {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.material = "metal";
    }
}
class MetalBottleMaker_3 extends BottleMaker_3 {
    constructor(name, color, price) {
        super(name, color, price); //to access the properties of the parent class constructor we use this 
        // //joh parent class ke constructor me hota hai woh super me likhna hota hai
    }
    getValue() {
        console.log(this.name, this.color, this.material); //we can not access private member in the derived class but can access protected member (still the private member will be printed because ts only gives error but still compiles)
    }
}
// ---------------------------------------------------------------------------------
// public variable and methods can be access anywhere without giving any error in the typescript
// private variable are only accessible in the class itself only (if access them outside the class or in derived class then changes will ocurred but type script will give error)
// protected member can be accessed in the derived class and class itself
