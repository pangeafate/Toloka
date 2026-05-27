import React from 'react'
import { Lock, ArrowDown, FileSignature } from 'lucide-react'

export default function Slide10Commercials() {
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
          Pilot at fixed price &middot; scaling as a range<br />
          <span style={{ color: 'var(--accent-blue)' }}>the pilot turns the range into a firm number</span>
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
            $370k&ndash;$620k
          </h2>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-green)', letterSpacing: '0.03em' }}>
            Range today &middot; fixed as a single number in the pilot SOW
          </span>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.45, marginTop: '0.7rem' }}>
            10&ndash;14 weeks. The first build, end to end. Deliverables and four measured numbers, on a known budget.
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
            <span className="toloka-pill green">Runnable build</span>
            <span className="toloka-pill green">Stress-test</span>
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
            $355k&ndash;$925k
          </h2>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-blue)', letterSpacing: '0.03em' }}>
            Range today &middot; firms after the pilot gate
          </span>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.45, marginTop: '0.7rem' }}>
            A range at SOW. <strong>The pilot&rsquo;s three driving numbers turn it into a firm number</strong> at the gate.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Total today
          </span>
          <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            $725k&ndash;$1.54M
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Per-domain cost curve &rarr; Appendix A10
          </span>
        </div>
      </div>
    </div>
  )
}
