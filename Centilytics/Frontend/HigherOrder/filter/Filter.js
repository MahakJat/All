const arr = [
    {
        name:"Mahak",
        age:20
    },
    {
        name:"Aavi",
        age:21
        
    },
    {
        name:"Muskan",
        age:22
    },
    {
        name:"Isha",
        age:22
    },
    {
        name:"Ani",
        age:23
    }
]

let main = document.querySelector('.main');

let str = ''
arr.map(function(elem){
    str += ` <div class="card">
             <h3>${elem.name}</h3>
             <h4>${elem.age}</h4>
         </div>`
})

main.innerHTML = str
const filterArr = arr.filter(elem => elem.age == 22);

filterArr.map(function(elem){
    str += ` <div class="card">
             <h4>Filter Array<h4>
             <h3>${elem.name}</h3>
             <h4>${elem.age}</h4>
         </div>`
})
main.innerHTML = str
console.log(filterArr);