let h1 = document.querySelector('h1');
window.addEventListener('keydown',function(elem){
  console.log(elem.key);
  h1.textContent = elem.key;
})