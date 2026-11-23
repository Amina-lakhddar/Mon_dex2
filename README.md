
#  Mon Dex — Pokédex interactif

##  Présentation

**Mon Dex** est une application web interactive inspirée de l'univers Pokémon. Elle permet de consulter, rechercher, filtrer et gérer une collection de créatures à travers une interface simple et intuitive.

Ce projet a été réalisé dans le cadre de ma formation en développement web à YouCode.

##  Fonctionnalités

###  Gestion des créatures (CRUD)
- Afficher la liste des créatures depuis une API REST.
- Ajouter une nouvelle créature.
- Modifier les informations d'une créature.
- Supprimer une créature.
- Consulter les détails et les statistiques de chaque créature.

###  Recherche et filtrage
- Rechercher une créature par son nom.
- Filtrer les créatures selon leur type.
- Trier les créatures selon différents critères.

###  Validation des formulaires
- Validation des champs avec les expressions régulières (Regex).
- Vérification des données avant leur envoi.
- Gestion des messages de succès et d'erreur.
- Désactivation du bouton pendant l'envoi des données.

###  Gestion des données
- Communication avec l'API REST à l'aide de Fetch API.
- Utilisation de JSON Server pour simuler un serveur backend.
- Utilisation de SessionStorage pour conserver temporairement les brouillons du formulaire.

##  Technologies utilisées

- **HTML5** : structure de l'application.
- **Tailwind CSS** : mise en forme et design responsive.
- **JavaScript (ES6+)** : logique et interactivité.
- **Fetch API** : communication avec l'API REST.
- **JSON Server** : gestion des données.
- **SessionStorage** : sauvegarde temporaire des brouillons.

##  Installation et lancement

### 1. Cloner le repository

```bash
git clone https://github.com/Amina-lakhddar/Mon_dex2.git
```

### 2. Accéder au dossier

```bash
cd Mon_dex2
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur JSON

```bash
npm run api
```

L'API sera accessible à l'adresse :

```text
http://localhost:3000
```

### 5. Lancer l'application

Ouvrir le fichier `index.html` avec Live Server dans Visual Studio Code.

##  Objectifs pédagogiques

- Manipuler le DOM et gérer les événements.
- Utiliser les méthodes JavaScript sur les tableaux et les objets.
- Organiser le code avec les modules JavaScript.
- Effectuer des opérations CRUD avec une API REST.
- Valider les formulaires avec Regex.
- Gérer les données avec SessionStorage.
- Implémenter la recherche, le filtrage et le tri.

##  Réalisé par

**Amina Lakhddar**

- GitHub : [Amina-lakhddar](https://github.com/Amina-lakhddar)

---

*Projet réalisé dans le cadre de ma formation en développement web à YouCode.*
