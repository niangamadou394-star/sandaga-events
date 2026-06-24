import { whatsAppClient } from '../../config'

const HERO_IMG = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end px-6 pb-16 sm:px-14 sm:pb-24"
      style={{ background: '#09080F' }}
    >
      {/* Image */}
      <img
        src={HERO_IMG}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, #09080F 0%, rgba(9,8,15,0.82) 38%, rgba(9,8,15,0.20) 100%)',
        }}
      />

      {/* Marque */}
      <div className="absolute top-6 left-6 sm:left-14 z-10">
        <p
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#C8A96E',
            fontSize: 22,
            letterSpacing: '0.06em',
            fontWeight: 500,
            textShadow: '0 1px 12px rgba(9,8,15,0.55)',
          }}
        >
          Sandaga Events
        </p>
      </div>

      {/* Lien fondateur */}
      <a
        href="/admin"
        className="absolute top-7 right-6 sm:right-14 z-10 text-xs transition-colors"
        style={{ color: 'rgba(244,237,228,0.18)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(244,237,228,0.45)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,237,228,0.18)')}
      >
        Accès fondateur
      </a>

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl">
        <h1
          className="mb-7 font-medium leading-[1.05]"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F4EDE4',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          }}
        >
          Vos cérémonies
          <br />
          entre{' '}
          <em style={{ color: '#C8A96E' }}>de bonnes mains</em>
        </h1>

        <p
          className="mb-10 max-w-lg text-base sm:text-lg leading-relaxed"
          style={{ color: 'rgba(244,237,228,0.60)', fontFamily: 'Hanken Grotesk, sans-serif' }}
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
            className="px-7 py-3.5 text-sm font-semibold transition-colors"
            style={{ background: '#C8A96E', color: '#09080F', borderRadius: 2 }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8CB84')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C8A96E')}
          >
            Je prépare une cérémonie
          </span>
          <span className="text-sm" style={{ color: 'rgba(244,237,228,0.35)' }}>
            via WhatsApp
          </span>
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-7 left-1/2 z-10 flex flex-col items-center gap-1.5"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div
          style={{
            width: 1,
            height: 36,
            background: 'linear-gradient(to bottom, rgba(200,169,110,0.55), transparent)',
          }}
        />
      </div>
    </section>
  )
}
