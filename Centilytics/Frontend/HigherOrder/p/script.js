const searchBar = document.getElementById('searchBar');
const suggestions = document.getElementById('suggestions');
const searchBar2 = document.querySelector('#searchBar2');
const h3 = document.querySelector('h3');
const button = document.querySelector('button');
const names = [
    'Anja',
    'Banana',
    'Cherry',
    'Date',
    'Date',
    'Date',
    'Date',
    'Date',
    'Date',
    'Grapes',
    'Kiwi',
    'Mango',
    'Orange',
    'Pineapple',
    'Strawberry',
];
const arr = names.map(names => names.toLowerCase());

searchBar.addEventListener('input', () => {
    const filter = searchBar.value.toLowerCase();
    suggestions.innerHTML = '';

    const filteredNames = names.filter(name => name.toLowerCase().includes(filter));
    if (filteredNames.length > 0 && filter !== '') {
        suggestions.style.display = 'block'; 
        filteredNames.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            suggestions.appendChild(li);
        });
    } else {
        suggestions.style.display = 'none'; 
    }
    console.log(filteredNames)
});

button.addEventListener('click',function(){
    console.log(searchBar2.value);
    const filteredName = names.filter(name => name === searchBar2.value);
    console.log(filteredName)
})
