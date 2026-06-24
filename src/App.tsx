import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './lib/auth'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Layout from './components/admin/Layout'
import LandingPage from './pages/landing/LandingPage'
import LoginPage from './pages/login/LoginPage'
import Accueil from './pages/admin/Accueil'
import Prestataires from './pages/admin/Prestataires'
import Demandes from './pages/admin/Demandes'
import Commissions from './pages/admin/Commissions'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing publique */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard protégé */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Layout>
                  <Accueil />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/prestataires"
            element={
              <ProtectedRoute>
                <Layout>
                  <Prestataires />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/demandes"
            element={
              <ProtectedRoute>
                <Layout>
                  <Demandes />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/commissions"
            element={
              <ProtectedRoute>
                <Layout>
                  <Commissions />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Redirection fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
