import React from 'react';
import { useNavigate } from 'react-router';

const roles = [
  {
    id: 'worker',
    title: 'Worker / Locum',
    description: 'Find shifts, manage compliance & track earnings',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.8" />
      </svg>
    ),
    color: '#0d9488',
    bg: '#f0fdfa',
    path: '/worker',
  },
  {
    id: 'organisation',
    title: 'Organisation',
    description: 'Post shifts, book workers & approve timesheets',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: '#2563eb',
    bg: '#eff6ff',
    path: '/organisation',
  },
  {
    id: 'admin',
    title: 'Admin Portal',
    description: 'Desktop dashboard for workers, documents & reports',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    color: '#7c3aed',
    bg: '#f5f3ff',
    path: '/admin',
  },
  {
    id: 'individual-client',
    title: 'Individual Client',
    description: 'For one-off private care or support requests',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#f59e0b',
    bg: '#fffbeb',
    path: '/customer',
  },
];

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '56px 24px 24px',
          background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 52 52" fill="none">
              <path d="M26 8C26 8 12 16 12 28C12 34 17 38 22 38V44H30V38C35 38 40 34 40 28C40 16 26 8 26 8Z" fill="white" fillOpacity="0.9" />
            </svg>
          </div>

          <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Electra</span>
        </div>

        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.3 }}>
          Choose how you want to continue
        </h1>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, margin: 0 }}>
          Select your account type to preview the correct app journey.
        </p>
      </div>

      {/* Clarification note */}
      <div style={{ padding: '14px 20px 0' }}>
        <div
          style={{
            background: '#ecfeff',
            border: '1px solid #a5f3fc',
            borderRadius: 14,
            padding: '12px 14px',
          }}
        >
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: '#155e75' }}>
            <strong>Note:</strong> Organisations are the main business customers who post jobs. Individual Client is only for private one-off care/support requests.
          </p>
        </div>
      </div>

      {/* Role cards */}
      <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => navigate(role.path)}
            style={{
              width: '100%',
              background: '#fff',
              border: '2px solid transparent',
              borderRadius: 16,
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              cursor: 'pointer',
              textAlign: 'left',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              transition: 'all 0.15s',
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = role.color;
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: role.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: role.color,
              }}
            >
              {role.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 3 }}>
                {role.title}
              </div>
              <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>
                {role.description}
              </div>
            </div>

            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={role.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: '8px 24px 28px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#94a3b8', margin: 0 }}>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0d9488',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: 12,
            }}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}