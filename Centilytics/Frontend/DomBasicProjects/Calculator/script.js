    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let curr = '';

    // eval() is a JavaScript function that allows you to execute a string as JavaScript code.
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            console.log(e.target.textContent);
            if(e.target.textContent === '='){
                curr = eval(curr);
            }else if(e.target.textContent === 'C'){
                curr = '';
            }
            else{
                curr+=e.target.textContent;
            }
            display.textContent = curr;
        });
    });