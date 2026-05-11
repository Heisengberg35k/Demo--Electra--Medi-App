import React, { useState } from 'react';

interface Props { workerId: string | null; onNavigate: (screen: string, data?: any) => void; }

const docs = [
  { name: 'ID / Passport', status: 'approved', date: 'Uploaded 10 Jan 2026', size: '2.4 MB', type: 'PDF' },
  { name: 'Right to Work', status: 'approved', date: 'Uploaded 10 Jan 2026', size: '1.1 MB', type: 'PDF' },
  { name: 'DBS Certificate', status: 'pending', date: 'Uploaded 2 May 2026', size: '3.2 MB', type: 'PDF' },
  { name: 'Indemnity Insurance', status: 'pending', date: 'Uploaded 3 May 2026', size: '892 KB', type: 'PDF' },
  { name: 'Professional Registration (GDC)', status: 'approved', date: 'Uploaded 10 Jan 2026', size: '1.5 MB', type: 'PDF' },
  { name: 'CV / Resume', status: 'approved', date: 'Uploaded 12 Jan 2026', size: '650 KB', type: 'DOCX' },
  { name: 'References', status: 'pending', date: 'Uploaded 4 May 2026', size: '780 KB', type: 'PDF' },
  { name: 'Training Certificates', status: 'missing', date: 'Not uploaded', size: '—', type: '—' },
  { name: 'Hepatitis B Certificate', status: 'expired', date: 'Uploaded Jan 2025', size: '1.2 MB', type: 'PDF' },
];

