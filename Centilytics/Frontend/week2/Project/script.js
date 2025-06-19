const cardContainer = document.querySelector('.cardContainer');

async function fetchingProducts() {
    try{
        document.querySelector('.loading').style.display = 'block';
        let response = await fetch('https://fakestoreapi.com/products');
        // console.log(response)
        let products = await response.json();
        // console.log(products)
        let str = ''
        products.map((elem)=>{
           str += `    <div class="card">
                <img src="${elem.image}" alt="">
                <div class="content">
                    <h4>${elem.title}</h4>
                    <p>${elem.description}</p>
                    <h5>Rs.${elem.price}</h5>
                </div>
                <div class="btn">Add to cart</div>
           </div>`
        })
       
        document.querySelector('.loading').style.display = 'none';
        cardContainer.innerHTML = str;

    }catch(error){
        console.log("product fetching failed");
    }
}


fetchingProducts() ;



