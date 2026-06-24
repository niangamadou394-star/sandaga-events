import Hero from '../../components/landing/Hero'
import Promesse from '../../components/landing/Promesse'
import Services from '../../components/landing/Services'
import CommentCaMarche from '../../components/landing/CommentCaMarche'
import DeuxPortes from '../../components/landing/DeuxPortes'
import Footer from '../../components/landing/Footer'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Promesse />
      <Services />
      <CommentCaMarche />
      <DeuxPortes />
      <Footer />
    </main>
  )
}
