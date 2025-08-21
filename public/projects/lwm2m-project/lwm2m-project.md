# Maquette architecture open source couvrant le procole LwM2M

Ce projet à pour objectif d'étudier la faisabilité d'une architecture open source couvrant le portcole LwM2M.

## Structure du projet

### Création d'un object IPSO

Le développement de la maquette pour la gestion des clients IoT repose sur la mise en place d’une architecture en micro-services, déployant un serveur Leshan LwM2M, les clients LwM2M et une interface de gestion des clients depuis le serveur.
Un des objectifs de notre expérimentation était d’établir une communication entre les 2 clients. Pour cela, nous avons défini un objet selon le modèle de données IPSO. Un objet IPSO est un ensemble de spécifications standardisées facilitant l’interopérabilité entre les objets connectés et l’Internet des Objets. Dans notre cas, notre objet de test comporte 2 ressources : “Tx” (pour la transmission de données) et “Rx” (pour la récupération de données). Ces ressources supportent les opérations de lecture et d’écriture.
La démonstration du serveur met en avant sa capacité à gérer plusieurs clients et à coordonner les interactions entre eux. La structure présentant le processus de communication de notre démonstration est la suivante :

![](assets/structure_demo_LwM2M.png?size=x500)

Une fois les 2 clients enregistrés dans le serveur (1), le serveur observe les ressources “Tx” de chaque client (2). Lorsque cette ressource est modifiée par le client, celui-ci envoie une notification au serveur (3) pour informer du changement. Le serveur récupère la valeur de la ressource “Tx” du client notifiant le changement et l’écrit sur la ressource “Rx” de l’autre client (4). Ce processus est réalisé de manière bidirectionnelle entre les 2 clients.

### Implémentation du serveur

L’infrastructure du serveur a été établie en utilisant le Framework Java Spring Boot, fournissant une structure
6
robuste et évolutive pour la création d’une API. Cette approche permet de concevoir un backend en micro-services, facilitant la gestion des clients et des communications entre eux.
Ensuite, le serveur Leshan LwM2M a été développé dans le backend. Le serveur a été configuré pour prendre en charge le protocole CoAP à l’aide du Framework Californium permettant ainsi de communiquer avec les appareils IoT. Le modèle d’objet, créé précédemment, est chargé dynamiquement dans le serveur permettant de reconnaître ce type d’objet. De plus, nous avons créé une classe “EventServer” qui orchestre le serveur. En effet, cette classe écoute les événements d’enregistrement, de mise à jour et de désinscription des clients. Elle gère également les notifications d’observation provenant des clients.
La maquette comprend également une interface web permettant la gestion des clients depuis le serveur. Cette interface a été récupérée depuis la démo proposée par la bibliothèque Leshan, puis adaptée afin qu’elle interagisse correctement avec notre API serveur. Cette interface simplifie l’administration des appareils IoT connectés en proposant des interactions telles que l’observation, la lecture et l’écriture de ressources. Ces fonctionnalités ont été implémentées dans l’API en définissant des requêtes REST dans des “Controller” et en interrogeant les clients via le serveur dans des “Service” pour récupérer tous les clients connectés au serveur et envoyer les opération READ, WRITE et OBSERVE aux clients LwM2M.
Par la suite, le serveur a été conteneurisé avec Docker pour simplifier le déploiement et améliorer la gestion des dépendances. Il a été déployé sur un PC industriel afin d’assurer une disponibilité constante du serveur. L’interface web a également été conteneurisée avec Docker. Elle se connecte au serveur via l’adresse IP du PC industriel. Cette approche renforce la flexibilité de l’architecture.

### Implémentation des clients logiciels

Dans le cadre de notre maquette, nous avons développé 2 clients LwM2M avec la bibliothèque Leshan. Ces clients interagissent avec le serveur en respectant les spécifications du protocole LwM2M, avec des fonctionnalités telles que l’observation des ressources et la gestion des objets intégrés dans les clients, correspondant aux caractéristiques des appareils IoT.
Ensuite, sur chaque client, une interface minimaliste a été développée. Cette interface permet de visualiser les messages reçus sur la ressource de réception “Rx” et d’écrire, via une zone de texte, sur la ressource de transmission “Tx”. Pour cela, chaque client crée une instance de l’objet que nous avons précédemment défini, avec les fonctions “read” et “write” implémentées pour respectivement lire et modifier la valeur de la ressource correspondante.
Une fois tous les composants de notre architecture implémentés, la communication entre les 2 clients peut être démontrée en utilisant les interfaces des clients pour envoyer des messages entre eux. Une démonstration vidéo de l’expérience est accessible en suivant ce lien.

## Organisation du projet

```text
/
├── lwm2m-client1/
│   ├── src/main/java/com/example
│   │   ├── models/
│   │   │   └── CommTestObject.xml
│   │   ├── DtlsSessionLogger.java
│   │   ├── LeshanClientDemo.java
|   │   └── MyCommTest.java
│   ├── Californium3.client.properties
│   └── pom.xml
│
├── lwm2m-client2/
│   ├── src/main/java/com/client2
│   │   ├── models/
│   │   │   └── CommTestObject.xml
│   │   ├── DtlsSessionLogger.java
│   │   ├── LeshanClientDemo.java
|   │   └── MyCommTest.java
│   ├── Californium3.client.properties
│   └── pom.xml
│
├── lwm2m-server/
│   ├── src/main/java/com/example/lwm2mserver
│   │   ├── clients/
│   │   │   ├── ClientsController.java
│   │   │   └── ClientsService.java
│   │   ├── objectspecs/
│   │   │   ├── ObjectSpecsController.java
│   │   │   └── ObjectSpecsService.java
│   │   ├── models/
│   │   │   └── CommTestObject.xml
│   │   ├── EventServer.java
│   │   ├── Lwm2mServerApplication.java
│   ├── Dockerfile
│   └── pom.xml
│
└── webapp/
    ├── src/main/java/com/example
    │   ├── components/
    │   ├── js/
    │   ├── plugins/
    │   ├── router/
    │   ├── views/
    │   ├── App.vue
    │   └── main.js
    └── Dockerfile

```

Le projet est réparti en 4 dossiers distincts :
- Les clients Leshan LwM2M (lwm2m-client1 et lwm2m-client2) possèdent :
  - un fichier `LeshanClientDemo.java` comprenant la création du client Leshan et de sa CLI
  - un fichier `MyCommTest.java`, qui est une instance du modèle que nous avons créé (`CommTestObject.xml`) permettant de gérer la lecture et l'écriture sur les ressources `tx`et `rx`

- Le serveur Leshan LwM2M (lwm2m-server) possède :
  - un fichier `Lwm2mServerApplication.java` pour créer le serveur Leshan
  - un fichier `EventServer`pour écouter les événements d'inscription (`Registration`) et d'observation (`Observation`)
  -  un dossier `clients` avec les services et controller pour gérer les clients connectés
  -  un dossier `objectspecs` avec les services et controller pour gérer les objets d'un client

- L'interface de gestion du serveur (webapp)

L'objet IPSO que nous avons créé pour une communication entre clients est `CommTestObject.xml` et se trouve dans les dossiers `models` des clients et du serveur.