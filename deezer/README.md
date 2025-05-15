Temps pour réaliser uniquement l'interface(sans gestion du responsive) :  17h30

Temps passé sur le responsive : 
    h45
    21h40

1er amélioration : 
    -> Dans le JS, reset de l'animation du svg de la section hifi (animated-h2-section).
    
    Sur le site officiel, si le pointer sort de la div, l'animation n'est pas reset, ce qui peux donner un effet 'glitché'.

    -> J'ai donc ajouter un translate de reset quand le pointer sort de la div pour éviter ce cas là.

2eme amélioration :
    -> Disposition CSS des div enfants du Carousel.

    Sur le site officiel, ils utilisent une grid qui casse lorsque que la fenetre est de width < 1150px. Dans ce cas ils utilisent des bouttons pour switch de card, ce qui je trouve rend l'interface moins fluide.

    -> J'ai donc utilisé une flex-box qui wrap mes div pour éviter ce cas, et donc gère le responsive automatiquement.