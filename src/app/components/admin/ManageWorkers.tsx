import React, { useState } from 'react';

interface Props { onNavigate: (screen: string, data?: any) => void; }

const workers = [
  { id: 'w1', name: 'Sarah Johnson', role: 'Dental Nurse', location: 'Camden, London', compliance: 'verified', rating: 4.9, status: 'active', joined: 'Jan 2026', shifts: 47 },
  { id: 'w2', name: 'Michael Chen', role: 'Locum Dentist', location: 'Islington, London', compliance: 'pending', rating: 4.7, status: 'active', joined: 'Feb 2026', shifts: 12 },
  { id: 'w3', name: 'Emma Williams', role: 'General Nurse', location: 'Hackney, E8', compliance: 'verified', rating: 4.8, status: 'active', joined: 'Dec 2025', shifts: 83 },
  { id: 'w4', name: 'James Okafor', role: 'Healthcare Asst.', location: 'Southwark, SE1', compliance: 'review', rating: 4.5, status: 'pending', joined: 'Mar 2026', shifts: 6 },
  { id: 'w5', name: 'Priya Patel', role: 'Support Worker', location: 'Newham, E13', compliance: 'verified', rating: 4.6, status: 'active', joined: 'Nov 2025', shifts: 104 },
  { id: 'w6', name: 'David Thompson', role: 'Locum Dentist', location: 'Lambeth, SE11', compliance: 'incomplete', rating: 4.2, status: 'suspended', joined: 'Apr 2026', shifts: 3 },
  { id: 'w7', name: 'Aisha Rahman', role: 'Dental Nurse', location: 'Tower Hamlets, E1', compliance: 'verified', rating: 5.0, status: 'active', joined: 'Oct 2025', shifts: 128 },
  { id: 'w8', name: 'Oliver Brown', role: 'Healthcare Asst.', location: 'Greenwich, SE10', compliance: 'pending', rating: 4.4, status: 'active', joined: 'May 2026', shifts: 1 },
];

export function ManageWorkers({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = workers.filter(w => {
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase()) || w.role.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || w.compliance === filter || w.status === filter;
    return matchSearch && matchFilter;
  });

  const complianceStyle = (c: string) => {
    if (c === 'verified') return { bg: '#dcfce7', color: '#16a34a' };
    if (c === 'pending') return { bg: '#fef9c3', color: '#ca8a04' };
    if (c === 'review') return { bg: '#fce7f3', color: '#be185d' };
    if (c === 'incomplete') return { bg: '#fee2e2', color: '#dc2626' };
    return { bg: '#f3f4f6', color: '#6b7280' };
  };

  const statusStyle = (s: string) => {
    if (s === 'active') return { bg: '#dcfce7', color: '#16a34a' };
    if (s === 'pending') return { bg: '#fef9c3', color: '#ca8a04' };
    if (s === 'suspended') return { bg: '#fee2e2', color: '#dc2626' };
    return { bg: '#f3f4f6', color: '#6b7280' };
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>Manage Workers</h2>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>View, manage and verify all registered workers on the platform</p>
        </div>
        <button style={{ padding: '11px 20px', background: 'linear-gradient(135deg, #0d9488, #0f766e)', border: 'none', borderRadius: 12, color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 12px rgba(13,148,136,0.3)' }}>
          ➕ Add Worker
        </button>
      </div>

      {/* Filters */}
      <div style={{ background: '#fff', borderRadius: 16, padding: '16px 20px', marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center', boxShadow: '0 1px 8px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
        <div style={{ position: 'relative', flex: 1, maxWidth: 300 }}>
          <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or role..." style={{ width: '100%', padding: '10px 14px 10px 36px', border: '1.5px solid #e2e8f0', borderRadius: 10, fontSize: 13, outline: 'none', boxSizing: 'border-box', background: '#f8fafc' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e2e8f0')} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['all', 'verified', 'pending', 'review', 'active', 'suspended'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: filter === f ? '#0f2444' : '#f1f5f9', color: filter === f ? '#fff' : '#64748b', fontSize: 12, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
              {f === 'all' ? 'All Workers' : f}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 13, color: '#94a3b8' }}>{filtered.length} workers</div>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              {['Worker', 'Role', 'Location', 'Compliance', 'Rating', 'Status', 'Shifts', 'Actions'].map(h => (
                <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((worker, i) => {
              const cs = complianceStyle(worker.compliance);
              const ss = statusStyle(worker.status);
              return (
                <tr key={worker.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #f8fafc' : 'none', transition: 'background 0.1s' }} onMouseOver={e => (e.currentTarget.style.background = '#f8fafc')} onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #0d9488, #14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                        {worker.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{worker.name}</div>
                        <div style={{ fontSize: 11, color: '#94a3b8' }}>Joined {worker.joined}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, color: '#475569', fontWeight: 500 }}>{worker.role}</td>
                  <td style={{ padding: '14px 16px', fontSize: 12, color: '#64748b' }}>{worker.location}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: 20, background: cs.bg, color: cs.color, fontSize: 11, fontWeight: 700, textTransform: 'capitalize' }}>{worker.compliance}</span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 700, color: '#f59e0b' }}>⭐ {worker.rating}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: 20, background: ss.bg, color: ss.color, fontSize: 11, fontWeight: 700, textTransform: 'capitalize' }}>{worker.status}</span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{worker.shifts}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button
                        onClick={() => onNavigate('worker-review', worker.id)}
                        style={{ padding: '6px 12px', background: '#0d9488', border: 'none', borderRadius: 8, color: '#fff', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
                      >Review</button>
                      <button style={{ padding: '6px 12px', background: '#f1f5f9', border: 'none', borderRadius: 8, color: '#475569', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>View</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
