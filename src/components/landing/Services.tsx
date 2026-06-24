const services = [
  {
    num: '01',
    categorie: 'Traiteur',
    detail: 'Du buffet généreux à la table gastronomique. Une cuisine qui nourrit autant les corps que les esprits.',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80',
  },
  {
    num: '02',
    categorie: 'Photo & Vidéo',
    detail: 'Des images qui restent. Des souvenirs qui racontent votre histoire.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  },
  {
    num: '03',
    categorie: 'Décoration',
    detail: 'Des décors qui racontent quelque chose. Votre goût, votre univers, votre moment.',
    img: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=900&q=80',
  },
  {
    num: '04',
    categorie: 'Maquillage & Coiffure',
    detail: 'Parce que le plus beau jour mérite le plus beau regard sur soi.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Services() {
  return (
    <section style={{ background: '#09080F' }}>
      {/* Label */}
      <div className="px-6 sm:px-14 pt-20 pb-6">
        <p
          className="text-xs tracking-[.22em] uppercase"
          style={{ color: 'rgba(200,169,110,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Ce qu'on couvre
        </p>
      </div>

      {/* Grille 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.categorie}
            className="relative overflow-hidden"
            style={{ aspectRatio: '4 / 3' }}
          >
            {/* Photo */}
            <img
              src={s.img}
              alt={s.categorie}
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />

            {/* Overlay gradient bas */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(9,8,15,0.92) 0%, rgba(9,8,15,0.45) 50%, rgba(9,8,15,0.05) 100%)',
              }}
            />

            {/* Texte en bas */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span
                className="block text-xs mb-2 tabular-nums"
                style={{ color: 'rgba(200,169,110,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                {s.num}
              </span>
              <h3
                className="font-medium mb-2 leading-tight"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: '#F4EDE4',
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                }}
              >
                {s.categorie}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(244,237,228,0.52)', fontFamily: 'Hanken Grotesk, sans-serif', maxWidth: '28em' }}
              >
                {s.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
