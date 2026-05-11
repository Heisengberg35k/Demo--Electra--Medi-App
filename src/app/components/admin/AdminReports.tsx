import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';

interface Props { onNavigate: (screen: string, data?: any) => void; }

const monthlyRevenue = [
  { month: 'Jan', revenue: 28400, shifts: 67, commission: 2840 },
  { month: 'Feb', revenue: 32100, shifts: 78, commission: 3210 },
  { month: 'Mar', revenue: 35600, shifts: 89, commission: 3560 },
  { month: 'Apr', revenue: 41250, shifts: 102, commission: 4125 },
  { month: 'May', revenue: 48290, shifts: 118, commission: 4829 },
];

const shiftsByType = [
  { name: 'Dental Nurse', value: 42, color: '#0d9488' },
  { name: 'Locum Dentist', value: 28, color: '#2563eb' },
  { name: 'General Nurse', value: 19, color: '#7c3aed' },
  { name: 'Healthcare Asst.', value: 16, color: '#f59e0b' },
  { name: 'Support Worker', value: 13, color: '#dc2626' },
];

const topWorkers = [
  { name: 'Aisha Rahman', shifts: 128, earnings: '£18,432', rating: 5.0, role: 'Dental Nurse' },
  { name: 'Priya Patel', shifts: 104, earnings: '£14,976', rating: 4.6, role: 'Support Worker' },
  { name: 'Emma Williams', shifts: 83, earnings: '£19,344', rating: 4.8, role: 'General Nurse' },
  { name: 'Sarah Johnson', shifts: 47, earnings: '£8,272', rating: 4.9, role: 'Dental Nurse' },
  { name: 'Michael Chen', shifts: 12, earnings: '£6,240', rating: 4.7, role: 'Locum Dentist' },
];

const topOrgs = [
  { name: 'City Dental Clinic', shifts: 34, spend: '£12,400' },
  { name: "King's College NHS", shifts: 28, spend: '£9,800' },
  { name: 'Barts NHS Trust', shifts: 22, spend: '£8,200' },
  { name: 'Smile Perfect Dental', shifts: 18, spend: '£14,600' },
];

export function AdminReports({ onNavigate }: Props) {
  const [period, setPeriod] = useState('monthly');

  const statCards = [
    { label: 'Total Shifts Completed', value: '1,847', trend: '+18%', trendPos: true, icon: '📋', color: '#0d9488', bg: '#f0fdfa' },
    { label: 'Total Platform Revenue', value: '£185,640', trend: '+23%', trendPos: true, icon: '💰', color: '#16a34a', bg: '#dcfce7' },
    { label: 'Commission Earned (10%)', value: '£18,564', trend: '+23%', trendPos: true, icon: '🏦', color: '#7c3aed', bg: '#f5f3ff' },
    { label: 'Active Organisations', value: '156', trend: '+5 this month', trendPos: true, icon: '🏥', color: '#2563eb', bg: '#eff6ff' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>Reports & Analytics</h2>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Platform performance overview — May 2026</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: 10, padding: 3, gap: 2 }}>
            {['monthly', 'quarterly', 'yearly'].map(p => (
              <button key={p} onClick={() => setPeriod(p)} style={{ padding: '7px 14px', borderRadius: 8, border: 'none', background: period === p ? '#fff' : 'transparent', color: period === p ? '#0f172a' : '#64748b', fontSize: 12, fontWeight: period === p ? 700 : 400, cursor: 'pointer', boxShadow: period === p ? '0 1px 4px rgba(0,0,0,0.1)' : 'none', textTransform: 'capitalize', transition: 'all 0.15s' }}>
                {p}
              </button>
            ))}
          </div>
          <button style={{ padding: '10px 16px', background: '#0d9488', border: 'none', borderRadius: 10, color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 12px rgba(13,148,136,0.3)' }}>
            📥 Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {statCards.map(card => (
          <div key={card.label} style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                {card.icon}
              </div>
              <span style={{ padding: '3px 10px', background: card.trendPos ? '#dcfce7' : '#fee2e2', color: card.trendPos ? '#16a34a' : '#dc2626', borderRadius: 20, fontSize: 11, fontWeight: 700, height: 'fit-content' }}>
                {card.trend}
              </span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{card.value}</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>{card.label}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Revenue chart */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', margin: 0 }}>Revenue & Shifts Trend</h3>
              <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 3 }}>Monthly performance over the last 5 months</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyRevenue} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={v => `£${(v/1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', fontSize: 12 }}
                formatter={(v: any, name: string) => [name === 'revenue' ? `£${v.toLocaleString()}` : v, name === 'revenue' ? 'Revenue' : name === 'commission' ? 'Commission' : 'Shifts']}
              />
              <Bar dataKey="revenue" fill="#0d9488" radius={[6,6,0,0]} />
              <Bar dataKey="commission" fill="#99f6e4" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', margin: 0 }}>Shifts by Role</h3>
            <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 3 }}>This month's distribution</p>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={shiftsByType} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={2} stroke="#fff">
                {shiftsByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            {shiftsByType.map(item => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: item.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: '#475569' }}>{item.name}</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tables */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Top workers */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Top Performing Workers</h3>
          {topWorkers.map((w, i) => (
            <div key={w.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < topWorkers.length - 1 ? '1px solid #f8fafc' : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: i < 3 ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: i < 3 ? '#fff' : '#64748b', flexShrink: 0 }}>
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{w.name}</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{w.role}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{w.shifts} shifts</div>
                <div style={{ fontSize: 11, color: '#0d9488', fontWeight: 600 }}>{w.earnings}</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#f59e0b' }}>⭐ {w.rating}</div>
            </div>
          ))}
        </div>

        {/* Top orgs */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Top Organisations by Activity</h3>
          {topOrgs.map((org, i) => (
            <div key={org.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < topOrgs.length - 1 ? '1px solid #f8fafc' : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🏥</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{org.name}</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{org.shifts} shifts posted</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#0f2444' }}>{org.spend}</div>
                <div style={{ fontSize: 10, color: '#94a3b8' }}>total spend</div>
              </div>
            </div>
          ))}

          {/* Compliance summary */}
          <div style={{ marginTop: 16, background: '#f0fdfa', borderRadius: 12, padding: '16px', border: '1px solid #99f6e4' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2444', marginBottom: 10 }}>Platform Health</div>
            {[
              { label: 'Worker Compliance Rate', value: '84%', color: '#0d9488' },
              { label: 'Shift Fill Rate', value: '91%', color: '#2563eb' },
              { label: 'Timesheet Approval Rate', value: '97%', color: '#16a34a' },
              { label: 'Worker Retention', value: '78%', color: '#7c3aed' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: '#475569' }}>{item.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: item.color }}>{item.value}</span>
                </div>
                <div style={{ background: '#e2e8f0', borderRadius: 4, height: 5, overflow: 'hidden' }}>
                  <div style={{ width: item.value, height: '100%', background: item.color, borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
