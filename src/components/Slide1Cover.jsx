import React from 'react'

export default function Slide1Cover() {
  return (
    <div
      className="toloka-slide"
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '6vw 7vw',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
        <div
          style={{
            width: '0.75rem',
            height: '0.75rem',
            borderRadius: '50%',
            background: 'var(--accent-blue)',
          }}
        />
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent-blue)',
          }}
        >
          Toloka · Project Scoping Call
        </span>
      </div>

      <h1
        style={{
          fontSize: '4.5rem',
          fontWeight: 800,
          lineHeight: 1.05,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          maxWidth: '70%',
        }}
      >
        Food Delivery
        <br />
        <span style={{ color: 'var(--accent-blue)' }}>RL Environment</span>
      </h1>

      <p
        style={{
          fontSize: '1.4rem',
          color: 'var(--text-secondary)',
          maxWidth: '60%',
          lineHeight: 1.45,
          marginBottom: '4rem',
        }}
      >
        A resettable world, tools, business policies, a simulated customer, and reward logic —
        Tau-bench compatible. Built so each next domain costs less.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-light)',
          width: '70%',
        }}
      >
        <CoverMeta label="Date" value="2026-05-26" />
        <CoverMeta label="Audience" value="Client technical + delivery leads" />
        <CoverMeta label="Doc version" value="Food Domain Case · 22 May" />
        <CoverMeta label="Duration" value="30 min" />
      </div>
    </div>
  )
}

function CoverMeta({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        {value}
      </span>
    </div>
  )
}
