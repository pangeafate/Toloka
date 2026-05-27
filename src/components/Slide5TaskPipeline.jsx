import React from 'react'
import { PenLine, ShieldCheck, Bot, Eye, UserCheck, Play, Gauge, Flag } from 'lucide-react'

export default function Slide5TaskPipeline() {
  const gates = [
    {
      n: '01',
      Icon: PenLine,
      step: 'Author candidate task',
      type: 'Human',
      owner: 'Task Author',
      criterion: 'Scenario complete — goal, hidden facts, initial state, target policy, expected outcome',
    },
    {
      n: '02',
      Icon: ShieldCheck,
      step: 'Automated validation',
      type: 'Auto',
      owner: 'Validator suite',
      criterion: 'Schema valid · IDs resolve · tools callable · state consistent',
    },
    {
      n: '03',
      Icon: Bot,
      step: 'Automated QA',
      type: 'Auto',
      owner: 'LLM-assisted QA',
      criterion: 'Solvable · policy-matched · unambiguous · no train/eval overlap',
    },
    {
      n: '04',
      Icon: Eye,
      step: 'First-pass review',
      type: 'Human',
      owner: 'Reviewer',
      criterion: 'Realistic, clear, business logic sound',
    },
    {
      n: '05',
      Icon: UserCheck,
      step: 'SME judgement',
      type: 'Human',
      owner: 'SME (conditional)',
      criterion: 'Edge / ambiguous / safety cases — outcome confirmed vs policy',
    },
    {
      n: '06',
      Icon: Play,
      step: 'Reference execution',
      type: 'Auto',
      owner: 'Environment',
      criterion: 'Gold solution runs; reward returns the expected result',
    },
    {
      n: '07',
      Icon: Gauge,
      step: 'Baseline model run',
      type: 'Auto',
      owner: 'ML/RL Engineer',
      criterion: 'Difficulty in band — neither easy nor impossible',
    },
    {
      n: '08',
      Icon: Flag,
      step: 'Accept / rework / reject',
      type: 'Human',
      owner: 'QA Lead',
      criterion: 'Accepted to the dataset, or routed back with a defect reason',
    },
  ]

  const typeColor = (t) => (t === 'Auto' ? 'var(--accent-orange)' : 'var(--accent-blue)')

  return (
    <div className="toloka-slide" style={{ justifyContent: 'flex-start' }}>
      <div>
        <div className="section-eyebrow">Task pipeline</div>
        <h1
          style={{
            fontSize: '2.1rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.2,
            color: 'var(--text-heading)',
            maxWidth: '82rem',
          }}
        >
          Intro to the production pipeline: ensuring quality of tasks at scale.
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginTop: '0.5rem',
            maxWidth: '72rem',
            lineHeight: 1.5,
          }}
        >
          Every candidate task runs the same eight-gate path before it becomes a delivered unit
          (task + reference trajectory + structured logs). Quality is a property of the pipeline,
          not of any single reviewer.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '0.85rem',
          margin: 'auto 0',
        }}
      >
        {gates.map(({ n, Icon, step, type, owner, criterion }) => (
          <div
            key={n}
            className="toloka-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.55rem',
              padding: '0.95rem 1rem 1rem',
              borderTop: `3px solid ${typeColor(type)}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <Icon size={18} color={typeColor(type)} strokeWidth={1.9} />
                <span
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: typeColor(type),
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {n}
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: typeColor(type),
                  background: type === 'Auto' ? 'rgba(255, 140, 95, 0.12)' : 'rgba(0, 105, 255, 0.10)',
                  border: `1px solid ${typeColor(type)}`,
                  borderRadius: '0.3rem',
                  padding: '0.12rem 0.4rem',
                }}
              >
                {type}
              </span>
            </div>

            <h3
              style={{
                fontSize: '0.98rem',
                fontWeight: 700,
                lineHeight: 1.25,
                color: 'var(--text-heading)',
              }}
            >
              {step}
            </h3>

            <div
              style={{
                fontSize: '0.66rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {owner}
            </div>

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '0.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.2rem',
                }}
              >
                Gate to advance
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                {criterion}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: '0.6rem',
          padding: '0.7rem 1.1rem',
          fontSize: '0.82rem',
          color: 'var(--text-primary)',
          lineHeight: 1.45,
          gap: '1.5rem',
        }}
      >
        <span>
          <strong style={{ color: 'var(--text-heading)' }}>Tasks run in waves, not one batch.</strong>
          {' '}After each wave: defect analysis → guideline update → reviewer recalibration → next wave.
        </span>
        <span style={{ flexShrink: 0, color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--accent-blue)' }}>~30–40%</strong> rework/reject expected;
          acceptance rate drives cost and volume forecast.
        </span>
      </div>
    </div>
  )
}
