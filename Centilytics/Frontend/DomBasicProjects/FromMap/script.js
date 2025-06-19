let minions = [
    {
      name: "Kevin",
      image: "https://media.istockphoto.com/id/474645136/photo/minions-toy-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=E0OAw0Do_6DmETo-qIJ26ZO7GwmT9cYA3dSOSt9wT3M="
    },
    {
      name: "Stuart",
      image: "https://cdn.pixabay.com/photo/2016/05/04/17/47/minion-1372349_640.jpg"
    },
    {
      name: "Bob",
      image: "https://www.postergully.com/cdn/shop/products/PG8_07f0d1fa-4b12-433d-8c03-6e14beab86e9.jpeg?v=1578634251"
    },
    {
      name: "Dave",
      image: "https://w0.peakpx.com/wallpaper/472/538/HD-wallpaper-minions-cute-minion-smail-minions.jpg"
    },
    {
      name: "Jerry",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Ldo5xp4ND72CPPe-njlZgSwSEyZ108fWQ&s"
    },
    {
      name: "Carl",
      image: "https://i.pinimg.com/564x/2e/5a/89/2e5a895ec9c6a6a2304ac8c517f573e2.jpg"
    },
    {
      name: "Phil",
      image: "https://assets.winni.in/product/primary/2014/6/27661.jpeg?dpr=1&w=500"
    },
    {
      name: "Tim",
      image: "https://images.hindustantimes.com/img/2022/08/23/550x309/Film-Review---Minions--The-Rise-of-Gru-4_1656604921410_1661263121026_1661263121026.jpg"
    },
    {
      name: "Mark",
      image: "https://cdn.pixabay.com/photo/2016/01/31/19/48/minion-1172098_640.jpg"
    },
    {
      name: "Tom",
      image: "https://liliyum.com/cdn/shop/products/minionbirthdaycake_800x.jpg?v=1650862230"
    }
  ];
  

let main = document.querySelector("main");


minions.map(function(elem){
     let div = document.createElement('div');
     let img = document.createElement('img');
     let h4 = document.createElement('h4');
     div.className = 'card';
     img.setAttribute('src',elem.image);
     h4.innerHTML = elem.name;
     div.appendChild(img);
     div.appendChild(h4);
     main.appendChild(div);
})

