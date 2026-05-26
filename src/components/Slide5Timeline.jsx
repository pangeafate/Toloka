import React from 'react'

export default function Slide5Timeline() {
  const gates = [
    { label: 'Kick-off',         week: 'W0',     phase: 'pre' },
    { label: 'Build',            week: 'W1–4',   phase: 'pre' },
    { label: 'First runnable',   week: 'W5',     phase: 'pre' },
    { label: 'First scored tasks', week: 'W7',   phase: 'pre' },
    { label: 'Measured numbers', week: 'W10',    phase: 'pre' },
    { label: 'Pilot gate',       week: 'W12',    phase: 'gate' },
    { label: 'Scaling phase',    week: 'W13–24', phase: 'post' },
    { label: 'Delivery',         week: 'W24+',   phase: 'post' },
  ]

  const gateIndex = gates.findIndex(g => g.phase === 'gate')
  // Position of gate center within the line span (which goes from first dot center to last dot center)
  // Each column center is at (i + 0.5) / gates.length
  // Line span starts at 0.5 / gates.length and ends at (gates.length - 0.5) / gates.length
  // Gate position within span = ((gateIndex + 0.5) - 0.5) / (gates.length - 1) = gateIndex / (gates.length - 1)
  const gatePct = (gateIndex / (gates.length - 1)) * 100

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">Timeline</div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          Where the range <span style={{ color: 'var(--accent-blue)' }}>collapses</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.5rem', maxWidth: '50rem' }}>
          Indicative weeks from kick-off. The single most important moment in the project is the pilot gate.
        </p>
      </div>

      <div style={{ padding: '2rem 0' }}>
        {/* Week labels row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gates.length}, 1fr)`,
            marginBottom: '0.65rem',
          }}
        >
          {gates.map((g) => (
            <div key={g.label + '-w'} style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: g.phase === 'gate' ? 'var(--accent-orange)' : 'var(--text-muted)',
                }}
              >
                {g.week}
              </span>
            </div>
          ))}
        </div>

        {/* Dots + line row */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: `repeat(${gates.length}, 1fr)`,
            alignItems: 'center',
            minHeight: '3rem',
            marginBottom: '0.85rem',
          }}
        >
          {/* The connecting line, behind the dots */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `calc(50% / ${gates.length})`,
              right: `calc(50% / ${gates.length})`,
              transform: 'translateY(-50%)',
              height: '3px',
              borderRadius: '2px',
              background: `linear-gradient(to right,
                var(--accent-blue) 0%,
                var(--accent-blue) ${gatePct}%,
                var(--accent-green) ${gatePct}%,
                var(--accent-green) 100%)`,
              zIndex: 0,
            }}
          />

          {gates.map((g) => (
            <div
              key={g.label + '-d'}
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: g.phase === 'gate' ? '2.5rem' : '1.1rem',
                  height: g.phase === 'gate' ? '2.5rem' : '1.1rem',
                  borderRadius: '50%',
                  background: g.phase === 'gate'
                    ? '#FFFFFF'
                    : (g.phase === 'post' ? 'var(--accent-green)' : 'var(--accent-blue)'),
                  border: g.phase === 'gate'
                    ? '3px solid var(--accent-orange)'
                    : '2px solid #FFFFFF',
                  boxShadow: g.phase === 'gate'
                    ? '0 0 0 0.6rem rgba(255, 140, 95, 0.15), 0 2px 6px rgba(0,0,0,0.08)'
                    : '0 1px 3px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  color: 'var(--accent-orange)',
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {g.phase === 'gate' ? '★' : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Slide labels row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gates.length}, 1fr)`,
            gap: '0.5rem',
            alignItems: 'start',
          }}
        >
          {gates.map((g) => (
            <div
              key={g.label + '-l'}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', padding: '0 0.25rem' }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: g.phase === 'gate' ? 700 : 600,
                  color: g.phase === 'gate' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textAlign: 'center',
                  lineHeight: 1.25,
                }}
              >
                {g.label}
              </span>
              {g.phase === 'gate' && (
                <span className="toloka-pill orange" style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}>
                  Range collapses here
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="toloka-card-flat" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-blue)' }}>
            Pilot phase · W0–W12
          </span>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            Fixed price. Build the slice, run the four measurements, hand back calibrated numbers and a clear go/adjust signal.
          </p>
        </div>
        <div className="toloka-card-flat" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-green)' }}>
            Scaling phase · W13+
          </span>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            Range collapses to a firm number using the pilot's measurements. Volume scales, the factory amortises.
          </p>
        </div>
      </div>
    </div>
  )
}
