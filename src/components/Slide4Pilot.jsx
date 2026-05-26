import React from 'react'
import { Compass, Box, Gauge, Clock, HandMetal } from 'lucide-react'

export default function Slide4Pilot() {
  const requirementCategories = [
    'Architectural',
    'Domain-specific',
    'Training & eval',
    'Scalability',
    'Infrastructure',
  ]

  const buildSlice = [
    'A small set of databases',
    'A small set of tools',
    'Part of the full business policy',
    'A complete reward loop, end to end',
    '50–100 accepted benchmark tasks',
  ]

  const numbers = [
    { label: 'Acceptance rate',    sub: '% of authored tasks passing all 8 gates', role: 'driver' },
    { label: 'Policy complexity',  sub: 'Branching depth per task',                  role: 'driver' },
    { label: 'Ambiguity rate',     sub: '% requiring SME clarification',             role: 'driver' },
    { label: 'Signal reliability', sub: 'Reward variance under perturbation',        role: 'gate'   },
  ]

  const deliverables = [
    'A working version, end to end',
    'Reward stress-test',
    'QA + baseline-agent report',
    'Calibrated numbers for scaling',
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between', gap: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div className="section-eyebrow">Pilot</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Four modules over <span style={{ color: 'var(--accent-blue)' }}>10–14 weeks</span>
          </h1>
        </div>
        <span className="toloka-pill orange">
          <Clock size={12} /> The pilot turns the cost range into a firm number
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', flex: 1 }}>

        <Quadrant
          icon={Compass}
          eyebrow="Module 1 · Discovery & requirements alignment · 2–3 wks"
          color="var(--accent-blue)"
        >
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            Agree the project requirements with you across five categories before any code is written:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.6rem' }}>
            {requirementCategories.map((c) => (
              <span key={c} className="toloka-pill blue" style={{ fontSize: '0.72rem' }}>{c}</span>
            ))}
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.65rem', lineHeight: 1.4, fontStyle: 'italic' }}>
            Output: workflow map · policy map · API/tool spec · benchmark taxonomy · environment architecture.
          </p>
        </Quadrant>

        <Quadrant
          icon={Box}
          eyebrow="Modules 2–4 · Build, tasks, validation · ~8–11 wks"
          color="var(--accent-coral)"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {buildSlice.map((b) => (
              <li
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.92rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                <span style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: 'var(--accent-coral)' }} />
                {b}
              </li>
            ))}
          </ul>
        </Quadrant>

        <Quadrant
          icon={Gauge}
          eyebrow="Four numbers measured"
          color="var(--accent-green)"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {numbers.map((n, i) => {
              const isDriver = n.role === 'driver'
              return (
                <div
                  key={n.label}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0.5rem',
                    padding: '0.6rem 0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-green)', letterSpacing: '0.08em' }}>
                      N{(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '0.25rem',
                        background: isDriver ? 'rgba(0,105,255,0.10)' : 'rgba(3,109,85,0.12)',
                        color: isDriver ? 'var(--accent-blue)' : 'var(--accent-green)',
                        border: `1px solid ${isDriver ? 'rgba(0,105,255,0.25)' : 'rgba(3,109,85,0.25)'}`,
                      }}
                    >
                      {isDriver ? 'Cost driver' : 'Quality gate'}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{n.label}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{n.sub}</span>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.55rem', lineHeight: 1.4, fontStyle: 'italic' }}>
            Four measured · three drive the commercial range · one is the quality gate. Picked up again on Slide 8.
          </p>
        </Quadrant>

        <Quadrant
          icon={HandMetal}
          eyebrow="Ask in the room · what you receive at the gate"
          color="var(--accent-blue)"
          highlight
        >
          <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 500 }}>
            <strong>Confirm the scope of this first build</strong>, or adjust it now.
          </p>
          <div style={{ marginTop: '0.65rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(3,109,85,0.2)' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-green)', display: 'block', marginBottom: '0.35rem' }}>
              You receive at the pilot gate
            </span>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem 0.85rem' }}>
              {deliverables.map((d) => (
                <li
                  key={d}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span style={{ width: '0.35rem', height: '0.35rem', borderRadius: '50%', background: 'var(--accent-green)' }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Quadrant>

      </div>
    </div>
  )
}

function Quadrant({ icon: Icon, eyebrow, color, children, highlight }) {
  return (
    <div
      className="toloka-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
        background: highlight ? 'var(--bg-callout-green)' : 'var(--bg-card)',
        borderColor: highlight ? 'rgba(3,109,85,0.25)' : 'var(--border-light)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={16} color={color} />
        </span>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color, lineHeight: 1.25 }}>
          {eyebrow}
        </span>
      </div>
      <div>{children}</div>
    </div>
  )
}
