import jsonData from './data.json' with {type:"json"}

// console.log(jsonData);
// jsonData.map(function(elem){
//     console.log(elem.practice_name)
    // })

let cardSection = document.querySelector('.section-2-part-1-cards');
let section_2_part_1 = document.querySelector('.section-2-part-1');
let section_2_cards = document.querySelector('.section-2-part-1-cards');
let section_2_part_1_header = document.querySelector('.section-2-part-1-header');
let section_2_part_2 = document.querySelector('.section-2-part-2');
let close_div = document.querySelector('.close-div');

let fixWidth = ()=>{
    if (section_2_part_1.style.width === '33%') {
        cardSection.childNodes.forEach(card => {
                card.style.width = "100%";
                card.style.border = "1px solid #d4d4d4";
            
        });
      
        if (cardSection.querySelector('.selected')) {
            cardSection.querySelector('.selected').style.border = "1px solid #ffb938";
        }
    }   
}

const section_2_part_1_cardsAdded = ()=>{
    let str = '';
    jsonData.map(function(elem){
        if(elem.price !== null){
            str += `<div class="card">
            <div class="heading-para">
           <h3>${elem.service_name}</h3>
           <p>${elem.service_description}</p>
         
            </div>
           <div class="btn-and-price">
               <button>${elem.practice_name}</button>
               <div class="price">
                    <h6>Starting from</h6>
                    <h3>&#8377; ${elem.price}</h3>      
               </div>
           </div>
       </div>`
        }
       
    })
    
    cardSection.innerHTML = str;
} 

const section_2_part_2_cardsAdded = ()=>{
    let str2 = ''
    let cardContainerPart2 = document.querySelector('.section-2-part-2 .card-container')
    jsonData.map(function(elem){
        if(elem.price !== null){   
      str2+=`<div class="card">
                           <div class="left-side">
                               <h2>${elem.service_name}</h2>
                               <p>${elem.service_description}</p>
                               <div class="reviews">
                                  <img src="./images/rocket.svg" alt="">
                                  <h4>100+ Successful Deliveries</h4>
                                  <h4 id="review">12 Reviews</h4>
                                  <img src="./images/external-link 1.svg" alt="">
                               </div>
                            </div>
                           <div class="right-side">
                               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                               <h4>Avg.SLA 12hr</h4>
                               <button>Request</button>
                           </div>
                        </div>`
        }
    })
    cardContainerPart2.innerHTML = str2
}

const search_bar_1_func = () => {
    const search_bar_1 = document.querySelector('#search-bar-1')
    search_bar_1.addEventListener('input', () => {
        let value = search_bar_1.value.toLowerCase();
        let filteredArr = jsonData.filter(data => data.service_name.toLowerCase().includes(value));
        let str3 = '';
        if(filteredArr.length === 0){
            cardSection.innerHTML =`<section class="not-data-found">
                    <img src="./images/datanotfount.svg" alt="">
                    <h4>We couldn't find any services that match your search</h4>
                    <h5>Try another keyword to optimize your search.</h5>
               </section>`
        }
       else{
        filteredArr.map(function(elem) {
            if(elem.price !== null){
            str3 += `<div class="card">
                         <div class="heading-para">
                        <h3>${elem.service_name}</h3>
                        <p>${elem.service_description}</p>
                         </div>
                        <div class="btn-and-price">
                            <button>${elem.practice_name}</button>
                            <div class="price">
                                 <h6>Starting from</h6>
                                 <h3>&#8377; ${elem.price}</h3>      
                            </div>
                        </div>
                    </div>`}
        })
        
        cardSection.innerHTML = str3; 
        // Check if section is in collapsed mode (30% width) and apply appropriate styling
        // if (section_2_part_1.style.width === '33%') {
        //     cardSection.childNodes.forEach(card => {
        //             card.style.width = "100%";
        //             card.style.border = "1px solid #d4d4d4";
                
        //     });
          
        //     if (cardSection.querySelector('.selected')) {
        //         cardSection.querySelector('.selected').style.border = "1px solid #ffb938";
        //     }
        // }
        fixWidth()
       }
    })
}

