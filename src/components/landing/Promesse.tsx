import { ShieldCheck } from 'lucide-react'

export default function Promesse() {
  return (
    <section className="px-4 py-20" style={{ background: '#291A3D' }}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <ShieldCheck size={36} style={{ color: '#D4AF6A' }} strokeWidth={1.5} />
        </div>

        <h2
          className="text-2xl sm:text-3xl font-medium leading-snug mb-6"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          On ne joue pas à la roulette pour le plus beau jour de sa famille
        </h2>

        <p className="text-base leading-relaxed" style={{ color: 'rgba(245,239,230,0.70)' }}>
          Chaque prestataire dans notre sélection a été rencontré, évalué et choisi pour la
          qualité de son travail. Pas de profils non vérifiés, pas de mauvaises surprises le
          jour J. On sélectionne à la place.
        </p>
      </div>
    </section>
  )
}
