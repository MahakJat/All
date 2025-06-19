const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const progress = document.querySelector('.progress');
let num = 0;
button.addEventListener('click',function(){
    button.textContent = "Downloading...";
    let num = 0;
    let interval = setInterval(function () {
        num += 1; 
        h1.innerHTML = num + "%";
        progress.style.width = num + "%";

        if (num >= 100) {
            clearInterval(interval);
            button.innerHTML = "Downloaded";
            button.style.backgroundColor = "rgb(51, 135, 93)";
            button.style.opacity = "1";
        }
    }, 100);
})