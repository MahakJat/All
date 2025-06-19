let currentCount = document.querySelector(".count h1");
let increBtn = document.querySelector("#increment");
let decreBtn = document.querySelector("#decrement");

increBtn.addEventListener("click",function(){  
let number = parseInt(currentCount.textContent);
   currentCount.textContent = number+1;
})
decreBtn.addEventListener("click",function(){
    let number = parseInt(currentCount.textContent);
    currentCount.textContent = number - 1;
})