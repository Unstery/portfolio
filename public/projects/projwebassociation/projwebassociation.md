![](assets/logo.png?size=400x)

# Projwebassociation (Administration backend)

Bienvenue sur le back end de notre projet web "administration" d'ESIR2 SI.
Dans celui-ci, vous trouverez une API REST communiquant avec la base de données SQLite afin de pouvoir gérer les informations des ```utilisateurs```, c'est-à-dire les personnes qui sont rattachées à une association, ainsi que ces dites ```associations```.

## Fonctionnalités

### Authentification

L'ensemble des requêtes du projet n'est accessible qu'une fois authentifié. Une authentification est possible avec l'endpoint ```/auth/login``` en entrant l'identifiant et le mot de passe par défaut : ```"username": "1"```, ```"password": "valid_password"```. Une fois le ```token``` récupéré depuis la réponse de la requête précédente, il suffit de le rentrer dans la fenêtre ```Authorize```.
![](assets/authentification.png?size=500x)
![](assets/authorize_login.png?size=x30)

### Gestion des utilisateurs - ```/users```

Un ```User``` comporte un ```id```, un nom de famille ```lastname```, un prénom ```firstname```, un âge ```age``` et un mot de passe ```password```.

Le module ```utilisateurs``` permet de :
- Créer un utilisateur : le mot de passe enregistré est hashé
- Récupérer tous les utilisateurs
- Récupérer un unique utilisateur
- Modifier un utilisateur
- Supprimer un utilisateur : sa suppression entraine également la suppression de tous ses rôles dans les associations où il appartenait.
![](assets/users.png?size=500x)

### Gestion des associations - ```/associations```

Une ```Association``` comporte un ```id```, une liste d'utilisateurs ```User[]``` ainsi qu'un nom ```name```.

Le module ```associations``` permet de :
- Créer une association : sa création entraine également l'ajout des ```roles``` (par défaut ```Membre```) aux adhérents.
- Récupérer toutes les associations
- Récupérer une association
- Récupérer les membres d'une association
- Modifier une association
- Supprimer une association
![](assets/associations.png?size=500x)

### Gestion du compte - ```/account```

Le module ```account``` permet de :
- Changer le mot de passe à l'aide d'un ```access_token```
![](assets/account.png?size=500x)

## Structure
Le projet est organisé selon la logique des endpoint : chaque composant correspond à un endpoint spécifique. 
