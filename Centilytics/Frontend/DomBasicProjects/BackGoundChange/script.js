let container = document.querySelector('.container');
let change_color = document.querySelector('#change');

change_color.addEventListener('click',function(){
    console.log("hello")
    let random_number_1 = Math.floor( Math.random()*226);
    let random_number_2 =Math.floor( Math.random()*226);
    let random_number_3 =Math.floor( Math.random()*226);
    container.style.backgroundColor = `rgb(${random_number_1},${random_number_2},${random_number_3})`;
})