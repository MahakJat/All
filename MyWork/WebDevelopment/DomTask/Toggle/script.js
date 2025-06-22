let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click',function(){
    if(p.style.display == 'block'){
        p.style.display = "none"
    }else{
        p.style.display = "block"
    }
})