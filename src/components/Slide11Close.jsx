import React from 'react'
import { CheckCircle2, ArrowRight, FileSignature, Plug, ShieldCheck } from 'lucide-react'

export default function Slide11Close() {
  const decisions = [
    {
      icon: FileSignature,
      question: 'Who authors the policy?',
      recommend: 'Toloka drafts realistic Food Delivery policies; Client signs off and supplies real rules if it has them.',
      cost: '~2 weeks of policy ping-pong before any build can start.',
    },
    {
      icon: Plug,
      question: 'Who owns the integration interface?',
      recommend: 'Client owns the spec of its training stack; Toloka builds the adapter to it.',
      cost: 'Environment build runs speculative; rework risk on first integration test.',
    },
    {
      icon: ShieldCheck,
      question: 'Who runs ongoing evaluation?',
      recommend: 'Toloka runs evaluation as a service — hidden hold-outs, anti-gaming, pass-rate reporting.',
      cost: 'Hand-over weakens benchmark integrity; saturation goes undetected.',
    },
  ]

  const nextSteps = [
    { week: 'Week 1', title: 'Scoping memo + non-negotiables', owner: 'Toloka' },
    { week: 'Week 1–2', title: 'Stage-gates & work-allocation matrix signed', owner: 'Joint' },
    { week: 'Week 2', title: 'SOW & cost re-baseline', owner: 'Toloka' },
    { week: 'Week 2–3', title: 'Legal & Finance pass', owner: 'Joint' },
    { week: 'Week 3', title: 'Kick-off scheduled with client team', owner: 'Client' },
  ]

  const ownerColor = {
    Toloka: 'var(--accent-blue)',
    Joint: 'var(--accent-coral)',
    Client: 'var(--text-heading)',
  }

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between', gap: '1rem' }}>
      <div>
        <div className="section-eyebrow">Decisions &amp; next steps</div>
        <h1 style={{ fontSize: '2.3rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1, margin: 0 }}>
          Three decisions today &nbsp;→&nbsp; draft SOW in 48 hours &nbsp;→&nbsp; kick-off in 2–3 weeks
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.55rem', maxWidth: '70rem' }}>
          Defaults below are what we recommend so the call doesn&apos;t reopen them. Confirming the three saves ~2 weeks before any build starts.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '1.1rem', flex: 1, minHeight: 0 }}>
        {/* LEFT: Decisions today */}
        <div
          className="toloka-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg-callout-green)',
            borderColor: 'rgba(3, 109, 85, 0.25)',
            padding: '1rem 1.1rem',
            gap: '0.6rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--accent-green)" />
            <span className="section-eyebrow" style={{ color: 'var(--accent-green)', marginBottom: 0 }}>
              Decide today · 3 questions
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', flex: 1 }}>
            {decisions.map((d, i) => {
              const Icon = d.icon
              return (
                <div
                  key={d.question}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.6rem 1fr',
                    gap: '0.65rem',
                    padding: '0.7rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.72)',
                    border: '1px solid rgba(3, 109, 85, 0.18)',
                    borderRadius: '0.55rem',
                  }}
                >
                  <div
                    style={{
                      width: '1.6rem',
                      height: '1.6rem',
                      borderRadius: '0.4rem',
                      background: 'var(--accent-green)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Icon size={15} color="var(--accent-green)" />
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                        {d.question}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', lineHeight: 1.35, color: 'var(--text-primary)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--accent-green)' }}>Recommend: </span>
                      {d.recommend}
                    </div>
                    <div style={{ fontSize: '0.78rem', lineHeight: 1.35, color: 'var(--text-secondary)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--accent-coral)' }}>If not settled: </span>
                      {d.cost}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT: Next steps timeline */}
        <div
          className="toloka-card"
          style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.1rem', gap: '0.6rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowRight size={18} color="var(--accent-blue)" />
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>
              Next 1–3 weeks · 5 milestones
            </span>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {/* vertical rail */}
            <div
              style={{
                position: 'absolute',
                left: '0.55rem',
                top: '0.5rem',
                bottom: '0.5rem',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--accent-blue), var(--border-light))',
                opacity: 0.35,
                borderRadius: '2px',
              }}
            />
            {nextSteps.map((s) => (
              <div
                key={s.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2rem 1fr auto',
                  gap: '0.6rem',
                  alignItems: 'center',
                  padding: '0.55rem 0.7rem 0.55rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '0.7rem',
                    height: '0.7rem',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: `2px solid ${ownerColor[s.owner]}`,
                    boxShadow: '0 0 0 3px var(--bg-card)',
                    margin: '0 auto',
                    zIndex: 1,
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-blue)',
                    }}
                  >
                    {s.week}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    {s.title}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '0.3rem',
                    color: ownerColor[s.owner],
                    border: `1px solid ${ownerColor[s.owner]}`,
                    background: '#FFFFFF',
                  }}
                >
                  {s.owner}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '0.55rem',
              marginTop: '0.15rem',
            }}
          >
            <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>One ask: </span>
            a kick-off date held in calendars by end of Week 1. Everything else, Toloka drives.
          </div>
        </div>
      </div>

      {/* Bottom value strip — replaces the plea */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto 1fr auto 1fr auto',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.9rem 1.4rem',
          background: 'var(--accent-blue)',
          borderRadius: '0.75rem',
          color: '#FFFFFF',
        }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, color: '#FFFFFF' }}>
          What today unlocks
        </span>
        <Stat label="Pilot duration" value="10–14 weeks" />
        <Divider />
        <Stat label="Pilot investment" value="$370–620k" />
        <Divider />
        <Stat label="Benchmark tasks" value="50–100" />
        <Divider />
        <Stat label="First RL signal" value="≤ 14 weeks" />
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0 }}>
      <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.78, color: '#FFFFFF' }}>
        {label}
      </span>
      <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.01em', color: '#FFFFFF', lineHeight: 1.15 }}>
        {value}
      </span>
    </div>
  )
}

function Divider() {
  return (
    <span
      aria-hidden
      style={{
        width: '1px',
        height: '2rem',
        background: 'rgba(255, 255, 255, 0.28)',
      }}
    />
  )
}
