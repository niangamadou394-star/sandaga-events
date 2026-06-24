import QRCode from 'react-qr-code'
import { config, whatsAppClient } from '../../config'

const CONTACT_IMG =
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2400&q=80'

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
    <section className="relative overflow-hidden" style={{ background: '#09080F' }}>
      {/* Image fond très discrète */}
      <img
        src={CONTACT_IMG}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(9,8,15,0.94)' }}
      />

      <div className="relative z-10 px-6 sm:px-14 py-20 sm:py-28">
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
            <em style={{ color: 'rgba(244,237,228,0.30)' }}>partout où vous êtes</em>
          </h2>
        </div>

        {/* Liens sociaux — style typographique comme DeuxPortes */}
        <div className="max-w-xl">
          {reseaux.map((r) => (
            <a
              key={r.nom}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 transition-opacity"
              style={{ borderTop: '1px solid rgba(244,237,228,0.08)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span
                className="text-xs tracking-[.18em] uppercase"
                style={{ color: 'rgba(244,237,228,0.35)', fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {r.nom}
              </span>
              <span
                className="text-sm"
                style={{ color: '#C8A96E', fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {r.handle} →
              </span>
            </a>
          ))}
          <div style={{ borderTop: '1px solid rgba(244,237,228,0.08)' }} />
        </div>

        {/* QR code — petit, en bas, inline avec label */}
        <div className="flex items-center gap-5 mt-14">
          <div className="p-3" style={{ background: '#F4EDE4', borderRadius: 2 }}>
            <QRCode
              value={config.siteUrl}
              size={72}
              bgColor="#F4EDE4"
              fgColor="#09080F"
              level="M"
            />
          </div>
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: 'rgba(244,237,228,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Scanner pour partager
            </p>
            <p
              className="text-xs"
              style={{ color: 'rgba(244,237,228,0.22)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              sandaga-events.vercel.app
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
