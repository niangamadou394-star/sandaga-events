// Photos Unsplash pour chaque service
const services = [
  {
    num: '01',
    categorie: 'Traiteur',
    detail: 'Du buffet généreux à la table gastronomique. Une cuisine qui nourrit autant les corps que les esprits.',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    // Table élégante dressée, lumières chaudes
  },
  {
    num: '02',
    categorie: 'Photo & Vidéo',
    detail: 'Des images qui restent. Pas des clichés de prestation — des souvenirs qui racontent votre histoire.',
    img: 'https://images.unsplash.com/photo-1606216794079-73a8c72c8f7e?auto=format&fit=crop&w=1200&q=80',
    // Photographe de mariage, lumière dorée
  },
  {
    num: '03',
    categorie: 'Décoration',
    detail: 'Des décors qui racontent quelque chose. Votre goût, votre univers, votre moment.',
    img: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=80',
    // Décoration florale élégante
  },
  {
    num: '04',
    categorie: 'Maquillage & Coiffure',
    detail: 'Parce que le plus beau jour mérite le plus beau regard sur soi.',
    img: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80',
    // Séance maquillage
  },
]

export default function Services() {
  return (
    <section style={{ background: '#291A3D' }}>
      {/* En-tête */}
      <div className="px-6 sm:px-14 pt-20 pb-12">
        <p
          className="text-xs tracking-[.22em] uppercase"
          style={{ color: 'rgba(212,175,106,0.55)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Ce qu'on couvre
        </p>
      </div>

      {/* Services en alternance image / texte */}
      {services.map((s, i) => (
        <div
          key={s.categorie}
          className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          style={{ borderTop: '1px solid rgba(212,175,106,0.08)' }}
        >
          {/* Photo */}
          <div
            className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]"
            style={{
              backgroundImage: `url('${s.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Texte */}
          <div
            className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 sm:px-14"
            style={{ background: i % 2 === 0 ? '#291A3D' : '#34234B' }}
          >
            <span
              className="text-xs mb-4 tabular-nums"
              style={{ color: 'rgba(212,175,106,0.35)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              {s.num}
            </span>
            <h3
              className="font-medium mb-4 leading-tight"
              style={{
                fontFamily: 'Fraunces, serif',
                color: '#F5EFE6',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              }}
            >
              {s.categorie}
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.55)', fontFamily: 'Hanken Grotesk, sans-serif', maxWidth: '32em' }}
            >
              {s.detail}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
