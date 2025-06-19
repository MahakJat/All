// 1. filter() – Returns an array with elements that satisfy a condition

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// 2. map() – Transforms each element in an array.
const nums = [1, 2, 3, 4];
const squares = nums.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]
console.log(nums);


// 3. sort() – Sorts an array (modifies the original array).

const fruits = ["banana", "apple", "orange"];
fruits.sort(); 
console.log(fruits); // ["apple", "banana", "orange"]

const numbersList = [3, 1, 4, 2];
numbersList.sort((a, b) => a - b); // Ascending order
console.log(numbersList); // [1, 2, 3, 4]

// 4. reduce() – Reduces an array to a single value.

const values = [1, 2, 3, 4];
const sum = values.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// 5. every() – Checks if all elements satisfy a condition.

const ages = [18, 21, 25, 30];
const allAdults = ages.every(age => age >= 18);
console.log(allAdults); // true

// 6. find() – Returns the first element that satisfies a condition.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
  ];
  
  const adult = people.find(person => person.age >= 18);
  console.log(adult); // { name: "Alice", age: 25 }
  
