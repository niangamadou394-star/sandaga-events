import { UtensilsCrossed, Camera, Sparkles, Wand2 } from 'lucide-react'

const services = [
  {
    Icon: UtensilsCrossed,
    titre: 'Traiteur',
    texte: 'Cuisine authentique et généreuse, du thiébou dieune au buffet fusion.',
  },
  {
    Icon: Camera,
    titre: 'Photo et Vidéo',
    texte: 'Des souvenirs impeccables pour revivre chaque moment de la cérémonie.',
  },
  {
    Icon: Sparkles,
    titre: 'Décoration',
    texte: 'Mise en scène et décors qui reflètent la beauté et la culture de votre famille.',
  },
  {
    Icon: Wand2,
    titre: 'Maquillage et Coiffure',
    texte: 'Les plus belles tenues méritent le plus beau regard.',
  },
]

export default function Services() {
  return (
    <section className="px-4 py-20" style={{ background: '#1E1230' }}>
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-center text-xs tracking-[.28em] uppercase mb-3"
          style={{ color: '#D4AF6A', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Nos services
        </p>

        <h2
          className="text-center text-2xl sm:text-3xl font-medium mb-12"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Tout ce qu'une grande cérémonie demande
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map(({ Icon, titre, texte }) => (
            <div
              key={titre}
              className="rounded-lg p-7 transition-transform hover:-translate-y-0.5"
              style={{
                background: '#291A3D',
                border: '1px solid rgba(212,175,106,0.15)',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.borderColor = 'rgba(212,175,106,0.35)')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.borderColor = 'rgba(212,175,106,0.15)')
              }
            >
              <Icon size={28} style={{ color: '#D4AF6A' }} strokeWidth={1.5} className="mb-4" />
              <h3
                className="text-lg font-medium mb-2"
                style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
              >
                {titre}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,239,230,0.70)' }}>
                {texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
