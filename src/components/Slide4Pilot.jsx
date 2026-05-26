import React from 'react'
import { Box, Gauge, Package, Clock, HandMetal } from 'lucide-react'

export default function Slide4Pilot() {
  const buildSlice = [
    'A small set of databases',
    'A small set of tools',
    'Part of the full policy',
    'A complete reward loop, end to end',
  ]

  const numbers = [
    { label: 'Acceptance rate',    sub: '% of authored tasks passing all 8 gates' },
    { label: 'Policy complexity',  sub: 'Branching depth per task' },
    { label: 'Ambiguity rate',     sub: '% requiring SME clarification' },
    { label: 'Signal reliability', sub: 'Reward variance under perturbation' },
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
            What we build in <span style={{ color: 'var(--accent-blue)' }}>10–14 weeks</span>
          </h1>
        </div>
        <span className="toloka-pill orange">
          <Clock size={12} /> The pilot turns the cost range into a firm number
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', flex: 1 }}>

        <Quadrant
          icon={Box}
          eyebrow="What we build first"
          color="var(--accent-blue)"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {buildSlice.map((b) => (
              <li
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                <span style={{ width: '0.45rem', height: '0.45rem', borderRadius: '50%', background: 'var(--accent-blue)' }} />
                {b}
              </li>
            ))}
          </ul>
        </Quadrant>

        <Quadrant
          icon={Gauge}
          eyebrow="The four numbers it measures"
          color="var(--accent-green)"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {numbers.map((n, i) => (
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
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-green)', letterSpacing: '0.08em' }}>
                  N{(i + 1).toString().padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{n.label}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{n.sub}</span>
              </div>
            ))}
          </div>
        </Quadrant>

        <Quadrant
          icon={Package}
          eyebrow="Deliverables"
          color="var(--accent-coral)"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {deliverables.map((d) => (
              <li
                key={d}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                <span style={{ width: '0.45rem', height: '0.45rem', borderRadius: '50%', background: 'var(--accent-coral)' }} />
                {d}
              </li>
            ))}
          </ul>
        </Quadrant>

        <Quadrant
          icon={HandMetal}
          eyebrow="Ask in the room"
          color="var(--accent-blue)"
          highlight
        >
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 500 }}>
            <strong>Confirm the scope of this first build</strong>, or adjust it now.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.4 }}>
            Indicative duration <strong style={{ color: 'var(--text-primary)' }}>10–14 weeks</strong> from kick-off.
            The pilot turns the range into a firm number at the gate.
          </p>
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
        gap: '0.85rem',
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
          }}
        >
          <Icon size={16} color={color} />
        </span>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color }}>
          {eyebrow}
        </span>
      </div>
      <div>{children}</div>
    </div>
  )
}
