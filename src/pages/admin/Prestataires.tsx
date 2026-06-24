import { useEffect, useState } from 'react'
import { Plus, MessageCircle, Pencil, Archive } from 'lucide-react'
import { supabase, type Prestataire, type Categorie, type StatutPrestataire } from '../../lib/supabase'
import { whatsAppContact } from '../../config'

const CATEGORIES: { valeur: Categorie | ''; label: string }[] = [
  { valeur: '', label: 'Toutes catégories' },
  { valeur: 'traiteur', label: 'Traiteur' },
  { valeur: 'photo_video', label: 'Photo & Vidéo' },
  { valeur: 'decoration', label: 'Décoration' },
  { valeur: 'maquillage_coiffure', label: 'Maquillage & Coiffure' },
  { valeur: 'autre', label: 'Autre' },
]

const STATUTS: { valeur: StatutPrestataire | ''; label: string }[] = [
  { valeur: '', label: 'Tous statuts' },
  { valeur: 'en_attente', label: 'En attente' },
  { valeur: 'verifie', label: 'Vérifié' },
  { valeur: 'archive', label: 'Archivé' },
]

const statutStyle: Record<StatutPrestataire, { bg: string; color: string; label: string }> = {
  en_attente: { bg: 'rgba(212,175,106,0.15)', color: '#D4AF6A', label: 'En attente' },
  verifie: { bg: 'rgba(34,197,94,0.15)', color: '#4ade80', label: 'Vérifié' },
  archive: { bg: 'rgba(245,239,230,0.08)', color: 'rgba(245,239,230,0.40)', label: 'Archivé' },
}

