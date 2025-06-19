const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" }
];

let quoteDiv = document.querySelector('.quote');
let author = document.querySelector('.author');
let button = document.querySelector('button');

quoteDiv.textContent = quotes[0].quote
author.textContent = quotes[0].author

button.addEventListener('click',function(){
    let index = Math.floor(Math.random()*(quotes.length));
    console.log(quotes[index]);
    quoteDiv.textContent = quotes[index].quote
    author.textContent = quotes[index].author
})