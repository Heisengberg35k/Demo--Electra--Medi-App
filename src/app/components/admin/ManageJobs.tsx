import React, { useState } from 'react';

interface Props { onNavigate: (screen: string, data?: any) => void; }

const jobs = [
  { id: 'J001', role: 'Dental Nurse', org: 'City Dental Clinic', worker: 'Sarah Johnson', date: '30 May 2026', status: 'confirmed', payment: 'pending', rate: '£22/hr', hours: 8, location: 'Camden' },
  { id: 'J002', role: 'Locum Dentist', org: 'Smile Perfect Dental', worker: 'Michael Chen', date: '31 May 2026', status: 'confirmed', payment: 'invoiced', rate: '£65/hr', hours: 8, location: 'Islington' },
  { id: 'J003', role: 'Healthcare Assistant', org: "King's College NHS", worker: 'Unassigned', date: '1 Jun 2026', status: 'open', payment: 'n/a', rate: '£15/hr', hours: 8, location: 'Southwark' },
  { id: 'J004', role: 'General Nurse', org: 'Barts NHS Trust', worker: 'Emma Williams', date: '2 Jun 2026', status: 'completed', payment: 'paid', rate: '£28/hr', hours: 12, location: 'Whitechapel' },
  { id: 'J005', role: 'Support Worker', org: 'Sunrise Care Home', worker: 'Priya Patel', date: '3 Jun 2026', status: 'completed', payment: 'paid', rate: '£13/hr', hours: 8, location: 'Hackney' },
  { id: 'J006', role: 'Dental Nurse', org: 'Westfield Dental', worker: 'Aisha Rahman', date: '4 Jun 2026', status: 'confirmed', payment: 'pending', rate: '£22/hr', hours: 8, location: 'Shepherd\'s Bush' },
  { id: 'J007', role: 'Locum Dentist', org: 'Harley Street Clinic', worker: 'Unassigned', date: '5 Jun 2026', status: 'open', payment: 'n/a', rate: '£85/hr', hours: 6, location: 'Marylebone' },
  { id: 'J008', role: 'Healthcare Assistant', org: 'Chelsea Hospital', worker: 'James Okafor', date: '7 Jun 2026', status: 'cancelled', payment: 'n/a', rate: '£15/hr', hours: 8, location: 'Chelsea' },
];