export default function Prestataires() {
  const [liste, setListe] = useState<Prestataire[]>([])
  const [loading, setLoading] = useState(true)
  const [filtreCategorie, setFiltreCategorie] = useState<Categorie | ''>('')
  const [filtreStatut, setFiltreStatut] = useState<StatutPrestataire | ''>('')
  const [formOuvert, setFormOuvert] = useState(false)
  const [enEdition, setEnEdition] = useState<Prestataire | null>(null)

  async function charger() {
    let query = supabase.from('prestataires').select('*').order('created_at', { ascending: false })
    if (filtreCategorie) query = query.eq('categorie', filtreCategorie)
    if (filtreStatut) query = query.eq('statut', filtreStatut)
    const { data } = await query
    setListe(data ?? [])
    setLoading(false)
  }

  useEffect(() => { charger() }, [filtreCategorie, filtreStatut])

  function ouvrirCreation() {
    setEnEdition(null)
    setFormOuvert(true)
  }

  function ouvrirEdition(p: Prestataire) {
    setEnEdition(p)
    setFormOuvert(true)
  }

  async function archiver(id: string) {
    await supabase.from('prestataires').update({ statut: 'archive' }).eq('id', id)
    charger()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1
          className="text-2xl font-medium"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Prestataires
        </h1>
        <button
          onClick={ouvrirCreation}
          className="flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold"
          style={{ background: '#D4AF6A', color: '#1E1230', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          <Plus size={16} />
          Ajouter
        </button>
      </div>

      {/* Filtres */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <Select
          options={CATEGORIES}
          value={filtreCategorie}
          onChange={v => setFiltreCategorie(v as Categorie | '')}
        />
        <Select
          options={STATUTS}
          value={filtreStatut}
          onChange={v => setFiltreStatut(v as StatutPrestataire | '')}
        />
      </div>

      {loading ? (
        <p style={{ color: 'rgba(245,239,230,0.40)' }}>Chargement...</p>
      ) : liste.length === 0 ? (
        <p style={{ color: 'rgba(245,239,230,0.40)' }}>Aucun prestataire.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {liste.map(p => {
            const s = statutStyle[p.statut]
            return (
              <div
                key={p.id}
                className="rounded-lg p-4 sm:p-5 flex items-center gap-4 flex-wrap"
                style={{ background: '#291A3D', border: '1px solid rgba(212,175,106,0.12)' }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-medium" style={{ color: '#F5EFE6' }}>{p.nom}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: s.bg, color: s.color }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: 'rgba(245,239,230,0.50)' }}>
                    {CATEGORIES.find(c => c.valeur === p.categorie)?.label ?? p.categorie}
                    {p.zone ? ` · ${p.zone}` : ''}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {p.whatsapp && (
                    <a
                      href={whatsAppContact(p.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded"
                      title="Ouvrir WhatsApp"
                      style={{ color: '#4ade80' }}
                    >
                      <MessageCircle size={18} strokeWidth={1.8} />
                    </a>
                  )}
                  <button
                    onClick={() => ouvrirEdition(p)}
                    className="p-2 rounded"
                    title="Modifier"
                    style={{ color: '#D4AF6A' }}
                  >
                    <Pencil size={18} strokeWidth={1.8} />
                  </button>
                  {p.statut !== 'archive' && (
                    <button
                      onClick={() => archiver(p.id)}
                      className="p-2 rounded"
                      title="Archiver"
                      style={{ color: 'rgba(245,239,230,0.40)' }}
                    >
                      <Archive size={18} strokeWidth={1.8} />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {formOuvert && (
        <FormPrestataire
          initial={enEdition}
          onClose={() => setFormOuvert(false)}
          onSave={() => { setFormOuvert(false); charger() }}
        />
      )}
    </div>
  )
}

// Formulaire ajout / édition
function FormPrestataire({
  initial,
  onClose,
  onSave,
}: {
  initial: Prestataire | null
  onClose: () => void
  onSave: () => void
}) {
  const [form, setForm] = useState({
    nom: initial?.nom ?? '',
    categorie: initial?.categorie ?? 'traiteur' as Categorie,
    whatsapp: initial?.whatsapp ?? '',
    instagram: initial?.instagram ?? '',
    zone: initial?.zone ?? '',
    statut: initial?.statut ?? 'en_attente' as StatutPrestataire,
    taux_commission: initial?.taux_commission ?? 10,
    portfolio_url: initial?.portfolio_url ?? '',
    notes: initial?.notes ?? '',
  })
  const [saving, setSaving] = useState(false)

  async function sauvegarder() {
    setSaving(true)
    if (initial) {
      await supabase.from('prestataires').update(form).eq('id', initial.id)
    } else {
      await supabase.from('prestataires').insert(form)
    }
    setSaving(false)
    onSave()
  }

  return (
    <Modal titre={initial ? 'Modifier le prestataire' : 'Nouveau prestataire'} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <Field label="Nom *">
          <input
            value={form.nom}
            onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
            required
            style={inputStyle}
          />
        </Field>

        <Field label="Catégorie">
          <select
            value={form.categorie}
            onChange={e => setForm(f => ({ ...f, categorie: e.target.value as Categorie }))}
            style={inputStyle}
          >
            {CATEGORIES.filter(c => c.valeur).map(c => (
              <option key={c.valeur} value={c.valeur}>{c.label}</option>
            ))}
          </select>
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="WhatsApp">
            <input
              value={form.whatsapp}
              onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
              placeholder="33600000000"
              style={inputStyle}
            />
          </Field>
          <Field label="Instagram">
            <input
              value={form.instagram}
              onChange={e => setForm(f => ({ ...f, instagram: e.target.value }))}
              placeholder="@pseudo"
              style={inputStyle}
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Zone">
            <input
              value={form.zone}
              onChange={e => setForm(f => ({ ...f, zone: e.target.value }))}
              placeholder="Paris, Dakar..."
              style={inputStyle}
            />
          </Field>
          <Field label="Statut">
            <select
              value={form.statut}
              onChange={e => setForm(f => ({ ...f, statut: e.target.value as StatutPrestataire }))}
              style={inputStyle}
            >
              {STATUTS.filter(s => s.valeur).map(s => (
                <option key={s.valeur} value={s.valeur}>{s.label}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Commission (%)">
          <input
            type="number"
            value={form.taux_commission}
            onChange={e => setForm(f => ({ ...f, taux_commission: parseFloat(e.target.value) }))}
            min={0}
            max={100}
            style={inputStyle}
          />
        </Field>

        <Field label="Portfolio (URL)">
          <input
            value={form.portfolio_url}
            onChange={e => setForm(f => ({ ...f, portfolio_url: e.target.value }))}
            type="url"
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
          <button onClick={sauvegarder} disabled={saving || !form.nom} style={btnPrimaire}>
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </Modal>
  )
}

// Composants utilitaires
function Select({
  options,
  value,
  onChange,
}: {
  options: { valeur: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="px-3 py-2 rounded text-sm"
      style={{
        background: '#291A3D',
        border: '1px solid rgba(212,175,106,0.25)',
        color: '#F5EFE6',
        fontFamily: 'Hanken Grotesk, sans-serif',
      }}
    >
      {options.map(o => (
        <option key={o.valeur} value={o.valeur}>{o.label}</option>
      ))}
    </select>
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
