let menu = document.querySelector('.menu');
let _close = document.querySelector('.close');
let menu_open = document.querySelector('.menu-open');
let slide_div = document.querySelector('.slide_div')
let isOpen = false;

menu_open.addEventListener('click',function(){
    if(!isOpen){
      slide_div.style.left = `70%`
      menu_open.innerHTML = ` <i class="ri-close-line"></i>`

    }else{
         slide_div.style.left = `100%`
         menu_open.innerHTML=`<i class="ri-menu-line"></i>`
    }
    isOpen = !isOpen
})


