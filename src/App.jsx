import { useState, useEffect, Component } from 'react'

import Slide1Cover from './components/Slide1Cover'
import Slide2Purpose from './components/Slide2Purpose'
import Slide3Spine from './components/Slide3Spine'
import Slide4Pilot from './components/Slide4Pilot'
import Slide5Timeline from './components/Slide5Timeline'
import Slide6Inputs from './components/Slide6Inputs'
import Slide7Roles from './components/Slide7Roles'
import Slide8Commercials from './components/Slide8Commercials'
import Slide9Close from './components/Slide9Close'

import AppendixA1Anatomy from './components/appendix/AppendixA1Anatomy'
import AppendixA2Scope from './components/appendix/AppendixA2Scope'

class SlideErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err) { console.warn('Slide error caught:', err) }
  render() { return this.state.hasError ? null : this.props.children }
}

const slides = [
  { name: 'Cover',       Component: Slide1Cover },
  { name: 'Agenda',      Component: Slide2Purpose },
  { name: 'Approach',    Component: Slide3Spine },
  { name: 'Pilot',       Component: Slide4Pilot },
  { name: 'Timeline',    Component: Slide5Timeline },
  { name: 'Inputs',      Component: Slide6Inputs },
  { name: 'Roles',       Component: Slide7Roles },
  { name: 'Commercials', Component: Slide8Commercials },
  { name: 'Decisions',   Component: Slide9Close },
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
