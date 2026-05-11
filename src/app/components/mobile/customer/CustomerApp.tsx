import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export function CustomerApp() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState('dashboard');
  const [submitted, setSubmitted] = useState(false);

  if (screen === 'request' && submitted) {
    return (
      <div
        style={{
          background: '#f8fafc',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '80px 24px 40px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            fontSize: 40,
            color: '#fff',
            boxShadow: '0 12px 32px rgba(245,158,11,0.4)',
          }}
        >
          ✓
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
          Request Submitted!
        </h1>

        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5, margin: '0 0 24px' }}>
          Our team will review the request and match you with a suitable care/support professional.
        </p>

        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: '20px',
            width: '100%',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            marginBottom: 20,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>Reference Number</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#0f2444' }}>REQ-2026-0847</div>
        </div>

        <button
          onClick={() => {
            setScreen('dashboard');
            setSubmitted(false);
          }}
          style={{
            width: '100%',
            padding: '14px',
            background: '#0f2444',
            border: 'none',
            borderRadius: 14,
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (screen === 'request') {
    return (
      <div style={{ background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
        <div style={{ padding: '52px 20px 24px', background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)' }}>
          <button
            onClick={() => setScreen('dashboard')}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 14,
              marginBottom: 16,
              padding: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
            Request a Care Worker
          </h1>

          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.5 }}>
            For one-off private care or support requests. Organisations should use the Organisation portal.
          </p>
        </div>

        <div
          style={{
            margin: '-16px 16px 0',
            background: '#fff',
            borderRadius: 20,
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                Service Needed
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '13px 14px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 12,
                  fontSize: 14,
                  color: '#374151',
                  background: '#f9fafb',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <option>Healthcare Assistant</option>
                <option>General Nurse</option>
                <option>Support Worker</option>
                <option>Specialist Nurse</option>
                <option>Dental Nurse</option>
              </select>
            </div>

            {[
              { label: 'Preferred Date', type: 'date' },
              { label: 'Preferred Time', type: 'time' },
              { label: 'Duration (hours)', type: 'number' },
              { label: 'Location / Address', type: 'text' },
            ].map((field) => (
              <div key={field.label}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.label}
                  style={{
                    width: '100%',
                    padding: '13px 14px',
                    border: '1.5px solid #e5e7eb',
                    borderRadius: 12,
                    fontSize: 14,
                    color: '#374151',
                    background: '#f9fafb',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#f59e0b')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>
            ))}

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                Additional Notes
              </label>
              <textarea
                placeholder="Any specific requirements or notes..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '13px 14px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 12,
                  fontSize: 14,
                  color: '#374151',
                  background: '#f9fafb',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#f59e0b')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            <button
              onClick={() => setSubmitted(true)}
              style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                border: 'none',
                borderRadius: 14,
                color: '#fff',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
              }}
            >
              Submit Request
            </button>
          </div>
        </div>

        <div style={{ height: 40 }} />
      </div>
    );
  }

  const bookings = [
    { service: 'Support Worker', date: 'Sat 30 May 2026', org: 'Private Home Visit', status: 'confirmed' },
    { service: 'Healthcare Assistant', date: 'Mon 1 Jun 2026', org: 'Home Visit', status: 'pending' },
  ];

  const pastBookings = [
    { service: 'Support Worker', date: '10 May 2026', amount: '£132', status: 'paid' },
    { service: 'Healthcare Assistant', date: '2 May 2026', amount: '£120', status: 'paid' },
    { service: 'General Nurse', date: '22 Apr 2026', amount: '£180', status: 'paid' },
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      <div style={{ padding: '52px 20px 28px', background: 'linear-gradient(160deg, #d97706 0%, #b45309 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', margin: '0 0 2px' }}>
              Individual Client Dashboard
            </p>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: 0 }}>
              Welcome, James 👋
            </h1>
          </div>

          <button
            onClick={() => navigate('/welcome')}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 10,
              padding: '7px 10px',
              color: '#fff',
              fontSize: 11,
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Switch Role
          </button>
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 14,
            padding: '12px 14px',
          }}
        >
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: 'rgba(255,255,255,0.82)' }}>
            This section is for private one-off care/support requests. Organisations use the Organisation portal to post staffing shifts.
          </p>
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        <button
          onClick={() => setScreen('request')}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            border: 'none',
            borderRadius: 16,
            color: '#fff',
            fontSize: 15,
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
            marginBottom: 20,
          }}
        >
          ➕ Request a Care / Support Worker
        </button>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Current Requests</div>
          {bookings.map((b, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '14px 16px',
                marginBottom: 8,
                boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{b.service}</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{b.date}</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>{b.org}</div>
              </div>

              <span
                style={{
                  padding: '3px 10px',
                  background: b.status === 'confirmed' ? '#dbeafe' : '#fef9c3',
                  color: b.status === 'confirmed' ? '#2563eb' : '#ca8a04',
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                {b.status === 'confirmed' ? 'Confirmed' : 'Pending'}
              </span>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Past Requests</div>
          {pastBookings.map((b, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '14px 16px',
                marginBottom: 8,
                boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{b.service}</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{b.date}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#0f172a' }}>{b.amount}</div>
                <span style={{ padding: '2px 8px', background: '#dcfce7', color: '#16a34a', borderRadius: 10, fontSize: 10, fontWeight: 700 }}>
                  Paid
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}