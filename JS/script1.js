//Raccolta dati
const imgs = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg"]
const items = document.querySelector(".items");
const container = document.querySelector(".container");
const loopBtn = document.getElementById("loop")
let img = "";
let imgActive = 0
//Logica programma



for (let i = 0; i < imgs.length; i++) {
     img = imgs[i];
    console.log(img);
    if (i ==  0){
        items.innerHTML += `<div class="item active"><img src="${img}" alt=""></div> `    
    } else{
        items.innerHTML += `<div class="item"><img src="${img}" alt=""></div> `
    }
}


const loop = setInterval(autoplay, 3000)
//NEXT
document.querySelector(".next").addEventListener('click', function(){

    document.querySelector(".active").classList.remove("active");

    imgActive++

    if (imgActive > imgs.length -1) {
        imgActive = 0;
    }

    document.querySelectorAll(".item")[imgActive].classList.add("active");
    console.log(imgActive);
})

//PREV
document.querySelector(".prev").addEventListener('click', function(){

    document.querySelector(".active").classList.remove("active");

    imgActive--

    if (imgActive == -1) {
        imgActive = imgs.length -1;
    }

    document.querySelectorAll(".item")[imgActive].classList.add("active");
    console.log(imgActive);
})

items.addEventListener("mouseover" , function(){
    clearInterval(loop)
})


//Funzione autoplay
function autoplay (){
    document.querySelector(".active").classList.remove("active");
    imgActive++
    if (imgActive > imgs.length -1) {
        imgActive = 0;
    }
    document.querySelectorAll(".item")[imgActive].classList.add("active");
    console.log(imgActive);
}