const names = [
    'Anja',
    'Banana',
    'Cherry',
    'Date',
    'Grapes',
    'Kiwi',
    'Mango',
    'Orange',
    'Pineapple',
    'Strawberry',
];

const searchBar = document.querySelector('.search-bar');
const suggestions = document.querySelector('.suggestions');

searchBar.addEventListener("input",function(){
   const search = searchBar.value.toLowerCase();
   suggestions.innerHTML = "";

   const filteredArray = names.filter(name => name.toLowerCase().includes(search));
   if (filteredArray.length > 0 && filter !== '') {
    suggestions.style.display = 'block'; 
    filteredArray.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        suggestions.appendChild(li);
    });
} else {
    suggestions.style.display = 'none'; 
    }
});