import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Email ou mot de passe incorrect.')
    } else {
      navigate('/admin')
    }
    setLoading(false)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: '#1E1230' }}
    >
      <div
        className="w-full max-w-sm p-8 rounded-lg"
        style={{
          background: '#291A3D',
          border: '1px solid rgba(212,175,106,0.2)',
        }}
      >
        <p
          className="text-center text-xl font-medium mb-1"
          style={{ fontFamily: 'Fraunces, serif', color: '#D4AF6A' }}
        >
          Sandaga Events
        </p>
        <p className="text-center text-sm mb-8" style={{ color: 'rgba(245,239,230,0.50)' }}>
          Cockpit fondateur
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded text-sm outline-none focus:ring-1"
              style={{
                background: '#1E1230',
                border: '1px solid rgba(212,175,106,0.25)',
                color: '#F5EFE6',
                caretColor: '#D4AF6A',
              }}
            />
          </div>

          <div>
            <label className="block text-xs mb-1.5" style={{ color: 'rgba(245,239,230,0.60)' }}>
              Mot de passe
            </label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded text-sm outline-none focus:ring-1"
              style={{
                background: '#1E1230',
                border: '1px solid rgba(212,175,106,0.25)',
                color: '#F5EFE6',
                caretColor: '#D4AF6A',
              }}
            />
          </div>

          {error && (
            <p className="text-sm text-center" style={{ color: '#B6404F' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-3 rounded text-sm font-semibold transition-colors disabled:opacity-60"
            style={{
              background: '#D4AF6A',
              color: '#1E1230',
              fontFamily: 'Hanken Grotesk, sans-serif',
            }}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
