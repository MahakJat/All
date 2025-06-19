// we can get the parent of the particular node by using parentNode property

let para = document.querySelector('.para');
console.log(para.parentNode);

// how to get child elements

let title_1 = document.querySelector(".title_1");

console.log(title_1.firstChild); //if there will be some space it will it will #text because it counts itself as a child so after removing space it will show the first child
//  <div class="title_1"> //this space will be consider is the first child
//  <h1>first child</h1>
{/* <h1>second child</h1> */}
{/* <h1>third child</h1> */}

// </div> 

// console.log(title_1.firstChild); 
// this will give the first child 
//  <div class="title_1"><h1>first child</h1> here it will give the first child
{/* <h1>second child</h1> */}
{/* <h1>third child</h1> */}

// </div>

// to give the firstchild properly
console.log(title_1.firstElementChild);

//last child node
console.log(title_1.lastElementChild);

//all the childNodes
console.log(title_1.childNodes); //will give the NodeList of the children //it also take space as its child if you write all the code without any space between the tags so it will give only the element in the NodeList 

let second = document.querySelector(".second");
console.log(second.previousSibling);//this will take is space is child
console.log(second.previousElementSibling);

console.log(second.nextElementSibling);
