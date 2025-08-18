# SR Project

Ce projet implémente un jeu distribué sur un modèle client/serveur avec le framework Spring et la technologie Spring Remoting RMI.

## Objectif du jeu

Notre projet de jeu distribué est une application interactive permettant à plusieurs joueurs de
s’affronter dans un environnement de jeu en temps réel. Une fois le serveur lancé, les clients
peuvent directement rejoindre la partie qu'elle soit en cours ou pas encore démarrée. Si la
partie n’a pas encore commencé, une interface permettant au joueur de définir leur pseudo
est proposée avec un bouton pour lancer la partie. Lorsque la partie est démarrée par un
des joueurs, elle est automatiquement lancée pour les autres joueurs.

Une fois la partie démarrée, le jeu consiste à attraper le plus de bonbons (symbolisés
par des ronds rouges), générés aléatoirement, en déplaçant son personnage (symbolisé par
un carré vert) avec les flèches directionnelles du clavier. Le score du joueur est affiché ainsi
que le meilleur score avec le pseudo du joueur. De plus, les positions des autres joueurs
sont également affichées (symbolisées par des carrés bleus). La partie se termine lorsque
tous les bonbons ont été attrapés ou lorsqu’il n’y a plus de joueurs actifs dans la partie
(déconnexion). Une fois, la partie terminée, le score du joueur et le meilleur score sont
affichés et une interface pour rejouer est disponible.

## Choix des technologies

Cette décision a été prise car le modèle client/serveur offre
une structure centralisée où le serveur agit comme une autorité centrale, simplifiant la
gestion des données et la cohérence globale du jeu. En effet, dans un environnement
client/serveur, toutes les interactions et mises à jour du jeu passent par le serveur, ce qui
permet de mieux contrôler les données provenant des différents clients et d’éviter les conflits
de synchronisation. De plus, le modèle client/serveur offre une meilleure sécurité car le
serveur peut valider toutes les actions des clients afin de diminuer les risques de tricherie ou
de comportements malveillants. D’un point de vue scalabilité, un modèle client/serveur car
celui-ci peut être optimisé pour gérer un grand nombre de joueurs simultanés, tandis que
dans un réseau peer-to-peer, la charge est répartie entre les différents pairs, rendant la
gestion de la cohérence plus complexe.

En ce qui concerne la technologie utilisée pour la réalisation du jeu, nous sommes
partis sur l’utilisation de Java RMI (Remote Methode Invocation). Java RMI, intégrée
nativement dans Java, fournit un modèle de programmation simple pour la création
d'applications distribuées. De plus, Java RMI offre une gestion transparente des objets
distribués. Java RMI gère également la communication réseau et la sérialisation des objets.
D’autre part, nous avons choisi d’utiliser le framework Spring en intégrant l’outil
Spring Boot qui accélère et simplifie le développement d'applications et de microservices
en fournissant des outils de build comme Maven et Gradle. De plus, Spring prend en charge
le support à distance (Remoting) et notamment la technologie RMI. En effet, le support RMI
de Spring facilite l’intégration des services distribués dans l’architecture. Enfin, Spring Boot
facilite également le déploiement du serveur.

## Structure du projet

D’un point de vue technique, notre projet contient 2 sous-projets distincts :
“rmi-client” et “rmi-server”. Du côté du serveur, nous définissons notre bean RMI
exportateur (“Config.java”). Ce bean expose notre service “GameService” via RMI,
fournissant ainsi une interface pour les clients distants. Du côté du client, nous configurons
un proxy RMI pour le service “GameService” en spécifiant l’URL RMI du serveur :
"rmi://<host_name>:1099/GameService". Cette configuration permet au client d’accéder au
service distant. Le service “GameService” est une interface partagée entre le client et le
serveur. Il définit les méthodes disponibles que le client peut appeler pour interagir avec le
jeu (manipulation des joueurs, des bonbons, démarrage et fin de partie, connexion et
déconnexion). Cette approche assure une cohérence entre le client et le serveur. L’utilisation
de Spring Remoting RMI simplifie la mise en oeuvre de la communication distante en
abstrayant les détails tels que la gestion des stubs et des skeletons. De cette façon, notre
jeu distribué bénéficie d’une architecture robuste et évolutive. Enfin, l'implémentation du
service “GameService”, côté serveur, est responsable de la logique métier du jeu.

## Défis et limites

### Défis relevés

Au cours de ce projet, plusieurs défis ont été relevés. Tout d’abord, la communication entre
le client et le serveur via RMI a nécessité une bonne compréhension du concept et
comment l’appliquer à notre utilisation.
La gestion de la concurrence et la gestion des exceptions distantes ont été
prises en charge dans notre développement. Concernant les possibles problèmes de
concurrence, il faut savoir qu’un appel RMI est initié par un thread côté appelant (client) et
exécuté par un autre thread côté appelé (serveur). Donc s’il y a plusieurs appels RMI, nous
avons de multiples threads côté serveur. Pour gérer la synchronisation des threads, nous
utilisons la fonctionnalité “synchronized” sur les méthodes critiques modifiant les états
partagés. Cela garantit que seul un thread à la fois peut accéder à ces méthodes.
Quant à la partie test de notre jeu distribué, nous avons effectué des tests unitaires
(avec JUnit) couvrant un large éventail de fonctionnalités et de scénarios pour vérifier le bon
fonctionnement de la logique du jeu. Nous avons également ajouté une stratégie
d’ingénierie du chaos en développant des clients automatisés effectuant des actions
aléatoires dans le jeu (monkey test) afin de découvrir des bogues potentiels de concurrence
ou de performance.

### Limitations

Certaines limitations ont été rencontrées comme l’incapacité à implémenter des fonctions de
callback avec Java RMI pour alerter le client des modifications de l’état du jeu. Nous avons
donc opté pour une solution alternative consistant à effectuer des appels périodiques au
serveur.
