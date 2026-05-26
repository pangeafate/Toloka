import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Slide2Purpose() {
  const pillars = [
    {
      n: '01',
      kicker: 'Scope decision',
      title: 'Pilot scope confirmed',
      lede: 'What goes into the slice — environment, tools, partial policy, the end-to-end reward loop.',
      anchors: ['Pilot SOW', '10–14 weeks', '$370–620k', '~50–100 tasks'],
      ask: 'Confirm or adjust workflow depth and policy slice in this room.',
    },
    {
      n: '02',
      kicker: 'Inputs commitment',
      title: 'Your inputs and dates agreed',
      lede: 'Four gating items — each leaves the room with a named owner and a by-when date.',
      anchors: ['Technical interface spec', 'Policy source material', 'Named SMEs', 'Sign-off authority'],
      ask: 'Owner and date on every line before we close Slide 6.',
    },
    {
      n: '03',
      kicker: 'Operating model',
      title: 'Ways of working locked',
      lede: 'Roles, cadence, and escalation — committed, not aspirational.',
      anchors: ['Toloka PM · Tech Lead · WFM', 'Weekly working · biweekly steering', '3-level escalation'],
      ask: 'Client counterparts named — technical, policy, executive sponsor.',
    },
  ]

  const agenda = [
    { block: 'Recap',       t: '5 min',  detail: 'Spine + success criteria',     slides: 'Slides 2–3' },
    { block: 'Pilot',       t: '10 min', detail: 'The slice, four numbers, gate', slides: 'Slides 4–5' },
    { block: 'How we work', t: '10 min', detail: 'Inputs, roles, cadence',        slides: 'Slides 6–7' },
    { block: 'Decisions',   t: '5 min',  detail: 'SOW pathway, kick-off date',    slides: 'Slides 8–9' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      {/* ── Header: action title + framing ─────────────────────── */}
      <div>
        <div className="section-eyebrow">Purpose &amp; agenda</div>
        <h1
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.15,
            color: 'var(--text-heading)',
            maxWidth: '72rem',
          }}
        >
          Today&rsquo;s 30 minutes turn the proposal into a signed pilot kick-off.
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
          Three commitments unlock that. Everything else &mdash; methodology, risk register, governance &mdash;
          sits in the appendix and we open it on request.
        </p>
      </div>

      {/* ── Three pillars ─────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        {pillars.map((p) => (
          <div
            key={p.n}
            className="toloka-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              borderTop: '3px solid var(--accent-blue)',
              padding: '1.35rem 1.4rem 1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
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
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                {p.kicker}
              </span>
            </div>

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

            <div
              style={{
                marginTop: '0.4rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.3rem',
                  }}
                >
                  Anchors
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {p.anchors.map((a) => (
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

              <div>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-blue)',
                    marginRight: '0.45rem',
                  }}
                >
                  Ask
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                  {p.ask}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Agenda + net outcome ──────────────────────────────── */}
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
            Agenda &middot; ~30 min
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Appendix held in reserve &mdash; 13 deep dives indexed at A0, pulled up on request
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
          <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>Net outcome from today</span>
          <ArrowRight size={14} color="var(--accent-blue)" />
          <span style={{ color: 'var(--text-primary)' }}>
            kick-off date locked &middot; pilot SOW signature pathway clear
          </span>
        </div>
      </div>
    </div>
  )
}