const search_bar_2_func = ()=>{
    let cardContainer = document.querySelector('.section-2-part-2 .card-container');
    const search_bar_2 = document.querySelector('#search-bar-2')
        search_bar_2.addEventListener('input',()=>{
            // console.log(search_bar_1.value.toLowerCase());
            let value =  search_bar_2.value.toLowerCase();
            let filteredArr = jsonData.filter(data => data.service_name.toLowerCase().includes(value));
            // console.log(filteredArr)
            let str3 = '';
         
        if(filteredArr.length === 0){
            cardContainer.innerHTML = ` <div class="data_not_found_section_2_part_2">
           <h4> Not finding what you are looking for? </h4><a href="">
            Talk to the team
           </a>
        </div>`;
        }    
        else{
            filteredArr.map(function(elem){
                if(elem.price !== null){
                str3 += `<div class="card">
                               <div class="left-side">
                                   <h2>${elem.service_name}</h2>
                                   <p>${elem.service_description}</p>
                                   <div class="reviews">
                                      <img src="./images/rocket.svg" alt="">
                                      <h4>100+ Successful Deliveries</h4>
                                      <h4 id="review">12 Reviews</h4>
                                      <img src="./images/external-link 1.svg" alt="">
                                   </div>
                                </div>
                               <div class="right-side">
                                   <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                                   <h4>Avg.SLA 12hr</h4>
                                   <button>Request</button>
                               </div>
                            </div>`}
            })
            
             cardContainer.innerHTML = str3;
        }
     
        })
}

const cardClickedFunc = ()=>{
    cardSection.addEventListener('click', function (elem) {
        let clickedCard = elem.target.closest('.card');
        if (!clickedCard) return;// Agar click kisi card par nahi hua toh kuch mat karo
        let isSelected = clickedCard.classList.contains("selected");     

       if(!isSelected){
          clickedCard.classList.add("selected");
          clickedCard.style.border = `1px solid #ffb938`;  
           section_2_part_1_header.style.flexDirection ='column'
          section_2_part_1.style.width = '33%'
        //   section_2_cards.style.flexDirection = 'column'
         
        //   section_2_part_1.style.overflowY='auto'
        //   section_2_part_1.style.height = '100vh'
          cardSection.childNodes.forEach(card => {
            card.style.width = "100%"
          })
          document.querySelector('.section-2-footer').style.flexDirection = 'column'      
          document.querySelector('.section-2-footer').style.gap = '0.5rem'      
       }  
    close_div.addEventListener('click',function(){
        clickedCard.classList.remove("selected");
        clickedCard.style.border = `1px solid #d4d4d4`
      section_2_part_1.style.width = '100%'
    // section_2_cards.style.flexDirection = 'row'
     section_2_part_1_header.style.flexDirection ='row'

    //  for independent scrolling wala part
    //    section_2_part_1.style.overflowY='hidden'
    //    section_2_part_1.style.height = 'auto'
       cardSection.childNodes.forEach(card => {
        card.style.width = "32.5%"
      })
    }); 
       
    })
}



const filter = ()=>{
    const filterBtn = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter');
    const filter_division = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter-division')
    const filter_open_btn = document.querySelectorAll('.section-2-part-1-header .searchBar-and-filter .filter-division .filter-division-list .filter-division-list-head img');
    const filter_open = document.querySelectorAll('.section-2-part-1-header .searchBar-and-filter .filter-division .filter-division-list .filter-division-list-hidden');
    const close = document.querySelector('.section-2-part-1-header .searchBar-and-filter .filter-division .headsection .close')
    let isSelected = false;
    // let isOpen = false;

    close.addEventListener('click',function(){
        filterBtn.style.border = '1px solid #d4d4d4'
        filter_division.style.display = 'none'
        isSelected = false;
    })


    filter_open_btn.forEach(function(elem,index){
        elem.addEventListener('click',function(){
            // if(!isOpen)
            //     filter_open.style.display = 'block'
            //     else{
            //           filter_open.style.display = 'none'
            //     }
            //     isOpen = !isOpen;
            const currentfilterhiddenDiv = filter_open[index]; //joh filterbtn pe click karege woh div ka index hi hidden div ka index hoga
            let openOrclose = currentfilterhiddenDiv.style.display === 'block' 
            currentfilterhiddenDiv.style.display = openOrclose ? 'none' : 'block';
        })
    })

   

    filterBtn.addEventListener('click',()=>{
      if(!isSelected){
        filterBtn.style.border = '1px solid #ffb938'
        filter_division.style.display = 'block'
      }else{
        filterBtn.style.border = '1px solid #d4d4d4'
        filter_division.style.display = 'none'
      }
      isSelected =  !isSelected 
    })
}

