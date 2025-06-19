"use strict";
//---------------------------- READONLY PROPERTY-------------------------------
// ReadOnly Property 
// if we use the readonly then we can just read property cannot change it
// still it will be changed but typescript will give error only 
class User {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "hello";
    }
}
let user1 = new User("Mahak");
user1.changeName(); //this will change the name but typescript gives error
console.log(user1.name);
//--------------------PARAMETER PROPERTIES------------------------------------
class User_1 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let u1 = new User_1("Mahak", 21, "Female");
let u2 = new User_1("Aavi", 21);
// -----------------------PARAMETERISED PROPERTIES-------------------------------
// mean constructor ke under hi declare aur initial karna i.e constructor(public name:string)
class User_2 {
    // parameterised property
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// ------------------------GETTERS & SETTERS-----------------------------------
class User_3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
let u3 = new User_3("Mahak", 21);
console.log(u3.getName());
u3.setName("Aavi");
console.log(u3.getName());
//--------------------------get & set -------------------------------------
//we don't need to make the getter and setter method the typescript provide us with get and set 
class User_4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    } //we can not write give same name to the property of get and set and the varible we used _name to give different name and _ so that not to get confuse we can give other names to
    get name() {
        return this._name;
    }
    set name(_name) {
        this._name = _name;
    }
}
let u4 = new User_4("Mahak", 20);
console.log(u4.name);
u4.name = "aavi";
console.log(u4.name);
// ---------------------------STATIC MEMBER-------------------------------
// static member can be accessed directly by there class name and not need to create there object 
// static member belongs to class only not with the object
class shery {
    static getRandomNumber() {
        return Math.random();
    }
}
shery.version = 2.0;
console.log(shery.version);
console.log(shery.getRandomNumber());
let u5 = new shery();
// error because version does not belong to object
console.log(u5.version);
// --------------ABSTRACT CLASSES AND METHODS--------------------------------
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //we can overwrite this method to
    reels() {
        //kuch toh implementation
        return 20;
    }
}
// agar obj1 create karege toh obj1 create toh ho jaye likin error hai toh tsc error dega
// let obj1 = new TakePhoto("hlelo","ghjk");
// console.log(obj1.reels())
class Instagram extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
    }
    getSepia() {
        console.log("heloo");
    }
}
