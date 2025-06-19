// console.log("Hello This Js");
console.log(document.getElementById('message')) //this will print the whole tag i.e  <p id="message">I am Message</p>
console.log(document.getElementById('message1')) //it return null if te message1 id does not exist
console.log(document.getElementById('message').textContent) //this will print text content I am Message

console.log(document.getElementsByName('language'));  //it will return Nodelist
console.log(document.getElementsByName('language1'));  //if the language1 doesnot exist it returns empty Node list

console.log(document.getElementsByTagName('h1'));//this will return the html collection of the [h1,h1,h1,h1]

console.log(document.getElementsByClassName('messages')); //this will return collection of html element//HTMLCollection(3) [div.messages, div.messages, div.messages]


// we can select element from the element also 
let cont= document.getElementById('container');
console.log(cont.getElementsByClassName('messages')); //this will select the message class element with in the container class

let containers  = document.getElementsByClassName('containers');
console.log(containers[0].getElementsByClassName('messages'));


// querySelector and querySelectorAll
let headtag = document.querySelector(".htag1").innerHTML; //this will select the first .htag1 element
console.log(headtag); 

let allHeadTags = document.querySelectorAll('.htag1');
console.log(allHeadTags); //it wil give all the element with class name htag1

// we can add queryselector on an element also
let content = document.querySelector('.content');
console.log(content.querySelectorAll('.htag1'));
console.log(content.querySelector('.htag1'));

console.log(document.querySelector('#container'))
console.log(document.querySelector('h1')); //selects the first element of the h1