import React from 'react'
import { CheckCircle2, ArrowRight, CalendarClock } from 'lucide-react'

export default function Slide10Close() {
  const decisionsToday = [
    'Pilot scope',
    'Client inputs and dates',
    'Ways of working',
    'Pilot SOW sign-off process',
    'Executive sponsor named',
  ]

  const nextSteps = [
    'Kick-off date locked',
    'Technical interface spec delivered',
    'SME calendars confirmed',
    'Pilot SOW signed',
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">Decisions &amp; next steps</div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          Today on this call · next 1–3 weeks
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', flex: 1 }}>
        <div
          className="toloka-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg-callout-green)',
            borderColor: 'rgba(3, 109, 85, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <CheckCircle2 size={18} color="var(--accent-green)" />
            <span className="section-eyebrow" style={{ color: 'var(--accent-green)', marginBottom: 0 }}>Decisions today</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {decisionsToday.map((d) => (
              <li
                key={d}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(3, 109, 85, 0.15)',
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <span>{d}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    padding: '0.15rem 0.5rem',
                    border: '1px dashed var(--border-light)',
                    borderRadius: '0.3rem',
                    background: 'rgba(255,255,255,0.7)',
                  }}
                >
                  owner · date
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="toloka-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <ArrowRight size={18} color="var(--accent-blue)" />
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>Next steps · 1–3 weeks</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {nextSteps.map((d) => (
              <li
                key={d}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <span>{d}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    padding: '0.15rem 0.5rem',
                    border: '1px dashed var(--border-light)',
                    borderRadius: '0.3rem',
                    background: '#FFFFFF',
                  }}
                >
                  owner · date
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.85rem',
          padding: '1.2rem 1.5rem',
          background: 'var(--accent-blue)',
          borderRadius: '0.75rem',
          color: '#FFFFFF',
        }}
      >
        <CalendarClock size={22} color="#FFFFFF" />
        <span style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.01em', color: '#FFFFFF' }}>
          Date for kick-off, please.
        </span>
      </div>
    </div>
  )
}
