10h30

1er amélioration : 
    -> Dans le JS, reset de l'animation du svg de la section hifi (animated-h2-section).
    
    Sur le site officiel, si le pointer sort de la div, l'animation n'est pas reset, ce qui peux donner un effet 'glitché'.

    -> J'ai donc ajouter un translate de reset quand le pointer sort de la div pour éviter ce cas là.