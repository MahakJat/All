
// ------------------------------MODULES------------------------------------

//Modules
// importing and exporting modules
// default exports

export function addPayment(val:number){
    console.log(val);
}
export function getDetails(val:string){
    console.log(val);
}

export default class payment{
    constructor(public price:number){}
}
