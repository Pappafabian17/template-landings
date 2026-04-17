import './styles/global.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Features } from './components/Features/Features'
import { Cta } from './components/Cta/Cta'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
