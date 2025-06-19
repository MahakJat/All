import React from 'react'
import cloneDeep from 'lodash/cloneDeep';
const App = () => {

   const user = {
    name: "Alice",
    age: 28,
    address: {
      street: "123 Maple St",
      city: "Springfield",
      country: "USA",
    },
    hobbies: ["reading", "hiking", "gaming"],
  };

  const user2 = {...user};
  
  user2.address.city = "New York";
  console.log(user.address.city);//output is NewYork mean this is shalow copy means data is shared
  user.name = "mahak" //the top level propertiess are deep copied
  console.log(user.name)
  console.log(user2.name)

  const user3 = cloneDeep(user);
  const user4 = structuredClone(user);//older version

  user3.address.city = "USA";
  user4.address.city = "india";

 console.log(user.address.city);
 console.log(user3.address.city);

 console.log(user.address.city);
 console.log(user4.address.city);


//   Top-level properties (like name, age, and hobbies) are copied by value (for primitives) or by reference (for objects/arrays).

// Nested objects/arrays (like address and hobbies) are still shared between user and user2.


// const user2 = JSON.parse(JSON.stringify(user));
// Limitations:
// Loses functions, undefined, Date, Map, Set, etc.

// Works fine for plain JSON-safe data (like your user object).

// same working  for the array
  return (
    <div>App</div>
  )
}

export default App