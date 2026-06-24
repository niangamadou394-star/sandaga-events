import { whatsAppClient, whatsAppPrestataire } from '../../config'

const CTA_IMG =
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2400&q=80'

export default function DeuxPortes() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '65vh' }}>
      {/* Image fond DJ */}
      <img
        src={CTA_IMG}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
      />
      {/* Overlay dégradé */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(9,8,15,0.97) 0%, rgba(9,8,15,0.80) 55%, rgba(9,8,15,0.50) 100%)',
        }}
      />

      {/* Contenu */}
      <div
        className="relative z-10 flex flex-col justify-end px-6 sm:px-14 py-16 sm:py-24"
        style={{ minHeight: '65vh' }}
      >
        <p
          className="text-xs tracking-[.22em] uppercase mb-12"
          style={{ color: 'rgba(200,169,110,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Commencer
        </p>

        {/* CTA Famille */}
        <a
          href={whatsAppClient()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start sm:items-center justify-between py-8 gap-6"
          style={{ borderTop: '1px solid rgba(244,237,228,0.10)', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <div>
            <span
              className="block text-xs tracking-[.18em] uppercase mb-3"
              style={{ color: 'rgba(200,169,110,0.50)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Famille
            </span>
            <h3
              className="font-medium leading-tight"
              style={{
                fontFamily: 'Fraunces, serif',
                color: '#C8A96E',
                fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              }}
            >
              Je prépare une cérémonie
            </h3>
          </div>
          <span
            className="shrink-0"
            style={{ color: '#C8A96E', fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1 }}
          >
            →
          </span>
        </a>

        {/* CTA Prestataire */}
        <a
          href={whatsAppPrestataire()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start sm:items-center justify-between py-8 gap-6"
          style={{ borderTop: '1px solid rgba(244,237,228,0.10)', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <div>
            <span
              className="block text-xs tracking-[.18em] uppercase mb-3"
              style={{ color: 'rgba(244,237,228,0.28)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              Prestataire
            </span>
            <h3
              className="font-medium leading-tight"
              style={{
                fontFamily: 'Fraunces, serif',
                color: 'rgba(244,237,228,0.55)',
                fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
              }}
            >
              Je rejoins la sélection
            </h3>
          </div>
          <span
            className="shrink-0"
            style={{ color: 'rgba(244,237,228,0.30)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', lineHeight: 1 }}
          >
            →
          </span>
        </a>

        <div style={{ borderTop: '1px solid rgba(244,237,228,0.10)' }} />

        <p
          className="mt-5 text-xs"
          style={{ color: 'rgba(244,237,228,0.20)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Aucun frais d'avance · Commission à la prestation uniquement
        </p>
      </div>
    </section>
  )
}
