let incre = document.querySelector("#incre");
let decre = document.querySelector("#decre");
let reset = document.querySelector("#reset");

let count = document.querySelector(".count");
incre.addEventListener('click',function(){
    let number = parseInt(count.textContent);
    count.textContent = number+1;
})
decre.addEventListener('click',function(){
    let number = parseInt(count.textContent);
    count.textContent = number - 1;
})
reset.addEventListener('click',function(){
    count.textContent = '0';
})