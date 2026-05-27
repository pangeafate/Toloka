import React from 'react'
import { FileCode2, Library, Users, Stamp, AlertTriangle, Network, RefreshCw, ArrowUpRight } from 'lucide-react'

export default function Slide8Inputs({ onOpenAppendix }) {
  const inputs = [
    {
      icon: FileCode2,
      n: '01',
      title: 'Technical interface spec for the training stack',
      sub: 'Tool signatures, env reset semantics, episode boundaries.',
      by: 'Within 2 weeks of kick-off',
    },
    {
      icon: Library,
      n: '02',
      title: 'Access to source policy material',
      sub: 'Operational SOPs, edge-case handbooks, current escalation rules.',
      by: 'Week 1',
    },
    {
      icon: Users,
      n: '03',
      title: 'Named SMEs with weekly hours',
      sub: '2–3 named operators, ~6 hrs/week each, for policy resolution.',
      by: 'Before kick-off',
    },
    {
      icon: Stamp,
      n: '04',
      title: 'Sign-off authority on policy edge cases',
      sub: 'One named approver who can resolve ambiguities inside one business day.',
      by: 'Before kick-off',
    },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">What we need from you</div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          Inputs that <span style={{ color: 'var(--accent-blue)' }}>gate kick-off</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Each line carries an owner and a by-when date before we leave this slide.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {inputs.map((i) => {
          const Icon = i.icon
          return (
            <div
              key={i.n}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto auto',
                alignItems: 'center',
                gap: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(0, 105, 255, 0.08)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={18} color="var(--accent-blue)" />
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-blue)', letterSpacing: '-0.04em' }}>{i.n}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>{i.title}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{i.sub}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>By when</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{i.by}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Owner</span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    padding: '0.15rem 0.6rem',
                    border: '1px dashed var(--border-light)',
                    borderRadius: '0.35rem',
                    fontStyle: 'italic',
                  }}
                >
                  to assign
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <DecisionCard
            icon={Network}
            eyebrow="Scope decision"
            title="How many parties do we simulate?"
            body="Food Delivery has four — Users · Restaurants · Couriers · Platforms. Each one we include adds workflow surface and cost. Pilot locks how many and to what depth; rest defers to scaling."
            appendixKey="A2"
            appendixLabel="A2 · scope detail"
            onOpenAppendix={onOpenAppendix}
          />
          <DecisionCard
            icon={RefreshCw}
            eyebrow="Commercial decision"
            title="Evaluation-as-a-service: yes or no?"
            body="Toloka maintains benchmark integrity, hidden eval, and anti-gaming on an ongoing basis — rather than handing the eval set over at delivery. Changes Slide 10."
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.9rem 1.25rem',
            background: 'rgba(255, 140, 95, 0.10)',
            border: '1px solid rgba(255, 140, 95, 0.30)',
            borderRadius: '0.625rem',
          }}
        >
          <AlertTriangle size={18} color="var(--accent-coral)" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, margin: 0 }}>
            <strong style={{ color: 'var(--accent-coral)' }}>Honest framing:</strong> if these slip, kick-off slips equivalently — said plainly because it matters.
          </p>
        </div>
      </div>
    </div>
  )
}

function DecisionCard({ icon: Icon, eyebrow, title, body, appendixKey, appendixLabel, onOpenAppendix }) {
  const hasAppendix = Boolean(appendixKey && onOpenAppendix)
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-blue)',
        borderRadius: '0.625rem',
        padding: '0.85rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon size={14} color="var(--accent-blue)" />
        <span
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-blue)',
          }}
        >
          {eyebrow}
        </span>
      </div>
      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>
        {title}
      </span>
      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
        {body}
      </span>
      {hasAppendix && (
        <button
          onClick={() => onOpenAppendix(appendixKey)}
          style={{
            alignSelf: 'flex-start',
            marginTop: '0.35rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.3rem 0.65rem',
            borderRadius: '999px',
            border: '1px solid var(--border-blue)',
            background: 'rgba(0,105,255,0.06)',
            color: 'var(--accent-blue)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.01em',
            cursor: 'pointer',
            font: 'inherit',
            fontFamily: 'inherit',
          }}
        >
          {appendixLabel}
          <ArrowUpRight size={11} />
        </button>
      )}
    </div>
  )
}
