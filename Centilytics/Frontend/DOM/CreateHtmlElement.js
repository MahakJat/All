let div = document.createElement('div');
div.innerHTML = "<p> this is the element creation by js</p>"
// we can also give id or attribute to also
div.id = "title"
div.className = "titles" ; //here we have to use className instead of the class

// let body = document.querySelector("body");
// body.appendChild(div);
// or
document.body.appendChild(div);

console.log(document.body)
//-----------------------------------------------------------------------//
let menu = document.querySelector("#menu");

// let newListItem = document.createElement('li');
// newListItem.innerHTML = "Services";
// console.log(newListItem)
// menu.appendChild(newListItem);

// console.log(menu)


// ----------------------------------------
console.log("-----------------------")
console.log(menu.textContent);//this will display all textcontent inside that tag //this will give the all element and not apply css to it
console.log("-----------------------")

console.log(menu.innerText); //in this the style will be applied to it 

menu.textContent = "hello"; //this will replace all the text content of the menu with the hello

menu.innerHTML = "<h1>Hello</h1>"; //this will add tag and content in the menu //this will apply the h1 property
document.querySelector('#menu1').textContent = "<h1>hello</h1>" //this will be added as the plain text