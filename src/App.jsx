import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

const Projects = lazy(() => import('./components/Projects'))
const AIShowcase = lazy(() => import('./components/AIShowcase'))
const PracticeGallery = lazy(() => import('./components/PracticeGallery'))

function SectionFallback() {
  return <div style={{ height: '200px', background: 'var(--color-black-soft)' }} />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AIShowcase />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PracticeGallery />
        </Suspense>
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
