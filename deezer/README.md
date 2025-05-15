# Lancer le projet

> php -S localhost:8000

---
# Temps sur chaque partie

Temps pour réaliser uniquement l'interface(sans gestion du responsive) :  17h30

Temps passé sur le responsive : 3h40

---

# Améliorations apportés

## 1er amélioration : 
    -> Dans le JS, reset de l'animation du svg de la section hifi (animated-h2-section).
    
    Sur le site officiel, si le pointer sort de la div, l'animation n'est pas reset, ce qui peux donner un effet 'glitché'.

    => J'ai donc ajouté un translate de reset quand le pointer sort de la div pour éviter ce cas là.

## 2eme amélioration :
    -> Disposition CSS des div enfants du Carousel.

    Sur le site officiel, ils utilisent une grid qui casse lorsque la fenêtre a une width < 1150 px. Dans ce cas, ils utilisent des boutons pour switcher de carte, ce qui, je trouve, rend l'interface moins fluide.

    => J'ai donc utilisé une flex-box qui wrap mes div, puis une fois à la largeur 1330px, je change le display pour une grid 2x2, qui repasse en flex-box à la largeur 768px.
