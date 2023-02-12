//on met un event listener sur l'objet windows pour que le DOM est le temps de se charger
window.addEventListener('DOMContentLoaded', () => {
  //creation des variables
  const leftArrow = document.querySelector('.left_arrow')
  const rightArrow = document.querySelector('.right_arrow')

  const bulletsPointContener = document.querySelector('.dots')
  const slides = [
    {
      id: 0,
      image: 'slide1.jpg',
      tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
    },
    {
      id: 1,
      image: 'slide2.jpg',
      tagLine:
        'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
    },
    {
      id: 2,
      image: 'slide3.jpg',
      tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
    },
    {
      id: 3,
      image: 'slide4.png',
      tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
    }
  ]

  //comptage des slides
  const numberSlide = slides.length

  //mis en place d'un eventListener sur les fleches
  leftArrow.addEventListener('click', () => {
    changeSlide(-1)
  })

  rightArrow.addEventListener('click', () => {
    changeSlide(1)
  })

  //on boucle sur numberSlide pour avoir le nombre de bullet point correspondant au nombre de slide
  for (let index = 0; index < numberSlide; index++) {
    const bulletPoint = document.createElement('div')
    //on rattache notre element a la div #dots
    bulletsPointContener.appendChild(bulletPoint)
    //on injecte la class dot a chaque div crée
    bulletPoint.classList.add('dot')
    if (index == 0) {
      bulletPoint.classList.add('dot_selected')
    }
  }

  let numeroSlide = 0
  //function principale du slider
  function changeSlide (sens) {
    //on ajoute a numeroSlide 1 ou -1 en fonction du bouton cliquez
    numeroSlide = numeroSlide + sens
    //on fait en sorte que quand le premier slide est afficher et que l'on clique sur left on affiche le slide 4
    if (numeroSlide < 0) {
      numeroSlide = numberSlide - 1
    }
    // si c'est le slide 4 on revient au premier slide
    if (numeroSlide >= numberSlide) {
      numeroSlide = 0
    }
    slide(numeroSlide)
    changeTexte(numeroSlide)
    bulletPointActif(numeroSlide, sens, numberSlide)
  }
  //fonction qui fait le src du slide
  function slide (numeroSlide) {
    //on creer la variable slide
    let slide = document.querySelector('.banner-img')
    //on modifie le src du slide en fonction de la variable numeroSlide
    slide.src = './assets/images/slideshow/' + slides[numeroSlide].image
  }

  //fonction qui change le texte en fonction du slide actif
  function changeTexte (numeroSlide) {
    //on creer la variable qui va contenir le texte du slide
    let textSlide = document.querySelector('p')
    //on injecte du contenu dans text slide en fonction de numeroSlide
    textSlide.innerHTML = slides[numeroSlide].tagLine
  }

  //fonction qui gere les bullets point actif ou inactif
  function bulletPointActif (slideEncours, sens, totalSlide) {
    //declaration des variables
    let indexDisabledPoint = 0
    if (sens == 1 && slideEncours == 0) {
      indexDisabledPoint = totalSlide - 1
    } else if (sens == -1 && slideEncours == totalSlide - 1) {
      indexDisabledPoint = 0
    } else {
      indexDisabledPoint = slideEncours - sens
    }
    let activeBulletPoint = bulletsPointContener.children[slideEncours]
    let inactifBulletPoint = bulletsPointContener.children[indexDisabledPoint]

    //j'injecte la class dot-selected avec add sur le slide actif
    activeBulletPoint.classList.add('dot_selected')
    //je supprime la class dot_selected sur le slide actif -1
    inactifBulletPoint.classList.remove('dot_selected')
  }
})
