import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; color: string; label: string }> = {
    'active': { bg: '#dcfce7', color: '#16a34a', label: 'Active' },
    'pending': { bg: '#fef9c3', color: '#ca8a04', label: 'Pending' },
    'confirmed': { bg: '#dbeafe', color: '#2563eb', label: 'Confirmed' },
    'completed': { bg: '#d1fae5', color: '#059669', label: 'Completed' },
    'cancelled': { bg: '#fee2e2', color: '#dc2626', label: 'Cancelled' },
    'filled': { bg: '#dbeafe', color: '#2563eb', label: 'Filled' },
    'approved': { bg: '#dcfce7', color: '#16a34a', label: 'Approved' },
  };
  const c = config[status] || { bg: '#f3f4f6', color: '#6b7280', label: status };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '3px 10px', borderRadius: 20,
      background: c.bg, color: c.color,
      fontSize: 11, fontWeight: 700,
    }}>{c.label}</span>
  );
}

function MobileHeader({ title, onBack, rightContent }: { title: string; onBack?: () => void; rightContent?: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '52px 20px 16px',
      background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {onBack && (
          <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        )}
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{title}</h1>
      </div>
      {rightContent || <div style={{ width: 30 }} />}
    </div>
  );
}

function OrgDashboard({ onNavigate }: { onNavigate: (s: string) => void }) {
    const cards = [
      { title: 'Active Shifts', value: '5', icon: 'AS', color: '#0d9488' },
      { title: 'Posted Jobs', value: '8', icon: 'PJ', color: '#2563eb' },
      { title: 'Confirmed Workers', value: '12', icon: 'CW', color: '#0f2444' },
      { title: 'Pending Timesheets', value: '3', icon: 'TS', color: '#d97706' },
      { title: 'Invoices Due', value: '£2,840', icon: 'IN', color: '#dc2626' },
    ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
{/* Header */}
<div
  style={{
    background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
    padding: '52px 20px 28px',
    color: '#fff',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 20,
    }}
  >
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>
        Organisation Dashboard
      </p>

      <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.2 }}>
        City Dental Clinic
      </h1>
    </div>

    <button
      onClick={() => onNavigate('back-to-welcome')}
      style={{
        background: 'rgba(255,255,255,0.14)',
        border: '1px solid rgba(255,255,255,0.22)',
        borderRadius: 12,
        padding: '8px 11px',
        color: '#fff',
        fontSize: 12,
        fontWeight: 800,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
      }}
    >
      Switch Role
    </button>
  </div>

  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <span
      style={{
        padding: '4px 12px',
        background: 'rgba(13,148,136,0.3)',
        borderRadius: 20,
        fontSize: 11,
        color: '#99f6e4',
        fontWeight: 700,
      }}
    >
      Verified Organisation
    </span>

    <span
      style={{
        padding: '4px 12px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        fontSize: 11,
        color: 'rgba(255,255,255,0.75)',
      }}
    >
      Camden, London
    </span>
  </div>
