import React from 'react'
import { Boxes, ListChecks, Gauge } from 'lucide-react'

export default function Slide2Understanding() {
  const pillars = [
    {
      Icon: Boxes,
      label: 'Environment',
      headline: 'A resettable Food Delivery world the agent acts inside.',
      bullets: [
        'Stateful APIs and tools — Users, Restaurants, Couriers, Platform',
        'Realistic operational workflows and business policies',
        'Deterministic resets and seeds for reproducible RL episodes',
        'Tau-compatible — preserves continuity with the client’s ecosystem',
      ],
    },
    {
      Icon: ListChecks,
      label: 'Tasks',
      headline: 'Benchmark scenarios the agent must resolve end-to-end.',
      bullets: [
        '50–100 in the pilot · 200–300 at scale',
        'User goal · hidden facts · initial state · target policy · expected outcome',
        'Core workflows, edge cases, and adversarial scenarios',
        'Reference trajectories for SFT warm-start',
      ],
    },
    {
      Icon: Gauge,
      label: 'Evaluation mechanisms',
      headline: 'Reward and scoring that produce a reliable learning signal.',
      bullets: [
        'Multi-component reward — trajectory, state mutation, tool use',
        'Rule-based + action-level checks, SME-calibrated',
        'Hidden holdouts; anti-gaming and contamination controls',
        'Pass-rate and saturation reporting for held-out progress',
      ],
    },
  ]

  return (
    <div className="toloka-slide" style={{ justifyContent: 'flex-start' }}>
      <div>
        <div className="section-eyebrow">Our understanding</div>
        <h1
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            letterSpacing: '-0.012em',
            lineHeight: 1.2,
            color: 'var(--text-heading)',
            maxWidth: '82rem',
          }}
        >
          Our understanding of the task: environment&nbsp;+ tasks&nbsp;+ evaluation mechanisms.
        </h1>
        <p
          style={{
            fontSize: '1.02rem',
            color: 'var(--text-secondary)',
            marginTop: '0.55rem',
            maxWidth: '70rem',
            lineHeight: 1.5,
          }}
        >
          Three coupled deliverables — the world the agent acts in, the work it’s asked to do,
          and the signal that scores it. RL needs all three; weakness in any one breaks the loop.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          margin: 'auto 0',
        }}
      >
        {pillars.map(({ Icon, label, headline, bullets }) => (
          <div
            key={label}
            className="toloka-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.9rem',
              borderTop: '3px solid var(--accent-blue)',
              padding: '1.6rem 1.5rem 1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Icon size={26} color="var(--accent-blue)" strokeWidth={1.8} />
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-blue)',
                }}
              >
                {label}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.18rem',
                fontWeight: 700,
                lineHeight: 1.3,
                color: 'var(--text-heading)',
              }}
            >
              {headline}
            </h3>

            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.85rem',
              }}
            >
              {bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.45,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    gap: '0.55rem',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: '0.5rem',
                      width: '0.32rem',
                      height: '0.32rem',
                      borderRadius: '50%',
                      background: 'var(--accent-blue)',
                    }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
