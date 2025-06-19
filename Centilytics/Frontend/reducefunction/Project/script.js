const textarea = document.querySelector('textarea')
const total = document.querySelector('.total');
const reset = document.querySelector('.reset');
const amount = document.querySelector('.amount');
total.addEventListener('click',function(){
   const arr = textarea.value.trim().split(/\s+/);
//    const exp = textarea.value.trim().split(" "); the above is correct way because it will not take space as array value where this method will make space as array value if more spaces are together
//    console.log(exp);
   let prices = arr.map(function(elem){
     return parseFloat(elem);
   })
//    console.log(prices)
   let sum =  prices.reduce((acc , curr)=> acc + curr , 0);
//    console.log(sum);
amount.innerHTML = sum;
})

reset.addEventListener('click',function(){
    textarea.value = '';
    amount.innerHTML = 'Rs. 00';
})