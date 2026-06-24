import { whatsAppClient, whatsAppPrestataire } from '../../config'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 py-20">
      {/* Fond dégradé subtil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #291A3D 0%, #1E1230 100%)',
        }}
      />

      {/* Carton d'invitation */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto text-center px-8 py-14 sm:px-16 sm:py-20"
        style={{
          border: '1px solid rgba(212,175,106,0.45)',
          borderRadius: '4px',
          boxShadow: '0 0 60px rgba(212,175,106,0.06), inset 0 0 40px rgba(30,18,48,0.4)',
        }}
      >
        {/* Ornements de coins */}
        <Corner pos="tl" />
        <Corner pos="tr" />
        <Corner pos="bl" />
        <Corner pos="br" />

        {/* Eyebrow */}
        <p
          className="mb-8 text-xs tracking-[.28em] uppercase"
          style={{ color: '#D4AF6A', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Sandaga Events · Diaspora France &amp; Sénégal
        </p>

        {/* Titre */}
        <h1
          className="mb-6 text-4xl sm:text-5xl leading-tight font-medium"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Vos cérémonies entre{' '}
          <em style={{ color: '#D4AF6A', fontStyle: 'italic' }}>de bonnes mains</em>
        </h1>

        {/* Sous-titre */}
        <p
          className="mb-10 text-base sm:text-lg leading-relaxed"
          style={{ color: 'rgba(245,239,230,0.70)' }}
        >
          Traiteurs, photographes, décorateurs et maquilleuses sélectionnés et vérifiés.
          Vous célébrez, on s'occupe du reste.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsAppClient()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 rounded text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
            style={{
              background: '#D4AF6A',
              color: '#1E1230',
              fontFamily: 'Hanken Grotesk, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#EBCE87')}
            onMouseLeave={e => (e.currentTarget.style.background = '#D4AF6A')}
          >
            Je prépare une cérémonie
          </a>
          <a
            href={whatsAppPrestataire()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 rounded text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
            style={{
              border: '1px solid rgba(212,175,106,0.6)',
              color: '#D4AF6A',
              background: 'transparent',
              fontFamily: 'Hanken Grotesk, sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212,175,106,0.08)'
              e.currentTarget.style.borderColor = '#D4AF6A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(212,175,106,0.6)'
            }}
          >
            Je suis prestataire
          </a>
        </div>
      </div>
    </section>
  )
}

// Ornement de coin SVG
function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const style: React.CSSProperties = {
    position: 'absolute',
    width: 28,
    height: 28,
  }
  if (pos === 'tl') { style.top = 10; style.left = 10 }
  if (pos === 'tr') { style.top = 10; style.right = 10; style.transform = 'scaleX(-1)' }
  if (pos === 'bl') { style.bottom = 10; style.left = 10; style.transform = 'scaleY(-1)' }
  if (pos === 'br') { style.bottom = 10; style.right = 10; style.transform = 'scale(-1)' }

  return (
    <svg style={style} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M2 26 L2 2 L26 2" stroke="#D4AF6A" strokeWidth="1" strokeOpacity="0.6" fill="none" />
      <circle cx="2" cy="2" r="1.5" fill="#D4AF6A" fillOpacity="0.7" />
    </svg>
  )
}