const filter_high_low  = ()=>{

 let sortedArr = [...jsonData].sort((a,b)=>b.price - a.price); //slicing isliye use ki hai ki original array modify na ho
 let str = '';
 sortedArr.map(function(elem,idx){
    if(elem.price !== null){
     str += `<div class="card">
                  <div class="heading-para">
                 <h3>${elem.service_name}</h3>
                 <p>${elem.service_description}</p>
               
                  </div>
                 <div class="btn-and-price">
                     <button>${elem.practice_name}</button>
                     <div class="price">
                          <h6>Starting from</h6>
                          <h3>&#8377; ${elem.price}</h3>      
                     </div>
                 </div>
             </div>`}
 })

 cardSection.innerHTML = str; 
 fixWidth() 
}
const filter_low_high  = ()=>{
    let sortedArr =  [...jsonData].sort((a,b)=>a.price - b.price);
    let str = '';
    sortedArr.map(function(elem){
        if(elem.price !== null){
        str += `<div class="card">
                     <div class="heading-para">
                    <h3>${elem.service_name}</h3>
                    <p>${elem.service_description}</p>
                  
                     </div>
                    <div class="btn-and-price">
                        <button>${elem.practice_name}</button>
                        <div class="price">
                             <h6>Starting from</h6>
                             <h3>&#8377; ${elem.price}</h3>      
                        </div>
                    </div>
                </div>`}
    })
    
    cardSection.innerHTML = str;  
    fixWidth()
}

const filter_a_z  = ()=>{
    let sortedArr =  [...jsonData].sort((a,b)=>a.service_name.localeCompare(b.service_name));
    // sortedArr.forEach(function(elem){
    //     console.log(elem.practice_name)
    // })
    let str = '';
    sortedArr.map(function(elem){
        if(elem.price !== null){
        str += `<div class="card">
                     <div class="heading-para">
                    <h3>${elem.service_name}</h3>
                    <p>${elem.service_description}</p>
                  
                     </div>
                    <div class="btn-and-price">
                        <button>${elem.practice_name}</button>
                        <div class="price">
                             <h6>Starting from</h6>
                             <h3>&#8377; ${elem.price}</h3>      
                        </div>
                    </div>
                </div>`}
    })
    
    cardSection.innerHTML = str;  
    fixWidth()
}
const filter_z_a  = ()=>{
    let sortedArr =  [...jsonData].sort((a,b)=>b.service_name.localeCompare(a.service_name));

    let str = '';
    sortedArr.map(function(elem){
        if(elem.price !== null){
        str += `<div class="card">
                     <div class="heading-para">
                    <h3>${elem.service_name}</h3>
                    <p>${elem.service_description}</p>
                  
                     </div>
                    <div class="btn-and-price">
                        <button>${elem.practice_name}</button>
                        <div class="price">
                             <h6>Starting from</h6>
                             <h3>&#8377; ${elem.price}</h3>      
                        </div>
                    </div>
                </div>`}
    })
    
    cardSection.innerHTML = str;  
    fixWidth()
}

const refresh_left = document.querySelector('.refresh_left');
refresh_left.addEventListener('click',function(){
    section_2_part_1_cardsAdded(); 
     //pervious cards as it is aa jayege;
    fixWidth();
})
const refresh_right = document.querySelector('.refresh_right');
refresh_right.addEventListener('click',function(){
    section_2_part_2_cardsAdded()
})


const lh = document.querySelector('.lh');
const hl = document.querySelector('.hl');
const a_z = document.querySelector('.a-z');
const z_a = document.querySelector('.z-a');
lh.addEventListener('click',filter_high_low)
hl.addEventListener('click',filter_low_high)
a_z.addEventListener('click',filter_a_z)
z_a.addEventListener('click',filter_z_a)

section_2_part_1_cardsAdded();
section_2_part_2_cardsAdded();
search_bar_1_func();
search_bar_2_func();

cardClickedFunc();
filter();

const filterRight = ()=>{
 const right_filter_icon  =  document.querySelector('.filter-div-and-hidden-div .filter');
 const filter_division = document.querySelector('.filter-div-and-hidden-div .filter-division')
 const filter_open_btn = document.querySelector('.filter-div-and-hidden-div .filter-division .filter-division-list .filter-division-list-head img');
 const filter_open = document.querySelector('.filter-div-and-hidden-div .filter-division .filter-division-list .filter-division-list-hidden');
 const close = document.querySelector('.filter-div-and-hidden-div .filter-division .headsection .close')
 let isSelected = false;
 let isOpen = false;

    close.addEventListener('click',function(){
        right_filter_icon.style.border = '1px solid #d4d4d4'
        filter_division.style.display = 'none'
        isSelected = false;
    })

    filter_open_btn.addEventListener('click',function(){
        if(!isOpen)
        filter_open.style.display = 'block'
        else{
              filter_open.style.display = 'none'
        }
        isOpen = !isOpen;
    })

    right_filter_icon.addEventListener('click',()=>{
      if(!isSelected){
        right_filter_icon.style.border = '1px solid #ffb938'
        filter_division.style.display = 'block'
      }else{
        right_filter_icon.style.border = '1px solid #d4d4d4'
        filter_division.style.display = 'none'
      }
      isSelected =  !isSelected 
    })

}

