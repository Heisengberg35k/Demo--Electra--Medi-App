import React from 'react';

interface Props { onNavigate: (screen: string, data?: any) => void; }

function StatCard({ title, value, sub, icon, color, bg, trend }: any) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 22 }}>{icon}</span>
        </div>
        {trend && (
          <span style={{ padding: '3px 10px', borderRadius: 20, background: trend > 0 ? '#dcfce7' : '#fee2e2', color: trend > 0 ? '#16a34a' : '#dc2626', fontSize: 11, fontWeight: 700 }}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 2 }}>{title}</div>
      {sub && <div style={{ fontSize: 11, color: '#94a3b8' }}>{sub}</div>}
    </div>
  );
}

export function AdminDashboard({ onNavigate }: Props) {
  const stats = [
    { title: 'Total Workers', value: '1,284', sub: '47 pending verification', icon: '👥', color: '#0d9488', bg: '#f0fdfa', trend: 12 },
    { title: 'Organisations', value: '156', sub: '8 new this month', icon: '🏥', color: '#2563eb', bg: '#eff6ff', trend: 5 },
    { title: 'Active Shifts', value: '89', sub: '234 posted this month', icon: '📋', color: '#7c3aed', bg: '#f5f3ff', trend: 18 },
    { title: 'Pending Documents', value: '43', sub: 'Awaiting review', icon: '📄', color: '#dc2626', bg: '#fef2f2', trend: -8 },
    { title: 'Pending Timesheets', value: '27', sub: '£14,820 value', icon: '⏱️', color: '#d97706', bg: '#fffbeb', trend: -3 },
    { title: 'Monthly Revenue', value: '£48,290', sub: '+£6,840 vs last month', icon: '💰', color: '#059669', bg: '#dcfce7', trend: 16 },
  ];

  const recentWorkers = [
    { name: 'Sarah Johnson', role: 'Dental Nurse', location: 'Camden', status: 'verified', rating: 4.9 },
    { name: 'Michael Chen', role: 'Locum Dentist', location: 'Islington', status: 'pending', rating: 4.7 },
    { name: 'Emma Williams', role: 'General Nurse', location: 'Hackney', status: 'verified', rating: 4.8 },
    { name: 'James Okafor', role: 'Healthcare Asst.', location: 'Southwark', status: 'review', rating: 4.5 },
  ];

  const recentShifts = [
    { role: 'Dental Nurse', org: 'City Dental Clinic', date: '30 May 2026', status: 'active' },
    { role: 'Locum Dentist', org: 'Smile Perfect', date: '31 May 2026', status: 'confirmed' },
    { role: 'General Nurse', org: "King's College NHS", date: '1 Jun 2026', status: 'pending' },
    { role: 'Support Worker', org: 'Sunrise Care', date: '2 Jun 2026', status: 'pending' },
  ];

  const statusColor = (s: string) => {
    if (s === 'verified' || s === 'confirmed') return { bg: '#dbeafe', color: '#2563eb' };
    if (s === 'active' || s === 'approved') return { bg: '#dcfce7', color: '#16a34a' };
    if (s === 'pending') return { bg: '#fef9c3', color: '#ca8a04' };
    if (s === 'review') return { bg: '#fce7f3', color: '#be185d' };
    return { bg: '#f3f4f6', color: '#6b7280' };
  };

  return (
    <div>
      {/* Welcome bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0f2444 0%, #1a3a5c 60%, #0d9488 100%)',
        borderRadius: 20, padding: '28px 32px', marginBottom: 24, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        overflow: 'hidden', position: 'relative',
      }}>
        <div style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', right: 60, bottom: -60, width: 160, height: 160, borderRadius: '50%', background: 'rgba(13,148,136,0.2)', pointerEvents: 'none' }}/>
        <div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Monday, 11 May 2026</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>Good morning, Admin! 👋</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Here's what's happening on the Electra platform today.</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => onNavigate('workers')} style={{ padding: '11px 20px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            Review Documents (43)
          </button>
          <button onClick={() => onNavigate('timesheets')} style={{ padding: '11px 20px', background: '#0d9488', border: 'none', borderRadius: 12, color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(13,148,136,0.4)' }}>
            Pending Timesheets (27)
          </button>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map(s => <StatCard key={s.title} {...s} />)}
      </div>

      {/* Two column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Recent workers */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', margin: 0 }}>Recent Workers</h3>
            <button onClick={() => onNavigate('workers')} style={{ background: 'none', border: 'none', color: '#0d9488', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>View All →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recentWorkers.map((w, i) => {
              const sc = statusColor(w.status);
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderBottom: i < recentWorkers.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #0d9488, #14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                    {w.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{w.name}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>{w.role} · {w.location}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span style={{ padding: '2px 8px', borderRadius: 20, background: sc.bg, color: sc.color, fontSize: 10, fontWeight: 700, textTransform: 'capitalize' }}>{w.status}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#f59e0b' }}>⭐ {w.rating}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent shifts */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', margin: 0 }}>Upcoming Shifts</h3>
            <button onClick={() => onNavigate('jobs')} style={{ background: 'none', border: 'none', color: '#0d9488', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>View All →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recentShifts.map((shift, i) => {
              const sc = statusColor(shift.status);
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderBottom: i < recentShifts.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>📋</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{shift.role}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>{shift.org} · {shift.date}</div>
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: 20, background: sc.bg, color: sc.color, fontSize: 11, fontWeight: 700, textTransform: 'capitalize' }}>{shift.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick action cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 20 }}>
        {[
          { icon: '🔍', label: 'Review Documents', sub: '43 pending', color: '#dc2626', bg: '#fef2f2', action: 'workers' },
          { icon: '✅', label: 'Approve Timesheets', sub: '27 awaiting', color: '#d97706', bg: '#fffbeb', action: 'timesheets' },
          { icon: '💰', label: 'Process Payments', sub: '12 due', color: '#059669', bg: '#dcfce7', action: 'payments' },
          { icon: '📊', label: 'View Reports', sub: 'Monthly report ready', color: '#7c3aed', bg: '#f5f3ff', action: 'reports' },
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => onNavigate(item.action)}
            style={{
              background: '#fff', border: '1px solid #f1f5f9', borderRadius: 14,
              padding: '20px 16px', textAlign: 'left', cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'transform 0.1s',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ width: 40, height: 40, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 12 }}>{item.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 3 }}>{item.label}</div>
            <div style={{ fontSize: 11, color: item.color, fontWeight: 600 }}>{item.sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
