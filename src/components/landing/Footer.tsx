import { config, whatsAppClient } from '../../config'

export default function Footer() {
  return (
    <footer
      className="px-4 py-12 text-center"
      style={{ background: '#291A3D', borderTop: '1px solid rgba(212,175,106,0.12)' }}
    >
      <div className="max-w-xl mx-auto">
        <p
          className="text-xl font-medium mb-1"
          style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A' }}
        >
          Sandaga Events
        </p>

        <p className="text-xs mb-6" style={{ color: 'rgba(245,239,230,0.50)' }}>
          Sandaga, la plateforme de la diaspora. Events est notre premier service,
          lancé entre la France et le Sénégal.
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <a
            href={whatsAppClient()}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'rgba(245,239,230,0.60)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D4AF6A')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.60)')}
          >
            WhatsApp
          </a>
          <a
            href={`https://instagram.com/${config.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'rgba(245,239,230,0.60)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D4AF6A')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.60)')}
          >
            @{config.instagram}
          </a>
        </div>
      </div>
    </footer>
  )
}