const filter_high_low_right   = ()=>{
    let cardContainer = document.querySelector('.section-2-part-2 .card-container');

    let sortedArr =  [...jsonData].sort((a,b)=>b.price - a.price);
    let str = '';
    sortedArr.map(function(elem){
       if(elem.price !== null){
        str += `<div class="card">
                           <div class="left-side">
                               <h2>${elem.service_name}</h2>
                               <p>${elem.service_description}</p>
                               <div class="reviews">
                                  <img src="./images/rocket.svg" alt="">
                                  <h4>100+ Successful Deliveries</h4>
                                  <h4 id="review">12 Reviews</h4>
                                  <img src="./images/external-link 1.svg" alt="">
                               </div>
                            </div>
                           <div class="right-side">
                               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                               <h4>Avg.SLA 12hr</h4>
                               <button>Request</button>
                           </div>
                        </div>`}
    })
    
    cardContainer.innerHTML = str;  
   }
const filter_low_high_right   = ()=>{
    let cardContainer = document.querySelector('.section-2-part-2 .card-container');
   
    let sortedArr =  [...jsonData].sort((a,b)=>a.price - b.price);
       let str = '';
       sortedArr.map(function(elem){
           if(elem.price !== null){
           str +=  `<div class="card">
           <div class="left-side">
               <h2>${elem.service_name}</h2>
               <p>${elem.service_description}</p>
               <div class="reviews">
                  <img src="./images/rocket.svg" alt="">
                  <h4>100+ Successful Deliveries</h4>
                  <h4 id="review">12 Reviews</h4>
                  <img src="./images/external-link 1.svg" alt="">
               </div>
            </div>
           <div class="right-side">
               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
               <h4>Avg.SLA 12hr</h4>
               <button>Request</button>
           </div>
        </div>`}
       })
       
       cardContainer.innerHTML = str;  
   }
   
const filter_a_z_right   = ()=>{
    let cardContainer = document.querySelector('.section-2-part-2 .card-container');
     
    let sortedArr =  [...jsonData].sort((a,b)=>a.service_name.localeCompare(b.service_name));
       // sortedArr.forEach(function(elem){
       //     console.log(elem.practice_name)
       // })
       let str = '';
       sortedArr.map(function(elem){
           if(elem.price !== null){
           str += `<div class="card">
           <div class="left-side">
               <h2>${elem.service_name}</h2>
               <p>${elem.service_description}</p>
               <div class="reviews">
                  <img src="./images/rocket.svg" alt="">
                  <h4>100+ Successful Deliveries</h4>
                  <h4 id="review">12 Reviews</h4>
                  <img src="./images/external-link 1.svg" alt="">
               </div>
            </div>
           <div class="right-side">
               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
               <h4>Avg.SLA 12hr</h4>
               <button>Request</button>
           </div>
        </div>`}
       })
       
       cardContainer.innerHTML = str;  
   }
const filter_z_a_right   = ()=>{
    let cardContainer = document.querySelector('.section-2-part-2 .card-container');
   
    let sortedArr =  [...jsonData].sort((a,b)=>b.service_name.localeCompare(a.service_name));
   
       let str = '';
       sortedArr.map(function(elem){
           if(elem.price !== null){
           str +=  `<div class="card">
           <div class="left-side">
               <h2>${elem.service_name}</h2>
               <p>${elem.service_description}</p>
               <div class="reviews">
                  <img src="./images/rocket.svg" alt="">
                  <h4>100+ Successful Deliveries</h4>
                  <h4 id="review">12 Reviews</h4>
                  <img src="./images/external-link 1.svg" alt="">
               </div>
            </div>
           <div class="right-side">
               <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
               <h4>Avg.SLA 12hr</h4>
               <button>Request</button>
           </div>
        </div>`}
       })
       
       cardContainer.innerHTML = str;  
   }
const lh_right = document.querySelector('.lh_right');
const hl_right = document.querySelector('.hl_right');
const a_z_right = document.querySelector('.a-z_right');
const z_a_right = document.querySelector('.z-a_right');
lh_right.addEventListener('click',filter_high_low_right);
hl_right.addEventListener('click',filter_low_high_right);
a_z_right.addEventListener('click',filter_a_z_right);
z_a_right.addEventListener('click',filter_z_a_right);
filterRight();