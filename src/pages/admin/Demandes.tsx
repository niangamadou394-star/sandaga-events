import { useEffect, useState } from 'react'
import { Plus, MessageCircle, Pencil } from 'lucide-react'
import {
  supabase,
  type Demande,
  type StatutDemande,
  type TypeCeremonie,
  type Prestataire,
  type Categorie,
} from '../../lib/supabase'
import { whatsAppContact } from '../../config'

const STATUTS: { valeur: StatutDemande; label: string; bg: string; color: string }[] = [
  { valeur: 'nouveau', label: 'Nouveau', bg: 'rgba(212,175,106,0.15)', color: '#D4AF6A' },
  { valeur: 'en_cours', label: 'En cours', bg: 'rgba(99,179,237,0.15)', color: '#63b3ed' },
  { valeur: 'propose', label: 'Proposé', bg: 'rgba(154,117,224,0.15)', color: '#9a75e0' },
  { valeur: 'confirme', label: 'Confirmé', bg: 'rgba(34,197,94,0.15)', color: '#4ade80' },
  { valeur: 'termine', label: 'Terminé', bg: 'rgba(245,239,230,0.08)', color: 'rgba(245,239,230,0.40)' },
  { valeur: 'perdu', label: 'Perdu', bg: 'rgba(182,64,79,0.15)', color: '#B6404F' },
]

const TYPES: { valeur: TypeCeremonie; label: string }[] = [
  { valeur: 'mariage', label: 'Mariage' },
  { valeur: 'bapteme', label: 'Baptême' },
  { valeur: 'anniversaire', label: 'Anniversaire' },
  { valeur: 'autre', label: 'Autre' },
]

const CATEGORIES_SERVICES: { valeur: Categorie; label: string }[] = [
  { valeur: 'traiteur', label: 'Traiteur' },
  { valeur: 'photo_video', label: 'Photo & Vidéo' },
  { valeur: 'decoration', label: 'Décoration' },
  { valeur: 'maquillage_coiffure', label: 'Maquillage & Coiffure' },
  { valeur: 'autre', label: 'Autre' },
]

