let valueElement = document.querySelector('.value h1');

let incButton = document.querySelector('.increase');
let decButton = document.querySelector('.decrease');

let value = parseInt(valueElement.textContent);
console.log(value);
console.log(valueElement);


incButton.addEventListener("click",function(){
    value += 1;
    valueElement.textContent = value;
})
decButton.addEventListener("click",function(){
    value -= 1;
    valueElement.textContent = value;
})



// let valueElement = document.querySelector('.value');
// let valueH1 = document.querySelector('.value h1');

// let value =  parseInt(document.querySelector('.value h1').textContent);

// let rect = valueElement.getBoundingClientRect(); //will give the corrdinates of the valueElement

// // console.log(boundary);
// let count = 0;
// valueElement.addEventListener('mousemove',function(elem){
//     // console.log(elem.clientX);//gives the position on X
//     let centerX =  rect.left + rect.width / 2 ;//left side se jis coordinate pe hai to the width to getCenter
//     let mouseX = elem.clientX - rect.left; //this will give the mouse movement in the valueElement div
//     let motion = mouseX - centerX;


//     count += (motion / 10);
//     valueElement.style.transform = `translate(${count}px)`;
   
// })



