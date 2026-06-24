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
      style={{ background: '#09080F', borderTop: '1px solid rgba(200,169,110,0.07)' }}
    >
      {/* Heading */}
      <div className="mb-14">
        <p
          className="text-xs tracking-[.22em] uppercase mb-4"
          style={{ color: 'rgba(200,169,110,0.42)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Nous suivre
        </p>
        <h2
          className="font-medium leading-tight"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F4EDE4',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
          }}
        >
          Sandaga Events,
          <br />
          <em style={{ color: 'rgba(244,237,228,0.32)' }}>partout où vous êtes</em>
        </h2>
      </div>

      {/* Grille 2×2 réseaux — miroir de la grille Services */}
      <div
        className="grid grid-cols-2 mb-16"
        style={{ border: '1px solid rgba(244,237,228,0.07)', gap: 1, background: 'rgba(244,237,228,0.07)' }}
      >
        {reseaux.map((r) => (
          <a
            key={r.nom}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 p-6 sm:p-8 transition-opacity"
            style={{ background: '#09080F', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0F0D1A')}
            onMouseLeave={e => (e.currentTarget.style.background = '#09080F')}
          >
            <span
              className="text-xs tracking-[.15em] uppercase"
              style={{ color: 'rgba(244,237,228,0.32)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              {r.nom}
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: '#C8A96E', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              {r.handle} →
            </span>
          </a>
        ))}
      </div>

      {/* QR centré, petit, intégré */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="p-4"
          style={{ background: '#F4EDE4', borderRadius: 2 }}
        >
          <QRCode
            value={config.siteUrl}
            size={110}
            bgColor="#F4EDE4"
            fgColor="#09080F"
            level="M"
          />
        </div>
        <p
          className="text-xs"
          style={{ color: 'rgba(244,237,228,0.22)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          sandaga-events.vercel.app
        </p>
      </div>
    </section>
  )
}