export default function Demandes() {
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [loading, setLoading] = useState(true)
  const [filtreStatut, setFiltreStatut] = useState<StatutDemande | ''>('')
  const [formOuvert, setFormOuvert] = useState(false)
  const [enEdition, setEnEdition] = useState<Demande | null>(null)
  const [demandeSelectionnee, setDemandeSelectionnee] = useState<Demande | null>(null)
  const [prestatairesMatch, setPrestatairesMatch] = useState<Prestataire[]>([])

  async function charger() {
    let query = supabase.from('demandes').select('*').order('created_at', { ascending: false })
    if (filtreStatut) query = query.eq('statut', filtreStatut)
    const { data } = await query
    setDemandes(data ?? [])
    setLoading(false)
  }

  useEffect(() => { charger() }, [filtreStatut])

  async function ouvrirDetail(d: Demande) {
    setDemandeSelectionnee(d)
    if (d.services_demandes && d.services_demandes.length > 0) {
      const { data } = await supabase
        .from('prestataires')
        .select('*')
        .in('categorie', d.services_demandes)
        .eq('statut', 'verifie')
        .order('nom')
      setPrestatairesMatch(data ?? [])
    } else {
      setPrestatairesMatch([])
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1
          className="text-2xl font-medium"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Demandes
        </h1>
        <button
          onClick={() => { setEnEdition(null); setFormOuvert(true) }}
          className="flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold"
          style={{ background: '#D4AF6A', color: '#1E1230', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          <Plus size={16} />
          Nouvelle demande
        </button>
      </div>

      {/* Filtres statut */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setFiltreStatut('')}
          className="px-3 py-1.5 rounded text-xs font-medium"
          style={{
            background: filtreStatut === '' ? 'rgba(212,175,106,0.2)' : '#291A3D',
            color: filtreStatut === '' ? '#D4AF6A' : 'rgba(245,239,230,0.60)',
            border: '1px solid rgba(212,175,106,0.2)',
          }}
        >
          Tout
        </button>
        {STATUTS.map(s => (
          <button
            key={s.valeur}
            onClick={() => setFiltreStatut(s.valeur)}
            className="px-3 py-1.5 rounded text-xs font-medium"
            style={{
              background: filtreStatut === s.valeur ? s.bg : '#291A3D',
              color: filtreStatut === s.valeur ? s.color : 'rgba(245,239,230,0.60)',
              border: `1px solid ${s.bg}`,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: 'rgba(245,239,230,0.40)' }}>Chargement...</p>
      ) : demandes.length === 0 ? (
        <p style={{ color: 'rgba(245,239,230,0.40)' }}>Aucune demande.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {demandes.map(d => {
            const s = STATUTS.find(x => x.valeur === d.statut)!
            return (
              <div
                key={d.id}
                className="rounded-lg p-4 sm:p-5 cursor-pointer"
                style={{
                  background: '#291A3D',
                  border: `1px solid ${
                    demandeSelectionnee?.id === d.id
                      ? 'rgba(212,175,106,0.4)'
                      : 'rgba(212,175,106,0.12)'
                  }`,
                }}
                onClick={() => ouvrirDetail(d)}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="font-medium" style={{ color: '#F5EFE6' }}>{d.client_nom}</p>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {s.label}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: 'rgba(245,239,230,0.50)' }}>
                      {TYPES.find(t => t.valeur === d.type_ceremonie)?.label ?? 'Cérémonie'}
                      {d.date_evenement ? ` · ${new Date(d.date_evenement).toLocaleDateString('fr-FR')}` : ''}
                      {d.nb_invites ? ` · ${d.nb_invites} invités` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {d.client_contact && (
                      <a
                        href={whatsAppContact(d.client_contact)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="p-2 rounded"
                        title="Contacter le client"
                        style={{ color: '#4ade80' }}
                      >
                        <MessageCircle size={18} strokeWidth={1.8} />
                      </a>
                    )}
                    <button
                      onClick={e => { e.stopPropagation(); setEnEdition(d); setFormOuvert(true) }}
                      className="p-2 rounded"
                      title="Modifier"
                      style={{ color: '#D4AF6A' }}
                    >
                      <Pencil size={18} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>

                {/* Prestataires suggérés (matching) */}
                {demandeSelectionnee?.id === d.id && prestatairesMatch.length > 0 && (
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,175,106,0.12)' }}>
                    <p className="text-xs mb-3" style={{ color: '#D4AF6A' }}>
                      Prestataires vérifiés pour cette demande
                    </p>
                    <div className="flex flex-col gap-2">
                      {prestatairesMatch.map(p => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between gap-2 px-3 py-2 rounded"
                          style={{ background: 'rgba(212,175,106,0.05)', border: '1px solid rgba(212,175,106,0.1)' }}
                        >
                          <div>
                            <p className="text-sm" style={{ color: '#F5EFE6' }}>{p.nom}</p>
                            <p className="text-xs" style={{ color: 'rgba(245,239,230,0.45)' }}>
                              {CATEGORIES_SERVICES.find(c => c.valeur === p.categorie)?.label}
                              {p.zone ? ` · ${p.zone}` : ''}
                            </p>
                          </div>
                          {p.whatsapp && (
                            <a
                              href={whatsAppContact(p.whatsapp)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded"
                              title="Contacter"
                              style={{ color: '#4ade80' }}
                            >
                              <MessageCircle size={16} strokeWidth={1.8} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {formOuvert && (
        <FormDemande
          initial={enEdition}
          onClose={() => setFormOuvert(false)}
          onSave={() => { setFormOuvert(false); charger() }}
        />
      )}
    </div>
  )
}

function FormDemande({
  initial,
  onClose,
  onSave,
}: {
  initial: Demande | null
  onClose: () => void
  onSave: () => void
}) {
  const [form, setForm] = useState({
    client_nom: initial?.client_nom ?? '',
    client_contact: initial?.client_contact ?? '',
    type_ceremonie: initial?.type_ceremonie ?? 'mariage' as TypeCeremonie,
    date_evenement: initial?.date_evenement ?? '',
    nb_invites: initial?.nb_invites ?? '',
    services_demandes: initial?.services_demandes ?? [] as string[],
    budget_estime: initial?.budget_estime ?? '',
    statut: initial?.statut ?? 'nouveau' as StatutDemande,
    notes: initial?.notes ?? '',
  })
  const [saving, setSaving] = useState(false)

  function toggleService(val: string) {
    setForm(f => ({
      ...f,
      services_demandes: f.services_demandes.includes(val)
        ? f.services_demandes.filter(s => s !== val)
        : [...f.services_demandes, val],
    }))
  }

  async function sauvegarder() {
    setSaving(true)
    const payload = {
      ...form,
      nb_invites: form.nb_invites ? parseInt(String(form.nb_invites)) : null,
      budget_estime: form.budget_estime ? parseFloat(String(form.budget_estime)) : null,
      date_evenement: form.date_evenement || null,
    }
    if (initial) {
      await supabase.from('demandes').update(payload).eq('id', initial.id)
    } else {
      await supabase.from('demandes').insert(payload)
    }
    setSaving(false)
    onSave()
  }

  return (
    <Modal titre={initial ? 'Modifier la demande' : 'Nouvelle demande'} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <Field label="Nom du client *">
          <input
            value={form.client_nom}
            onChange={e => setForm(f => ({ ...f, client_nom: e.target.value }))}
            required
            style={inputStyle}
          />
        </Field>

        <Field label="Contact (WhatsApp)">
          <input
            value={form.client_contact}
            onChange={e => setForm(f => ({ ...f, client_contact: e.target.value }))}
            placeholder="33600000000"
            style={inputStyle}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Type de cérémonie">
            <select
              value={form.type_ceremonie}
              onChange={e => setForm(f => ({ ...f, type_ceremonie: e.target.value as TypeCeremonie }))}
              style={inputStyle}
            >
              {TYPES.map(t => (
                <option key={t.valeur} value={t.valeur}>{t.label}</option>
              ))}
            </select>
          </Field>
          <Field label="Statut">
            <select
              value={form.statut}
              onChange={e => setForm(f => ({ ...f, statut: e.target.value as StatutDemande }))}
              style={inputStyle}
            >
              {STATUTS.map(s => (
                <option key={s.valeur} value={s.valeur}>{s.label}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Date de l'événement">
            <input
              type="date"
              value={form.date_evenement}
              onChange={e => setForm(f => ({ ...f, date_evenement: e.target.value }))}
              style={inputStyle}
            />
          </Field>
          <Field label="Nombre d'invités">
            <input
              type="number"
              value={form.nb_invites}
              onChange={e => setForm(f => ({ ...f, nb_invites: e.target.value }))}
              min={0}
              style={inputStyle}
            />
          </Field>
        </div>

        <Field label="Services souhaités">
          <div className="flex flex-wrap gap-2 mt-1">
            {CATEGORIES_SERVICES.map(c => {
              const actif = form.services_demandes.includes(c.valeur)
              return (
                <button
                  key={c.valeur}
                  type="button"
                  onClick={() => toggleService(c.valeur)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: actif ? 'rgba(212,175,106,0.2)' : '#1E1230',
                    color: actif ? '#D4AF6A' : 'rgba(245,239,230,0.50)',
                    border: `1px solid ${actif ? '#D4AF6A' : 'rgba(212,175,106,0.2)'}`,
                  }}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </Field>

        <Field label="Budget estimé (€)">
          <input
            type="number"
            value={form.budget_estime}
            onChange={e => setForm(f => ({ ...f, budget_estime: e.target.value }))}
            min={0}
            style={inputStyle}
          />
        </Field>

        <Field label="Notes internes">
          <textarea
            value={form.notes}
            onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
            rows={3}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </Field>

        <div className="flex gap-3 justify-end mt-2">
          <button onClick={onClose} style={btnSecondaire}>Annuler</button>
          <button onClick={sauvegarder} disabled={saving || !form.client_nom} style={btnPrimaire}>
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </Modal>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function Modal({
  titre,
  onClose,
  children,
}: {
  titre: string
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(30,18,48,0.85)' }}
    >
      <div
        className="w-full max-w-lg rounded-xl p-6 overflow-y-auto max-h-[90vh]"
        style={{ background: '#291A3D', border: '1px solid rgba(212,175,106,0.2)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <p
            className="text-lg font-medium"
            style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
          >
            {titre}
          </p>
          <button onClick={onClose} style={{ color: 'rgba(245,239,230,0.40)' }}>✕</button>
        </div>
        {children}
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
