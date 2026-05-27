import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Slide3Purpose() {
  const pillars = [
    {
      n: '01',
      title: 'Pilot scope, aligned across five requirement categories',
      lede: 'What the pilot builds — 10–14 weeks, $370–620k — agreed by working through five categories of project requirements with you in Module 1.',
      includes: ['Architectural', 'Domain-specific', 'Training & eval', 'Scalability', 'Infrastructure'],
      ask: 'Confirm the category coverage and flag any non-negotiables we should know now.',
    },
    {
      n: '02',
      title: 'Inputs and dates from your side',
      lede: 'Four things we need from you to start the pilot.',
      includes: ['Technical interface spec', 'Policy source material', 'Named SMEs', 'Sign-off authority'],
      ask: 'An owner and a date for each one, before we close this call.',
    },
    {
      n: '03',
      title: 'Work allocation and ways of working',
      lede: 'Who does what on both sides, when we meet, and three work-allocation decisions to settle today.',
      includes: ['PM · Tech Lead · Workforce Manager', 'Weekly working · biweekly steering', 'Escalation: PM → Tech lead → Exec'],
      ask: 'Counterparts named, plus three work-allocation decisions: who authors policy · the integration interface · who runs ongoing evaluation.',
    },
  ]

  const agenda = [
    { block: 'Recap',       t: '5 min',  detail: 'What we are building, success criteria',     slides: 'Slides 3–4' },
    { block: 'Pilot',       t: '10 min', detail: 'What we build, what we measure, the decision point', slides: 'Slides 5–6' },
    { block: 'How we work', t: '10 min', detail: 'Your inputs, our team, how we meet',         slides: 'Slides 7–8' },
    { block: 'Decisions',   t: '5 min',  detail: 'SOW approval, kick-off date',                slides: 'Slides 9–10' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'flex-start' }}>
      {/* ── Header ──────────────────────────────────────────── */}
      <div>
        <div className="section-eyebrow">Agenda</div>
        <h1
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.2,
            color: 'var(--text-heading)',
            maxWidth: '78rem',
          }}
        >
          Scoping call: agree on pilot scope, your inputs and dates, and ways of working.
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
          Three agreements to leave the room with. The detail &mdash; methods, risks, governance &mdash;
          is in the appendix and opens when you ask.
        </p>
      </div>

      {/* ── Three pillars stacked vertically; each card split into three sections ─ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: 'auto 0' }}>
        {pillars.map((p) => (
          <div
            key={p.n}
            className="toloka-card"
            style={{
              display: 'flex',
              alignItems: 'stretch',
              borderTop: '3px solid var(--accent-blue)',
              padding: '1.1rem 1.25rem',
              gap: '1.25rem',
            }}
          >
            {/* Section 1 — Main */}
            <div style={{ flex: '1.25', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--accent-blue)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                {p.n}
              </span>

              <h3
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: 'var(--text-heading)',
                }}
              >
                {p.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {p.lede}
              </p>
            </div>

            {/* Subtle vertical divider — does not touch card edges */}
            <div
              style={{
                width: '1px',
                background: 'var(--border-subtle)',
                alignSelf: 'stretch',
                margin: '0.6rem 0',
                flexShrink: 0,
              }}
            />

            {/* Section 2 — Includes */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.4rem', justifyContent: 'center' }}>
              <div
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Includes
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {p.includes.map((a) => (
                  <span
                    key={a}
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '0.35rem',
                      padding: '0.18rem 0.5rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle vertical divider — does not touch card edges */}
            <div
              style={{
                width: '1px',
                background: 'var(--border-subtle)',
                alignSelf: 'stretch',
                margin: '0.6rem 0',
                flexShrink: 0,
              }}
            />

            {/* Section 3 — Ask */}
            <div style={{ flex: '1.1', display: 'flex', flexDirection: 'column', gap: '0.35rem', justifyContent: 'center' }}>
              <div
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-blue)',
                }}
              >
                Ask
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                {p.ask}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Agenda + outcome (hidden per request — kept in source) ──
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '0.55rem',
          }}
        >
          <span className="section-eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
            How the 30 minutes are spent
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Appendix held in reserve — 13 deep dives indexed at A0, pulled up on request
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: '0.75rem',
            padding: '0.85rem 1.25rem',
            gap: '0.75rem',
          }}
        >
          {agenda.map((a, i) => (
            <React.Fragment key={a.block}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.18rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                    {a.block}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                    {a.t}
                  </span>
                </div>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-primary)', lineHeight: 1.35 }}>
                  {a.detail}
                </span>
                <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                  {a.slides}
                </span>
              </div>
              {i < agenda.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '0.5rem',
            marginTop: '0.55rem',
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
          }}
        >
          <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>End of today</span>
          <ArrowRight size={14} color="var(--accent-blue)" />
          <span style={{ color: 'var(--text-primary)' }}>
            kick-off date set · pilot SOW ready to sign
          </span>
        </div>
      </div>
      ── end hidden section ── */}
    </div>
  )
}
