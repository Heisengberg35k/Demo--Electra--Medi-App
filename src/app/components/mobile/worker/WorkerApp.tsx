import React, { useState } from 'react';
import { useNavigate } from 'react-router';

// ---- Shared BottomNav ----
function BottomNav({ active, onChange }: { active: string; onChange: (s: string) => void }) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: (c: string) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { id: 'available-shifts', label: 'Shifts', icon: (c: string) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
    { id: 'documents', label: 'Documents', icon: (c: string) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
    { id: 'earnings', label: 'Earnings', icon: (c: string) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
    { id: 'profile', label: 'Profile', icon: (c: string) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  ];
  return (
    <div style={{
      position: 'sticky', bottom: 0, background: '#fff',
      borderTop: '1px solid #f1f5f9',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '8px 4px 16px',
      zIndex: 100,
      boxShadow: '0 -4px 16px rgba(0,0,0,0.05)',
    }}>
      {tabs.map(tab => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 10,
              minWidth: 50,
            }}
          >
            {tab.icon(isActive ? '#0d9488' : '#9ca3af')}
            <span style={{ fontSize: 10, color: isActive ? '#0d9488' : '#9ca3af', fontWeight: isActive ? 700 : 400 }}>
              {tab.label}
            </span>
            {isActive && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#0d9488' }} />}
          </button>
        );
      })}
    </div>
  );
}

