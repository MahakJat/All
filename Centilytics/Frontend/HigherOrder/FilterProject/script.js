const cartoon = [
    {
        movie: "Hotel Transylvania",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeKk8iynW6Xe-BqfNikwfdUM4B1amGKTTbg&s"
    },
    {
        movie: "Frozen",
        movieurl: "https://images.unsplash.com/photo-1638400903952-11ca05914b71?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        movie: "Toy Story",
        movieurl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRupIcDWe6uTu4kGLu-GVQ_vt08sFGUhnHK_9ZBYDZ2lE55vtJW5o0KosiOmhBYPUaWVKpT"
    },
    {
        movie: "Finding Nemo",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L85MrBiZe4VhDdeGczFkEryBaUSm9OxNBW79a2ABLzpLCTdH5qasRt11inzqTTUXk2-G"
    },
    {
        movie: "The Lion King",
        movieurl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNviEmFZs763Ex1O9GUk-XcTMtws6FEuXV73fn-g6ZBuIsGvYz"
    },
    {
        movie: "Shrek",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHVkgS-Fr-xhtSn3enM_aY9eOiqQ61ywL0A&s"
    },
    {
        movie: "Despicable Me",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSwi5a1u9-ykbiFUkHo0KbHJb6h_wKfb9Mg&s"
    },
    {
        movie: "Coco",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnslWSITFgCxgaiR6OVh-IiTTByTXlu-zcmA&s"
    },
    {
        movie: "Moana",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoU3afWI3fih9ZO0Fuo1Y8NtLZK97vMSeNw&s"
    },
    {
        movie: "Big Hero 6",
        movieurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fGrsgENB-31DkglD4LYbkdpNyO5lBAwrWA&s"
    }
];

const cards_container = document.querySelector('.cards-container');
const cards = document.querySelector('.cards-container .cards');
const searchBar = document.querySelector('#searchbar');
let str = ''
cartoon.map((elem)=>{
    str += ` <div class="cards">
            <img src="${elem.movieurl}" alt="">
            <h3>${elem.movie}</h3>
         </div>
       `
})

cards_container.innerHTML = str;

searchBar.addEventListener('input',function(elem){
    // hum dono way se kar sakte hai
    // console.log(searchBar.value)
    // console.log(elem.target.value)
    let newStr = ''
    const value = elem.target.value.toLowerCase();
    const arr = cartoon.filter(e => e.movie.toLowerCase().includes(value));
    if (arr.length > 0 && arr !== ''){
       arr.map((ele)=>{
        newStr += ` <div class="cards">
        <img src="${ele.movieurl}" alt="">
        <h3>${ele.movie}</h3>
     </div>`
       })
       cards_container.innerHTML = newStr;
    }

 })
