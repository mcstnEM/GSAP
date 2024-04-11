### Exercice 1 : Animation Basique

**Objectif :** Animer la position et l'opacité d'un élément.

1. Créez un élément `<div>` avec une couleur de fond et une taille fixe.
2. Utilisez `gsap.to()` pour déplacer cet élément de 200 pixels sur l'axe X en 2 secondes.
3. Ajoutez une transition d'opacité de 0 à 1 en même temps.

### Exercice 2 : Animation avec Delay et Ease

**Objectif :** Explorer les effets d'accélération et le délai.

1. Reprenez l'animation de l'Exercice 1.
2. Ajoutez un délai de 1 seconde avant le début de l'animation.
3. Appliquez un effet d'accélération `elastic.out` à l'animation.

### Exercice 3 : Séquence d'Animations avec Timeline

**Objectif :** Créer une séquence d'animations sur plusieurs éléments.

1. Créez plusieurs éléments `<div>` alignés horizontalement.
2. Utilisez une instance de `gsap.timeline()` pour créer une séquence où chaque élément se déplace vers le haut puis revient à sa position initiale, un après l'autre.

### Exercice 4 : Animation Réactive avec ScrollTrigger

**Objectif :** Déclencher une animation basée sur le défilement de la page.

1. Créez un long contenu HTML pour permettre le défilement.
2. Sélectionnez un élément qui n'est pas visible initialement lors du chargement de la page.
3. Utilisez `ScrollTrigger` pour déclencher une animation de rotation de cet élément lorsque l'utilisateur fait défiler la page pour le rendre visible.

### Exercice 5 : Animation de Chemin avec MotionPathPlugin

**Objectif :** Animer un élément le long d'un chemin défini.

1. Définissez un chemin SVG dans votre HTML.
2. Utilisez `MotionPathPlugin` pour animer un élément `<div>` ou SVG le long de ce chemin lors du chargement de la page.

### Exercice 6 : Effet Parallaxe avec ScrollTrigger

**Objectif :** Créer un effet parallaxe simple pour plusieurs éléments en arrière-plan lors du défilement.

1. Créez plusieurs couches d'éléments avec différentes images de fond.
2. Utilisez `ScrollTrigger` avec des vitesses de défilement différentes pour chaque couche pour créer un effet parallaxe lors du défilement de la page.

### Exercice 7 : Galerie Animée

**Objectif :** Construire une galerie d'images avec des animations d'entrée pour chaque image.

1. Créez une grille d'images.
2. Utilisez GSAP pour animer l'apparition de chaque image avec un effet d'échelle et d'opacité, déclenché à l'entrée de la galerie dans le viewport.

Ces exercices couvrent un large éventail de techniques et d'effets qui peuvent être réalisés avec GSAP. En les complétant, vous développerez une compréhension solide de la manière de travailler avec GSAP et de l'appliquer à diverses situations d'animation web. Bonne pratique !