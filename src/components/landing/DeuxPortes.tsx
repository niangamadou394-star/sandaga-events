import { whatsAppClient, whatsAppPrestataire } from '../../config'

export default function DeuxPortes() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{ background: '#0F0D1A', borderTop: '1px solid rgba(200,169,110,0.07)' }}
    >
      <div className="max-w-4xl">
        <h2
          className="mb-14 font-medium leading-tight"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F4EDE4',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          }}
        >
          Prêt ?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Porte client */}
          <a
            href={whatsAppClient()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col justify-between p-8 sm:p-10 transition-all"
            style={{
              background: '#C8A96E',
              color: '#09080F',
              minHeight: 220,
              textDecoration: 'none',
              borderRadius: 3,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8CB84')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C8A96E')}
          >
            <p
              className="text-xs tracking-[.2em] uppercase mb-auto pb-10"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.55 }}
            >
              Famille
            </p>
            <div>
              <p
                className="font-medium mb-1.5"
                style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
              >
                Je prépare une cérémonie
              </p>
              <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.60 }}>
                Écrire sur WhatsApp →
              </p>
            </div>
          </a>

          {/* Porte prestataire */}
          <a
            href={whatsAppPrestataire()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col justify-between p-8 sm:p-10 transition-all"
            style={{
              background: 'transparent',
              border: '1px solid rgba(244,237,228,0.10)',
              color: '#F4EDE4',
              minHeight: 220,
              textDecoration: 'none',
              borderRadius: 3,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(244,237,228,0.28)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(244,237,228,0.10)')}
          >
            <p
              className="text-xs tracking-[.2em] uppercase mb-auto pb-10"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: 'rgba(244,237,228,0.32)' }}
            >
              Prestataire
            </p>
            <div>
              <p
                className="font-medium mb-1.5"
                style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
              >
                Je veux rejoindre la sélection
              </p>
              <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: 'rgba(244,237,228,0.38)' }}>
                Aucun frais d'avance · Commission à la prestation →
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
