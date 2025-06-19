const username = document.querySelector("#username");
const confirmPassword = document.querySelector("#confirmPassword");
const password = document.querySelector("#password");
const phone = document.querySelector("#phoneNumber");
const email = document.querySelector("#email");
const sumbit = document.querySelector("#submit");
const form = document.querySelector("form");

sumbit.addEventListener("click", function (elem) {
  elem.preventDefault();
  let isValid = true;
  const containNumber = /\d/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // console.log(email.value)
  // console.log(phone.value)
  // console.log(password.value)
  // console.log(phone.value)

  if (!phoneRegex.test(phone.value)) {
    alert("Invalid phone number");
    isValid = false;
  }
  if (!emailRegex.test(email.value)) {
    alert("Invaid email");
    isValid = false;
  }
  if (password.value.length < 8) {
    alert("password length must be of  atleast 8 char");
    isValid = false;
  }
  if (!containNumber.test(password.value)) {
    alert("password should contain number");
    isValid = false;
  }
  if (password.value !== confirmPassword.value) {
    alert("confirm password not equal to password");
  }

  if (isValid) {
    alert("form submited");
    form.sumbit();
    
  }
});
