import Navigation from "./components/navigation"
import Hero from "./components/hero"
import Features from "./components/features"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 scroll-smooth">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
