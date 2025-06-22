
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display'); //input


let currentInput = '';
buttons.forEach(function(button){
    button.addEventListener('click',function(elem){
        // console.log(elem.target.innerHTML);
        if(elem.target.innerHTML == '='){
              currentInput = eval(currentInput);
            //   display.value = currentInput;

        }else if(elem.target.innerHTML == 'C'){
            currentInput = " "
            // display.value = currentInput;
        }
        else{
            currentInput += elem.target.innerHTML;
            // display.value = currentInput;
        }
        display.value = currentInput;
    })
})



// let currentInput = '';

// function appendToDisplay(value) {
//     currentInput += value;
//     document.getElementById('display').value = currentInput;
// }

// function clearDisplay() {
//     currentInput = '';
//     document.getElementById('display').value = currentInput;
// }

// function calculateResult() {
//     try {
//         currentInput = eval(currentInput).toString();
//         document.getElementById('display').value = currentInput;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//         currentInput = '';
//     }
// }
