import { whatsAppClient, whatsAppPrestataire } from '../../config'

// Section de conversion : deux appels à l'action, layout asymétrique
export default function DeuxPortes() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{ background: '#291A3D' }}
    >
      <div className="max-w-4xl">
        {/* Accroche */}
        <h2
          className="mb-16 font-medium leading-tight"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F5EFE6',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          }}
        >
          Prêt ?
        </h2>

        <div className="flex flex-col sm:flex-row gap-5">
          {/* Porte client */}
          <a
            href={whatsAppClient()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex flex-col justify-between p-7 sm:p-9 rounded-sm transition-all"
            style={{
              background: '#D4AF6A',
              color: '#1E1230',
              minHeight: 220,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#EBCE87')}
            onMouseLeave={e => (e.currentTarget.style.background = '#D4AF6A')}
          >
            <p
              className="text-xs tracking-[.2em] uppercase mb-auto pb-10"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.6 }}
            >
              Famille
            </p>
            <div>
              <p
                className="font-medium mb-1"
                style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
              >
                Je prépare une cérémonie
              </p>
              <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', opacity: 0.65 }}>
                Écrire sur WhatsApp →
              </p>
            </div>
          </a>

          {/* Porte prestataire */}
          <a
            href={whatsAppPrestataire()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex flex-col justify-between p-7 sm:p-9 rounded-sm transition-all"
            style={{
              background: 'transparent',
              border: '1px solid rgba(245,239,230,0.12)',
              color: '#F5EFE6',
              minHeight: 220,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,239,230,0.30)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,239,230,0.12)')}
          >
            <p
              className="text-xs tracking-[.2em] uppercase mb-auto pb-10"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: 'rgba(245,239,230,0.35)' }}
            >
              Prestataire
            </p>
            <div>
              <p
                className="font-medium mb-1"
                style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
              >
                Je veux rejoindre la sélection
              </p>
              <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: 'rgba(245,239,230,0.40)' }}>
                Aucun frais d'avance · Commission à la prestation →
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
