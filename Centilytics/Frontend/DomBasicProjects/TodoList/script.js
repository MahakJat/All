let add_btn = document.querySelector('.add-btn');
let input = document.querySelector('#task-input');
let task_container = document.querySelector('.task-container');


add_btn.addEventListener('click',function(){
   let task_details = input.value;
   let div = document.createElement('div');
   let p = document.createElement('p');
   let button = document.createElement('button');

   div.className =' task-div';
   p.className ='task';
   button.className = 'close-btn';  
   p.textContent = task_details;
   button.innerHTML = '<i class="ri-close-line"></i>'

   div.appendChild(p);
   div.appendChild(button);
   task_container.appendChild(div);
   input.value = ''

   button.addEventListener('click',function(){
       div.remove();
   })
})
