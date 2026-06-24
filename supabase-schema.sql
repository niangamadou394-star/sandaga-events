-- Sandaga Events — Schéma Supabase
-- Coller dans l'éditeur SQL de ton projet Supabase (https://app.supabase.com)

-- Prestataires
create table prestataires (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  categorie text not null check (categorie in ('traiteur','photo_video','decoration','maquillage_coiffure','autre')),
  whatsapp text,
  instagram text,
  zone text,
  statut text not null default 'en_attente' check (statut in ('en_attente','verifie','archive')),
  taux_commission numeric default 10,
  portfolio_url text,
  notes text,
  created_at timestamptz default now()
);

-- Demandes clients
create table demandes (
  id uuid primary key default gen_random_uuid(),
  client_nom text not null,
  client_contact text,
  type_ceremonie text check (type_ceremonie in ('mariage','bapteme','anniversaire','autre')),
  date_evenement date,
  nb_invites int,
  services_demandes text[],
  budget_estime numeric,
  statut text not null default 'nouveau' check (statut in ('nouveau','en_cours','propose','confirme','termine','perdu')),
  notes text,
  created_at timestamptz default now()
);

-- Prestations confirmées et commissions
create table prestations (
  id uuid primary key default gen_random_uuid(),
  demande_id uuid references demandes(id) on delete cascade,
  prestataire_id uuid references prestataires(id) on delete set null,
  montant numeric not null,
  taux_commission numeric default 10,
  commission_due numeric,
  commission_payee boolean default false,
  date_prestation date,
  created_at timestamptz default now()
);

-- Paramètres (objectif mensuel, etc.)
create table parametres (
  cle text primary key,
  valeur text
);

-- Valeur par défaut de l'objectif mensuel
insert into parametres values ('objectif_mensuel', '500');

-- Row Level Security : seul le compte connecté (le fondateur) peut lire/écrire
alter table prestataires enable row level security;
alter table demandes enable row level security;
alter table prestations enable row level security;
alter table parametres enable row level security;

create policy "Fondateur seulement" on prestataires
  for all using (auth.role() = 'authenticated');

create policy "Fondateur seulement" on demandes
  for all using (auth.role() = 'authenticated');

create policy "Fondateur seulement" on prestations
  for all using (auth.role() = 'authenticated');

create policy "Fondateur seulement" on parametres
  for all using (auth.role() = 'authenticated');
