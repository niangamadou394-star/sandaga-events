import QRCode from 'react-qr-code'
import { config, whatsAppClient } from '../../config'

const reseaux = [
  {
    nom: 'Instagram',
    handle: `@${config.instagram}`,
    url: `https://instagram.com/${config.instagram}`,
  },
  {
    nom: 'TikTok',
    handle: `@${config.tiktok}`,
    url: `https://tiktok.com/@${config.tiktok}`,
  },
  {
    nom: 'LinkedIn',
    handle: 'Sandaga Events',
    url: `https://linkedin.com/company/${config.linkedin}`,
  },
  {
    nom: 'WhatsApp',
    handle: 'Écrire directement',
    url: whatsAppClient(),
  },
]

export default function Contact() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{
        background: '#09080F',
        borderTop: '1px solid rgba(200,169,110,0.08)',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-start">

        {/* Colonne gauche */}
        <div className="flex-1">
          <p
            className="mb-3 text-xs tracking-[.22em] uppercase"
            style={{ color: 'rgba(200,169,110,0.42)', fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            Nous suivre
          </p>
          <h2
            className="mb-10 font-medium leading-tight"
            style={{
              fontFamily: 'Fraunces, serif',
              color: '#F4EDE4',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            }}
          >
            Sandaga Events,
            <br />
            <em style={{ color: 'rgba(244,237,228,0.35)' }}>partout où vous êtes</em>
          </h2>

          <div className="flex flex-col gap-0">
            {reseaux.map((r, i) => (
              <a
                key={r.nom}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group transition-opacity"
                style={{
                  borderTop: '1px solid rgba(244,237,228,0.07)',
                  textDecoration: 'none',
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: 'rgba(244,237,228,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  {r.nom}
                </span>
                <span
                  className="text-sm transition-colors"
                  style={{ color: '#C8A96E', fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.70 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.70')}
                >
                  {r.handle} →
                </span>
              </a>
            ))}
            <div style={{ borderTop: '1px solid rgba(244,237,228,0.07)' }} />
          </div>
        </div>

        {/* Colonne droite : QR */}
        <div className="lg:w-64 xl:w-72">
          <p
            className="mb-6 text-xs tracking-[.22em] uppercase"
            style={{ color: 'rgba(200,169,110,0.42)', fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            Scanner pour partager
          </p>

          <div
            className="inline-flex flex-col items-center gap-4 p-5"
            style={{
              background: '#F4EDE4',
              borderRadius: 3,
            }}
          >
            <QRCode
              value={config.siteUrl}
              size={160}
              bgColor="#F4EDE4"
              fgColor="#09080F"
              level="M"
            />
            <p
              className="text-xs text-center"
              style={{ color: '#09080F', fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.45 }}
            >
              sandaga-events.vercel.app
            </p>
          </div>

          <p
            className="mt-4 text-xs leading-relaxed"
            style={{ color: 'rgba(244,237,228,0.28)', fontFamily: 'Hanken Grotesk, sans-serif', maxWidth: '18em' }}
          >
            Partagez autour de vous. Chaque famille qui prépare une cérémonie peut en bénéficier.
          </p>
        </div>
      </div>
    </section>
  )
}
