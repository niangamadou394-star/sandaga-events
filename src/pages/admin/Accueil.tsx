import { useEffect, useState } from 'react'
import { Users, ClipboardList, TrendingUp, Target } from 'lucide-react'
import { supabase, type Prestataire, type Demande, type Prestation } from '../../lib/supabase'
import { config } from '../../config'

export default function Accueil() {
  const [prestataireCount, setPrestataireCount] = useState(0)
  const [demandeCount, setDemandeCount] = useState(0)
  const [commissionMois, setCommissionMois] = useState(0)
  const [objectif, setObjectif] = useState(config.objectifMensuelDefaut)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function charger() {
      const maintenant = new Date()
      const debutMois = new Date(maintenant.getFullYear(), maintenant.getMonth(), 1).toISOString()
      const finMois = new Date(maintenant.getFullYear(), maintenant.getMonth() + 1, 0).toISOString()

      const [
        { count: nbPrestataires },
        { count: nbDemandes },
        { data: prestations },
        { data: params },
      ] = await Promise.all([
        supabase
          .from('prestataires')
          .select('*', { count: 'exact', head: true })
          .eq('statut', 'verifie'),
        supabase
          .from('demandes')
          .select('*', { count: 'exact', head: true })
          .in('statut', ['nouveau', 'en_cours', 'propose']),
        supabase
          .from('prestations')
          .select('commission_due')
          .eq('commission_payee', true)
          .gte('created_at', debutMois)
          .lte('created_at', finMois),
        supabase.from('parametres').select('valeur').eq('cle', 'objectif_mensuel').single(),
      ])

      setPrestataireCount(nbPrestataires ?? 0)
      setDemandeCount(nbDemandes ?? 0)

      const total = (prestations as Pick<Prestation, 'commission_due'>[] | null)?.reduce(
        (sum, p) => sum + (p.commission_due ?? 0),
        0,
      ) ?? 0
      setCommissionMois(total)

      if (params?.valeur) {
        setObjectif(parseFloat(params.valeur))
      }

      setLoading(false)
    }

    charger()
  }, [])

  const progression = Math.min(100, (commissionMois / objectif) * 100)

  if (loading) {
    return <p style={{ color: 'rgba(245,239,230,0.40)' }}>Chargement...</p>
  }

  return (
    <div>
      <h1
        className="text-2xl font-medium mb-8"
        style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
      >
        Tableau de bord
      </h1>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <KpiCard
          Icon={Users}
          valeur={prestataireCount}
          label="Prestataires actifs"
          couleur="#D4AF6A"
        />
        <KpiCard
          Icon={ClipboardList}
          valeur={demandeCount}
          label="Demandes en cours"
          couleur="#D4AF6A"
        />
        <KpiCard
          Icon={TrendingUp}
          valeur={`${commissionMois.toFixed(0)} €`}
          label="Commission ce mois"
          couleur="#D4AF6A"
        />
        <KpiCard
          Icon={Target}
          valeur={`${objectif} €`}
          label="Objectif mensuel"
          couleur="#D4AF6A"
        />
      </div>

      {/* Barre de progression */}
      <div
        className="rounded-lg p-6"
        style={{ background: '#291A3D', border: '1px solid rgba(212,175,106,0.15)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium" style={{ color: '#F5EFE6' }}>
            Progression vers l'objectif
          </p>
          <p className="text-sm" style={{ color: '#D4AF6A' }}>
            {commissionMois.toFixed(0)} / {objectif} €
          </p>
        </div>
        <div
          className="h-3 rounded-full overflow-hidden"
          style={{ background: 'rgba(212,175,106,0.15)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${progression}%`,
              background: progression >= 100 ? '#B6404F' : '#D4AF6A',
            }}
          />
        </div>
        <p className="text-xs mt-2" style={{ color: 'rgba(245,239,230,0.40)' }}>
          {progression.toFixed(0)}% de l'objectif atteint ce mois
        </p>
      </div>
    </div>
  )
}

function KpiCard({
  Icon,
  valeur,
  label,
  couleur,
}: {
  Icon: React.ElementType
  valeur: string | number
  label: string
  couleur: string
}) {
  return (
    <div
      className="rounded-lg p-5"
      style={{ background: '#291A3D', border: '1px solid rgba(212,175,106,0.15)' }}
    >
      <Icon size={20} style={{ color: couleur }} strokeWidth={1.8} className="mb-3" />
      <p
        className="text-2xl font-medium mb-1"
        style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
      >
        {valeur}
      </p>
      <p className="text-xs" style={{ color: 'rgba(245,239,230,0.50)' }}>
        {label}
      </p>
    </div>
  )
}