export function WorkerDocumentReview({ workerId, onNavigate }: Props) {
  const [selectedDoc, setSelectedDoc] = useState<string | null>('DBS Certificate');
  const [rejectionReason, setRejectionReason] = useState('');
  const [docStatuses, setDocStatuses] = useState<Record<string, string>>({});

  const getStatus = (doc: any) => docStatuses[doc.name] || doc.status;

  const statusStyle = (s: string) => {
    if (s === 'approved') return { bg: '#dcfce7', color: '#16a34a', label: 'Approved' };
    if (s === 'pending') return { bg: '#fef9c3', color: '#ca8a04', label: 'Pending Review' };
    if (s === 'missing') return { bg: '#fee2e2', color: '#dc2626', label: 'Missing' };
    if (s === 'expired') return { bg: '#fce7f3', color: '#be185d', label: 'Expired' };
    if (s === 'rejected') return { bg: '#fee2e2', color: '#dc2626', label: 'Rejected' };
    return { bg: '#f3f4f6', color: '#6b7280', label: s };
  };

  const handleApprove = (docName: string) => {
    setDocStatuses(prev => ({ ...prev, [docName]: 'approved' }));
  };
  const handleReject = (docName: string) => {
    setDocStatuses(prev => ({ ...prev, [docName]: 'rejected' }));
  };

  const approved = docs.filter(d => getStatus(d) === 'approved').length;
  const pct = Math.round((approved / docs.length) * 100);
  const selectedDocData = docs.find(d => d.name === selectedDoc);

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
        <button
          onClick={() => onNavigate('workers')}
          style={{ background: '#f1f5f9', border: 'none', borderRadius: 10, padding: '9px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: '#475569', fontSize: 13, fontWeight: 600 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Workers
        </button>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>Document Review</h2>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>Review and approve worker compliance documents</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 20 }}>
        {/* Left panel */}
        <div>
          {/* Worker profile */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '20px', marginBottom: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #0d9488, #14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 800 }}>SJ</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a' }}>Sarah Johnson</div>
                <div style={{ fontSize: 13, color: '#64748b' }}>Dental Nurse</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>GDC #123456 · Camden, London</div>
              </div>
            </div>
            {/* Compliance progress */}
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#374151' }}>Compliance Score</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#0d9488' }}>{pct}%</span>
              </div>
              <div style={{ background: '#e2e8f0', borderRadius: 6, height: 8, overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #0d9488, #14b8a6)', borderRadius: 6, transition: 'width 0.3s' }} />
              </div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 6 }}>{approved} of {docs.length} documents verified</div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button style={{ flex: 1, padding: '10px', background: '#0f2444', border: 'none', borderRadius: 10, color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>📞 Contact</button>
              <button style={{ flex: 1, padding: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, color: '#475569', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>👤 Profile</button>
            </div>
          </div>

          {/* Document list */}
          <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Documents</span>
            </div>
            {docs.map((doc, i) => {
              const s = getStatus(doc);
              const sc = statusStyle(s);
              const isSelected = selectedDoc === doc.name;
              return (
                <div
                  key={doc.name}
                  onClick={() => setSelectedDoc(doc.name)}
                  style={{
                    padding: '12px 20px',
                    borderBottom: i < docs.length - 1 ? '1px solid #f8fafc' : 'none',
                    cursor: doc.status !== 'missing' ? 'pointer' : 'default',
                    background: isSelected ? '#f0fdfa' : 'transparent',
                    display: 'flex', alignItems: 'center', gap: 12,
                    transition: 'background 0.1s',
                    borderLeft: isSelected ? '3px solid #0d9488' : '3px solid transparent',
                  }}
                  onMouseOver={e => { if (!isSelected) (e.currentTarget as HTMLDivElement).style.background = '#f8fafc'; }}
                  onMouseOut={e => { if (!isSelected) (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
                >
                  <span style={{ fontSize: 18 }}>
                    {s === 'approved' ? '✅' : s === 'pending' ? '⏳' : s === 'expired' ? '⚠️' : s === 'rejected' ? '❌' : '📤'}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
                    <div style={{ fontSize: 10, color: '#94a3b8' }}>{doc.type} · {doc.size}</div>
                  </div>
                  <span style={{ padding: '2px 8px', borderRadius: 10, background: sc.bg, color: sc.color, fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>{sc.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right panel - document preview */}
        <div>
          {selectedDocData && selectedDocData.status !== 'missing' ? (
            <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
              {/* Preview header */}
              <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a' }}>{selectedDocData.name}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>{selectedDocData.type} · {selectedDocData.size} · {selectedDocData.date}</div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button style={{ padding: '8px 14px', background: '#f1f5f9', border: 'none', borderRadius: 10, color: '#475569', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>⬇️ Download</button>
                  <button style={{ padding: '8px 14px', background: '#f1f5f9', border: 'none', borderRadius: 10, color: '#475569', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>🔍 Zoom</button>
                </div>
              </div>

              {/* Document preview placeholder */}
              <div style={{
                margin: 24, borderRadius: 12, background: '#f8fafc',
                height: 320, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                border: '2px dashed #e2e8f0', color: '#64748b',
              }}>
                <div style={{ fontSize: 64, marginBottom: 12 }}>
                  {selectedDocData.type === 'PDF' ? '📄' : '📝'}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#374151', marginBottom: 4 }}>{selectedDocData.name}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 16 }}>{selectedDocData.type} Document · {selectedDocData.size}</div>
                <button style={{ padding: '10px 20px', background: '#0f2444', border: 'none', borderRadius: 10, color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                  📂 Open Document
                </button>
              </div>

              {/* Document details */}
              <div style={{ padding: '0 24px 20px' }}>
                <div style={{ background: '#f8fafc', borderRadius: 12, padding: '16px', marginBottom: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                    {[
                      { label: 'Document Type', value: selectedDocData.type },
                      { label: 'File Size', value: selectedDocData.size },
                      { label: 'Upload Date', value: selectedDocData.date },
                      { label: 'Current Status', value: statusStyle(getStatus(selectedDocData)).label },
                      { label: 'Worker', value: 'Sarah Johnson' },
                      { label: 'Required', value: 'Yes' },
                    ].map(item => (
                      <div key={item.label}>
                        <div style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>{item.label}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rejection reason field */}
                {getStatus(selectedDocData) !== 'approved' && (
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                      Rejection Reason (optional)
                    </label>
                    <textarea
                      value={rejectionReason}
                      onChange={e => setRejectionReason(e.target.value)}
                      placeholder="Enter reason for rejection if applicable..."
                      rows={3}
                      style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e2e8f0', borderRadius: 12, fontSize: 13, outline: 'none', resize: 'none', boxSizing: 'border-box', color: '#374151', background: '#fff' }}
                      onFocus={e => (e.target.style.borderColor = '#0d9488')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  </div>
                )}

                {/* Actions */}
                {getStatus(selectedDocData) === 'approved' ? (
                  <div style={{ padding: '16px', background: '#dcfce7', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #86efac' }}>
                    <span style={{ fontSize: 20 }}>✅</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#16a34a' }}>Document Approved</div>
                      <div style={{ fontSize: 11, color: '#15803d' }}>This document has been verified and approved.</div>
                    </div>
                  </div>
                ) : getStatus(selectedDocData) === 'rejected' ? (
                  <div style={{ padding: '16px', background: '#fee2e2', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #fca5a5' }}>
                    <span style={{ fontSize: 20 }}>❌</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#dc2626' }}>Document Rejected</div>
                      <div style={{ fontSize: 11, color: '#b91c1c' }}>Worker has been notified to resubmit.</div>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={() => handleApprove(selectedDocData.name)}
                      style={{ flex: 1, padding: '13px', background: 'linear-gradient(135deg, #0d9488, #0f766e)', border: 'none', borderRadius: 12, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(13,148,136,0.3)' }}
                    >
                      ✅ Approve Document
                    </button>
                    <button
                      onClick={() => handleReject(selectedDocData.name)}
                      style={{ flex: 1, padding: '13px', background: '#fff', border: '2px solid #fee2e2', borderRadius: 12, color: '#dc2626', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
                    >
                      ❌ Reject Document
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ background: '#fff', borderRadius: 16, height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px dashed #e2e8f0', color: '#94a3b8' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#64748b' }}>Select a document to review</div>
              <div style={{ fontSize: 13, marginTop: 4 }}>Click on a document from the list to preview and review it</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
