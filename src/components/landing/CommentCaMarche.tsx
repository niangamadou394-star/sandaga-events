const etapes = [
  {
    num: '01',
    titre: 'Vous nous dites tout',
    texte: 'Type de cérémonie, date, nombre d\'invités, services souhaités. On écoute.',
  },
  {
    num: '02',
    titre: 'On vous propose la sélection',
    texte: 'Sous 24h, une liste de prestataires vérifiés adaptés à votre projet.',
  },
  {
    num: '03',
    titre: 'Vous célébrez tranquille',
    texte: 'Réservation en confiance. Coordination possible si vous voulez souffler encore plus.',
  },
]

export default function CommentCaMarche() {
  return (
    <section className="px-4 py-20" style={{ background: '#291A3D' }}>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-center text-xs tracking-[.28em] uppercase mb-3"
          style={{ color: '#D4AF6A', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Comment ça marche
        </p>

        <h2
          className="text-center text-2xl sm:text-3xl font-medium mb-14"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Simple, rapide, sans stress
        </h2>

        <div className="flex flex-col gap-8">
          {etapes.map(({ num, titre, texte }) => (
            <div key={num} className="flex gap-6 items-start">
              <span
                className="text-4xl font-medium shrink-0 leading-none"
                style={{ fontFamily: 'Fraunces, serif', color: '#B6404F', minWidth: '2.5rem' }}
              >
                {num}
              </span>
              <div>
                <h3
                  className="text-lg font-medium mb-1.5"
                  style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
                >
                  {titre}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,239,230,0.70)' }}>
                  {texte}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
