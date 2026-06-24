// Photo : couple souriant lors d'une cérémonie (Unsplash)
const MANTRA_IMG = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=80'

export default function Mantra() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[480px]" style={{ background: '#1E1230' }}>
      {/* Image — prend toute la moitié gauche */}
      <div
        className="w-full lg:w-1/2 min-h-[280px] lg:min-h-0"
        style={{
          backgroundImage: `url('${MANTRA_IMG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Texte — moitié droite */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-14">
        <p
          className="font-medium leading-snug mb-6"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F5EFE6',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            maxWidth: '16em',
          }}
        >
          On ne joue pas à la roulette pour{' '}
          <em style={{ color: '#D4AF6A' }}>le plus beau jour</em>{' '}
          de sa famille.
        </p>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: 'rgba(245,239,230,0.50)', fontFamily: 'Hanken Grotesk, sans-serif', maxWidth: '34em' }}
        >
          Chaque prestataire est rencontré, évalué, puis choisi.
          Pas de profils sans fond. Une sélection restreinte, faite à la main.
        </p>
      </div>
    </section>
  )
}
