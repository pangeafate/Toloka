import React from 'react'

export default function Slide5Timeline() {
  const gates = [
    { label: 'Kick-off',           week: 'W0',     phase: 'pre' },
    { label: 'Build',              week: 'W2–7',   phase: 'pre' },
    { label: 'First runnable build', week: 'W5',   phase: 'pre' },
    { label: 'First scored tasks', week: 'W7',     phase: 'pre' },
    { label: 'Four numbers measured', week: 'W10', phase: 'pre' },
    { label: 'Pilot gate',         week: 'W12',    phase: 'gate' },
    { label: 'Scaling phase',      week: 'W13–22', phase: 'post' },
    { label: 'Delivery',           week: 'W22+',   phase: 'post' },
  ]

  const modules = [
    { id: 'M1', name: 'Discovery & requirements alignment', weeks: 2,  phase: 'pilot' },
    { id: 'M2', name: 'Environment & evaluator build',      weeks: 5,  phase: 'pilot' },
    { id: 'M3', name: 'Benchmark tasks & QA',               weeks: 3,  phase: 'pilot' },
    { id: 'M4', name: 'RL/SFT validation',                  weeks: 2,  phase: 'pilot' },
    { id: 'M5', name: 'Scaling within Food Delivery',       weeks: 10, phase: 'scaling' },
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
          From kick-off to delivery
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.5rem', maxWidth: '50rem' }}>
          Indicative weeks from kick-off. The pilot gate is when the cost range becomes a firm number.
        </p>
      </div>

      <div style={{ padding: '1.25rem 0 0.75rem' }}>
        {/* Module bands row (weighted by duration) */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.1rem' }}>
          {modules.map((m) => {
            const isPilot = m.phase === 'pilot'
            const isScaling = m.phase === 'scaling'
            return (
              <div
                key={m.id + m.name}
                style={{
                  flex: m.weeks,
                  minWidth: 0,
                  background: isPilot
                    ? 'rgba(0, 105, 255, 0.08)'
                    : isScaling
                      ? 'rgba(3, 109, 85, 0.10)'
                      : 'rgba(3, 109, 85, 0.04)',
                  border: `1px solid ${isPilot ? 'rgba(0,105,255,0.25)' : 'rgba(3,109,85,0.25)'}`,
                  borderRadius: '0.45rem',
                  padding: '0.45rem 0.55rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: isPilot ? 'var(--accent-blue)' : 'var(--accent-green)', letterSpacing: '-0.02em' }}>
                    {m.id}
                  </span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {m.weeks}w
                  </span>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2, overflow: 'hidden' }}>
                  {m.name}
                </span>
              </div>
            )
          })}
        </div>

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
                  Cost range becomes firm
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="toloka-card-flat" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-blue)' }}>
            Pilot phase · W0–W12 · Modules 1–4
          </span>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            Fixed price. Build the first version, run the four measurements, hand back calibrated numbers and a clear go / adjust decision.
          </p>
        </div>
        <div className="toloka-card-flat" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-green)' }}>
            Scaling phase · W13–22 · Module 5
          </span>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            Cost range becomes a firm number using the pilot&rsquo;s measurements. Volume scales, the per-task cost drops.
          </p>
        </div>
      </div>
    </div>
  )
}
