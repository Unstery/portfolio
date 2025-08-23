# Tower Defense

Notre jeu se présente sous la forme de 3 plateaux choisis aléatoirement. Les plateaux de jeu commencent et finissent à des endroits différents, par exemple, l'un d'eux possède une forme spirale avec le château au centre du parcours et les monstres arrivant en haut à droite.

Nous possédons 3 types de monstres : 
- Le monstre terrestre de base
- Le monstre volant
- Le golem apparaissant toutes les 10 vagues, symbolisant un boss intermédiaire

Pour défendre le château, nous avons 3 types de tours : 
- La tour d'archer attaquant toutes les cibles
- La tour de bombe attaquant seulement les cibles terrestres
- La tour laser attanquant toutes les cibles

Les contrôles, afin d'interagir avec le jeu, sont les suivants :
- 'a' pour sélectionner une tour d'archer puis cliquer pour poser
- 'b' pour sélectionner une tour de bombe puis cliquer pour poser
- 'l' pour sélectionner une tour laser puis cliquer pour poser
- 'e' pour améliorer une tour jusqu'au niveau maximum 3
- 's' pour recommencer une partie
- 'q' pour quitter le jeu à tout moment
  
Après avoir cliquer sur "START", la première vague se lance. 
Une fois tous les monstres tués, vous avez 5 secondes pour vous préparer à la prochaine vague. Les vagues varient entre les monstres terrestres et les monstres volants.


Le numéro de la vague courante (commençant à 0 signifiant que la première vague n'a pas encore débuté), l'or en réserve et la vie restante sont affichés en haut à droite de la fenêtre de jeu. La barre de vie des monstres est également présente au-dessus de chacun d'eux sous forme de rectangle qui diminue proportionnellement en fonction des attaques et projectiles que les monstres reçoivent.

Lorsqu' un monstre de base est vaincu, le joueur gagne 1 point d'or, 3 si c'est un monstre volant et enfin 10 si c'est un golem. Respectivement, si un monstre atteint le château, le joueur perd 2, 1 et 4 points de vie. Tous les 10 niveaux, les monstres de bases augmentent leur résistance (vie) de 5 points et pour les monstres volants l'ajout est de 3 points.

Le golem (avec une barre de vie initialisée à 50 points) a une vitesse de 0.007 et les monstres volants de 0.015. La classe Golem est une classe fille de Monster, tout comme pour les autres monstres.

Pour ce qui est des tours, le niveau des tours est indiqué sur elles allant de 1 à 3. De plus, après avoir appuyé sur la touche 'e' et passé la souris sur la tour, nous avons toutes les informations pour améliorer son niveau (par exemple son coût ou le numéro du niveau prochain si l'amélioration est effectuée).
Les tours d'archers ont une vitesse d'attaque de 1, une portée de 0.15 et des dégâts de 2 points. Les tours lançant des bombes ont une vitesse d'attaque de 5 points, une portée de 0.1 et 8 points de dommages. Lorsqu'elles sont améliorées, les tours des deux types augmentent leur portée de 0.05 et leurs dégâts de 2, avec une méthode abstraite "upgrade" dans la classe "Tower", implémentée dans les classes filles.
De plus, nous avons ajouté une classe fille de "Tower" nommée "LaserTower" qui permet d'ajouter une tour laser avec une ligne magenta (trait), avec une vitesse d'attaque de 0.1 permettant de toucher instantanément.

A la fin de la partie et si le joueur a perdu, "game over" lui indique sa défaite et "press s to start" lui propose de repartir à zéro.

