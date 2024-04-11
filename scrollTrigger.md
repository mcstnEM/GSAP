# ScrollTrigger

Pour gérer des animations au scroll dans GSAP, il faut d'abord récupérer la dépendance :
- Soit via un CDN :
    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <!-- On récupère le plugin ScrollTrigger ici -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="./script.js"></script>
    ```
- Soit via les modules :
    ```js
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    ```

Une fois fait, vous pouvez utiliser ScrollTrigger dans vos animations GSAP pour créer des effets dynamiques basés sur le défilement de la page. Voici un exemple basique d'utilisation :

```js
// Assurez-vous d'avoir enregistré ScrollTrigger comme montré précédemment
gsap.to(".maClasse", {
  scrollTrigger: {
    trigger: ".maClasse", // L'élément qui déclenche l'animation au scroll
    start: "top 75%", // Quand le haut de ".maClasse" atteint 75% du viewport
    end: "bottom 25%", // Quand le bas de ".maClasse" atteint 25% du viewport
    markers: true, // Affiche des marqueurs pour le débogage
    toggleActions: "restart pause reverse pause"
  },
  x: 100, // Déplace l'élément de 100 pixels sur l'axe X
  duration: 1 // Durée de l'animation en secondes
});
```

Ce script animera un élément avec la classe `.maClasse` lorsqu'il entre dans la zone de déclenchement définie par `start` et `end`. `toggleActions` contrôle le comportement de l'animation à différents points du cycle de vie de ScrollTrigger, offrant une grande flexibilité pour des interactions complexes. 

N'oubliez pas que ScrollTrigger peut être utilisé pour une grande variété d'animations basées sur le défilement, allant du changement de styles à l'activation d'animations complexes ou même de timelines GSAP.