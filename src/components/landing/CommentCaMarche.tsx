const etapes = [
  {
    num: '01',
    titre: 'Vous nous dites tout',
    detail: 'Type de cérémonie, date, budget, services souhaités. Un message WhatsApp suffit.',
  },
  {
    num: '02',
    titre: 'On sélectionne pour vous',
    detail: 'Sous 24h, une sélection de prestataires vérifiés, adaptés à votre projet et votre budget.',
  },
  {
    num: '03',
    titre: 'Vous célébrez',
    detail: 'Réservation directe avec le prestataire. On reste disponibles jusqu\'au jour J.',
  },
]

export default function CommentCaMarche() {
  return (
    <section
      style={{ background: '#09080F', borderTop: '1px solid rgba(200,169,110,0.07)' }}
    >
      {/* Label */}
      <div className="px-6 sm:px-14 pt-20 pb-8">
        <p
          className="text-xs tracking-[.22em] uppercase"
          style={{ color: 'rgba(200,169,110,0.42)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Comment ça marche
        </p>
      </div>

      {/* Grille 3 colonnes */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{ borderTop: '1px solid rgba(244,237,228,0.07)' }}
      >
        {etapes.map((e, i) => (
          <div
            key={e.num}
            className="flex flex-col px-6 sm:px-10 py-12 sm:py-16"
            style={{
              borderRight: i < etapes.length - 1 ? '1px solid rgba(244,237,228,0.07)' : 'none',
              borderBottom: '1px solid rgba(244,237,228,0.07)',
            }}
          >
            {/* Numéro grand */}
            <span
              className="block mb-10 select-none font-medium"
              style={{
                fontFamily: 'Fraunces, serif',
                color: '#A63040',
                fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                lineHeight: 1,
                opacity: 0.85,
              }}
            >
              {e.num}
            </span>

            {/* Titre */}
            <h3
              className="mb-3 font-medium"
              style={{
                fontFamily: 'Fraunces, serif',
                color: '#F4EDE4',
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: 1.3,
              }}
            >
              {e.titre}
            </h3>

            {/* Détail */}
            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'rgba(244,237,228,0.46)',
                fontFamily: 'Hanken Grotesk, sans-serif',
              }}
            >
              {e.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
