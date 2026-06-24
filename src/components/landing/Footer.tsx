// Footer minimaliste
export default function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer
      className="px-6 sm:px-14 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      style={{
        background: '#150C26',
        borderTop: '1px solid rgba(245,239,230,0.06)',
      }}
    >
      <p
        className="text-xs"
        style={{ color: 'rgba(245,239,230,0.25)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        © {annee} Sandaga Events
      </p>
      <p
        className="text-xs"
        style={{ color: 'rgba(245,239,230,0.20)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        La plateforme de la diaspora — Events est notre premier service
      </p>
    </footer>
  )
}
