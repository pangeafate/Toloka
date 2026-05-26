import React from 'react'
import { UserRound, Code2, Briefcase, Cpu, Scale, Crown, BarChart3, ArrowUpRight } from 'lucide-react'

export default function Slide7Roles() {
  const tolokaSquad = [
    { icon: UserRound, role: 'PM',                name: 'Single point of contact' },
    { icon: Code2,     role: 'Tech lead',         name: 'Owns environment + reward' },
    { icon: Briefcase, role: 'Workforce manager', name: 'Operators + SME coordination' },
  ]

  const clientCounterparts = [
    { icon: Cpu,   role: 'Technical',         name: 'Training-stack integration' },
    { icon: Scale, role: 'Policy',            name: 'SME / domain authority' },
    { icon: Crown, role: 'Executive sponsor', name: 'Unblocks at escalation L3' },
  ]

  const escalation = [
    { lvl: 'L1', who: 'PM ↔ Client lead',           when: 'Working-week issues',           color: 'var(--accent-blue)' },
    { lvl: 'L2', who: 'Tech lead ↔ Client tech',    when: 'Architecture and policy edge cases', color: 'var(--accent-orange)' },
    { lvl: 'L3', who: 'Toloka exec ↔ Client sponsor', when: 'Scope, timeline, commercials', color: 'var(--accent-coral)' },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="section-eyebrow">How we work</div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          Roles, meeting rhythm, escalation
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <div className="toloka-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <span className="section-eyebrow" style={{ marginBottom: 0 }}>Toloka squad</span>
          {tolokaSquad.map((p) => <PersonRow key={p.role} {...p} accent="var(--accent-blue)" />)}
        </div>
        <div className="toloka-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <span className="section-eyebrow" style={{ marginBottom: 0, color: 'var(--accent-green)' }}>Client counterparts</span>
          {clientCounterparts.map((p) => <PersonRow key={p.role} {...p} accent="var(--accent-green)" />)}
        </div>
      </div>

      <div
        className="toloka-card-flat"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'stretch',
          gap: '1.5rem',
          padding: '1.25rem 1.5rem',
        }}
      >
        <div>
          <span className="section-eyebrow">Meeting rhythm</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
            <CadenceRow label="Weekly working meeting" detail="Squad ↔ client tech + policy" />
            <CadenceRow label="Biweekly steering meeting" detail="PM ↔ client lead + sponsor" />
            <CadenceRow label="On-demand at critical moments" detail="Pilot gate · reward review" />
          </div>
        </div>

        <div style={{ width: '1px', background: 'var(--border-light)' }} />

        <div>
          <span className="section-eyebrow" style={{ color: 'var(--accent-coral)' }}>Live reporting · preview</span>
          <div
            style={{
              marginTop: '0.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              borderRadius: '0.5rem',
              padding: '0.6rem 0.75rem',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
            }}
          >
            <BarChart3 size={18} color="var(--accent-blue)" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Quality dashboard
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                Accepted-task progress · acceptance rate · gold-task consistency · baseline pass rates
              </span>
            </div>
          </div>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.3rem', display: 'inline-block', fontStyle: 'italic' }}>
            Full mockup → Appendix A6
          </span>
        </div>
      </div>

      <div>
        <div className="section-eyebrow" style={{ color: 'var(--text-muted)' }}>Escalation</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
          {escalation.map((e) => (
            <div
              key={e.lvl}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: '0.5rem',
                padding: '0.6rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: e.color,
                  letterSpacing: '-0.02em',
                  width: '2rem',
                }}
              >
                {e.lvl}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{e.who}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{e.when}</span>
              </div>
              <ArrowUpRight size={14} color={e.color} style={{ marginLeft: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PersonRow({ icon: Icon, role, name, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span
        style={{
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: '0.5rem',
          background: 'var(--bg-secondary)',
          border: `1px solid var(--border-light)`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={16} color={accent} />
      </span>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{role}</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{name}</span>
      </div>
    </div>
  )
}

function CadenceRow({ label, detail }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{label}</span>
      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{detail}</span>
    </div>
  )
}
