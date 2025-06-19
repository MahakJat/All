let inputBox = document.querySelector('#username');
console.log(inputBox.attributes); //gives all the attribute of the inputBox//gives the object NamedNodeMap with attributes and its values

// get attribute

let id = inputBox.getAttribute('id');
let placeholder = inputBox.getAttribute('placeholder');
let type = inputBox.getAttribute('type')
console.log(id);
console.log(placeholder);
console.log(type);

// set attribute
// Element.setAttribute("property","value")
inputBox.setAttribute("name","username2");
inputBox.setAttribute("class","inputBox" );
console.log(inputBox.hasAttribute('class'));//this returns true or false 
inputBox.removeAttribute('placeholder')
console.log(inputBox);
console.log(inputBox.style)

inputBox.style.color = 'red'
inputBox.style.cssText += 'width : 200px'

