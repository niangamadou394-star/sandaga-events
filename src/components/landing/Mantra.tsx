// Section mantra : une phrase, pleine largeur, typographie massive
export default function Mantra() {
  return (
    <section
      className="px-6 py-24 sm:px-14 sm:py-32 overflow-hidden"
      style={{ background: '#1E1230' }}
    >
      <p
        className="font-medium leading-tight"
        style={{
          fontFamily: 'Fraunces, serif',
          color: '#F5EFE6',
          fontSize: 'clamp(2rem, 5.5vw, 4rem)',
          maxWidth: '16em',
        }}
      >
        On ne joue pas à la roulette pour{' '}
        <em style={{ color: '#D4AF6A' }}>le plus beau jour</em>{' '}
        de sa famille.
      </p>

      <p
        className="mt-8 max-w-xl text-base leading-relaxed"
        style={{ color: 'rgba(245,239,230,0.55)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        Chaque prestataire est rencontré, évalué, puis choisi.
        Pas de profils non vérifiés, pas de liste sans fond.
        Une sélection restreinte, faite à la main.
      </p>
    </section>
  )
}
