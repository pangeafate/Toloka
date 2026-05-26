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

class SlideErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err) { console.warn('Slide error caught:', err) }
  render() { return this.state.hasError ? null : this.props.children }
}

const slides = [
  { name: 'Cover',       component: <Slide1Cover /> },
  { name: 'Agenda',      component: <Slide2Purpose /> },
  { name: 'Approach',    component: <Slide3Spine /> },
  { name: 'Pilot',       component: <Slide4Pilot /> },
  { name: 'Timeline',    component: <Slide5Timeline /> },
  { name: 'Inputs',      component: <Slide6Inputs /> },
  { name: 'Roles',       component: <Slide7Roles /> },
  { name: 'Commercials', component: <Slide8Commercials /> },
  { name: 'Decisions',   component: <Slide9Close /> },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0))

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide() }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
              className={`nav-tab ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              {index + 1}. {slide.name}
            </button>
          ))}
        </div>
      </div>

      <div className="slides-viewport">
        {slides.map((slide, index) => (
          <div key={index} className={`slide-wrapper ${index === currentSlide ? 'active' : ''}`}>
            <SlideErrorBoundary>{slide.component}</SlideErrorBoundary>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
