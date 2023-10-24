// Raccolta Dati

const items = document.querySelector('.items');
let img = ""

const imgs = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg"
];


for (let i = 0; i < imgs.length; i++) {
     img = imgs[i];
    if (i == 0){
        items.innerHTML += `<div class="item active"><img src="${img}" alt=""></div> `;
    } else{
        items.innerHTML += `<div class="item "><img src="${img}" alt=""></div> `;
    }
    
     console.log(img);
}

let imgActive = 0;
document.querySelector(".next").addEventListener('click', function(){

document.querySelector(".active").classList.remove("active");
imgActive++;
if(imgActive > imgs.length -1){
    imgActive = 1
}
document.querySelectorAll(".item")[imgActive].classList.add("active");
})

document.querySelector(".prev").addEventListener('click', function(){

    document.querySelector(".active").classList.remove("active");
    imgActive--;
    console.log(imgActive);
    if(imgActive == -1){
        imgActive = imgs.length -1;
    }
    document.querySelectorAll(".item")[imgActive].classList.add("active");
    })