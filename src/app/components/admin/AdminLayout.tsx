import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AdminDashboard } from './AdminDashboard';
import { ManageWorkers } from './ManageWorkers';
import { WorkerDocumentReview } from './WorkerDocumentReview';
import { ManageJobs } from './ManageJobs';
import { AdminReports } from './AdminReports';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
  { id: 'workers', label: 'Workers', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { id: 'organisations', label: 'Organisations', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { id: 'jobs', label: 'Jobs / Shifts', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { id: 'documents', label: 'Documents', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { id: 'timesheets', label: 'Timesheets', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { id: 'payments', label: 'Payments', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { id: 'reports', label: 'Reports', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { id: 'settings', label: 'Settings', icon: (c: string) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
];

export function AdminLayout() {
  const navigate = useNavigate();
  const [active, setActive] = useState('dashboard');
  const [workerReviewId, setWorkerReviewId] = useState<string | null>(null);

  const handleNavigate = (screen: string, data?: any) => {
    if (screen === 'worker-review') {
      setWorkerReviewId(data);
      setActive('worker-review');
    } else {
      setActive(screen);
      setWorkerReviewId(null);
    }
  };

  const renderContent = () => {
    switch (active) {
      case 'dashboard': return <AdminDashboard onNavigate={handleNavigate} />;
      case 'workers': return <ManageWorkers onNavigate={handleNavigate} />;
      case 'worker-review': return <WorkerDocumentReview workerId={workerReviewId} onNavigate={handleNavigate} />;
      case 'jobs': return <ManageJobs onNavigate={handleNavigate} />;
      case 'reports': return <AdminReports onNavigate={handleNavigate} />;
      default: return (
        <div style={{ padding: 40, textAlign: 'center', color: '#94a3b8' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#64748b' }}>
            {active.charAt(0).toUpperCase() + active.slice(1)}
          </div>
          <div style={{ fontSize: 14, marginTop: 8 }}>This section is coming soon</div>
        </div>
      );
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 900px) {
            .admin-desktop-layout {
              display: none !important;
            }
            .admin-mobile-notice {
              display: flex !important;
            }
          }

          @media (min-width: 901px) {
            .admin-mobile-notice {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Mobile notice */}
      <div
        className="admin-mobile-notice"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
          color: '#fff',
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          textAlign: 'center',
          boxSizing: 'border-box',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: 22,
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 34,
            marginBottom: 20,
            boxShadow: '0 16px 36px rgba(0,0,0,0.25)',
          }}
        >
          🖥️
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 10px' }}>
          Admin Portal
        </h1>

        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 340, margin: '0 0 18px' }}>
          This admin dashboard is designed for desktop/web use. Please open it on a laptop, desktop, or large tablet for the full layout.
        </p>

        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 16,
            padding: '14px 16px',
            marginBottom: 20,
            maxWidth: 360,
          }}
        >
          <p style={{ fontSize: 12, lineHeight: 1.5, margin: 0, color: 'rgba(255,255,255,0.72)' }}>
            For the mobile demo, use the Worker, Organisation, or Individual Client sections. The Admin Portal represents the web dashboard.
          </p>
        </div>

        <button
          onClick={() => navigate('/welcome')}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: '14px',
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            border: 'none',
            borderRadius: 14,
            color: '#fff',
            fontSize: 14,
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(13,148,136,0.35)',
          }}
        >
          Switch Role
        </button>
      </div>

      {/* Desktop admin layout */}
      <div
        className="admin-desktop-layout"
        style={{
          display: 'flex',
          height: '100vh',
          minWidth: 1024,
          background: '#f8fafc',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: 248,
            flexShrink: 0,
            background: '#0f2444',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
            boxShadow: '4px 0 20px rgba(0,0,0,0.15)',
          }}
        >
          {/* Logo */}
          <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 52 52" fill="none">
                  <path d="M26 8C26 8 12 16 12 28C12 34 17 38 22 38V44H30V38C35 38 40 34 40 28C40 16 26 8 26 8Z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>

              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>Electra</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1 }}>ADMIN PORTAL</div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: 1.5, marginBottom: 10, paddingLeft: 8, textTransform: 'uppercase' }}>
              Main Menu
            </div>

            {navItems.slice(0, 6).map((item) => {
              const isActive = active === item.id || (active === 'worker-review' && item.id === 'workers');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '11px 12px',
                    borderRadius: 10,
                    border: 'none',
                    background: isActive ? 'rgba(13,148,136,0.2)' : 'transparent',
                    color: isActive ? '#14b8a6' : 'rgba(255,255,255,0.65)',
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 400,
                    cursor: 'pointer',
                    textAlign: 'left',
                    marginBottom: 2,
                    transition: 'all 0.15s',
                    borderLeft: isActive ? '3px solid #0d9488' : '3px solid transparent',
                  }}
                >
                  {item.icon(isActive ? '#14b8a6' : 'rgba(255,255,255,0.65)')}
                  {item.label}
                </button>
              );
            })}

            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: 1.5, margin: '16px 0 10px', paddingLeft: 8, textTransform: 'uppercase' }}>
              Finance & Reports
            </div>

            {navItems.slice(6, 8).map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '11px 12px',
                    borderRadius: 10,
                    border: 'none',
                    background: isActive ? 'rgba(13,148,136,0.2)' : 'transparent',
                    color: isActive ? '#14b8a6' : 'rgba(255,255,255,0.65)',
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 400,
                    cursor: 'pointer',
                    textAlign: 'left',
                    marginBottom: 2,
                    borderLeft: isActive ? '3px solid #0d9488' : '3px solid transparent',
                  }}
                >
                  {item.icon(isActive ? '#14b8a6' : 'rgba(255,255,255,0.65)')}
                  {item.label}
                </button>
              );
            })}

            <div style={{ marginTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
              {navItems.slice(8).map((item) => {
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '11px 12px',
                      borderRadius: 10,
                      border: 'none',
                      background: isActive ? 'rgba(13,148,136,0.2)' : 'transparent',
                      color: isActive ? '#14b8a6' : 'rgba(255,255,255,0.65)',
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                      marginBottom: 2,
                      borderLeft: isActive ? '3px solid #0d9488' : '3px solid transparent',
                    }}
                  >
                    {item.icon(isActive ? '#14b8a6' : 'rgba(255,255,255,0.65)')}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Admin profile */}
          <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>
                AD
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Admin User</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>Super Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {/* Top bar */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 40,
              background: '#fff',
              borderBottom: '1px solid #e2e8f0',
              padding: '14px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>
                {active === 'worker-review' ? 'Document Review' : navItems.find((n) => n.id === active)?.label || 'Admin Portal'}
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 1 }}>
                Electra Healthcare Staffing — Desktop Admin Portal
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={() => navigate('/welcome')}
                style={{
                  padding: '9px 12px',
                  background: '#f0fdfa',
                  border: '1.5px solid #99f6e4',
                  borderRadius: 10,
                  color: '#0f766e',
                  fontSize: 12,
                  fontWeight: 800,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Switch Role
              </button>

              <div style={{ position: 'relative' }}>
                <input
                  placeholder="Search workers, shifts..."
                  style={{
                    padding: '9px 14px 9px 36px',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: 10,
                    fontSize: 13,
                    outline: 'none',
                    width: 220,
                    background: '#f8fafc',
                    color: '#374151',
                  }}
                />
                <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              <div style={{ position: 'relative' }}>
                <button style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 10, padding: '8px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>
                <div style={{ position: 'absolute', top: -4, right: -4, width: 16, height: 16, borderRadius: '50%', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 700 }}>
                  5
                </div>
              </div>

              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                AD
              </div>
            </div>
          </div>

          {/* Page content */}
          <div style={{ padding: 28 }}>
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}