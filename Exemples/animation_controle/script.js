// Elements qui vont etre manipules
const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box2');

// déclaration de la timeline
const tl = gsap.timeline({defaults: {duration: 2}});

// Récupération des bouttons pour le controlles des animations
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const reverseButton = document.getElementById('reverse');
const restartButton = document.getElementById('restart');

// EventListener pour controller les animations
playButton.addEventListener("click", () => tl.play());
pauseButton.addEventListener("click", () => tl.pause());
reverseButton.addEventListener("click", () => tl.reverse());
restartButton.addEventListener("click", () => tl.restart());

// Definition de l'animation
tl.to(box1, {y: 100, ease: "elastic.out"})
  .to(box2, {rotate: 360, ease: 'none'})
  .to(box1, {y: -100, rotate: 30, ease: "elastic.out"}, "-=1")