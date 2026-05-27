import { useState, useEffect, Component } from 'react'

import Slide1Cover from './components/Slide1Cover'
import Slide2Understanding from './components/Slide2Understanding'
import Slide3Purpose from './components/Slide3Purpose'
import Slide4Spine from './components/Slide4Spine'
import Slide5TaskPipeline from './components/Slide5TaskPipeline'
import Slide6Pilot from './components/Slide6Pilot'
import Slide7Timeline from './components/Slide7Timeline'
import Slide8Inputs from './components/Slide8Inputs'
import Slide9Roles from './components/Slide9Roles'
import Slide10Commercials from './components/Slide10Commercials'
import Slide11Close from './components/Slide11Close'

import AppendixA1Anatomy from './components/appendix/AppendixA1Anatomy'
import AppendixA2Scope from './components/appendix/AppendixA2Scope'

class SlideErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err) { console.warn('Slide error caught:', err) }
  render() { return this.state.hasError ? null : this.props.children }
}

const slides = [
  { name: 'Cover',         Component: Slide1Cover },
  { name: 'Understanding', Component: Slide2Understanding },
  { name: 'Agenda',        Component: Slide3Purpose },
  { name: 'Approach',      Component: Slide4Spine },
  { name: 'Task Pipeline', Component: Slide5TaskPipeline },
  { name: 'Pilot',         Component: Slide6Pilot },
  { name: 'Timeline',      Component: Slide7Timeline },
  { name: 'Inputs',        Component: Slide8Inputs },
  { name: 'Roles',         Component: Slide9Roles },
  { name: 'Commercials',   Component: Slide10Commercials },
  { name: 'Decisions',     Component: Slide11Close },
]

const appendixSlides = {
  A1: AppendixA1Anatomy,
  A2: AppendixA2Scope,
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [appendixOpen, setAppendixOpen] = useState(null)

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0))
  const openAppendix = (key) => setAppendixOpen(key)
  const closeAppendix = () => setAppendixOpen(null)
  const goToSlide = (index) => { setCurrentSlide(index); setAppendixOpen(null) }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (appendixOpen) {
        if (e.key === 'Escape') { e.preventDefault(); closeAppendix() }
        return
      }
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide() }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [appendixOpen])

  return (
    <div className="presentation-container">

      <div className="nav">
        <a href="https://toloka.ai" target="_blank" rel="noopener noreferrer" className="nav-brand" aria-label="Toloka">
          <img src={`${import.meta.env.BASE_URL}toloka-logo.svg`} alt="Toloka" />
        </a>
        <div className="nav-tabs">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`nav-tab ${index === currentSlide && !appendixOpen ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              {index + 1}. {slide.name}
            </button>
          ))}
          {appendixOpen && (
            <button
              className="nav-tab active"
              onClick={closeAppendix}
              title="Close appendix (Esc)"
              style={{ background: 'var(--accent-orange)' }}
            >
              {appendixOpen} ✕
            </button>
          )}
        </div>
      </div>

      <div className="slides-viewport">
        {slides.map((slide, index) => {
          const SlideComponent = slide.Component
          const isActive = index === currentSlide && !appendixOpen
          return (
            <div key={index} className={`slide-wrapper ${isActive ? 'active' : ''}`}>
              <SlideErrorBoundary>
                <SlideComponent onOpenAppendix={openAppendix} />
              </SlideErrorBoundary>
            </div>
          )
        })}
        {Object.entries(appendixSlides).map(([key, AppendixComponent]) => (
          <div key={key} className={`slide-wrapper ${appendixOpen === key ? 'active' : ''}`}>
            <SlideErrorBoundary>
              <AppendixComponent onClose={closeAppendix} />
            </SlideErrorBoundary>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
