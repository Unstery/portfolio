![](assets/logo_administrationfront.png?size=400x)

# Administrationfront

Bienvenue sur le front end de notre projet web "administration" d'ESIR2 SI.
Comme son nom l'indique, il permet d'avoir un accès graphique à un système de gestion administratif d'associations faisant intervenir ```utilisateurs``` et ```associations```. 

## Fonctionnalités


### Session
L'ensemble des fonctionnalités du projet n'est accessible qu'une fois connecté.
Il est donc nécessaire de connaitre ses identifiants afin de pouvoir bénéficier du service. Si vous n'en avez pas, inscrivez ```1``` et ```valid_password``` comme ```identifiant``` - ```mot de passe```, c'est une combinaison proposée par le backend lors de son initialisation.

![](assets/connecte_deconnecte.png?size=x80)


### Gestion des utilisateurs - ```/users```
- Visualiser les utilisateurs et les associations dont ils font partie\
![](assets/liste_utilisateurs.png?size=500x)

- Rechercher un utilisateur \
Chaque modification de champ ajoutera à l'url son nom et sa valeur. En prenant le champ id, il est alors facile de partager un lien vers un utilisateur en particulier (étant donné que l'id est unique)\
![](assets/rechercher_utilisateurs.png?size=500x)

La suite des fonctionnalités est disponible lorsque l'état de la page est en mode ```Edition```. \
![](assets/revision_to_edition.png?size=x80)

L'aperçu change légèrement, et plusieurs nouvelles options sont alors disponibles

![](assets/mode_edition_utilisateurs.png?size=500x)

Il est alors possible de :
- Supprimer un utilisateur (en cliquant sur l'icône remplaçant le champ ```id```)
- Modifier les informations d'un utilisateur (```nom```, ```prénom```,```âge```)

Vous remarquerez d'ailleurs que lorsqu'une modification a lieu sur l'interface, l'icône de synchronisation (en forme de nuage) indique un état hors-ligne. Dès que l'utilisateur a terminé ses modifications (appuyé sur entrée ou désélectionné la cellule de saisie), les informations sont envoyées au serveur, et la réception de sa réponse est synonyme d'état synchrone.

De plus, nous avons rendu possible l'ajout d'un utilisateur, dont l'envoi des données n'est possible que si l'ensemble des champs est rempli.\
![](assets/ajout_utilisateur.png?size=500x)

### Gestion des associations - ```/associations```

L'ensemble des fonctionnalités décrites dans la partie ```users``` est sensiblement similaire dans cette partie ```association``` concernant les associations. \
En effet, il est possible de :
- Visualiser les associations et leurs utilisateurs
- Rechercher une association
- (```Edition```) Modifier les informations générales d'une association 
- (```Edition```) Supprimer une association
- (```Edition```) Créer une association

![](assets/premieres_fonctionnalites_associations.gif?size=500x)

Cependant, et comme vous pouvez le voir, les associations sont un peu plus complexes que les utilisateurs.
Les associations sont **composées** d'utilisateurs, qu'on qualifie de ```membres```ou d'```adhérents```.
De ce fait, cette interface permet de :

- Modifier les adhérents d'une association. Comme lors de la création de l'association, il est possible de filtrer les utilisateurs, pour pouvoir sélectionner rapidement ceux qui feront partie de l'association.
![](assets/modif_membres_association.png?size=500x)



### Gestion du compte
- Gestion des informations générales
- Changement de mot de passe
- Suppression du compte

![](assets/gestion_compte.png?size=500x)


## Structure
Le projet est structuré en différents composants imbriqués :
- Avant la connexion : accès uniquement à la page d'accueil (```home```) et de connexion (```login```)
- Après être connecté : accès supplémentaire aux pages de gestion des utilisateurs, des associations et du compte

Tous les types de données représentant un utilisateur, une association ou encore les constantes ont été regroupées dans un dossier ```interfaces```.

Les services donnant accès aux informations de l'utilisateur courant figurent dans un dossier ```services```. 
Les services utilisés dédiés aux ```utilisateurs``` et ```associations``` sont eux situés dans le fichier ```.service.ts``` de leurs composants respectifs. Ils permettent d'accéder aux fonctionnalités associées de l'API (et aussi de proposer des fonctions utilisables par plusieurs composants dans le cadre des Associations, évitant ainsi la rendondance de code).

De plus, certains composants dits ```side``` contiennent un sous-composant ```core``` 🖤. La partie ```core``` est conçue dans une optique de réutilisation par d'autres composants. Quant à la partie ```side``` elle permet de mettre en forme la partie ```core``` dans le contexte voulu initialement (la partie ```drawer```  du composant Material [sidenav](https://material.angular.io/components/sidenav/) le plus généralement)

![](assets/structure_frontend.png?size=500x)



## Angular

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

Les composants graphiques sont tous basés sur la librairie [Material](https://material.angular.io/)

