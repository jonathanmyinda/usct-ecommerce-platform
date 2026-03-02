USCT-SARL

Présentation

Le site e-commerce USCT SARL permet :

La vente en ligne de produits IT, bureautiques et de sécurité

Une expérience utilisateur optimisée pour la conversion

La gestion du panier et des commandes

⚡ Fonctionnalités

Vite – Outil de build ultra-rapide et serveur de développement performant

React 18 – Dernière version de React avec support des hooks

TypeScript – Typage strict pour une meilleure expérience développeur

Tailwind CSS – Framework CSS utilitaire-first, rapide et flexible

shadcn/ui – Composants élégants basés sur Radix UI

Path Mapping – Importations propres avec le préfixe @/

🧩 Composants shadcn/ui inclus

Button

Card

Input

Label

Badge

Dialog

Et bien plus encore…

🛠️ Démarrage rapide

Installer les dépendances

npm install

Démarrer le serveur de développement

npm run dev

Créer une build de production

npm run build

Prévisualiser la build de production

npm run preview
📁 Structure du projet
src/
├── components/
│   └── ui/              # Composants shadcn/ui
├── lib/
│   └── utils.ts         # Fonctions utilitaires
├── App.tsx              # Composant principal de l’application
├── index.css            # Styles globaux avec Tailwind
└── main.tsx             # Point d’entrée de l’application
🎨 Personnalisation
Ajouter de nouveaux composants shadcn/ui

Le template est pré-configuré avec shadcn/ui.
Pour ajouter de nouveaux composants : crée-les dans le dossier src/components/ui/.

Configuration Tailwind

La configuration Tailwind utilise les variables de couleurs shadcn/ui.
Vous pouvez personnaliser :

tailwind.config.js – configuration Tailwind

src/index.css – propriétés CSS pour les thèmes

Configuration TypeScript

Le path mapping permet des imports propres :

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
🌗 Mode sombre

Le template inclut le support du Dark Mode grâce aux classes Tailwind dark: et aux propriétés CSS personnalisées.

📚 Documentation et ressources

Documentation Vite

Documentation React

Tailwind CSS

shadcn/ui

Radix UI

📝 Licence

© 2026 USCT SARL. Tous droits réservés.

Aucune partie de ce projet ne peut être reproduite, copiée ou utilisée sans autorisation écrite préalable de USCT SARL.