export function ManageJobs({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = jobs.filter(j => {
    const m = j.role.toLowerCase().includes(search.toLowerCase()) || j.org.toLowerCase().includes(search.toLowerCase()) || j.worker.toLowerCase().includes(search.toLowerCase());
    const f = filter === 'all' || j.status === filter;
    return m && f;
  });

  const statusStyle = (s: string) => {
    if (s === 'confirmed') return { bg: '#dbeafe', color: '#2563eb', label: 'Confirmed' };
    if (s === 'completed') return { bg: '#dcfce7', color: '#16a34a', label: 'Completed' };
    if (s === 'open') return { bg: '#fef9c3', color: '#ca8a04', label: 'Open' };
    if (s === 'cancelled') return { bg: '#fee2e2', color: '#dc2626', label: 'Cancelled' };
    return { bg: '#f3f4f6', color: '#6b7280', label: s };
  };

  const payStyle = (s: string) => {
    if (s === 'paid') return { bg: '#dcfce7', color: '#16a34a', label: 'Paid' };
    if (s === 'invoiced') return { bg: '#dbeafe', color: '#2563eb', label: 'Invoiced' };
    if (s === 'pending') return { bg: '#fef9c3', color: '#ca8a04', label: 'Pending' };
    if (s === 'n/a') return { bg: '#f3f4f6', color: '#94a3b8', label: 'N/A' };
    return { bg: '#f3f4f6', color: '#6b7280', label: s };
  };

  const counts = {
    all: jobs.length,
    open: jobs.filter(j => j.status === 'open').length,
    confirmed: jobs.filter(j => j.status === 'confirmed').length,
    completed: jobs.filter(j => j.status === 'completed').length,
    cancelled: jobs.filter(j => j.status === 'cancelled').length,
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>Jobs & Shifts</h2>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Monitor and manage all jobs and shifts across the platform</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ padding: '10px 16px', background: '#f1f5f9', border: 'none', borderRadius: 10, color: '#475569', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            📥 Export CSV
          </button>
          <button style={{ padding: '10px 16px', background: '#0d9488', border: 'none', borderRadius: 10, color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(13,148,136,0.3)' }}>
            ➕ Create Shift
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Total Jobs', value: counts.all, color: '#0f2444', bg: '#f0f4fa' },
          { label: 'Open', value: counts.open, color: '#ca8a04', bg: '#fffbeb' },
          { label: 'Confirmed', value: counts.confirmed, color: '#2563eb', bg: '#eff6ff' },
          { label: 'Completed', value: counts.completed, color: '#16a34a', bg: '#f0fdf4' },
          { label: 'Cancelled', value: counts.cancelled, color: '#dc2626', bg: '#fef2f2' },
        ].map(c => (
          <div key={c.label} style={{ background: '#fff', borderRadius: 14, padding: '16px 20px', boxShadow: '0 1px 8px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: c.color }}>{c.value}</div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 3 }}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ background: '#fff', borderRadius: 16, padding: '16px 20px', marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center', boxShadow: '0 1px 8px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
        <div style={{ position: 'relative', flex: 1, maxWidth: 300 }}>
          <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jobs, orgs or workers..." style={{ width: '100%', padding: '10px 14px 10px 36px', border: '1.5px solid #e2e8f0', borderRadius: 10, fontSize: 13, outline: 'none', boxSizing: 'border-box', background: '#f8fafc' }} onFocus={e => (e.target.style.borderColor = '#0d9488')} onBlur={e => (e.target.style.borderColor = '#e2e8f0')} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['all', 'open', 'confirmed', 'completed', 'cancelled'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: filter === f ? '#0f2444' : '#f1f5f9', color: filter === f ? '#fff' : '#64748b', fontSize: 12, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 13, color: '#94a3b8' }}>{filtered.length} jobs</div>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              {['Job ID', 'Role', 'Organisation', 'Worker', 'Date', 'Location', 'Status', 'Payment', 'Rate', 'Actions'].map(h => (
                <th key={h} style={{ padding: '14px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((job, i) => {
              const ss = statusStyle(job.status);
              const ps = payStyle(job.payment);
              return (
                <tr key={job.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #f8fafc' : 'none', transition: 'background 0.1s' }} onMouseOver={e => (e.currentTarget.style.background = '#f8fafc')} onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '12px 14px', fontSize: 12, fontWeight: 700, color: '#64748b' }}>{job.id}</td>
                  <td style={{ padding: '12px 14px', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{job.role}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ fontSize: 13, color: '#475569', fontWeight: 500 }}>{job.org}</div>
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ fontSize: 13, color: job.worker === 'Unassigned' ? '#94a3b8' : '#0f172a', fontStyle: job.worker === 'Unassigned' ? 'italic' : 'normal', fontWeight: job.worker !== 'Unassigned' ? 600 : 400 }}>{job.worker}</div>
                  </td>
                  <td style={{ padding: '12px 14px', fontSize: 12, color: '#64748b', whiteSpace: 'nowrap' }}>{job.date}</td>
                  <td style={{ padding: '12px 14px', fontSize: 12, color: '#64748b' }}>{job.location}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: 20, background: ss.bg, color: ss.color, fontSize: 11, fontWeight: 700 }}>{ss.label}</span>
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: 20, background: ps.bg, color: ps.color, fontSize: 11, fontWeight: 700 }}>{ps.label}</span>
                  </td>
                  <td style={{ padding: '12px 14px', fontSize: 13, fontWeight: 700, color: '#0d9488', whiteSpace: 'nowrap' }}>{job.rate}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button style={{ padding: '5px 10px', background: '#f1f5f9', border: 'none', borderRadius: 7, color: '#475569', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>View</button>
                      {job.status === 'open' && <button style={{ padding: '5px 10px', background: '#0d9488', border: 'none', borderRadius: 7, color: '#fff', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Assign</button>}
                      {job.payment === 'pending' && job.status === 'completed' && <button style={{ padding: '5px 10px', background: '#fef9c3', border: 'none', borderRadius: 7, color: '#ca8a04', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Pay</button>}
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