</div>

      {/* Post new shift CTA */}
      <div style={{ margin: '16px 16px 0' }}>
        <button
          onClick={() => onNavigate('post-shift')}
          style={{
            width: '100%', padding: '16px',
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            border: 'none', borderRadius: 16,
            color: '#fff', fontSize: 15, fontWeight: 700,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            boxShadow: '0 4px 20px rgba(13,148,136,0.4)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
          Post New Shift
        </button>
      </div>

      {/* Stats cards */}
      <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {cards.map(card => (
          <div key={card.title} style={{
            background: '#fff', borderRadius: 16, padding: '16px',
            boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
            border: '1px solid #e2e8f0',
          }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 800,
                color: card.color,
                marginBottom: 12,
                letterSpacing: 0.4,
              }}
            >
              {card.icon}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: card.color }}>{card.value}</div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{card.title}</div>
          </div>
        ))}
      </div>

      {/* Recent shifts */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Recent Shifts</span>
          <button style={{ background: 'none', border: 'none', color: '#0d9488', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>View all</button>
        </div>
        {[
          { role: 'Dental Nurse', date: 'Sat 30 May', workers: '1/2 filled', status: 'active' },
          { role: 'Locum Dentist', date: 'Sun 31 May', workers: '1/1 filled', status: 'filled' },
          { role: 'Healthcare Assistant', date: 'Mon 1 Jun', workers: '0/1 filled', status: 'pending' },
        ].map((shift, i) => (
          <div key={i} onClick={() => onNavigate('shift-details')} style={{
            background: '#fff', borderRadius: 14, padding: '14px 16px', marginBottom: 8,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxShadow: '0 1px 6px rgba(0,0,0,0.04)', cursor: 'pointer',
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{shift.role}</div>
              <div style={{ fontSize: 11, color: '#94a3b8' }}>{shift.date} · {shift.workers}</div>
            </div>
            <StatusBadge status={shift.status} />
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ padding: '0 16px 24px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Quick Actions</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <button onClick={() => onNavigate('timesheet-approval')} style={{ background: '#fff', border: 'none', borderRadius: 14, padding: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: 18 }}>⏱️</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Approve Timesheets</span>
          </button>
          <button
              onClick={() => onNavigate('billing')}
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 14,
                padding: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
              }}
            >
            <span style={{ fontSize: 18 }}>IN</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>View Invoices</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function PostShift({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Post New Shift" onBack={() => onNavigate('dashboard')} />
      <div style={{ padding: '16px' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Role/service */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Role / Service Needed</label>
              <select style={{
                width: '100%', padding: '13px 14px',
                border: '1.5px solid #e5e7eb', borderRadius: 12,
                fontSize: 14, color: '#374151', background: '#f9fafb',
                outline: 'none', boxSizing: 'border-box', appearance: 'none',
              }}>
                <option>Select a role...</option>
                <option>Dental Nurse</option>
                <option>Locum Dentist</option>
                <option>Healthcare Assistant</option>
                <option>General Nurse</option>
                <option>Support Worker</option>
                <option>Dental Receptionist</option>
                <option>Orthodontic Nurse</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Date</label>
              <input type="date" defaultValue="2026-06-01" style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
            </div>

            {/* Times */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Start Time</label>
                <input type="time" defaultValue="09:00" style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>End Time</label>
                <input type="time" defaultValue="17:00" style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
              </div>
            </div>

            {/* Rate */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Hourly Rate (£)</label>
              <input type="number" placeholder="22" style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
            </div>

            {/* Location */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Location / Address</label>
              <input type="text" placeholder="123 High Street, Camden, London NW1" style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
            </div>

            {/* Workers needed */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Number of Workers Needed</label>
              <input type="number" placeholder="1" defaultValue="1" style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
            </div>

            {/* Required docs */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Required Documents</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['DBS Certificate', 'Professional Registration', 'Right to Work', 'Indemnity Insurance'].map(doc => (
                  <label key={doc} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: '#0d9488' }} />
                    <span style={{ fontSize: 13, color: '#374151' }}>{doc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Notes / Instructions</label>
              <textarea placeholder="Any special requirements or instructions for workers..." rows={3} style={{ width: '100%', padding: '13px 14px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 14, color: '#374151', background: '#f9fafb', outline: 'none', boxSizing: 'border-box', resize: 'none' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
            </div>

            <button
              onClick={() => onNavigate('shift-posted')}
              style={{
                width: '100%', padding: '15px',
                background: 'linear-gradient(135deg, #0d9488, #0f766e)',
                border: 'none', borderRadius: 14,
                color: '#fff', fontSize: 15, fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(13,148,136,0.3)',
              }}
            >
              📌 Post Shift
            </button>
          </div>
        </div>
        <div style={{ height: 20 }} />
      </div>
    </div>
  );
}

function ShiftPosted({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%', paddingTop: 44 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px 24px', textAlign: 'center' }}>
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
          boxShadow: '0 12px 32px rgba(37,99,235,0.4)',
          fontSize: 42,
        }}>📌</div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>Shift Posted!</h1>
        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5, maxWidth: 280, marginBottom: 4 }}>
          Nearby workers have been notified and can now apply for your shift.
        </p>
        <div style={{ background: '#f0fdfa', borderRadius: 12, padding: '10px 16px', border: '1px solid #99f6e4', marginTop: 8 }}>
          <span style={{ fontSize: 12, color: '#0d9488', fontWeight: 600 }}>🔔 24 workers in your area have been notified</span>
        </div>
      </div>

      <div style={{ margin: '0 16px 16px', background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 14 }}>Shift Summary</h3>
        {[
          { label: 'Role', value: 'Dental Nurse', icon: '👤' },
          { label: 'Date', value: 'Monday, 1 June 2026', icon: '📅' },
          { label: 'Time', value: '09:00 AM – 05:00 PM', icon: '🕐' },
          { label: 'Rate', value: '£22/hour', icon: '💰' },
          { label: 'Location', value: 'Camden, London', icon: '📍' },
          { label: 'Workers Needed', value: '2 workers', icon: '👥' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: '#64748b', display: 'flex', gap: 6 }}><span>{item.icon}</span>{item.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{item.value}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button onClick={() => onNavigate('shift-details')} style={{ padding: '14px', background: '#0f2444', border: 'none', borderRadius: 14, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
          👁️ View Posted Shift
        </button>
        <button onClick={() => onNavigate('dashboard')} style={{ padding: '14px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, color: '#64748b', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

function OrgShiftDetails({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Shift Details" onBack={() => onNavigate('dashboard')} />
      <div style={{ padding: '16px' }}>
        {/* Shift info */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '20px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>Dental Nurse</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>City Dental Clinic</div>
            </div>
            <span style={{ padding: '5px 12px', background: '#dbeafe', color: '#2563eb', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>Confirmed</span>
          </div>
          {[
            { icon: '📅', value: 'Saturday, 30 May 2026' },
            { icon: '🕐', value: '09:00 AM – 05:00 PM' },
            { icon: '📍', value: 'Camden, London NW1 2AF' },
            { icon: '💰', value: '£22/hour · Est. £176' },
            { icon: '👥', value: '2 workers needed · 1 confirmed' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 13, color: '#475569' }}>
              <span>{item.icon}</span><span>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Assigned worker */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '20px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 14 }}>Assigned Worker</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 16, fontWeight: 700,
            }}>SJ</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Sarah Johnson</div>
              <div style={{ fontSize: 12, color: '#64748b' }}>Dental Nurse · GDC #123456</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                <span style={{ padding: '2px 8px', background: '#dbeafe', color: '#2563eb', borderRadius: 10, fontSize: 10, fontWeight: 700 }}>✓ Compliance Verified</span>
                <span style={{ padding: '2px 8px', background: '#fef9c3', color: '#ca8a04', borderRadius: 10, fontSize: 10, fontWeight: 700 }}>⭐ 4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button style={{ padding: '14px', background: '#0f2444', border: 'none', borderRadius: 14, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            📞 Contact Worker
          </button>
          <button style={{ padding: '14px', background: '#0d9488', border: 'none', borderRadius: 14, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            ✅ Mark Completed
          </button>
          <button style={{ padding: '14px', background: '#fff', border: '2px solid #fee2e2', borderRadius: 14, color: '#dc2626', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            ❌ Cancel Shift
          </button>
        </div>
      </div>
    </div>
  );
}

function TimesheetApproval({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [rejected, setRejected] = useState(false);
  const [reason, setReason] = useState('');

  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Approve Timesheet" onBack={() => onNavigate('dashboard')} />
      <div style={{ padding: '16px' }}>
        {/* Worker info */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '18px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #0d9488, #14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 15, fontWeight: 700 }}>SJ</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Sarah Johnson</div>
              <div style={{ fontSize: 12, color: '#64748b' }}>Dental Nurse</div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <span style={{ padding: '4px 10px', background: '#fef9c3', color: '#ca8a04', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>Pending</span>
            </div>
          </div>

          {[
            { label: 'Shift Date', value: 'Saturday, 30 May 2026' },
            { label: 'Start Time', value: '09:00 AM' },
            { label: 'End Time', value: '05:15 PM' },
            { label: 'Break Duration', value: '30 minutes' },
            { label: 'Total Hours', value: '7 hours 45 mins' },
            { label: 'Gross Pay', value: '£170.50' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f8fafc' }}>
              <span style={{ fontSize: 13, color: '#64748b' }}>{item.label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{item.value}</span>
            </div>
          ))}

          <div style={{ marginTop: 14, background: '#f8fafc', borderRadius: 10, padding: '12px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Worker's Notes</div>
            <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>Shift completed as scheduled. Minor delay due to patient overrun but finished all required tasks.</div>
          </div>
        </div>

        {/* Rejection reason (conditional) */}
        {rejected && (
          <div style={{ background: '#fff', borderRadius: 16, padding: '18px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Rejection Reason</label>
            <textarea
              value={reason}
              onChange={e => setReason(e.target.value)}
              placeholder="Please explain the reason for rejection..."
              rows={3}
              style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #fee2e2', borderRadius: 12, fontSize: 13, outline: 'none', resize: 'none', boxSizing: 'border-box', background: '#fff8f8' }}
            />
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {!rejected ? (
            <>
              <button
                onClick={() => onNavigate('dashboard')}
                style={{ padding: '15px', background: 'linear-gradient(135deg, #0d9488, #0f766e)', border: 'none', borderRadius: 14, color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(13,148,136,0.3)' }}
              >
                ✅ Approve Timesheet
              </button>
              <button
                onClick={() => setRejected(true)}
                style={{ padding: '14px', background: '#fff', border: '2px solid #fee2e2', borderRadius: 14, color: '#dc2626', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
              >
                ❌ Query / Reject
              </button>
            </>
          ) : (
            <>
              <button style={{ padding: '14px', background: '#dc2626', border: 'none', borderRadius: 14, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Send Rejection
              </button>
              <button onClick={() => setRejected(false)} style={{ padding: '14px', background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 14, color: '#64748b', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function OrganisationBilling({ onNavigate }: { onNavigate: (s: string) => void }) {
  const invoices = [
    {
      id: 'INV-2048',
      shift: 'Dental Nurse — City Dental Clinic',
      worker: 'Sarah Johnson',
      date: '30 May 2026',
      amount: '£176.00',
      platformFee: '£17.60',
      total: '£193.60',
      status: 'pending',
      due: 'Due in 7 days',
    },
    {
      id: 'INV-2047',
      shift: 'Locum Dentist — Smile Perfect Dental',
      worker: 'Dr Ahmed Rahman',
      date: '26 May 2026',
      amount: '£520.00',
      platformFee: '£52.00',
      total: '£572.00',
      status: 'approved',
      due: 'Awaiting payment',
    },
    {
      id: 'INV-2046',
      shift: 'Healthcare Assistant — North London Clinic',
      worker: 'Emily Carter',
      date: '20 May 2026',
      amount: '£120.00',
      platformFee: '£12.00',
      total: '£132.00',
      status: 'paid',
      due: 'Paid',
    },
  ];

  const statusStyle: Record<string, { bg: string; color: string; label: string }> = {
    pending: { bg: '#fef9c3', color: '#ca8a04', label: 'Pending' },
    approved: { bg: '#dbeafe', color: '#2563eb', label: 'Approved' },
    paid: { bg: '#dcfce7', color: '#16a34a', label: 'Paid' },
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <MobileHeader title="Billing & Invoices" onBack={() => onNavigate('dashboard')} />

      <div style={{ padding: '16px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #0f2444, #1a3a5c)',
            borderRadius: 18,
            padding: 20,
            color: '#fff',
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>
            Outstanding Balance
          </div>
          <div style={{ fontSize: 30, fontWeight: 800 }}>£765.60</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>
            Includes worker pay and platform commission
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#0d9488' }}>3</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>Open Invoices</div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#0f2444' }}>10%</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>Platform Fee</div>
          </div>
        </div>

        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
          Invoice History
        </h3>

        {invoices.map((invoice) => {
          const s = statusStyle[invoice.status];

          return (
            <div
              key={invoice.id}
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: 16,
                marginBottom: 12,
                boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#0f172a' }}>{invoice.id}</div>
                  <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{invoice.shift}</div>
                </div>

                <span
                  style={{
                    height: 24,
                    padding: '3px 10px',
                    borderRadius: 20,
                    background: s.bg,
                    color: s.color,
                    fontSize: 11,
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.label}
                </span>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 10 }}>
                {[
                  ['Worker', invoice.worker],
                  ['Shift Date', invoice.date],
                  ['Worker Pay', invoice.amount],
                  ['Platform Fee', invoice.platformFee],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                    <span style={{ fontSize: 12, color: '#64748b' }}>{label}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{value}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, paddingTop: 10, borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#0f172a' }}>Total Due</span>
                  <span style={{ fontSize: 15, fontWeight: 900, color: '#0d9488' }}>{invoice.total}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                <button
                  style={{
                    flex: 1,
                    padding: '11px',
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    background: '#fff',
                    color: '#334155',
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  View Invoice
                </button>

                <button
                  style={{
                    flex: 1,
                    padding: '11px',
                    borderRadius: 12,
                    border: 'none',
                    background: invoice.status === 'paid' ? '#e2e8f0' : '#0f2444',
                    color: invoice.status === 'paid' ? '#64748b' : '#fff',
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  {invoice.status === 'paid' ? 'Paid' : 'Pay Invoice'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// ---- ORG APP CONTROLLER ----
export function OrgApp() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState('dashboard');

  const handleNavigate = (s: string) => {
    if (s === 'back-to-welcome') { navigate('/welcome'); return; }
    setScreen(s);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'dashboard': return <OrgDashboard onNavigate={handleNavigate} />;
      case 'post-shift': return <PostShift onNavigate={handleNavigate} />;
      case 'shift-posted': return <ShiftPosted onNavigate={handleNavigate} />;
      case 'shift-details': return <OrgShiftDetails onNavigate={handleNavigate} />;
      case 'timesheet-approval': return <TimesheetApproval onNavigate={handleNavigate} />;
      case 'billing': return <OrganisationBilling onNavigate={handleNavigate} />;
      default: return <OrgDashboard onNavigate={handleNavigate} />;
    }
  };

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
      {renderScreen()}
    </div>
  );
}


