import React from 'react'
import {
  ArrowLeft,
  Workflow,
  Wrench,
  FileText,
  Target,
  ListChecks,
  FileSearch,
  ShieldCheck,
} from 'lucide-react'

/**
 * Appendix A1 — The seven-component anatomy of the Food Delivery environment.
 *
 * Components verbatim from the case document p.2:
 *   "realistic operational workflows, stateful APIs/tools, business policies,
 *    evaluator and reward logic, benchmark tasks, trajectory capture, and
 *    QA governance into a unified RL/eval framework."
 *
 * Examples per component are drawn directly from the case document
 * (p.3 stakeholders, p.6 archetypes, p.7-8 production pipeline, p.12 quality
 * dimensions, p.13 risks). Nothing fabricated beyond what the source supports.
 */
export default function AppendixA1Anatomy({ onClose }) {
  const components = [
    {
      icon: Workflow,
      n: '01',
      name: 'Operational workflows',
      example:
        'Multi-turn User → Agent → Restaurant / Courier exchanges. Refund flows, escalation flows.',
    },
    {
      icon: Wrench,
      n: '02',
      name: 'Stateful APIs & tools',
      example:
        'Multi-tool calling with state that persists within an episode. Tool-interaction format aligned with Tau-bench.',
    },
    {
      icon: FileText,
      n: '03',
      name: 'Business policies',
      example:
        'Realistic Food Delivery policies — multi-party rules covering Users, Restaurants, Couriers, Platforms (Bolt, Wolt style).',
    },
    {
      icon: Target,
      n: '04',
      name: 'Evaluator & reward logic',
      example:
        'Rule-based + action-level checks. Multi-component, action-aware reward. SME-calibrated golden set. Adversarial reward-hacking audit.',
    },
    {
      icon: ListChecks,
      n: '05',
      name: 'Benchmark tasks',
      example:
        '50–100 accepted tasks in the pilot, 200–300 with scaling. Each ships with a reference trajectory.',
    },
    {
      icon: FileSearch,
      n: '06',
      name: 'Trajectory capture',
      example:
        'Structured tool / state / action logs. Replayable. Captured at reasoning and action levels. Failure-labelled.',
    },
    {
      icon: ShieldCheck,
      n: '07',
      name: 'QA governance',
      example:
        '8-gate production pipeline. Reviewer calibration. Between-wave recalibration on golden tasks.',
    },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'space-between' }}>
      <div>
        <BackLink onClose={onClose} label="Back to Approach (Slide 3)" />
        <div className="section-eyebrow" style={{ marginTop: '0.85rem' }}>
          Appendix A1
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
          The seven moving parts inside the environment
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
          Each is a real, callable thing. Food Delivery is the first instance; the same seven parts compose
          every next domain — what changes is the workflows, policies, and tasks.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '0.85rem',
        }}
      >
        {components.map((c) => {
          const Icon = c.icon
          return (
            <div
              key={c.n}
              className="toloka-card-flat"
              style={{
                padding: '1rem 1.1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <span
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '0.45rem',
                    background: 'rgba(0,105,255,0.08)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={15} color="var(--accent-blue)" />
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--accent-blue)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {c.n}
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                }}
              >
                {c.name}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.45,
                }}
              >
                {c.example}
              </span>
            </div>
          )
        })}

        <div
          style={{
            padding: '1rem 1.1rem',
            border: '1px dashed var(--border-light)',
            borderRadius: '0.875rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Modular multi-domain architecture — the framework reuses across domains;
            workflows, policies, and tasks are bespoke per domain.
          </span>
        </div>
      </div>
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
