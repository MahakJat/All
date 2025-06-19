const numbers = [1, 2, 3, 4];
const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum1); 

const arr = [
  {val:'a', num: 10},
  {val:'b', num: 11},
  {val:'c', num: 12},
  {val:'d', num: 13},
  {val:'e', num: 14},
  {val:'e', num: 15}
];

// const sum = arr.reduce((acc, curr) => {
//   return acc + curr.num;  // Simply add the current num to accumulator
// }, 0);  // Start with 0

// console.log(sum);  // Output: 75 (sum of all num values)

// const sum2 = arr.reduce((acc, curr) => {
//   acc.num += curr.num;
//   return acc;
// }, {val: "h", num: 0});  // Initialize with an object

// console.log(sum2.num);  // Now this will work and output: 75

const add = (arr)=>{
  var sum = 0;
    for(var i ; i < arr.length ; i++){
          sum += arr[i]
    }
    return sum;
}


// the acc works the variable sum 
const sumOftheArr = arr.reduce((acc,curr) => acc + curr.num,0) //me jab koi ek hi statment ho toh braces hata ke aur return bhi likhne ki zarorat nhi hoti
console.log(sumOftheArr);
const sumOftheArr1 = arr.reduce((acc,curr) => {
  acc += curr.num;
  return acc;
},0);

console.log(sumOftheArr1)
const sumOftheArr2 = arr.reduce(function(acc,curr){
  acc += curr.num;
  return acc;
},0)
console.log(sumOftheArr2)
