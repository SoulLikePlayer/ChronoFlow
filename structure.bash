chronoflow/
│── public/                # Fichiers statiques (index.html, favicons...)
│── src/
│   ├── assets/            # Images, icônes, styles globaux
│   ├── components/        # Composants réutilisables (boutons, modals...)
│   ├── features/          # Modules indépendants (Kanban, Pomodoro, Suivi des tâches...)
│   │   ├── kanban/        # Tableau Kanban
│   │   ├── pomodoro/      # Minuteur Pomodoro
│   │   ├── tasks/         # Gestion des tâches et affectations
│   │   ├── time-tracking/ # Suivi du temps par utilisateur
│   ├── hooks/             # Hooks personnalisés (ex: useTimer, useTasks...)
│   ├── context/           # Context API pour la gestion d'état globale
│   ├── services/          # API, gestion du stockage local, WebSockets...
│   ├── pages/             # Pages principales (Dashboard, Login, Paramètres...)
│   ├── App.js             # Point d'entrée de l'application
│   ├── index.js           # Root React + Provider (ex: Redux, Context)
│── package.json           # Dépendances et scripts
│── .env                   # Variables d'environnement
│── README.md              # Documentation du projet
