const TEMO_IMG =
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2400&q=80'

const temoignages = [
  {
    texte:
      "franchement je savais pas trop a quoi m'attendre... mais le traiteur qu'ils ont trouvé pour le mariage etait incroyable. toute la famille en parle encore 😅",
    auteur: "Sophie L.",
    evenement: "Mariage · Nantes",
  },
  {
    texte:
      "Super réactivité sur WhatsApp, réponse en moins d'une heure. Le photographe etait exactement ce qu'on cherchait pour l'anniv de mes parents. Je recommande vraiment !",
    auteur: "Karim B.",
    evenement: "Fête de famille · Paris",
  },
  {
    texte:
      "Honnêtement j'avais des doutes au départ mais la déco etait exactement ce qu'on avait demandé, dans les temps et sans stress. Pas une seule galère le jour J.",
    auteur: "Marie & Thomas",
    evenement: "Mariage · Bordeaux",
  },
]

export default function Temoignages() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#09080F' }}>
      {/* Image fond */}
      <img
        src={TEMO_IMG}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(9,8,15,0.87)' }}
      />

      <div className="relative z-10 px-6 sm:px-14 py-20 sm:py-28">
        <p
          className="text-xs tracking-[.22em] uppercase mb-14"
          style={{ color: 'rgba(200,169,110,0.45)', fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Ils nous font confiance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(244,237,228,0.07)' }}>
          {temoignages.map((t) => (
            <div
              key={t.auteur}
              className="flex flex-col justify-between p-8 sm:p-10"
              style={{ background: '#09080F' }}
            >
              <span
                className="block mb-5 select-none"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: '#C8A96E',
                  fontSize: '3rem',
                  lineHeight: 0.8,
                  opacity: 0.50,
                }}
              >
                "
              </span>

              <p
                className="flex-1 mb-8 leading-relaxed"
                style={{
                  fontFamily: 'Hanken Grotesk, sans-serif',
                  color: 'rgba(244,237,228,0.80)',
                  fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
                }}
              >
                {t.texte}
              </p>

              <div style={{ borderTop: '1px solid rgba(244,237,228,0.08)', paddingTop: '1.25rem' }}>
                <p
                  className="text-sm font-medium"
                  style={{ color: '#F4EDE4', fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  {t.auteur}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'rgba(200,169,110,0.55)', fontFamily: 'Hanken Grotesk, sans-serif' }}
                >
                  {t.evenement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
