import Hero from '../../components/landing/Hero'
import Mantra from '../../components/landing/Mantra'
import Services from '../../components/landing/Services'
import CommentCaMarche from '../../components/landing/CommentCaMarche'
import DeuxPortes from '../../components/landing/DeuxPortes'
import Contact from '../../components/landing/Contact'
import Footer from '../../components/landing/Footer'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Mantra />
      <Services />
      <CommentCaMarche />
      <DeuxPortes />
      <Contact />
      <Footer />
    </main>
  )
}
