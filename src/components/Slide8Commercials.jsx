import React from 'react'
import { Lock, ArrowDown, FileSignature } from 'lucide-react'

export default function Slide8Commercials() {
  const rangeDrivers = [
    'Acceptance rate',
    'Policy complexity',
    'Ambiguity rate',
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">Commercials</div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          Pilot fixed · scaling range ·<br />
          <span style={{ color: 'var(--accent-blue)' }}>pilot collapses the range</span>
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', flex: 1 }}>
        <div
          style={{
            background: 'var(--bg-callout-green)',
            border: '2px solid rgba(3, 109, 85, 0.35)',
            borderRadius: '1rem',
            padding: '1.75rem 1.85rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Lock size={16} color="var(--accent-green)" />
            <span className="section-eyebrow" style={{ color: 'var(--accent-green)', marginBottom: 0 }}>Pilot</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.3rem' }}>
            Fixed price
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.45, marginTop: '0.6rem' }}>
            10–14 weeks. One slice, end-to-end. Deliverables and four measured numbers, on a known budget.
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span className="toloka-pill green">Runnable slice</span>
            <span className="toloka-pill green">Red-team</span>
            <span className="toloka-pill green">QA + baseline</span>
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '1rem',
            padding: '1.75rem 1.85rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                width: '0.6rem',
                height: '0.6rem',
                borderRadius: '50%',
                background: 'var(--accent-blue)',
              }}
            />
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>Scaling</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.3rem' }}>
            Range → firm
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.45, marginTop: '0.6rem' }}>
            A range at SOW. <strong>The pilot's three driving numbers collapse it to a firm figure</strong> at the gate.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Three drivers
            </span>
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
              {rangeDrivers.map((d) => <span key={d} className="toloka-pill blue">{d}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: '0.75rem',
          padding: '1.1rem 1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.5rem',
              background: 'var(--accent-blue)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FileSignature size={18} color="#FFFFFF" />
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Decision asked for today
            </span>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
              Approve the pilot SOW
            </span>
          </div>
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Per-domain cost curve → Appendix A10
        </span>
      </div>
    </div>
  )
}
