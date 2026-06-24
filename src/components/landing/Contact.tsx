import QRCode from 'react-qr-code'
import { config, whatsAppClient } from '../../config'

const reseaux = [
  {
    nom: 'Instagram',
    handle: `@${config.instagram}`,
    url: `https://instagram.com/${config.instagram}`,
    couleur: '#D4AF6A',
  },
  {
    nom: 'TikTok',
    handle: `@${config.tiktok}`,
    url: `https://tiktok.com/@${config.tiktok}`,
    couleur: '#D4AF6A',
  },
  {
    nom: 'LinkedIn',
    handle: 'Sandaga Events',
    url: `https://linkedin.com/company/${config.linkedin}`,
    couleur: '#D4AF6A',
  },
  {
    nom: 'WhatsApp',
    handle: 'Écrire directement',
    url: whatsAppClient(),
    couleur: '#4ade80',
  },
]

export default function Contact() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{
        background: '#150C26',
        borderTop: '1px solid rgba(212,175,106,0.10)',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 lg:items-start">

        {/* Colonne gauche : texte + réseaux */}
        <div className="flex-1">
          <p
            className="mb-3 text-xs tracking-[.22em] uppercase"
            style={{ color: 'rgba(212,175,106,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            Nous suivre
          </p>
          <h2
            className="mb-10 font-medium leading-tight"
            style={{
              fontFamily: 'Fraunces, serif',
              color: '#F5EFE6',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            }}
          >
            Sandaga Events,
            <br />
            <em style={{ color: 'rgba(245,239,230,0.40)' }}>partout où vous êtes</em>
          </h2>

          {/* Liste des réseaux */}
          <div className="flex flex-col gap-0">
            {reseaux.map((r, i) => (
              <a
                key={r.nom}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group transition-colors"
                style={{
                  borderTop: i === 0 ? '1px solid rgba(245,239,230,0.08)' : '1px solid rgba(245,239,230,0.06)',
                  textDecoration: 'none',
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: 'rgba(245,239,230,0.50)', fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  {r.nom}
                </span>
                <span
                  className="text-sm transition-colors"
                  style={{ color: r.couleur, fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.75 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
                >
                  {r.handle} →
                </span>
              </a>
            ))}
            <div style={{ borderTop: '1px solid rgba(245,239,230,0.06)' }} />
          </div>
        </div>

        {/* Colonne droite : QR code */}
        <div className="lg:w-64 xl:w-72">
          <p
            className="mb-6 text-xs tracking-[.22em] uppercase"
            style={{ color: 'rgba(212,175,106,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            Scanner pour partager
          </p>

          {/* Cadre QR */}
          <div
            className="inline-flex flex-col items-center gap-4 p-5 rounded-sm"
            style={{
              background: '#F5EFE6',
              border: '1px solid rgba(212,175,106,0.20)',
            }}
          >
            <QRCode
              value={config.siteUrl}
              size={160}
              bgColor="#F5EFE6"
              fgColor="#1E1230"
              level="M"
            />
            <p
              className="text-xs text-center"
              style={{ color: '#1E1230', fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.5 }}
            >
              sandaga-events.vercel.app
            </p>
          </div>

          <p
            className="mt-4 text-xs leading-relaxed"
            style={{ color: 'rgba(245,239,230,0.30)', fontFamily: 'Hanken Grotesk, sans-serif', maxWidth: '18em' }}
          >
            Partagez Sandaga Events autour de vous. Chaque famille qui prépare une cérémonie peut en bénéficier.
          </p>
        </div>
      </div>
    </section>
  )
}
