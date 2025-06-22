
function text_motion_animation(){

    let h1 = document.querySelector(".animation-text h1");
    let page_1 = document.querySelector("#page-1");
    let h1dem = h1.getBoundingClientRect();
    let h1CenterX = (h1dem.height / 2)+h1dem.top; //h1dem.top top se kitne dur hai inko add karge hi hum center milge page pe kyuki height /2 karke hum h1 ke center mil jayega likin agar usme top add nhi karge toh me us page ke woh point kaha hai woh nhi milega same for left 
    let h1CenterY =( h1dem.width / 2 )+h1dem.left ; //h1dem.left left se kitne dur hai
    var xVal = 0;
    var yVal = 0; 
   page_1.addEventListener("mousemove",function(dets){
    xVal = (dets.x - h1CenterX) /10;//divide by 30 (can to with any number) to reduce the value // minus is because left me jaye toh values negative aye aur right me jaye toh values positive aye
    yVal = -(dets.y - h1CenterY) /5;
 
//    console.log("y" ,dets.y-h1CenterY)

// dets.x - h1CenterX agar left side jayege toh 
    gsap.to(h1,{
        transform:`rotateY(${xVal}deg) rotateX(${yVal}deg)`,
        duration:2,
        ease:'linear'
    })
   })  
}

// text_motion_animation();
// function page_2_animation() {
//     var h1_page2 = document.querySelectorAll(".p-1 div"); // Get all divs in .p-1

//     h1_page2.forEach(function(elem) {
//         // Use querySelector to select a child element you want to animate
//         var target = elem.querySelector('h1'); // This assumes you're animating the h1 within each div

//         gsap.from(target, {
//             transform: 'rotateX(-80deg)',
//             duration: 1.5,
//             ease: "linear",
//             scrollTrigger: {
//                 trigger: elem, // Trigger when the parent div enters the viewport
//                 start: "top 80%",
//                 end: "top 20%",
//                 markers: true,
//                 toggleActions: "play none none none"
//             }
//         });
//     });
// }

// page_2_animation(); // Initialize the animation




function page_2_animation() {
    var h1_page2_1 = document.querySelector(".p-1-h1-1 h1");
    gsap.from(h1_page2_1, {
        transform: 'rotateX(-90deg)',
        duration:1.5,
        opacity:0,
        ease:"linear",
        scrollTrigger: {
            trigger: ".p-1-h1-1", 
            start: "top 80%",
            end: "top 20%",
            markers: true, 
        }
    });
    var h1_page2_2 = document.querySelector(".p-1-h1-2 h1");
    gsap.from(h1_page2_2, {
        transform: 'rotateX(-80deg)',
        duration:1.5,
        opacity:0,
        ease:"linear",
        scrollTrigger: {
            trigger: ".p-1-h1-2", 
            start: "top 80%",
            end: "top 20%",
            markers: true, 
        }
    });
    var h1_page2_3 = document.querySelector(".p-1-h1-3 h1");
    gsap.from(h1_page2_3, {
        transform: 'rotateX(-80deg)',
        duration:1.5,
        opacity:0,
        ease:"linear",
        scrollTrigger: {
            trigger: ".p-1-h1-3", 
            start: "top 80%",
            end: "top 20%",
            markers: true, 
        }
    });
    var h1_page2_4 = document.querySelector(".p-1-h1-4 h1");
    gsap.from(h1_page2_4, {
        transform: 'rotateX(-80deg)',
        duration:1.5,
        opacity:0,
        ease:"linear",
        scrollTrigger: {
            trigger: ".p-1-h1-4", 
            start: "top 80%",
            end: "top 20%",
            markers: true, 
        }
    });
    var h1_page2_5 = document.querySelector(".p-1-h1-5 h1");
    gsap.from(h1_page2_5, {
        transform: 'rotateX(-80deg)',
        duration:1.5,
        opacity:0,
        ease:"linear",
        scrollTrigger: {
            trigger: ".p-1-h1-5", // Trigger animation when '.p-1-h1-1' is in view
            start: "top 80%",
            end: "top 20%",
            markers: true, 
        }
    });

    var h1_page2_6 = document.querySelector(".p-1-h1-6 h1");
    gsap.from(h1_page2_6, {
        transform: 'rotateX(-80deg)',
        duration:1.5,
        opacity:0,
        ease:"linear",
        scrollTrigger: {
            trigger: ".p-1-h1-6", 
            start: "top 80%",
            end: "top 20%",
            markers: true, 
        }
    });
}

page_2_animation();
