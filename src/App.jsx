import './styles/global.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Products } from './components/Products/Products'
import { Features } from './components/Features/Features'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
