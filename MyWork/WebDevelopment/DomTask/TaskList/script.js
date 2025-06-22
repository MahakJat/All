const inputField = document.querySelector('input[type="text"]');
const submit = document.querySelector('.submit-input-button');
const taskList = document.querySelector('.taskList');

submit.addEventListener("click",function(event){
    event.preventDefault();
    const taskName = inputField.value.trim();
    if(taskName){//truthy value
        addTaskToList(taskName);
        inputField.value = ''; // Clear the input field
    }
})

function addTaskToList(taskName){
     const taskContainer = document.createElement('div');
     taskContainer.className = 'task flex gap-5 w-full justify-between items-center bg-[#FDFFF9] rounded-[4vh] p-2 shadow-lg'

     const task = document.createElement('h1');
     task.className ='text-[#c89d60] text-[2.5vh]'
     task.textContent = taskName

     const deleteButton = document.createElement('button');
     deleteButton.className = 'px-2 py-1 rounded-full font-[gilroy] text-[2.5vh] bg-[#FFDCAA] shadow-lg';
     deleteButton.innerHTML = `<i class="text-white font-bold ri-close-large-line"></i>`;
     
     deleteButton.addEventListener('click',function(){
        taskContainer.remove();//delete the element created
     })
     
    // Append task title and delete button to the task container
     taskContainer.appendChild(task);
     taskContainer.appendChild(deleteButton);

     taskList.appendChild(taskContainer);

  }


  // Optionally, you can allow hitting the Enter key to add tasks
//   inputField.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//       submitButton.click();
//     }
//   });

