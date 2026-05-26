import React from 'react'
import { Database, Wrench, FileText, UserRound, Target, ArrowUpRight } from 'lucide-react'

export default function Slide3Spine({ onOpenAppendix }) {
  const components = [
    { icon: Database,   label: 'Resettable environment' },
    { icon: Wrench,     label: 'Tools' },
    { icon: FileText,   label: 'Policy' },
    { icon: UserRound,  label: 'Simulated customer' },
    { icon: Target,     label: 'Reward logic' },
  ]

  const criteria = [
    { label: 'Accepted task volume',     emphasis: true },
    { label: 'Pass^k consistency',       emphasis: true },
    { label: 'Reward signal reliability' },
    { label: 'Policy coverage depth' },
    { label: 'Eval-set freshness' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">Approach</div>
        <h1
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.2,
            color: 'var(--text-heading)',
            maxWidth: '74rem',
          }}
        >
          What we are building, and how we measure that it works.
        </h1>
        <p
          style={{
            fontSize: '1.02rem',
            color: 'var(--text-secondary)',
            marginTop: '0.55rem',
            maxWidth: '64rem',
            lineHeight: 1.5,
          }}
        >
          A Food Delivery environment for training and evaluation. Built to plug into your existing
          Tau-bench ecosystem — comparable metrics, reusable task structures, standardised tool formats.
          And built so the next domain costs less.
        </p>
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
          <div className="section-eyebrow">What we deliver</div>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.45 }}>
            A <strong style={{ color: 'var(--accent-blue)' }}>Tau-bench compatible</strong> Food Delivery environment,
            made of five working parts:
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
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginTop: '0.85rem',
              lineHeight: 1.45,
              fontStyle: 'italic',
            }}
          >
            Primary use is RL. Accepted tasks ship with reference trajectories that double as
            <strong style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}> SFT warm-start data</strong>
            &nbsp;— secondary deliverable, no extra authoring cost.
          </p>
          <button
            onClick={() => onOpenAppendix && onOpenAppendix('A1')}
            style={{
              marginTop: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '999px',
              border: '1px solid var(--border-blue)',
              background: 'rgba(0,105,255,0.06)',
              color: 'var(--accent-blue)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              cursor: 'pointer',
              font: 'inherit',
              fontFamily: 'inherit',
            }}
          >
            A1 · anatomy walk-through
            <ArrowUpRight size={12} />
          </button>
        </div>

        <div className="toloka-card-flat" style={{ padding: '1.75rem 2rem' }}>
          <div className="section-eyebrow">Why the first domain costs more</div>
          <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            The first domain pays for the
            <strong style={{ color: 'var(--accent-blue)' }}> reusable build</strong>.
            Each next domain reuses it and costs less.
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
                {c.emphasis ? 'Primary' : 'Supporting'}
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