// ---- Header ----
function MobileHeader({ title, onBack, rightContent }: { title: string; onBack?: () => void; rightContent?: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '52px 20px 16px',
      background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
      color: '#fff',
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

// ---- Status Badge ----
function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; color: string; label: string }> = {
    'approved': { bg: '#dcfce7', color: '#16a34a', label: 'Approved' },
    'pending': { bg: '#fef9c3', color: '#ca8a04', label: 'Pending Review' },
    'missing': { bg: '#fee2e2', color: '#dc2626', label: 'Missing' },
    'expired': { bg: '#fce7f3', color: '#be185d', label: 'Expired' },
    'available': { bg: '#dcfce7', color: '#16a34a', label: 'Available' },
    'confirmed': { bg: '#dbeafe', color: '#2563eb', label: 'Confirmed' },
    'completed': { bg: '#d1fae5', color: '#059669', label: 'Completed' },
    'cancelled': { bg: '#fee2e2', color: '#dc2626', label: 'Cancelled' },
    'paid': { bg: '#d1fae5', color: '#059669', label: 'Paid' },
    'verified': { bg: '#dbeafe', color: '#2563eb', label: 'Verified Worker' },
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

// ---- Shift Card ----
const shifts = [
  {
    id: 1, role: 'Dental Nurse', org: 'City Dental Clinic', location: 'Camden, London',
    date: 'Saturday, 30 May 2026', time: '09:00 AM – 05:00 PM', rate: '£22/hr',
    distance: '2.4 miles', status: 'available', specialty: 'Dental',
  },
  {
    id: 2, role: 'Locum Dentist', org: 'Smile Perfect Dental', location: 'Islington, London',
    date: 'Sunday, 31 May 2026', time: '08:30 AM – 04:30 PM', rate: '£65/hr',
    distance: '3.1 miles', status: 'available', specialty: 'Dental',
  },
  {
    id: 3, role: 'Healthcare Assistant', org: "King's College Hospital", location: 'Denmark Hill, SE5',
    date: 'Monday, 1 June 2026', time: '07:00 AM – 03:00 PM', rate: '£15/hr',
    distance: '5.6 miles', status: 'available', specialty: 'Healthcare',
  },
  {
    id: 4, role: 'General Nurse', org: 'Barts NHS Trust', location: 'Whitechapel, E1',
    date: 'Tuesday, 2 June 2026', time: '08:00 AM – 08:00 PM', rate: '£28/hr',
    distance: '4.2 miles', status: 'available', specialty: 'Healthcare',
  },
  {
    id: 5, role: 'Support Worker', org: 'Sunrise Care Home', location: 'Hackney, E8',
    date: 'Wednesday, 3 June 2026', time: '06:00 AM – 02:00 PM', rate: '£13/hr',
    distance: '3.7 miles', status: 'available', specialty: 'Care',
  },
];

// ---- SCREENS ----

function WorkerDashboard({ onNavigate }: { onNavigate: (s: string, data?: any) => void }) {
    const cards = [
    { title: 'Available Shifts', value: '12', icon: 'SH', color: '#0d9488', nav: 'available-shifts' },
    { title: 'Confirmed Shifts', value: '3', icon: 'CF', color: '#2563eb', nav: 'my-shifts' },
    { title: 'Earnings This Month', value: '£1,240', icon: '£', color: '#0f2444', nav: 'earnings' },
    { title: 'Compliance Documents', value: '7/9', icon: 'DC', color: '#dc2626', nav: 'documents' },
    { title: 'Pending Timesheets', value: '2', icon: 'TS', color: '#d97706', nav: 'timesheet' },
    { title: 'Notifications', value: '4', icon: 'NT', color: '#0891b2', nav: 'dashboard' },
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      {/* Hero header */}
      <div style={{
        background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
        padding: '52px 20px 28px',
        color: '#fff',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 2 }}>Worker Dashboard</p>
            <button
                  onClick={() => onNavigate('back-to-welcome')}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  borderRadius: 10,
                  padding: '6px 12px',
                  color: '#fff',
                  fontSize: 12,
                  cursor: 'pointer'
                }}
              >
                Back to Roles
              </button>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>Sarah Johnson </h1>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, color: '#fff', fontWeight: 700,
              border: '2px solid rgba(255,255,255,0.3)',
            }}>SJ</div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#22c55e', border: '2px solid #0f2444' }}/>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <StatusBadge status="verified" />
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Profile 85% complete</span>
        </div>

        {/* Completion bar */}
        <div style={{ marginTop: 14, background: 'rgba(255,255,255,0.15)', borderRadius: 8, height: 5, overflow: 'hidden' }}>
          <div style={{ width: '85%', height: '100%', background: '#0d9488', borderRadius: 8 }}/>
        </div>
      </div>

      {/* Next shift banner */}
      <div style={{ margin: '16px 16px 0', background: 'linear-gradient(135deg, #0d9488, #0f766e)', borderRadius: 16, padding: '16px 20px', color: '#fff', boxShadow: '0 4px 20px rgba(13,148,136,0.3)' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Next Shift</div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>Dental Nurse — City Dental Clinic</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>Sat 30 May · 09:00–17:00 · Camden</div>
      </div>

      {/* Cards grid */}
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {cards.map((card) => (
            <button
              key={card.title}
              onClick={() => onNavigate(card.nav)}
              style={{
                background: '#fff',
                border: 'none', borderRadius: 16,
                padding: '18px 16px',
                textAlign: 'left', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.1s, box-shadow 0.1s',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}
            >
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
              <div style={{ fontSize: 20, fontWeight: 800, color: card.color, marginBottom: 2 }}>{card.value}</div>
              <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{card.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent shifts */}
      <div style={{ padding: '8px 16px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Nearby Shifts</span>
          <button onClick={() => onNavigate('available-shifts')} style={{ background: 'none', border: 'none', color: '#0d9488', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>View all</button>
        </div>
        {shifts.slice(0, 2).map(shift => (
          <div key={shift.id} onClick={() => onNavigate('shift-details', shift)} style={{
            background: '#fff', borderRadius: 16, padding: '16px', marginBottom: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)', cursor: 'pointer',
            border: '1px solid #f1f5f9',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>{shift.role}</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>{shift.org}</div>
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0d9488' }}>{shift.rate}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, fontSize: 11, color: '#94a3b8' }}>
              <span>📅 {shift.date.split(',')[1]?.trim()}</span>
              <span>📍 {shift.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AvailableShifts({ onNavigate }: { onNavigate: (s: string, data?: any) => void }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Dental', 'Healthcare', 'Care'];
  const filtered = filter === 'All' ? shifts : shifts.filter(s => s.specialty === filter);

  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Available Shifts" onBack={() => onNavigate('dashboard')} />

      {/* Search */}
      <div style={{ padding: '12px 16px', background: '#fff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input placeholder="Search shifts..." style={{ width: '100%', padding: '11px 14px 11px 38px', border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 13, background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 10, overflowX: 'auto', paddingBottom: 2 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '6px 14px', borderRadius: 20, border: 'none',
              background: filter === f ? '#0f2444' : '#f1f5f9',
              color: filter === f ? '#fff' : '#6b7280',
              fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '12px 16px' }}>
        <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 12 }}>{filtered.length} shifts found near you</p>
        {filtered.map(shift => (
          <div key={shift.id} style={{
            background: '#fff', borderRadius: 16, padding: '16px', marginBottom: 12,
            boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>{shift.role}</div>
                <div style={{ fontSize: 13, color: '#0d9488', fontWeight: 600 }}>{shift.org}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0d9488' }}>{shift.rate}</div>
                <StatusBadge status={shift.status} />
              </div>
            </div>
            <div style={{ borderTop: '1px solid #f8fafc', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ display: 'flex', gap: 6, fontSize: 12, color: '#475569' }}>
                <span>📍</span><span>{shift.location}</span>
                <span style={{ marginLeft: 'auto', color: '#0d9488', fontWeight: 600 }}>📏 {shift.distance}</span>
              </div>
              <div style={{ display: 'flex', gap: 6, fontSize: 12, color: '#475569' }}>
                <span>📅</span><span>{shift.date}</span>
              </div>
              <div style={{ display: 'flex', gap: 6, fontSize: 12, color: '#475569' }}>
                <span>🕐</span><span>{shift.time}</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('shift-details', shift)}
              style={{
                width: '100%', marginTop: 12, padding: '11px',
                background: '#0f2444', border: 'none', borderRadius: 12,
                color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer',
              }}
            >View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShiftDetails({ shift, onNavigate }: { shift: any; onNavigate: (s: string, data?: any) => void }) {
  const s = shift || shifts[0];
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <div style={{
        background: 'linear-gradient(160deg, #0f2444 0%, #1a3a5c 100%)',
        padding: '52px 20px 28px',
        color: '#fff',
      }}>
        <button onClick={() => onNavigate('available-shifts')} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: 10, padding: '8px 14px', color: '#fff', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <StatusBadge status={s.status} />
        <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginTop: 10, marginBottom: 4 }}>{s.role}</h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{s.org}</p>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Rate card */}
        <div style={{ background: 'linear-gradient(135deg, #0d9488, #0f766e)', borderRadius: 16, padding: '20px', color: '#fff', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>HOURLY RATE</div>
            <div style={{ fontSize: 32, fontWeight: 800 }}>{s.rate}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>EST. EARNINGS</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              {s.rate === '£22/hr' ? '£176.00' : s.rate === '£65/hr' ? '£520.00' : s.rate === '£28/hr' ? '£336.00' : '£104.00'}
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>for this shift</div>
          </div>
        </div>

        {/* Details card */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '20px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Shift Details</h3>
          {[
            { icon: '📍', label: 'Location', value: s.location },
            { icon: '📅', label: 'Date', value: s.date },
            { icon: '🕐', label: 'Time', value: s.time },
            { icon: '📏', label: 'Distance', value: s.distance },
            { icon: '👥', label: 'Workers Needed', value: '2 workers' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div style={{
          background: '#e8f4fd',
          borderRadius: 16, overflow: 'hidden',
          height: 120, marginBottom: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid #bfdbfe',
          position: 'relative',
        }}>
          <div style={{ textAlign: 'center', color: '#2563eb' }}>
            <div style={{ fontSize: 28 }}>🗺️</div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>{s.location}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>Tap to open in Maps</div>
          </div>
        </div>

        {/* Required docs */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '16px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Required Documents</h3>
          {['Valid DBS Certificate', 'Professional Registration', 'Right to Work', 'Indemnity Insurance'].map(doc => (
            <div key={doc} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span style={{ fontSize: 12, color: '#374151' }}>{doc}</span>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div style={{ background: '#fffbeb', borderRadius: 12, padding: '14px', marginBottom: 20, border: '1px solid #fed7aa' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#92400e', marginBottom: 4 }}>📋 Shift Notes</div>
          <div style={{ fontSize: 12, color: '#78350f', lineHeight: 1.5 }}>
            Please arrive 10 minutes early. Bring your GDC registration number. Smart/clinical uniform required. Parking available onsite.
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onNavigate('shift-confirmed', s)}
          style={{
            width: '100%', padding: '16px',
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            border: 'none', borderRadius: 16,
            color: '#fff', fontSize: 16, fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(13,148,136,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          ✅ Accept Shift
        </button>
      </div>
    </div>
  );
}

function ShiftConfirmed({ shift, onNavigate }: { shift: any; onNavigate: (s: string, data?: any) => void }) {
  const s = shift || shifts[0];
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%', paddingTop: 44 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px 24px', textAlign: 'center' }}>
        {/* Success icon */}
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
          boxShadow: '0 12px 32px rgba(13,148,136,0.4)',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>Shift Confirmed!</h1>
        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5, maxWidth: 280 }}>
          Your shift has been confirmed. The organisation has been notified.
        </p>
      </div>

      {/* Summary */}
      <div style={{ margin: '0 16px 16px', background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🏥</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{s.role}</div>
            <div style={{ fontSize: 13, color: '#0d9488', fontWeight: 600 }}>{s.org}</div>
          </div>
        </div>
        {[
          { label: 'Date', value: s.date, icon: '📅' },
          { label: 'Time', value: s.time, icon: '🕐' },
          { label: 'Location', value: s.location, icon: '📍' },
          { label: 'Rate', value: s.rate, icon: '💰' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: '#64748b', display: 'flex', gap: 6 }}><span>{item.icon}</span>{item.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{ padding: '14px', background: '#0f2444', border: 'none', borderRadius: 14, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          📞 Contact Organisation
        </button>
        <button style={{ padding: '14px', background: '#fff', border: '2px solid #0d9488', borderRadius: 14, color: '#0d9488', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          📆 Add to Calendar
        </button>
        <button onClick={() => onNavigate('dashboard')} style={{ padding: '14px', background: 'transparent', border: 'none', color: '#64748b', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

function ConfirmedShifts({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [tab, setTab] = useState('upcoming');
  const upcoming = [
    { role: 'Dental Nurse', org: 'City Dental Clinic', date: 'Sat 30 May 2026', status: 'confirmed' },
    { role: 'Locum Dentist', org: 'Smile Perfect Dental', date: 'Sun 31 May 2026', status: 'confirmed' },
  ];
  const completed = [
    { role: 'General Nurse', org: 'Barts NHS Trust', date: 'Mon 12 May 2026', status: 'completed' },
    { role: 'Healthcare Assistant', org: "King's College", date: 'Wed 7 May 2026', status: 'completed' },
    { role: 'Support Worker', org: 'Sunrise Care Home', date: 'Fri 2 May 2026', status: 'completed' },
  ];
  const cancelled = [
    { role: 'Dental Nurse', org: 'Westfield Dental', date: 'Sat 24 May 2026', status: 'cancelled' },
  ];
  const data: Record<string, any[]> = { upcoming, completed, cancelled };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="My Shifts" onBack={() => onNavigate('dashboard')} />
      <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #f1f5f9' }}>
        {['upcoming', 'completed', 'cancelled'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: '14px 8px', border: 'none', background: 'none',
            color: tab === t ? '#0d9488' : '#94a3b8',
            fontWeight: tab === t ? 700 : 400, fontSize: 13, cursor: 'pointer',
            borderBottom: tab === t ? '2.5px solid #0d9488' : '2.5px solid transparent',
            textTransform: 'capitalize',
          }}>{t}</button>
        ))}
      </div>
      <div style={{ padding: '16px' }}>
        {(data[tab] || []).map((shift, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '16px', marginBottom: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{shift.role}</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>{shift.org}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>📅 {shift.date}</div>
              </div>
              <StatusBadge status={shift.status} />
            </div>
            <button style={{ width: '100%', marginTop: 8, padding: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, color: '#475569', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Documents({ onNavigate }: { onNavigate: (s: string) => void }) {
  const docs = [
    { name: 'ID / Passport', status: 'approved', date: 'Expires Dec 2028' },
    { name: 'Right to Work', status: 'approved', date: 'Verified Apr 2026' },
    { name: 'DBS Certificate', status: 'approved', date: 'Issued Jan 2026' },
    { name: 'Indemnity Insurance', status: 'pending', date: 'Uploaded May 2026' },
    { name: 'Professional Registration', status: 'approved', date: 'GDC #123456' },
    { name: 'CV / Resume', status: 'approved', date: 'Updated Mar 2026' },
    { name: 'References', status: 'pending', date: 'Submitted Apr 2026' },
    { name: 'Training Certificates', status: 'missing', date: 'Not uploaded' },
    { name: 'Hepatitis B Certificate', status: 'expired', date: 'Expired Jan 2026' },
  ];
  const approved = docs.filter(d => d.status === 'approved').length;
  const total = docs.length;
  const pct = Math.round((approved / total) * 100);

  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Documents & Compliance" onBack={() => onNavigate('dashboard')} />

      {/* Progress */}
      <div style={{ margin: '16px 16px 0', background: '#0f2444', borderRadius: 16, padding: '20px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 2 }}>Compliance Score</div>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{pct}%</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#0d9488' }}>{approved}/{total}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Documents Approved</div>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 8, height: 8, overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #0d9488, #14b8a6)', borderRadius: 8 }}/>
        </div>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>
          You can accept shifts once all required documents are approved.
        </p>
      </div>

      {/* Doc list */}
      <div style={{ padding: '16px' }}>
        {docs.map(doc => (
          <div key={doc.name} style={{
            background: '#fff', borderRadius: 14, padding: '14px 16px',
            marginBottom: 8, display: 'flex', alignItems: 'center', gap: 14,
            boxShadow: '0 1px 6px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: doc.status === 'approved' ? '#dcfce7' : doc.status === 'pending' ? '#fef9c3' : doc.status === 'expired' ? '#fce7f3' : '#fee2e2',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontSize: 18 }}>
                {doc.status === 'approved' ? '✅' : doc.status === 'pending' ? '⏳' : doc.status === 'expired' ? '⚠️' : '📤'}
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>{doc.name}</div>
              <div style={{ fontSize: 11, color: '#94a3b8' }}>{doc.date}</div>
            </div>
            <StatusBadge status={doc.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Timesheet({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Timesheet" onBack={() => onNavigate('dashboard')} />
      <div style={{ padding: '16px' }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>Dental Nurse — City Dental Clinic</h3>
          <p style={{ fontSize: 12, color: '#64748b', marginBottom: 20 }}>Saturday, 30 May 2026</p>

          {[
            { label: 'Start Time', placeholder: '09:00 AM', type: 'time' },
            { label: 'End Time', placeholder: '05:00 PM', type: 'time' },
            { label: 'Break Duration (mins)', placeholder: '30', type: 'number' },
          ].map(field => (
            <div key={field.label} style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                style={{
                  width: '100%', padding: '13px 14px',
                  border: '1.5px solid #e5e7eb', borderRadius: 12,
                  fontSize: 14, color: '#111827', background: '#f9fafb',
                  outline: 'none', boxSizing: 'border-box',
                }}
                onFocus={e => (e.target.style.borderColor = '#0d9488')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          ))}

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Additional Notes</label>
            <textarea
              placeholder="Any notes or comments for this shift..."
              rows={3}
              style={{
                width: '100%', padding: '13px 14px',
                border: '1.5px solid #e5e7eb', borderRadius: 12,
                fontSize: 14, color: '#111827', background: '#f9fafb',
                outline: 'none', boxSizing: 'border-box', resize: 'none',
              }}
              onFocus={e => (e.target.style.borderColor = '#0d9488')}
              onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>

          {/* Hours summary */}
          <div style={{ background: '#f0fdfa', borderRadius: 12, padding: '14px', marginBottom: 16, border: '1px solid #99f6e4' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: '#374151' }}>Total Hours</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0d9488' }}>7.5 hrs</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 13, color: '#374151' }}>Estimated Pay</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0f2444' }}>£165.00</span>
            </div>
          </div>

          <button style={{
            width: '100%', padding: '15px',
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            border: 'none', borderRadius: 14,
            color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(13,148,136,0.3)',
          }}>
            📤 Submit Timesheet
          </button>
        </div>
      </div>
    </div>
  );
}

function Earnings({ onNavigate }: { onNavigate: (s: string) => void }) {
  const records = [
    { shift: 'Dental Nurse — City Dental Clinic', date: '12 May 2026', hours: '8 hrs', amount: '£176.00', status: 'paid' },
    { shift: 'General Nurse — Barts NHS', date: '7 May 2026', hours: '10 hrs', amount: '£280.00', status: 'paid' },
    { shift: 'Locum Dentist — Smile Perfect', date: '28 Apr 2026', hours: '8 hrs', amount: '£520.00', status: 'approved' },
    { shift: 'Support Worker — Sunrise Care', date: '18 Apr 2026', hours: '8 hrs', amount: '£104.00', status: 'pending' },
    { shift: 'Healthcare Assistant — King\'s', date: '9 Apr 2026', hours: '8 hrs', amount: '£120.00', status: 'paid' },
  ];
  return (
    <div style={{ background: '#f8fafc', minHeight: '100%' }}>
      <MobileHeader title="Earnings" onBack={() => onNavigate('dashboard')} />

      {/* Summary cards */}
      <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { label: 'Total Earned', value: '£4,820', sub: 'All time', color: '#0d9488', bg: '#f0fdfa' },
          { label: 'This Month', value: '£1,240', sub: 'May 2026', color: '#7c3aed', bg: '#f5f3ff' },
          { label: 'Pending', value: '£104', sub: '1 payment', color: '#d97706', bg: '#fffbeb' },
          { label: 'Shifts Done', value: '47', sub: 'Total shifts', color: '#2563eb', bg: '#eff6ff' },
        ].map(card => (
          <div key={card.label} style={{ background: '#fff', borderRadius: 16, padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: card.color }}>{card.value}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#374151', marginTop: 2 }}>{card.label}</div>
            <div style={{ fontSize: 11, color: '#94a3b8' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Payment records */}
      <div style={{ padding: '0 16px 16px' }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Payment History</h3>
        {records.map((r, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '14px 16px', marginBottom: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
              <div style={{ flex: 1, marginRight: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{r.shift}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{r.date} · {r.hours}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a' }}>{r.amount}</div>
                <StatusBadge status={r.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- WORKER APP CONTROLLER ----
export function WorkerApp() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState<string>('dashboard');
  const [screenData, setScreenData] = useState<any>(null);

  const handleNavigate = (s: string, data?: any) => {
    if (s === 'back-to-welcome') {
      navigate('/welcome');
      return;
    }
    setScreen(s);
    if (data) setScreenData(data);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'dashboard': return <WorkerDashboard onNavigate={handleNavigate} />;
      case 'available-shifts': return <AvailableShifts onNavigate={handleNavigate} />;
      case 'shift-details': return <ShiftDetails shift={screenData} onNavigate={handleNavigate} />;
      case 'shift-confirmed': return <ShiftConfirmed shift={screenData} onNavigate={handleNavigate} />;
      case 'my-shifts': return <ConfirmedShifts onNavigate={handleNavigate} />;
      case 'documents': return <Documents onNavigate={handleNavigate} />;
      case 'timesheet': return <Timesheet onNavigate={handleNavigate} />;
      case 'earnings': return <Earnings onNavigate={handleNavigate} />;
      default: return <WorkerDashboard onNavigate={handleNavigate} />;
    }
  };

  const hideNav = ['shift-details', 'shift-confirmed'].includes(screen);

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
      <div style={{ flex: 1 }}>
        {renderScreen()}
      </div>

      {!hideNav && (
        <BottomNav active={screen} onChange={handleNavigate} />
      )}
    </div>
  );
}