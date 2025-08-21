# Football Talent Tracker

Bienvenue sur le projet de Data Engineering portant sur l'analyse des données de scouting pour les joueurs de football en Europe.
L'objectif est de repérer les futures pépites des `7 plus grands championnats européens` en se concentrant sur les `joueurs de moins de 23 ans`. Pour cela, un dataframe est créé afin de regrouper tous les joueurs des 7 plus grands championnats pour pouvoir les traiter puis faire un `classement des meilleurs jeunes` à leur poste pour enfin `visualiser une équipe type` des meilleurs jeunes joueurs pour chaque championnats et les 7 championnats combinés.

## Processus

### Récupération des données

8 tableaux de statistiques sont récupéré à l'aide du site FBREF : https://fbref.com/ et les bibliothèques de web scraping BeautifulSoup et Selenium WebDriver.
Ces 8 tableaux répertorient les catégories suivantes :
- Général 
- Tirs
- Passes
- GCA (Goal-Creating Actions)
- Défense
- Gardien
- Statistiques diverses

En cumulant ces tableaux, nous avons plus de 200 statistiques à traiter. De plus, nous avons environ 500 joueurs pour chaque championnat.

### Nettoyage des Dataframes

- Homogénéisation des noms des colonnes
- Suppression des colonnes inutiles (liens des matchs, …)
- Passage d’un Dataframe de 2 headers à un seul

### Concaténation des Dataframes

Une fois les dataframes nettoyés, ils sont regroupés en un unique dataframe avec la `merge` sur les informations partagées par tous les tableaux : `['Player', 'Nation', 'Pos', 'Squad', 'Age', 'Born']`.
Pour chaque championnats, le tableau final est enregistré dans le projet sous format CSV afin de pouvoir de le réutiliser facilement pour le traitement des données et la visualisation. De plus, le site limitant le nombre de requête à 20 par minute, il est préférable de stocker les dataframes.
Les dataframes n'ont maintenant que 126 statistiques que nous allons traiter dans les parties suivantes.

### Calcul des scores

Les statistiques sont analysées afin de savoir si celles-ci vont avoir un impact direct ou non sur le calcul des scores. Pour cela, nous divisons les statistiques en 8 groupes  :
```python
stats = {
    'general': ['MP', 'Starts', 'Min/90', 'CrdY', 'CrdR'],
    'keeper': ['GA', 'SoTA', 'Saves', 'CS'],
    'defense': ['Tackles Tkl', 'Tackles TklW', 'Challenges Tkl', 'Challenges Att', 'Blocks Blocks', 'Blocks Sh', 'Blocks Pass', 'Int', 'Err', 'Recov'],
    'fouls': ['Fls', 'OG', 'Off'],
    'passe': ['Total Cmp', 'Total Att', 'Short Cmp', 'Short Att', 'Medium Cmp', 'Medium Att', 'Long Cmp', 'Long Att', 'KP', 'PrgP'],
    'shot': ['Sh/90', 'Sh', 'SoT', 'FK', 'SCA90', 'GCA90'],
    'assist': ['Ast/90', 'xAG/90'],
    'goal': ['Gls/90', 'PK', 'PKatt', 'npxG/90']
}
```

Ensuite, pour chaque groupe de statistiques, on calcule son score allant de 0 à 100. Ces scores ont été calculés en pondérant chaque statistique selon leur positivité/négativité et leur importance. Ils sont ensuite normalisés puis converti en note sur 100.

### Classement pour chaque poste

Une fois les scores calculés, nous pouvons passer à la dernière étape de traitement des données. En effet, pour chaque poste (Gardien, Défenseur, Milieu, Attaquant), nous réalisons un classement en pondérant chaque score selon leur importance pour le poste.

### Visualisation

Ces classements sur chaque poste vont nous permettre de créer une composition d'équipe en formation 4-3-3 (1 gardien, 4 défenseurs, 3 milieux, 3 attaquants) des meilleurs jeunes (-23 ans). Les 11 meilleurs jeunes récupérés, il a fallu récupérer les photos de ces 11 joueurs par web scraping sur le même site.
Cependant, la récupération des photos des joueurs prend quelques secondes avant d'afficher la composition d'équipe. Nous avons donc 2 modes pour afficher les 11 joueurs : avec ou sans photo.

De plus, avec cet affichage, un tableau des 5 meilleurs jeunes joueurs pour chaque poste est créé afin de visualiser qui sont les éventuels remplaçants.

Voici une des visualisations obtenues des meilleurs jeunes joueurs de Premier League :

![Meilleurs jeunes joueurs de Premier League](assets/lineups_under_23_PremierLeague.png?size=400x)

Et le classement associé pour chaque poste avec l'affichage de tous les scores des statistiques ainsi que le score total :

![Meilleurs jeunes joueurs de Premier League](assets/ranking_under_23_PremierLeague.png?size=800x)

## Limites du projet

Liées au site https://fbref.com/ :
- Limitation à 20 requêtes par minute pour le web scraping
- Les postes des joueurs ne sont pas assez détaillés. En effet, il y a une seule catégorie pour chaque ligne (Défenseur, Milieu, Attaquant).

Liées à mon projet :
- Certains joueurs peuvent occuper plusieurs postes (exemple : Milieu et Attaquant) et donc se retrouver 2 fois sur l'équipe type bien que son score total soit différent entre celui d'attaquant et milieu.
