var bg = document.querySelector('.bg');
var button = document.querySelector('button');

button.addEventListener('click',function(){
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    bg.style.backgroundColor = `rgb(${color1},${color2},${color3})`

})