import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Slide2Purpose() {
  const walkouts = [
    { n: '01', text: 'Pilot scope confirmed', sub: 'What gets built in the slice — agreed.' },
    { n: '02', text: 'Inputs and dates from your side agreed', sub: 'Four gating items, owner + by-when next to each.' },
    { n: '03', text: 'Ways of working locked', sub: 'Roles, cadence, escalation — committed.' },
  ]

  const agenda = [
    { block: 'Recap',         slides: 'Slides 2–3' },
    { block: 'Pilot',         slides: 'Slides 4–5' },
    { block: 'How we work',   slides: 'Slides 6–7' },
    { block: 'Decisions',     slides: 'Slides 8–9' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">Purpose</div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>
          The three things we want to walk out with
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '50rem' }}>
          One pitch. Three confirmations. Everything else is in the appendix.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        {walkouts.map((w) => (
          <div key={w.n} className="toloka-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-blue)', letterSpacing: '-0.04em' }}>{w.n}</span>
              <CheckCircle2 size={20} color="var(--accent-green)" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3 }}>{w.text}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{w.sub}</p>
          </div>
        ))}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span className="section-eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Agenda</span>
          <span className="toloka-pill blue">~25 min on deck · 5 min Q&amp;A</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
          }}
        >
          {agenda.map((a, i) => (
            <React.Fragment key={a.block}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', flex: 1 }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{a.block}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{a.slides}</span>
              </div>
              {i < agenda.length - 1 && <ArrowRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
