//Type Guards and TypeScript Utility types
// using typeof and instanceof
// Partial , Required , Readonly

// type guards
// use of typeof operator
//  -> type narrowing when you are not clear about type then you can use if and else with typeof

function abcd(args: string | number){
   if(typeof args === "string"){
     return "string";
   }else if(typeof args === "number"){
    return "number";
   }else{
     throw new Error("invalid input")
   }
}
console.log(abcd("mahak"));
console.log(abcd(12));

// type guard by instanceof

class TvKaRemote{
    switchTvOff(){
        console.log("switch of the tv");
    }
}
class AcKaRemote{
    switchAcOff(){
        console.log("switch of the ac");
    }
}

function abc(device:TvKaRemote | AcKaRemote){
    if(device instanceof TvKaRemote){
        device.switchTvOff();
    }else if(device instanceof AcKaRemote){
        device.switchAcOff();
    }
}

abc(new TvKaRemote());
abc(new AcKaRemote());