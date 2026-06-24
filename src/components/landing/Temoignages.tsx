const TEMO_IMG =
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2400&q=80'

const temoignages = [
  {
    texte:
      "En deux messages WhatsApp, Sandaga Events nous avait trouvé un traiteur exceptionnel. Le jour J, tout était parfait.",
    auteur: "Fatou & Mamadou",
    evenement: "Mariage · Paris",
  },
  {
    texte:
      "Je cherchais un photographe pour le baptême de ma fille. Trois jours plus tard, j'avais rencontré le bon. Aucune mauvaise surprise.",
    auteur: "Aïssatou K.",
    evenement: "Baptême · Lyon",
  },
  {
    texte:
      "Une décoratrice qui a su exactement ce qu'on voulait. Sans Sandaga, on n'aurait jamais trouvé ça seuls.",
    auteur: "Ibrahim & Mariama",
    evenement: "Mariage · Bordeaux",
  },
]

export default function Temoignages() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#09080F' }}>
      {/* Image fond */}
      <img
        src={TEMO_IMG}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Overlay sombre */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(9,8,15,0.88)' }}
      />

      {/* Contenu */}
      <div className="relative z-10 px-6 sm:px-14 py-20 sm:py-28">
        <p
          className="text-xs tracking-[.22em] uppercase mb-14"
          style={{ color: 'rgba(200,169,110,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Ils nous font confiance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(244,237,228,0.07)' }}>
          {temoignages.map((t) => (
            <div
              key={t.auteur}
              className="flex flex-col justify-between p-8 sm:p-10"
              style={{ background: '#09080F' }}
            >
              {/* Guillemet */}
              <span
                className="block mb-6 leading-none select-none"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: '#C8A96E',
                  fontSize: '3.5rem',
                  lineHeight: 0.8,
                  opacity: 0.55,
                }}
              >
                "
              </span>

              {/* Texte */}
              <p
                className="flex-1 mb-8 leading-relaxed"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: '#F4EDE4',
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  fontStyle: 'italic',
                }}
              >
                {t.texte}
              </p>

              {/* Attribution */}
              <div style={{ borderTop: '1px solid rgba(244,237,228,0.08)', paddingTop: '1.25rem' }}>
                <p
                  className="text-sm font-medium"
                  style={{ color: '#F4EDE4', fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  {t.auteur}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'rgba(200,169,110,0.55)', fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  {t.evenement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
