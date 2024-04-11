Nous avons en JavaScript le matchMedia(), GSAP en inclue sa version.

## Exemple de `matchMedia()` en JavaScript

```js
/* Exemple de matchMedia() en JavaScript pur */
if (window.matchMedia('(max-width: 800px)').matches) {
  // Exécutez le code ici si la condition de la media query est vraie
  console.log('La largeur de la fenêtre est inférieure ou égale à 800px.');
} else {
  // Exécutez le code ici si la condition de la media query est fausse
  console.log('La largeur de la fenêtre est supérieure à 800px.');
}
```

Ce code vérifie si la largeur de la fenêtre du navigateur est inférieure ou égale à 800 pixels. Selon le résultat, il affiche un message correspondant dans la console.

### GSAP et les Media Queries

GSAP étend la fonctionnalité des media queries traditionnelles en JavaScript avec `gsap.matchMedia()`. Cette méthode permet de déclencher des animations basées sur des conditions de media query, offrant une manière puissante et flexible de créer des animations réactives.

#### Utilisation Basique

```js
const mm = gsap.matchMedia();

mm.add('(max-width: 800px)', () => {
  // Votre animation ou logique spécifique à cette plage de taille d'écran
  console.log('Exécuté quand la largeur de la fenêtre est inférieure ou égale à 800px.');
});
```

Dans cet exemple, `gsap.matchMedia()` est utilisé pour définir une condition de media query. Lorsque la condition est vraie (dans ce cas, lorsque la largeur de l'écran est inférieure ou égale à 800px), le code à l'intérieur de la fonction callback est exécuté.

#### Exemple Avancé avec Animation

```js
const mm = gsap.matchMedia();

const box = document.querySelector('.box');

mm.add('(max-width: 800px)', () => {
  // Lance une animation GSAP spécifique pour les écrans de moins de 800px de large
  gsap.to(box, {
    rotation: 360,
    ease: 'none',
    repeat: -1, // Répète l'animation indéfiniment
    duration: 2 // Durée de l'animation de 2 secondes
  });
});
```

Ici, si la largeur de la fenêtre est de 800 pixels ou moins, une boîte HTML avec la classe `.box` sera animée pour tourner de 360 degrés indéfiniment, avec une durée d'animation de 2 secondes. Cette fonctionnalité permet de créer des expériences utilisateur dynamiques et adaptatives, rendant vos animations pertinentes pour une large gamme de tailles d'écran et de dispositifs.

`gsap.matchMedia()` offre une manière élégante et puissante de combiner les avantages des media queries CSS avec la richesse des animations JavaScript, permettant de concevoir des interfaces réellement réactives et interactives.