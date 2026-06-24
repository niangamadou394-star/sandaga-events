import { useState, type ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, ClipboardList, Banknote, LogOut, Menu, X } from 'lucide-react'
import { supabase } from '../../lib/supabase'

const nav = [
  { to: '/admin', label: 'Accueil', Icon: LayoutDashboard, end: true },
  { to: '/admin/prestataires', label: 'Prestataires', Icon: Users, end: false },
  { to: '/admin/demandes', label: 'Demandes', Icon: ClipboardList, end: false },
  { to: '/admin/commissions', label: 'Commissions', Icon: Banknote, end: false },
]

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const navigate = useNavigate()

  async function deconnexion() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#1E1230' }}>
      {/* Header mobile */}
      <header
        className="flex items-center justify-between px-4 py-3 sm:hidden sticky top-0 z-30"
        style={{
          background: '#291A3D',
          borderBottom: '1px solid rgba(212,175,106,0.12)',
        }}
      >
        <span style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A', fontSize: 18 }}>
          Sandaga Events
        </span>
        <button
          onClick={() => setMenuOuvert(v => !v)}
          className="p-1 rounded"
          style={{ color: 'rgba(245,239,230,0.70)' }}
          aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOuvert ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar desktop */}
        <aside
          className="hidden sm:flex flex-col w-56 shrink-0 sticky top-0 h-screen"
          style={{
            background: '#291A3D',
            borderRight: '1px solid rgba(212,175,106,0.10)',
          }}
        >
          <div className="px-5 py-6 mb-2">
            <p style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A', fontSize: 18 }}>
              Sandaga Events
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(245,239,230,0.40)' }}>
              Cockpit fondateur
            </p>
          </div>

          <nav className="flex flex-col gap-1 px-3 flex-1">
            {nav.map(({ to, label, Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors"
                style={({ isActive }) => ({
                  background: isActive ? 'rgba(212,175,106,0.12)' : 'transparent',
                  color: isActive ? '#D4AF6A' : 'rgba(245,239,230,0.65)',
                  fontFamily: 'Hanken Grotesk, sans-serif',
                })}
              >
                <Icon size={17} strokeWidth={1.8} />
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={deconnexion}
            className="flex items-center gap-3 mx-3 mb-6 px-3 py-2.5 rounded text-sm transition-colors"
            style={{
              color: 'rgba(245,239,230,0.40)',
              fontFamily: 'Hanken Grotesk, sans-serif',
              background: 'transparent',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#B6404F')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.40)')}
          >
            <LogOut size={17} strokeWidth={1.8} />
            Déconnexion
          </button>
        </aside>

        {/* Menu mobile déroulant */}
        {menuOuvert && (
          <div
            className="fixed inset-0 z-20 sm:hidden"
            style={{ background: 'rgba(30,18,48,0.95)' }}
            onClick={() => setMenuOuvert(false)}
          >
            <nav
              className="flex flex-col gap-1 p-4 pt-16"
              onClick={e => e.stopPropagation()}
            >
              {nav.map(({ to, label, Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMenuOuvert(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded text-base"
                  style={({ isActive }) => ({
                    background: isActive ? 'rgba(212,175,106,0.12)' : 'transparent',
                    color: isActive ? '#D4AF6A' : '#F5EFE6',
                    fontFamily: 'Hanken Grotesk, sans-serif',
                  })}
                >
                  <Icon size={20} strokeWidth={1.8} />
                  {label}
                </NavLink>
              ))}
              <button
                onClick={deconnexion}
                className="flex items-center gap-3 px-4 py-3 rounded text-base mt-4"
                style={{ color: '#B6404F', fontFamily: 'Hanken Grotesk, sans-serif' }}
              >
                <LogOut size={20} strokeWidth={1.8} />
                Déconnexion
              </button>
            </nav>
          </div>
        )}

        {/* Contenu principal */}
        <main className="flex-1 min-w-0 p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
