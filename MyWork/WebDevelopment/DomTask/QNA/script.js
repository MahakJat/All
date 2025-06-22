

const arr = [
    { question: "What is the capital of Japan?", answer: "The capital of Japan is Tokyo." },
    { question: "Who painted the Mona Lisa?", answer: "The Mona Lisa was painted by Leonardo da Vinci." },
    { question: "What is the largest ocean on Earth?", answer: "The largest ocean is the Pacific Ocean." },
    { question: "Who was the first person to walk on the moon?", answer: "Neil Armstrong was the first person to walk on the moon." },
    { question: "What is the longest river in the world?", answer: "The longest river is the Nile." },
    { question: "Which planet is known as the Red Planet?", answer: "Mars is known as the Red Planet." },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest is the tallest mountain." },
    { question: "In which country would you find the Great Barrier Reef?", answer: "The Great Barrier Reef is in Australia." },
    { question: "Who wrote the play 'Hamlet'?", answer: "William Shakespeare wrote 'Hamlet'." },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond is the hardest natural substance on Earth." }
];

let faq = document.querySelector(".faq");

let clutter = ''; 
arr.forEach(function(elem) {
  clutter += `
  <div class="faq-item">
<div class="question">${elem.question}</div>
<div class="answer">${elem.answer}</div>
</div>`
});

faq.innerHTML = clutter;


let faq_items = document.querySelectorAll('.faq-item');

faq_items.forEach(function(elem){
    // const question = elem.querySelector('.question'); //current elem me joh .question hai use select kar rahe hai
    // const answer = elem.querySelector('.answer');
    elem.addEventListener('click',function(){
        if(elem.children[1].style.display == "none"){
            elem.children[1].style.display = "block"; 
        }else{
            elem.children[1].style.display = "none"; 
        }
    })
})

// questions.forEach(function(elem) {
//     const question = elem.querySelector('.question');
//     const answer = elem.querySelector('.answer');
  
//     question.addEventListener("click", function() {
//       // Toggle the display property of the answer
//       if (answer.style.display === "none") {
//         answer.style.display = "block";
//       } else {
//         answer.style.display = "none";
//       }

//     }


// Get all question elements
// const questions = document.querySelectorAll('.faq-item .question');

// // Add click event listener to each question
// questions.forEach(function(question) {
//     question.addEventListener('click', function() {
//         // Toggle the 'active' class on the parent faq-item
//         const faqItem = question.parentElement;
//         faqItem.classList.toggle('active');
//     });
// });
