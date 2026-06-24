// Services : liste éditoriale pleine largeur, pas de grille de cartes
const services = [
  {
    categorie: 'Traiteur',
    detail: 'Du thiébou dieune au buffet fusion. Une cuisine qui nourrit autant les corps que les esprits.',
  },
  {
    categorie: 'Photo & Vidéo',
    detail: 'Des images qui restent. Pas des clichés de prestation — des souvenirs de famille.',
  },
  {
    categorie: 'Décoration',
    detail: 'Des décors qui racontent quelque chose. Votre culture, votre goût, votre moment.',
  },
  {
    categorie: 'Maquillage & Coiffure',
    detail: 'Parce que le plus beau jour mérite le plus beau regard sur soi.',
  },
]

export default function Services() {
  return (
    <section
      className="px-6 sm:px-14 py-20 sm:py-28"
      style={{ background: '#291A3D' }}
    >
      {/* En-tête de section */}
      <p
        className="mb-16 text-xs tracking-[.22em] uppercase"
        style={{ color: 'rgba(212,175,106,0.55)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        Ce qu'on couvre
      </p>

      {/* Liste éditoriale */}
      <div>
        {services.map((s, i) => (
          <div
            key={s.categorie}
            className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 py-8"
            style={{
              borderTop: i === 0 ? '1px solid rgba(212,175,106,0.15)' : '1px solid rgba(212,175,106,0.10)',
            }}
          >
            {/* Numéro */}
            <span
              className="text-xs shrink-0 sm:w-8 tabular-nums"
              style={{ color: 'rgba(212,175,106,0.35)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              0{i + 1}
            </span>

            {/* Catégorie */}
            <h3
              className="shrink-0 sm:w-52 font-medium"
              style={{
                fontFamily: 'Fraunces, serif',
                color: '#F5EFE6',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
              }}
            >
              {s.categorie}
            </h3>

            {/* Détail */}
            <p
              className="flex-1 text-sm sm:text-base leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.55)', fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              {s.detail}
            </p>
          </div>
        ))}

        {/* Ligne de fermeture */}
        <div style={{ borderTop: '1px solid rgba(212,175,106,0.10)' }} />
      </div>
    </section>
  )
}
