const etapes = [
  {
    num: '01',
    titre: 'Vous nous dites tout',
    detail: 'Type de cérémonie, date, budget, services. Un message WhatsApp suffit.',
  },
  {
    num: '02',
    titre: 'On sélectionne pour vous',
    detail: 'Sous 24h, une liste de prestataires vérifiés, adaptés à votre projet et votre budget.',
  },
  {
    num: '03',
    titre: 'Vous célébrez',
    detail: "Réservation directe avec le prestataire. On reste disponibles jusqu'au jour J.",
  },
]

export default function CommentCaMarche() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{ background: '#09080F', borderTop: '1px solid rgba(200,169,110,0.07)' }}
    >
      <h2
        className="mb-20 font-medium leading-tight"
        style={{
          fontFamily: 'Fraunces, serif',
          color: '#F4EDE4',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          maxWidth: '14em',
        }}
      >
        Trois étapes.
        <br />
        <em style={{ color: 'rgba(244,237,228,0.30)' }}>Rien de plus.</em>
      </h2>

      <div className="flex flex-col gap-0 max-w-2xl">
        {etapes.map((e, i) => (
          <div
            key={e.num}
            className="relative flex gap-8 sm:gap-14 pb-14"
          >
            {/* Numéro */}
            <div className="shrink-0 w-16 sm:w-20">
              <span
                className="font-medium select-none"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: '#A63040',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  lineHeight: 1,
                }}
              >
                {e.num}
              </span>
            </div>

            {/* Texte */}
            <div className="pt-1">
              <h3
                className="mb-2 font-medium"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: '#F4EDE4',
                  fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                }}
              >
                {e.titre}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'rgba(244,237,228,0.48)', fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {e.detail}
              </p>
            </div>

            {/* Connecteur vertical */}
            {i < etapes.length - 1 && (
              <div
                className="absolute left-7 sm:left-9"
                style={{
                  top: '3.5rem',
                  bottom: 0,
                  width: 1,
                  background: 'linear-gradient(to bottom, rgba(166,48,64,0.35), transparent)',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
