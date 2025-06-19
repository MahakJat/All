// array  from make the new array from any iterables

let str = "Mahak";
let result = Array.from(str);
console.log(result)

let str2 = "123456";

let result2 = Array.from(str2,num)

function num(x){
    return Number(x);
}
console.log(result2)

let result3 = Array.from(str, ch => ch.toUpperCase());
console.log(result3)