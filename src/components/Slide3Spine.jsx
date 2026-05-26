import React from 'react'
import { Database, Wrench, FileText, UserRound, Target } from 'lucide-react'

export default function Slide3Spine() {
  const components = [
    { icon: Database,   label: 'Resettable world' },
    { icon: Wrench,     label: 'Tools' },
    { icon: FileText,   label: 'Policy' },
    { icon: UserRound,  label: 'Simulated customer' },
    { icon: Target,     label: 'Reward logic' },
  ]

  const criteria = [
    { label: 'Accepted task volume', emphasis: true },
    { label: 'Pass^k stability',     emphasis: true },
    { label: 'Reward signal reliability' },
    { label: 'Policy coverage depth' },
    { label: 'Eval-set freshness' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">Spine</div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.15 }}>
          One organising idea:
        </h1>
        <h2
          style={{
            fontSize: '3.4rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            marginTop: '0.5rem',
            color: 'var(--accent-blue)',
            maxWidth: '50rem',
          }}
        >
          For RL, data quality is reward quality.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div
          className="toloka-card-flat"
          style={{
            background: 'var(--bg-secondary)',
            padding: '1.75rem 2rem',
          }}
        >
          <div className="section-eyebrow">The deliverable, one line</div>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.45 }}>
            A Food Delivery environment in the <strong style={{ color: 'var(--accent-blue)' }}>Tau-bench style</strong> —
            resettable world, tools, policy, simulated customer, reward logic.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {components.map((c) => {
              const Icon = c.icon
              return (
                <span key={c.label} className="toloka-pill blue">
                  <Icon size={12} /> {c.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className="toloka-card-flat" style={{ padding: '1.75rem 2rem' }}>
          <div className="section-eyebrow">Position</div>
          <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            <strong>One domain of several</strong>, built on a
            <strong style={{ color: 'var(--accent-blue)' }}> reusable factory</strong>.
            The first costs more; each next one costs less.
          </p>
        </div>
      </div>

      <div>
        <div className="section-eyebrow" style={{ color: 'var(--text-muted)' }}>Success criteria</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.5rem',
          }}
        >
          {criteria.map((c) => (
            <div
              key={c.label}
              style={{
                padding: '0.85rem 1rem',
                background: c.emphasis ? 'var(--bg-callout-green)' : 'var(--bg-secondary)',
                border: `1px solid ${c.emphasis ? 'rgba(3,109,85,0.25)' : 'var(--border-light)'}`,
                borderRadius: '0.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.emphasis ? 'var(--accent-green)' : 'var(--text-muted)' }}>
                {c.emphasis ? 'Driver' : 'Quality'}
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
