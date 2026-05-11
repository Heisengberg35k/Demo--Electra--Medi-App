import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function BackButton({ to }: { to: string }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 6,
        color: '#fff', padding: '8px 0',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span style={{ fontSize: 14, fontWeight: 500 }}>Back</span>
    </button>
  );
}

export function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ minHeight: '100%', background: '#f8fafc', paddingTop: 44 }}>
      {/* Header */}
      <div style={{
        padding: '16px 24px 36px',
        background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
      }}>
        <BackButton to="/welcome" />
        <div style={{ marginTop: 24 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Welcome back</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>Sign in to your Electra account</p>
        </div>
      </div>

      {/* Form card */}
      <div style={{
        margin: '-20px 20px 0',
        background: '#fff',
        borderRadius: 20,
        padding: '28px 24px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: '100%', padding: '13px 14px 13px 42px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 12, fontSize: 14, color: '#111827',
                  background: '#f9fafb', outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => (e.target.style.borderColor = '#0d9488')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  width: '100%', padding: '13px 42px 13px 42px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 12, fontSize: 14, color: '#111827',
                  background: '#f9fafb', outline: 'none', boxSizing: 'border-box',
                }}
                onFocus={e => (e.target.style.borderColor = '#0d9488')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {showPassword ? (
                    <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                  ) : (
                    <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                  )}
                </svg>
              </button>
            </div>
            <div style={{ textAlign: 'right', marginTop: 8 }}>
              <button style={{ background: 'none', border: 'none', color: '#0d9488', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                Forgot password?
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            onClick={() => navigate('/worker')}
            style={{
              width: '100%', padding: '15px',
              background: 'linear-gradient(135deg, #0f2444, #1a3a5c)',
              border: 'none', borderRadius: 14,
              color: '#fff', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', marginTop: 4,
              boxShadow: '0 4px 16px rgba(15,36,68,0.3)',
              transition: 'transform 0.1s',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Sign In
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: '#e5e7eb' }}/>
            <span style={{ fontSize: 12, color: '#9ca3af' }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: '#e5e7eb' }}/>
          </div>

          {/* Social login */}
          <button style={{
            width: '100%', padding: '13px', background: '#fff',
            border: '1.5px solid #e5e7eb', borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: 'pointer', fontSize: 14, fontWeight: 500, color: '#374151',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#6b7280' }}>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            style={{ background: 'none', border: 'none', color: '#0d9488', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}
          >
            Register
          </button>
        </p>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: 40 }} />
    </div>
  );
}

export function RegisterScreen() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('worker');

  const fields = [
    { label: 'Full Name', type: 'text', placeholder: 'Sarah Johnson', icon: 'user' },
    { label: 'Email Address', type: 'email', placeholder: 'sarah@example.com', icon: 'mail' },
    { label: 'Phone Number', type: 'tel', placeholder: '+44 7700 000000', icon: 'phone' },
    { label: 'Password', type: 'password', placeholder: 'Create a strong password', icon: 'lock' },
  ];

  return (
    <div style={{ minHeight: '100%', background: '#f8fafc', paddingTop: 44 }}>
      <div style={{
        padding: '16px 24px 36px',
        background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
      }}>
        <BackButton to="/welcome" />
        <div style={{ marginTop: 24 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Create Account</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>Join the Electra staffing platform</p>
        </div>
      </div>

      <div style={{
        margin: '-20px 20px 0',
        background: '#fff',
        borderRadius: 20,
        padding: '28px 24px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {fields.map((field) => (
            <div key={field.label}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                style={{
                  width: '100%', padding: '13px 14px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 12, fontSize: 14, color: '#111827',
                  background: '#f9fafb', outline: 'none', boxSizing: 'border-box',
                }}
                onFocus={e => (e.target.style.borderColor = '#0d9488')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          ))}

          {/* Account type */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
              Account Type
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {['worker', 'organisation', 'admin', 'customer'].map((type) => (
                <button
                  key={type}
                  onClick={() => setAccountType(type)}
                  style={{
                    padding: '10px 12px',
                    border: `2px solid ${accountType === type ? '#0d9488' : '#e5e7eb'}`,
                    borderRadius: 10,
                    background: accountType === type ? '#f0fdfa' : '#fff',
                    color: accountType === type ? '#0d9488' : '#6b7280',
                    fontSize: 12, fontWeight: 600,
                    cursor: 'pointer', textTransform: 'capitalize',
                    transition: 'all 0.15s',
                  }}
                >
                  {type === 'worker' ? 'Worker / Locum' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/worker')}
            style={{
              width: '100%', padding: '15px',
              background: 'linear-gradient(135deg, #0d9488, #0f766e)',
              border: 'none', borderRadius: 14,
              color: '#fff', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', marginTop: 4,
              boxShadow: '0 4px 16px rgba(13,148,136,0.3)',
            }}
          >
            Create Account
          </button>

          <p style={{ fontSize: 11, color: '#94a3b8', textAlign: 'center', lineHeight: 1.5 }}>
            By registering, you agree to our{' '}
            <span style={{ color: '#0d9488' }}>Terms of Service</span>{' '}
            and{' '}
            <span style={{ color: '#0d9488' }}>Privacy Policy</span>
          </p>
        </div>

        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#6b7280' }}>
          Already registered?{' '}
          <button
            onClick={() => navigate('/login')}
            style={{ background: 'none', border: 'none', color: '#0d9488', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}
          >
            Sign In
          </button>
        </p>
      </div>
      <div style={{ height: 40 }} />
    </div>
  );
}
