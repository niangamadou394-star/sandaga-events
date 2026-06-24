import { whatsAppClient } from '../../config'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end px-6 pb-16 sm:px-14 sm:pb-20"
      style={{
        background: 'linear-gradient(160deg, #291A3D 0%, #1E1230 55%, #150C26 100%)',
      }}
    >
      {/* Marque en haut à gauche */}
      <div className="absolute top-7 left-6 sm:left-14">
        <p style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A', fontSize: 15, letterSpacing: '0.04em' }}>
          Sandaga Events
        </p>
      </div>

      {/* Lien admin discret en haut à droite */}
      <a
        href="/admin"
        className="absolute top-7 right-6 sm:right-14 text-xs transition-colors"
        style={{ color: 'rgba(245,239,230,0.20)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.50)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.20)')}
      >
        Accès fondateur
      </a>

      {/* Contenu principal — aligné en bas à gauche */}
      <div className="max-w-3xl">
        {/* Petite accroche */}
        <p
          className="mb-5 text-xs tracking-[.22em] uppercase"
          style={{ color: '#D4AF6A', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Diaspora France &amp; Sénégal
        </p>

        {/* Titre massif */}
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

        {/* Sous-titre minimal */}
        <p
          className="mb-10 max-w-lg text-base sm:text-lg leading-relaxed"
          style={{ color: 'rgba(245,239,230,0.60)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Prestataires vérifiés. Mis en relation à la main.
          Aucune mauvaise surprise le jour J.
        </p>

        {/* Un seul CTA */}
        <a
          href={whatsAppClient()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 group"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          <span
            className="px-7 py-3.5 rounded-sm text-sm font-semibold transition-colors"
            style={{ background: '#D4AF6A', color: '#1E1230' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#EBCE87')}
            onMouseLeave={e => (e.currentTarget.style.background = '#D4AF6A')}
          >
            Je prépare une cérémonie
          </span>
          <span
            className="text-sm transition-colors"
            style={{ color: 'rgba(245,239,230,0.40)' }}
          >
            via WhatsApp
          </span>
        </a>
      </div>

      {/* Ligne de bas de page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.2), transparent)' }}
      />
    </section>
  )
}
