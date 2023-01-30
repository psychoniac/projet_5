//creation des variables
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");
const bulletsPointContener = document.querySelector(".dots");
const sliderContener = document.querySelector("#banner");

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//mis en place d'un eventListener sur les fleches
leftArrow.addEventListener("click", () => {
  alert("left");
});
rightArrow.addEventListener("click", () => {
  alert("right");
});

//comptage des slides
const numberSlide = slides.length;

//on boucle sur numberSlide pour avoir le nombre de bullet point correspondant au nombre de slide

for (let slide = 0; slide < numberSlide; slide++) {
  const bulletPoint = document.createElement("div");
  bulletsPointContener.appendChild(bulletPoint);
  bulletPoint.classList.add("dot");
}
//création du bullet point actif
const activeBulletPoint = document.querySelector(".dot");
activeBulletPoint.classList.add("dot_selected");

//création des balises images qui vont contenir les slides
for (let slide = 0; slide < numberSlide; slide++) {
  const imageSlider = document.createElement("img");
  sliderContener.appendChild(imageSlider);
  //rajout du chemin de l'image
  imageSlider.src = "assets/images/slideshow/" + slides[slide].image;
  //rajout de la classe banner-img
  imageSlider.classList.add("banner-img");
}
