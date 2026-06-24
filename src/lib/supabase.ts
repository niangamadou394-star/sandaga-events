import { createClient } from '@supabase/supabase-js'

// Utiliser des valeurs placeholder si non configuré — le dashboard affichera une erreur de connexion
// mais l'app ne plantera pas au démarrage
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types correspondant au schéma Postgres
export type Categorie = 'traiteur' | 'photo_video' | 'decoration' | 'maquillage_coiffure' | 'autre'
export type StatutPrestataire = 'en_attente' | 'verifie' | 'archive'
export type TypeCeremonie = 'mariage' | 'bapteme' | 'anniversaire' | 'autre'
export type StatutDemande = 'nouveau' | 'en_cours' | 'propose' | 'confirme' | 'termine' | 'perdu'

export interface Prestataire {
  id: string
  nom: string
  categorie: Categorie
  whatsapp: string | null
  instagram: string | null
  zone: string | null
  statut: StatutPrestataire
  taux_commission: number
  portfolio_url: string | null
  notes: string | null
  created_at: string
}

export interface Demande {
  id: string
  client_nom: string
  client_contact: string | null
  type_ceremonie: TypeCeremonie | null
  date_evenement: string | null
  nb_invites: number | null
  services_demandes: string[] | null
  budget_estime: number | null
  statut: StatutDemande
  notes: string | null
  created_at: string
}

export interface Prestation {
  id: string
  demande_id: string | null
  prestataire_id: string | null
  montant: number
  taux_commission: number
  commission_due: number | null
  commission_payee: boolean
  date_prestation: string | null
  created_at: string
}
