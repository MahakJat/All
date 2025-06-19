// type assertion 
// type casting
// non - null assertion operator

// type assertion means telling type script but the type of the value in the variable (you use typescript we you know more about the variable then ts)

// ----------------------TYPE ASSERTION---------------------------------
// let a:any = 12;

// (a as string) = "mahak";
// (a as string).charAt(0);
// (<number> a) = 33;

// --------------------TYPE CONVERSION-----------------------------------

let b = Number("12");
console.log(b);

// --------------------------Non Null Assertion Operator-----------------------
// variable! is the guarantee that the variable's value will not null and not undefined