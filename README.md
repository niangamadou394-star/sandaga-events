# Sandaga Events

Landing publique + dashboard concierge pour la mise en relation entre familles de la diaspora et prestataires vérifiés.

## Installation locale

```bash
git clone <url-du-repo>
cd sandaga-events
npm install
cp .env.example .env
# Remplir les variables dans .env
npm run dev
```

L'app tourne sur http://localhost:5173 par défaut.

## Variables d'environnement

Créer un fichier `.env` à la racine (jamais committer) :

```
VITE_WHATSAPP_NUMERO=33600000000       # sans + ni espaces
VITE_INSTAGRAM=sandaga.events
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

## Base de données Supabase

1. Créer un projet sur https://app.supabase.com
2. Aller dans l'éditeur SQL
3. Coller et exécuter le contenu de `supabase-schema.sql`
4. Créer le compte fondateur dans Authentication > Users

## Déploiement Vercel

1. Pousser le dépôt sur GitHub
2. Connecter le repo sur https://vercel.com
3. Renseigner les 4 variables d'environnement dans Vercel > Settings > Environment Variables
4. Chaque push sur `main` déclenche un déploiement automatique

## Structure

```
src/
  config/       # numéro WhatsApp, messages, config centrale
  lib/          # Supabase client, types, auth context
  pages/
    landing/    # Page publique (/)
    login/      # Page de connexion (/login)
    admin/      # Dashboard fondateur (/admin/*)
  components/
    landing/    # Hero, Promesse, Services, etc.
    admin/      # Layout sidebar, ProtectedRoute
```

## Routes

- `/` — Landing publique
- `/login` — Connexion fondateur
- `/admin` — Tableau de bord (KPIs)
- `/admin/prestataires` — Gestion des prestataires
- `/admin/demandes` — Pipeline des demandes clients
- `/admin/commissions` — Suivi des commissions
