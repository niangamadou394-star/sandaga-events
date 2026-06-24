import { whatsAppClient } from '../../config'

// Photo : réception élégante avec lumières chaudes (Unsplash)
const HERO_IMG = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end px-6 pb-16 sm:px-14 sm:pb-20"
      style={{
        backgroundImage: `
          linear-gradient(to top, #1E1230 0%, rgba(30,18,48,0.82) 40%, rgba(30,18,48,0.35) 100%),
          url('${HERO_IMG}')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
      }}
    >
      {/* Marque */}
      <div className="absolute top-7 left-6 sm:left-14">
        <p style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A', fontSize: 15, letterSpacing: '0.04em' }}>
          Sandaga Events
        </p>
      </div>

      {/* Lien fondateur discret */}
      <a
        href="/admin"
        className="absolute top-7 right-6 sm:right-14 text-xs transition-colors"
        style={{ color: 'rgba(245,239,230,0.20)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.50)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.20)')}
      >
        Accès fondateur
      </a>

      <div className="max-w-3xl">
        <h1
          className="mb-8 font-medium leading-[1.05]"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F5EFE6',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          }}
        >
          Vos cérémonies
          <br />
          entre{' '}
          <em style={{ color: '#D4AF6A' }}>de bonnes mains</em>
        </h1>

        <p
          className="mb-10 max-w-lg text-base sm:text-lg leading-relaxed"
          style={{ color: 'rgba(245,239,230,0.65)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Prestataires vérifiés. Mis en relation à la main.
          Aucune mauvaise surprise le jour J.
        </p>

        <a
          href={whatsAppClient()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif', textDecoration: 'none' }}
        >
          <span
            className="px-7 py-3.5 rounded-sm text-sm font-semibold transition-colors"
            style={{ background: '#D4AF6A', color: '#1E1230' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#EBCE87')}
            onMouseLeave={e => (e.currentTarget.style.background = '#D4AF6A')}
          >
            Je prépare une cérémonie
          </span>
          <span className="text-sm" style={{ color: 'rgba(245,239,230,0.40)' }}>
            via WhatsApp
          </span>
        </a>
      </div>
    </section>
  )
}
