let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let phone = document.querySelector('#phone');
let submit = document.querySelector('#submit');

const form = document.querySelector('form');

submit.addEventListener('click', function (el) {
    el.preventDefault();

    let isValid = true;
    const containNumber = /\d/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    
    if (!emailRegex.test(email.value)) {
        alert("Invalid email");
        isValid = false;
    }

    if (!phoneRegex.test(phone.value)) {
        alert("Invalid phone number");
        isValid = false;
    }

    if (password.value.length < 5) {
        alert("Password should be at least 5 characters long");
        isValid = false;
    }

    
    if (!containNumber.test(password.value)) {
        alert("Password should have at least one number");
        isValid = false;
    }

    if (confirmPassword.value !== password.value) {
        alert("Confirm password does not match");
        isValid = false;
    }

   
    if (isValid) {
        alert("Form submitted successfully!");
        form.submit(); 
    }
});



// form.addEventListener('submit',function(el){
//      el.preventDefault();
//     // console.log(username.value);
//     // console.log(email.value);
//     // console.log(password.value);
//     // console.log(confirmPassword.value);
//     // console.log(phone.value);

//     let isValid = true;
//     const containNumber = /\d/; //to check present of number


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{10}$/;

//     if(!emailRegex.test(email.value)){
//         alert("invalid email")
//         isValid = false;
//     }
    
//     if(!phoneRegex.test(phone.value)){
//         alert("invalid phone number")
//         isValid = false;
//     }
//     if(password.value.length < 5){
//         alert("passward should of length least 5");
//         isValid = false;
//     }
//     if(!containNumber.test(password.value)){
//         alert("password should have atleast a number");
//         isValid = false;
//     }
//     if(confirmPassword.value !== password.value){
//         alert("confirmpassword is not same");
//         isValid = false;
//     } 
//     if(isValid){
//         alert("form submited");
//         form.submit();
        
//     }
// })

// // submit.addEventListener('click',function(e){
// //     e.preventDefault();

// //     console.log(username.value);
// //     console.log(email.value);
// //     console.log(password.value);
// //     console.log(confirmPassword.value);
// //     console.log(phone.value);
// // })