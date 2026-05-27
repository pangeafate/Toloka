import { useState, useEffect, Component } from 'react'

import Slide1Cover from './components/Slide1Cover'
import Slide2Understanding from './components/Slide2Understanding'
import Slide3Purpose from './components/Slide3Purpose'
import Slide4Spine from './components/Slide4Spine'
import Slide5Pilot from './components/Slide5Pilot'
import Slide6Timeline from './components/Slide6Timeline'
import Slide7Inputs from './components/Slide7Inputs'
import Slide8Roles from './components/Slide8Roles'
import Slide9Commercials from './components/Slide9Commercials'
import Slide10Close from './components/Slide10Close'

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
  { name: 'Pilot',         Component: Slide5Pilot },
  { name: 'Timeline',      Component: Slide6Timeline },
  { name: 'Inputs',        Component: Slide7Inputs },
  { name: 'Roles',         Component: Slide8Roles },
  { name: 'Commercials',   Component: Slide9Commercials },
  { name: 'Decisions',     Component: Slide10Close },
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
