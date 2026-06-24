import { MessageCircle } from 'lucide-react'
import { whatsAppClient, whatsAppPrestataire } from '../../config'

export default function DeuxPortes() {
  return (
    <section className="px-4 py-20" style={{ background: '#1E1230' }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-center text-xs tracking-[.28em] uppercase mb-3"
          style={{ color: '#D4AF6A', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Rejoindre Sandaga Events
        </p>

        <h2
          className="text-center text-2xl sm:text-3xl font-medium mb-12"
          style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
        >
          Choisissez votre porte
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Porte client */}
          <div
            className="rounded-lg p-8 flex flex-col items-center text-center"
            style={{
              background: '#291A3D',
              border: '1px solid rgba(212,175,106,0.25)',
            }}
          >
            <MessageCircle size={32} style={{ color: '#D4AF6A' }} strokeWidth={1.5} className="mb-5" />
            <h3
              className="text-xl font-medium mb-3"
              style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
            >
              Vous préparez une cérémonie
            </h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(245,239,230,0.70)' }}>
              Dites-nous ce que vous préparez. On trouve les bons prestataires pour vous, vérifiés et disponibles.
            </p>
            <a
              href={whatsAppClient()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 rounded text-sm font-semibold text-center transition-colors"
              style={{
                background: '#D4AF6A',
                color: '#1E1230',
                fontFamily: 'Hanken Grotesk, sans-serif',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EBCE87')}
              onMouseLeave={e => (e.currentTarget.style.background = '#D4AF6A')}
            >
              Demander ma sélection
            </a>
          </div>

          {/* Porte prestataire */}
          <div
            className="rounded-lg p-8 flex flex-col items-center text-center"
            style={{
              background: '#291A3D',
              border: '1px solid rgba(182,64,79,0.3)',
            }}
          >
            <MessageCircle size={32} style={{ color: '#B6404F' }} strokeWidth={1.5} className="mb-5" />
            <h3
              className="text-xl font-medium mb-3"
              style={{ fontFamily: 'Fraunces, serif', color: '#F5EFE6' }}
            >
              Vous êtes prestataire
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,239,230,0.70)' }}>
              Proposez votre travail à des familles qui cherchent exactement ce que vous faites.
            </p>
            <p className="text-xs mb-7" style={{ color: 'rgba(245,239,230,0.50)' }}>
              Aucun frais d'avance. Commission uniquement si la prestation est confirmée.
            </p>
            <a
              href={whatsAppPrestataire()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 rounded text-sm font-semibold text-center transition-colors"
              style={{
                border: '1px solid rgba(182,64,79,0.6)',
                color: '#B6404F',
                background: 'transparent',
                fontFamily: 'Hanken Grotesk, sans-serif',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(182,64,79,0.1)'
                e.currentTarget.style.borderColor = '#B6404F'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(182,64,79,0.6)'
              }}
            >
              Proposer mon travail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
