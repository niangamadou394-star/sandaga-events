import { useEffect, useState } from 'react'
import { Plus, CheckCircle, Clock } from 'lucide-react'
import { supabase, type Prestation, type Demande, type Prestataire } from '../../lib/supabase'

interface PrestationEtendue extends Prestation {
  demandes?: Pick<Demande, 'client_nom'>
  prestataires?: Pick<Prestataire, 'nom'>
}

export default function Commissions() {
  const [prestations, setPrestations] = useState<PrestationEtendue[]>([])
  const [loading, setLoading] = useState(true)
  const [formOuvert, setFormOuvert] = useState(false)
  const [totalMois, setTotalMois] = useState(0)

  async function charger() {
    const maintenant = new Date()
    const debutMois = new Date(maintenant.getFullYear(), maintenant.getMonth(), 1).toISOString()

    const { data } = await supabase
      .from('prestations')
      .select('*, demandes(client_nom), prestataires(nom)')
      .order('created_at', { ascending: false })

    const liste = (data ?? []) as PrestationEtendue[]
    setPrestations(liste)

    const total = liste
      .filter(p => p.commission_payee && p.created_at >= debutMois)
      .reduce((sum, p) => sum + (p.commission_due ?? 0), 0)
    setTotalMois(total)
    setLoading(false)
  }

  useEffect(() => { charger() }, [])

  async function togglePaiement(id: string, actuel: boolean) {
    await supabase.from('prestations').update({ commission_payee: !actuel }).eq('id', id)
    charger()
  }

  const totalEnAttente = prestations
    .filter(p => !p.commission_payee)
    .reduce((sum, p) => sum + (p.commission_due ?? 0), 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1
          className="text-2xl font-medium"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Commissions
        </h1>
        <button
          onClick={() => setFormOuvert(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold"
          style={{ background: '#D4AF6A', color: '#1E1230', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          <Plus size={16} />
          Enregistrer
        </button>
      </div>

      {/* Totaux du mois */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div
          className="rounded-lg p-5"
          style={{ background: '#291A3D', border: '1px solid rgba(212,175,106,0.15)' }}
        >
          <p className="text-xs mb-2" style={{ color: 'rgba(245,239,230,0.50)' }}>Encaissé ce mois</p>
          <p
            className="text-2xl font-medium"
            style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A' }}
          >
            {totalMois.toFixed(0)} €
          </p>
        </div>
        <div
          className="rounded-lg p-5"
          style={{ background: '#291A3D', border: '1px solid rgba(182,64,79,0.2)' }}
        >
          <p className="text-xs mb-2" style={{ color: 'rgba(245,239,230,0.50)' }}>En attente</p>
          <p
            className="text-2xl font-medium"
            style={{ fontFamily: 'Fraunces, serif', color: '#B6404F' }}
          >
            {totalEnAttente.toFixed(0)} €
          </p>
        </div>
      </div>

      {loading ? (
        <p style={{ color: 'rgba(245,239,230,0.40)' }}>Chargement...</p>
      ) : prestations.length === 0 ? (
        <p style={{ color: 'rgba(245,239,230,0.40)' }}>Aucune prestation enregistrée.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {prestations.map(p => (
            <div
              key={p.id}
              className="rounded-lg p-4 sm:p-5 flex items-center gap-4 flex-wrap"
              style={{
                background: '#291A3D',
                border: `1px solid ${
                  p.commission_payee
                    ? 'rgba(34,197,94,0.15)'
                    : 'rgba(212,175,106,0.12)'
                }`,
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm" style={{ color: '#F5EFE6' }}>
                  {p.prestataires?.nom ?? 'Prestataire inconnu'}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(245,239,230,0.50)' }}>
                  {p.demandes?.client_nom ?? 'Client inconnu'}
                  {p.date_prestation
                    ? ` · ${new Date(p.date_prestation).toLocaleDateString('fr-FR')}`
                    : ''}
                </p>
              </div>

              <div className="text-right shrink-0">
                <p className="text-sm font-medium" style={{ color: '#F5EFE6' }}>
                  {p.montant.toFixed(0)} € → <span style={{ color: '#D4AF6A' }}>
                    {(p.commission_due ?? 0).toFixed(0)} €
                  </span>
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(245,239,230,0.40)' }}>
                  {p.taux_commission}% commission
                </p>
              </div>

              <button
                onClick={() => togglePaiement(p.id, p.commission_payee)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium shrink-0"
                style={{
                  background: p.commission_payee
                    ? 'rgba(34,197,94,0.12)'
                    : 'rgba(212,175,106,0.12)',
                  color: p.commission_payee ? '#4ade80' : '#D4AF6A',
                  border: `1px solid ${p.commission_payee ? 'rgba(34,197,94,0.3)' : 'rgba(212,175,106,0.3)'}`,
                }}
              >
                {p.commission_payee ? (
                  <><CheckCircle size={13} strokeWidth={2} /> Payée</>
                ) : (
                  <><Clock size={13} strokeWidth={2} /> En attente</>
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      {formOuvert && (
        <FormPrestation
          onClose={() => setFormOuvert(false)}
          onSave={() => { setFormOuvert(false); charger() }}
        />
      )}
    </div>
  )
}

function FormPrestation({
  onClose,
  onSave,
}: {
  onClose: () => void
  onSave: () => void
}) {
  const [demandes, setDemandes] = useState<Pick<Demande, 'id' | 'client_nom'>[]>([])
  const [prestataires, setPrestataires] = useState<Pick<Prestataire, 'id' | 'nom' | 'taux_commission'>[]>([])
  const [form, setForm] = useState({
    demande_id: '',
    prestataire_id: '',
    montant: '',
    taux_commission: 10,
    date_prestation: '',
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    Promise.all([
      supabase.from('demandes').select('id, client_nom').eq('statut', 'confirme').order('client_nom'),
      supabase.from('prestataires').select('id, nom, taux_commission').eq('statut', 'verifie').order('nom'),
    ]).then(([{ data: d }, { data: p }]) => {
      setDemandes(d ?? [])
      setPrestataires(p ?? [])
    })
  }, [])

  // Met à jour le taux quand on change de prestataire
  function choisirPrestataire(id: string) {
    const p = prestataires.find(x => x.id === id)
    setForm(f => ({
      ...f,
      prestataire_id: id,
      taux_commission: p?.taux_commission ?? 10,
    }))
  }

  const commissionDue = form.montant
    ? (parseFloat(form.montant) * form.taux_commission) / 100
    : 0

  async function sauvegarder() {
    setSaving(true)
    await supabase.from('prestations').insert({
      demande_id: form.demande_id || null,
      prestataire_id: form.prestataire_id || null,
      montant: parseFloat(form.montant),
      taux_commission: form.taux_commission,
      commission_due: commissionDue,
      date_prestation: form.date_prestation || null,
    })
    setSaving(false)
    onSave()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(30,18,48,0.85)' }}
    >
      <div
        className="w-full max-w-md rounded-xl p-6 overflow-y-auto max-h-[90vh]"
        style={{ background: '#291A3D', border: '1px solid rgba(212,175,106,0.2)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg font-medium" style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}>
            Nouvelle prestation
          </p>
          <button onClick={onClose} style={{ color: 'rgba(245,239,230,0.40)' }}>✕</button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
              Demande client
            </label>
            <select
              value={form.demande_id}
              onChange={e => setForm(f => ({ ...f, demande_id: e.target.value }))}
              style={inputStyle}
            >
              <option value="">Sélectionner une demande</option>
              {demandes.map(d => (
                <option key={d.id} value={d.id}>{d.client_nom}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
              Prestataire
            </label>
            <select
              value={form.prestataire_id}
              onChange={e => choisirPrestataire(e.target.value)}
              style={inputStyle}
            >
              <option value="">Sélectionner un prestataire</option>
              {prestataires.map(p => (
                <option key={p.id} value={p.id}>{p.nom}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
                Montant (€) *
              </label>
              <input
                type="number"
                value={form.montant}
                onChange={e => setForm(f => ({ ...f, montant: e.target.value }))}
                min={0}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
                Taux commission (%)
              </label>
              <input
                type="number"
                value={form.taux_commission}
                onChange={e => setForm(f => ({ ...f, taux_commission: parseFloat(e.target.value) }))}
                min={0}
                max={100}
                style={inputStyle}
              />
            </div>
          </div>

          {commissionDue > 0 && (
            <p className="text-sm" style={{ color: '#D4AF6A' }}>
              Commission due : {commissionDue.toFixed(2)} €
            </p>
          )}

          <div>
            <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
              Date de la prestation
            </label>
            <input
              type="date"
              value={form.date_prestation}
              onChange={e => setForm(f => ({ ...f, date_prestation: e.target.value }))}
              style={inputStyle}
            />
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <button onClick={onClose} style={btnSecondaire}>Annuler</button>
            <button
              onClick={sauvegarder}
              disabled={saving || !form.montant}
              style={btnPrimaire}
            >
              {saving ? 'Sauvegarde...' : 'Enregistrer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  borderRadius: 6,
  background: '#1E1230',
  border: '1px solid rgba(212,175,106,0.25)',
  color: '#F5EFE6',
  fontFamily: 'Hanken Grotesk, sans-serif',
  fontSize: 14,
  outline: 'none',
}

const btnPrimaire: React.CSSProperties = {
  padding: '8px 20px',
  borderRadius: 6,
  background: '#D4AF6A',
  color: '#1E1230',
  fontFamily: 'Hanken Grotesk, sans-serif',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
}

const btnSecondaire: React.CSSProperties = {
  padding: '8px 20px',
  borderRadius: 6,
  background: 'transparent',
  color: 'rgba(245,239,230,0.60)',
  fontFamily: 'Hanken Grotesk, sans-serif',
  fontSize: 14,
  cursor: 'pointer',
  border: '1px solid rgba(245,239,230,0.20)',
}
