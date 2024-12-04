# Gestionnaire de Clients

Une application web permettant de gérer une liste de clients via une interface React pour le front-end et une API Django REST pour le back-end. L'application propose des fonctionnalités de création, modification, suppression et affichage des clients.

## 📋 Table des matières
- [Structure du projet](#structure-du-projet)
- [Installation et configuration](#installation-et-configuration)
  - [Prérequis](#prérequis)
  - [Étapes d'installation](#étapes-dinstallation)
    - [Back-end](#back-end)
    - [Front-end](#front-end)
- [🚀 Fonctionnalités](#-fonctionnalités)
- [⚙️ Configuration supplémentaire](#%EF%B8%8F-configuration-supplémentaire)
- [📋 Notes importantes](#-notes-importantes)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

---

## 📁 Structure du projet

### **Front-end**
- **React.js** : Application client pour l'interface utilisateur.
- **Axios** : Utilisé pour effectuer des requêtes HTTP vers l'API.

### **Back-end**
- **Django REST Framework** : Fournit une API RESTful pour les opérations CRUD sur les clients.
- **Base de données** : Gère les données des clients via le modèle `Client`.

---

## 📦 Installation et configuration

### Prérequis
- **Node.js** et **npm** ou **yarn**
- **Python 3.x** et **pip**
- **Django** et **Django REST Framework**

### Étapes d'installation

#### 1. **Back-end**
1. Clonez ce dépôt et naviguez vers le dossier du projet.
2. Installez les dépendances Python :
   ```bash
   pip install -r requirements.txt

