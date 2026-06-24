import { whatsAppClient, whatsAppPrestataire } from '../../config'

export default function DeuxPortes() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{ background: '#09080F', borderTop: '1px solid rgba(200,169,110,0.07)' }}
    >
      <p
        className="text-xs tracking-[.22em] uppercase mb-14"
        style={{ color: 'rgba(200,169,110,0.42)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        Commencer
      </p>

      {/* CTA Famille */}
      <a
        href={whatsAppClient()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start sm:items-center justify-between py-9 gap-6 transition-opacity"
        style={{ borderTop: '1px solid rgba(244,237,228,0.08)', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <div>
          <span
            className="block text-xs tracking-[.18em] uppercase mb-3"
            style={{ color: 'rgba(200,169,110,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
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
          className="shrink-0 mt-1"
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
        className="group flex items-start sm:items-center justify-between py-9 gap-6 transition-opacity"
        style={{ borderTop: '1px solid rgba(244,237,228,0.08)', textDecoration: 'none' }}
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
          className="shrink-0 mt-1"
          style={{ color: 'rgba(244,237,228,0.30)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', lineHeight: 1 }}
        >
          →
        </span>
      </a>

      <div style={{ borderTop: '1px solid rgba(244,237,228,0.08)' }} />

      <p
        className="mt-6 text-xs"
        style={{ color: 'rgba(244,237,228,0.22)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        Aucun frais d'avance · Commission à la prestation uniquement
      </p>
    </section>
  )
}
