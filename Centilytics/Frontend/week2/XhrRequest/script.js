const btn = document.querySelector('.btn');
const cardcontainer = document.querySelector('.cardcontainer');
btn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
    document.querySelector('.loading').style.display = 'block';
    // xhr.response this will give the response in form of string
    xhr.responseType = 'json'; // Automatically parse response as JSON 
    // const arr = JSON.parse(xhr.response);  
    let str = ''
    xhr.addEventListener('load', function() {
        const arr = xhr.response; // Now this is already parsed as JSON

        // console.log(arr);
         
        arr.map(function(elem){
            console.log(elem.author)

            str += ` <div class="card">
    <img src="${elem.download_url}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1735615479490-237b941e996a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8';" alt="default">
    <h1>${elem.author}</h1>
</div>`
            // str += ` <div class="card">
            //     <img src=${elem.download_url} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1735615479490-237b941e996a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"; }} alt="default"">
            //     <h1>${elem.author}</h1>
            // </div>`

//             str += `<div class="card">
//     <img src="${elem.download_url}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1735615479490-237b941e996a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8';" alt="default" />
//     <h1>${elem.author}</h1>
// </div>`;

        })
        document.querySelector('.loading').style.display = 'none';
        cardcontainer.innerHTML = str
    });

    xhr.send(); 
});

// use this onError attribute
 
// <img src={imageSrc} onError={(e) => { e.target.onerror = null; e.target.src = "https://default-image-link-goes-here"; }} alt="default" />