
function showImages() {
   document.getElementById('images_menu').style.display = "block";
    water.classList.add("moveWater");
    nature.classList.add("moveNature");
    landscape.classList.add("moveLandscape");
    family.classList.add("moveFamily");
}


function hideImages() {
   document.getElementById('images_menu').style.display = "none";
}




let water = document.querySelector(".water");
let nature = document.querySelector(".nature");
let landscape =document.querySelector(".landscape");
let family = document.querySelector(".family");

