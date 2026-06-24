const MANTRA_IMG =
  'https://images.unsplash.com/photo-1624228652954-9e3725a2a4f8?auto=format&fit=crop&w=2400&q=80'

export default function Mantra() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
      {/* Image plein fond */}
      <img
        src={MANTRA_IMG}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
      />

      {/* Overlay directionnel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(9,8,15,0.96) 0%, rgba(9,8,15,0.75) 45%, rgba(9,8,15,0.40) 100%)',
        }}
      />

      {/* Contenu */}
      <div
        className="relative z-10 flex flex-col justify-end px-8 py-16 sm:px-14 sm:py-24"
        style={{ minHeight: '60vh' }}
      >
        <p
          className="font-medium leading-snug mb-5"
          style={{
            fontFamily: 'Fraunces, serif',
            color: '#F4EDE4',
            fontSize: 'clamp(1.55rem, 3.8vw, 2.8rem)',
            maxWidth: '17em',
          }}
        >
          On ne joue pas à la roulette pour{' '}
          <em style={{ color: '#C8A96E' }}>le plus beau jour</em>{' '}
          de sa famille.
        </p>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{
            color: 'rgba(244,237,228,0.50)',
            fontFamily: 'Hanken Grotesk, sans-serif',
            maxWidth: '36em',
          }}
        >
          Chaque prestataire est rencontré, évalué, puis choisi.
          Pas de profils sans fond. Une sélection restreinte, faite à la main.
        </p>
      </div>
    </section>
  )
}
