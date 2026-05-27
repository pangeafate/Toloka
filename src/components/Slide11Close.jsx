import React from 'react'
import { CheckCircle2, ArrowRight, FileSignature, Plug, ShieldCheck } from 'lucide-react'

export default function Slide11Close() {
  const decisions = [
    {
      icon: FileSignature,
      question: 'Who authors the policy?',
      recommend: 'Toloka drafts realistic Food Delivery policies; Client signs off and supplies real rules if it has them.',
    },
    {
      icon: Plug,
      question: 'Who owns the integration interface?',
      recommend: 'Client owns the spec of its training stack; Toloka builds the adapter to it.',
    },
    {
      icon: ShieldCheck,
      question: 'Who runs ongoing evaluation?',
      recommend: 'Toloka runs evaluation as a service — hidden hold-outs, anti-gaming, pass-rate reporting.',
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
                    <div style={{ fontSize: '0.88rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--accent-green)' }}>Recommend: </span>
                      {d.recommend}
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

        </div>
      </div>

      {/* Bottom value strip — what today's decisions unlock */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
          padding: '1rem 1.6rem',
          background: 'var(--accent-blue)',
          borderRadius: '0.75rem',
          color: '#FFFFFF',
        }}
      >
        <Stat label="Pilot duration" value="10–14 weeks" />
        <Stat label="Pilot investment" value="$370–620k" divider />
        <Stat label="Benchmark tasks" value="50–100" divider />
        <Stat label="First RL signal" value="≤ 14 weeks" divider />
      </div>
    </div>
  )
}

function Stat({ label, value, divider }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.15rem',
        paddingLeft: divider ? '1.4rem' : 0,
        borderLeft: divider ? '1px solid rgba(255, 255, 255, 0.22)' : 'none',
      }}
    >
      <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.82, color: '#FFFFFF' }}>
        {label}
      </span>
      <span style={{ fontSize: '1.55rem', fontWeight: 800, letterSpacing: '-0.01em', color: '#FFFFFF', lineHeight: 1.1 }}>
        {value}
      </span>
    </div>
  )
}
