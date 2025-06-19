"use strict";
// ------------------------------MODULES------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
//Modules
// importing and exporting modules
// default exports
function addPayment(val) {
    console.log(val);
}
function getDetails(val) {
    console.log(val);
}
class payment {
    constructor(price) {
        this.price = price;
    }
}
exports.default = payment;
