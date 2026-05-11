import React from 'react';
import { useNavigate } from 'react-router';

export function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(160deg, #0a1628 0%, #0f2444 40%, #0d9488 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '56px 32px 36px',
        boxSizing: 'border-box',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative circles */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'rgba(13,148,136,0.15)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: -40, width: 150, height: 150, borderRadius: '50%', background: 'rgba(13,148,136,0.08)', pointerEvents: 'none' }} />

      {/* Top content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 28,
            background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(13,148,136,0.4)',
            margin: '0 auto 36px',
          }}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M26 8C26 8 12 16 12 28C12 34 17 38 22 38V44H30V38C35 38 40 34 40 28C40 16 26 8 26 8Z" fill="white" fillOpacity="0.9" />
            <path d="M22 28V36M30 28V36" stroke="rgba(13,148,136,0.8)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="26" cy="22" r="4" fill="rgba(13,148,136,0.5)" />
            <path d="M20 20H32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
          </svg>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 42, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', margin: '0 0 6px', lineHeight: 1.1 }}>
            Electra
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 18 }}>
            <div style={{ height: 1, width: 40, background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', letterSpacing: 3, textTransform: 'uppercase' }}>
              by Electra Tech
            </span>
            <div style={{ height: 1, width: 40, background: 'rgba(255,255,255,0.3)' }} />
          </div>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, maxWidth: 300, margin: '0 auto' }}>
            Healthcare & Dental Staffing Made Simple
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 28 }}>
          {['Shifts', 'Compliance', 'Earnings', 'Verified'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 15px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 20,
                fontSize: 12,
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ width: '100%', maxWidth: 320, position: 'relative', zIndex: 1, paddingBottom: 18 }}>
        <button
          onClick={() => navigate('/welcome')}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: 16,
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            border: 'none',
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(13,148,136,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          Get Started
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <p style={{ textAlign: 'center', marginTop: 16, marginBottom: 0, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
          UK Registered Healthcare Staffing Platform
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 120,
          height: 5,
          borderRadius: 3,
          background: 'rgba(255,255,255,0.28)',
          zIndex: 1,
        }}
      />
    </div>
  );
}