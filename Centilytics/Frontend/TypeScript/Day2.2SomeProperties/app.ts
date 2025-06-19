

//---------------------------- READONLY PROPERTY-------------------------------
// ReadOnly Property 
// if we use the readonly then we can just read property cannot change it
// still it will be changed but typescript will give error only 


class User{
    constructor(public readonly name: string){}
    changeName(){
        this.name = "hello"
        
    }
}

let user1 = new User("Mahak")
user1.changeName()  //this will change the name but typescript gives error
console.log(user1.name)

//--------------------PARAMETER PROPERTIES------------------------------------

class User_1{
    constructor(public name:string , public age:number, public gender?:string){}
    // Question mark ? for the optional property
}

let u1 = new User_1("Mahak",21,"Female");
let u2 = new User_1("Aavi",21);

// -----------------------PARAMETERISED PROPERTIES-------------------------------
// mean constructor ke under hi declare aur initial karna i.e constructor(public name:string)
class User_2{
    // parameterised property
    constructor(public name : string , public age : number){}
}


// ------------------------GETTERS & SETTERS-----------------------------------

class User_3{
    constructor(public name :string , public age:number){}
    getName(){
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}
let u3 = new User_3("Mahak" , 21)
console.log(u3.getName())
u3.setName("Aavi")
console.log(u3.getName())


//--------------------------get & set -------------------------------------
//we don't need to make the getter and setter method the typescript provide us with get and set 

class User_4{
    constructor(public _name :string , public age:number){} //we can not write give same name to the property of get and set and the varible we used _name to give different name and _ so that not to get confuse we can give other names to
     
    get name(){ //we can also give another name to this  //this function will be we access as the properties
       return this._name;
    }

    set name(_name:string){
        this._name = _name;
    }
}

let u4 = new User_4("Mahak",20);
console.log(u4.name);
u4.name = "aavi";
console.log(u4.name);


// ---------------------------STATIC MEMBER-------------------------------

// static member can be accessed directly by there class name and not need to create there object 
// static member belongs to class only not with the object

class shery{
    static version = 2.0;
    static getRandomNumber(){
        return Math.random();
    }
}

console.log(shery.version);
console.log(shery.getRandomNumber())

let u5 = new shery();
// error because version does not belong to object
console.log(u5.version)


// --------------ABSTRACT CLASSES AND METHODS--------------------------------

abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
    ){}
    abstract getSepia():void //this is the abstract method we need to implement it in the child class of the our abstract class
  
    //we can overwrite this method to
    reels():number{
        //kuch toh implementation
        return 20;
    }
}

// agar obj1 create karege toh obj1 create toh ho jaye likin error hai toh tsc error dega
// let obj1 = new TakePhoto("hlelo","ghjk");
// console.log(obj1.reels())


class Instagram extends TakePhoto{
     constructor(cameraMode :string , filter:string){
        super(cameraMode,filter);
     }
     getSepia(): void { 
         console.log("heloo")
     }
}

