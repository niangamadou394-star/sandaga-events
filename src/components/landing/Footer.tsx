export default function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer
      className="px-6 sm:px-14 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      style={{
        background: '#09080F',
        borderTop: '1px solid rgba(244,237,228,0.05)',
      }}
    >
      <p
        className="text-xs"
        style={{ color: 'rgba(244,237,228,0.22)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        © {annee} Sandaga Events
      </p>
      <p
        className="text-xs"
        style={{ color: 'rgba(244,237,228,0.16)', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        Events est notre premier service
      </p>
    </footer>
  )
}
