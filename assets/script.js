//creation des variables
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");
const sliderContener = document.querySelector("#banner");
const bulletsPointContener = document.querySelector(".dots");
const textSlide = document.querySelector("p");
const slideNumber = 1;
const slides = [
  {
    id: 0,
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    id: 1,
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    id: 2,
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    id: 3,
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

slides.forEach((slide, index) => {
  console.log(slide.id);
  
});

//mis en place d'un eventListener sur les fleches
leftArrow.addEventListener("click", () => {
  let slideActive = document.querySelector(".banner-img");

  //chemin du slide actif
  slideActive.src = "assets/images/slideshow/" + slides[1].image;
});

rightArrow.addEventListener("click", () => {
  console.log("right");
});

//comptage des slides
const numberSlide = slides.length;

//on boucle sur numberSlide pour avoir le nombre de bullet point correspondant au nombre de slide

for (let slide = 0; slide < numberSlide; slide++) {
  const bulletPoint = document.createElement("div");
  //on rattache notre element a la div #dots
  bulletsPointContener.appendChild(bulletPoint);
  //on injecte la class dot a chaque div crée
  bulletPoint.classList.add("dot");
}
//création du bullet point actif
const activeBulletPoint = document.querySelector(".dot");
activeBulletPoint.classList.add("dot_selected");

for (let slide = 0; slide < numberSlide; slide++) {
  //création des variables
  let imageSlider = document.createElement("img");
  //on rattache la balise img contenant les differents slide a son parent la div #banner
  sliderContener.prepend(imageSlider);
  //rajout du chemin de l'image
  imageSlider.src = "assets/images/slideshow/" + slides[slide].image;
  //rajout de la classe banner-img
  imageSlider.classList.add("banner-img");
}