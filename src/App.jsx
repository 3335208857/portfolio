import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AIShowcase from './components/AIShowcase'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import PracticeGallery from './components/PracticeGallery'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIShowcase />
        <PracticeGallery />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
