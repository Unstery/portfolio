# ProgM 🎮

**Application de jeux pair-à-pair** développée en Flutter, permettant de jouer seul ou en multijoueur via une connexion Wi-Fi P2P.  

## 🚀 Fonctionnalités

### Partie compétition
- Mode **BO3** (meilleur des 3 jeux aléatoires)
- 2 modes de jeu : **solo** et **multijoueur**
- Tableau des scores entre chaque défi
- Musique de fin

### Partie entraînement
- Jouer aux défis à volonté
- 6 jeux disponibles
- Règles de chaque jeu intégrées

### Sauvegarde des records
- Enregistrement des meilleurs scores par jeu
- Stockage **local** sur l'appareil

## 🕹️ Défis

1. **Ball Run**  
   Éviter les lasers en bougeant le téléphone (accéléromètre)

2. **Sport Stash**  
   Récupérer un maximum de ballons dans le panier (accéléromètre)

3. **Dart Challenge**  
   Lancer de fléchettes

4. **Pop Balloons**  
   Éclater les ballons de baudruche

5. **Guess Flag**  
   Deviner le pays correspondant au drapeau

6. **Shape Memory**  
   Mémoriser les formes et swiper à droite/gauche si la forme est déjà apparue


## 🛠 Choix techniques

### Langage
- **Dart** (via Flutter)

### Stockage
- **Local** avec `shared_preferences`

### Connexion
- **Wi-Fi Peer-to-Peer** avec `flutter_p2p_connection`

### Capteurs
- **Accéléromètre** via `sensors_plus`

### Audio
- **Musique et sons** via `audioplayers`
