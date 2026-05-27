import React from 'react'
import { ArrowLeft, User, ChefHat, Bike, Building2 } from 'lucide-react'

/**
 * Appendix A2 — Pilot v1 scope, the four-stakeholder map, and what defers to scaling.
 *
 * Source mapping (case document):
 *   - Four stakeholders, p.3: "Users, Restaurants, Couriers, Platforms (e.g. Bolt, Wolt)"
 *   - v1 lock: p.13 risk 2.3: "Lock the pilot to 3–5 workflows; backlog the rest for scaling"
 *   - Deferred-to-scaling list, p.13 risk 2.3 (verbatim sub-domains):
 *     "refunds, fraud, payments, courier/restaurant ops, VIP, compliance"
 *   - Refund / escalation as common pilot archetypes: p.6
 *   - Courier in-flight example: p.13 risk 1.4 "courier late by x variations"
 *
 * v1/defer assignment for stakeholders is NOT pre-decided here — that decision
 * happens on Slide 8 in the room. A2 just shows the choice space.
 */
export default function AppendixA2Scope({ onClose }) {
  const stakeholders = [
    {
      icon: User,
      name: 'Users',
      sub: 'Customer side — placing orders, querying status, requesting changes, escalating.',
    },
    {
      icon: ChefHat,
      name: 'Restaurants',
      sub: 'Merchant side — accepting / rejecting orders, capacity and operational state.',
    },
    {
      icon: Bike,
      name: 'Couriers',
      sub: 'Delivery side — pickup confirmation, in-flight events (PDF example: "courier late by x variations").',
    },
    {
      icon: Building2,
      name: 'Platforms',
      sub: 'Orchestration layer (Bolt, Wolt style). Cross-app rules and multi-party adjudication.',
    },
  ]

  const inV1 = [
    '3–5 workflows from common Food Delivery operations (specific set agreed at kick-off with SMEs)',
    'Refund flow and escalation flow as representative archetypes',
    'Stateful APIs and tools covering the v1 workflows',
    'Reward logic with adversarial reward-hacking audit before any RL use',
    '50–100 accepted benchmark tasks',
  ]

  const deferredToScaling = [
    'Refunds at full depth — edge-case dispute resolution',
    'Fraud detection workflows',
    'Payments / chargeback flows',
    'Courier and restaurant operations beyond v1 depth',
    'VIP / loyalty-tier exceptions',
    'Compliance / regulatory edge cases',
  ]

  const notInEnvironmentV1 = [
    'Voice — text-only agent interaction',
    'Multilingual — English first',
    'Live integration with prod systems — environment is simulated',
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <BackLink onClose={onClose} label="Back to Inputs (Slide 8)" />
        <div className="section-eyebrow" style={{ marginTop: '0.85rem' }}>
          Appendix A2
        </div>
        <h1
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.2,
            color: 'var(--text-heading)',
          }}
        >
          Pilot v1 scope &middot; what&apos;s in, what defers, what&apos;s not in the environment
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
          Pilot v1 scope is set in the room at Slide 8 with you and the SMEs. This is the choice space.
        </p>
      </div>

      <div>
        <div
          className="section-eyebrow"
          style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}
        >
          The four stakeholders we can simulate
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
          {stakeholders.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.name}
                className="toloka-card-flat"
                style={{
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon size={16} color="var(--accent-blue)" />
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {s.name}
                  </span>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {s.sub}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <ScopeColumn
          eyebrow="Pilot v1 — in scope"
          color="var(--accent-blue)"
          items={inV1}
        />
        <ScopeColumn
          eyebrow="Deferred to scaling"
          color="var(--accent-orange)"
          items={deferredToScaling}
        />
      </div>

      <div
        style={{
          padding: '0.85rem 1.2rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: '0.625rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            flexShrink: 0,
          }}
        >
          Not in environment v1
        </span>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {notInEnvironmentV1.map((x) => (
            <span key={x} className="toloka-pill">
              {x}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScopeColumn({ eyebrow, color, items }) {
  return (
    <div className="toloka-card-flat" style={{ padding: '1rem 1.2rem' }}>
      <div className="section-eyebrow" style={{ color, marginBottom: '0.5rem' }}>
        {eyebrow}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {items.map((it) => (
          <li
            key={it}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              lineHeight: 1.4,
            }}
          >
            <span
              style={{
                width: '0.4rem',
                height: '0.4rem',
                borderRadius: '50%',
                background: color,
                marginTop: '0.45rem',
                flexShrink: 0,
              }}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BackLink({ onClose, label }) {
  return (
    <button
      onClick={onClose}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        background: 'transparent',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        color: 'var(--accent-blue)',
        fontSize: '0.8rem',
        fontWeight: 600,
      }}
    >
      <ArrowLeft size={14} />
      {label}
    </button>
  )
}
