let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let se = document.querySelector(".se");

setInterval(()=>{

    let currentTime =  new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    se.innerHTML = currentTime.getSeconds();
},1000)
