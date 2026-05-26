import React from 'react'
import {
  Database,
  Wrench,
  Brain,
  UserRound,
  Target,
  ArrowUpRight,
} from 'lucide-react'

export default function Slide3Spine({ onOpenAppendix }) {
  const nodes = [
    { icon: UserRound, label: 'Simulated customer', annotation: 'Goal-driven user model' },
    { icon: Brain,     label: 'Policy',             annotation: 'Agent under training' },
    { icon: Wrench,    label: 'Tools',              annotation: 'Stateful APIs' },
    { icon: Database,  label: 'Resettable env',     annotation: 'State + reset' },
    { icon: Target,    label: 'Reward logic',       annotation: 'Scored evaluator' },
  ]

  const arrows = ['dialogue', 'tool calls', 'state mutation', 'trajectory']

  const criteria = [
    { label: 'Accepted task volume',     target: '≥ 50 in pilot · 200–300 scaled', emphasis: true },
    { label: 'Pass^k consistency',       target: '≥ 80% at k=3, held-out',         emphasis: true },
    { label: 'Reward signal reliability', target: '≤ 5% mis-score, audit set' },
    { label: 'Policy coverage depth',    target: '≥ 90% policy paths exercised' },
    { label: 'Eval-set freshness',       target: '≥ 20% novel tasks / cycle' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between', gap: '1.25rem' }}>
      {/* ─── Header ─── */}
      <div>
        <div className="section-eyebrow">Approach</div>
        <h1
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.18,
            color: 'var(--text-heading)',
            maxWidth: '76rem',
          }}
        >
          A <span style={{ color: 'var(--accent-blue)' }}>Tau-bench compatible</span> Food Delivery
          RL environment — five working parts, five measured outcomes.
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginTop: '0.55rem',
            maxWidth: '70rem',
            lineHeight: 1.5,
          }}
        >
          Workflows, policies, and tasks are bespoke per domain — everything else reuses from domain two
          onwards. Accepted-task trajectories double as <strong style={{ color: 'var(--text-primary)' }}>SFT
          warm-start data</strong> — secondary deliverable, no extra authoring cost.
        </p>
      </div>

      {/* ─── System architecture ─── */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '0.85rem',
          }}
        >
          <div className="section-eyebrow" style={{ marginBottom: 0 }}>
            What we deliver · system architecture
          </div>
          <button
            onClick={() => onOpenAppendix && onOpenAppendix('A1')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.7rem',
              borderRadius: '999px',
              border: '1px solid var(--border-blue)',
              background: 'rgba(0,105,255,0.06)',
              color: 'var(--accent-blue)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            A1 · anatomy walk-through
            <ArrowUpRight size={11} />
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.45fr 1fr 0.45fr 1fr 0.45fr 1fr 0.45fr 1fr',
            alignItems: 'stretch',
            gap: '0.3rem',
          }}
        >
          {nodes.map((node, i) => (
            <React.Fragment key={node.label}>
              <FlowNode {...node} />
              {i < nodes.length - 1 && <FlowArrow label={arrows[i]} />}
            </React.Fragment>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginTop: '0.7rem',
            fontStyle: 'italic',
            lineHeight: 1.45,
          }}
        >
          Plugs into your existing Tau-bench tooling — comparable metrics, reusable task structures,
          standardised tool formats.
        </p>
      </div>

      {/* ─── Success criteria with quantified targets ─── */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '0.55rem',
          }}
        >
          <div className="section-eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
            Measured by
          </div>
          <span
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}
          >
            Target thresholds · firmed at SOW
          </span>
        </div>
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
                padding: '0.75rem 0.95rem',
                background: c.emphasis ? 'var(--bg-callout-green)' : 'var(--bg-secondary)',
                border: `1px solid ${c.emphasis ? 'rgba(3,109,85,0.28)' : 'var(--border-light)'}`,
                borderRadius: '0.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: c.emphasis ? 'var(--accent-green)' : 'var(--text-muted)',
                }}
              >
                {c.emphasis ? 'Primary' : 'Supporting'}
              </span>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                {c.label}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: c.emphasis ? 'var(--accent-green)' : 'var(--text-secondary)',
                  lineHeight: 1.35,
                  marginTop: '0.1rem',
                }}
              >
                {c.target}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FlowNode({ icon: Icon, label, annotation }) {
  return (
    <div
      className="toloka-card-flat"
      style={{
        padding: '1.4rem 0.85rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.65rem',
        textAlign: 'center',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <span
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '0.7rem',
          background: 'rgba(0,105,255,0.08)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={22} color="var(--accent-blue)" />
      </span>
      <span
        style={{
          fontSize: '0.98rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          lineHeight: 1.35,
        }}
      >
        {annotation}
      </span>
    </div>
  )
}

function FlowArrow({ label }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem',
        minWidth: 0,
      }}
    >
      <svg
        width="100%"
        height="14"
        viewBox="0 0 100 14"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <line x1="2" y1="7" x2="90" y2="7" stroke="var(--accent-blue)" strokeWidth="1.5" />
        <polygon points="90,2 98,7 90,12" fill="var(--accent-blue)" />
      </svg>
      <span
        style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          lineHeight: 1.2,
          textAlign: 'center',
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </span>
    </div>
  )
}
