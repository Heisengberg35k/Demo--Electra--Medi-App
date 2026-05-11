import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0f2444 0%, #1a3a5c 50%, #0d9488 100%)' }}
    >
      {/* Phone outer shell */}
      <div
        style={{
          width: 390,
          height: 844,
          borderRadius: 50,
          background: '#1a1a2e',
          padding: 12,
          boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Inner screen bezel */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 40,
            overflow: 'hidden',
            background: '#f8fafc',
            position: 'relative',
          }}
        >
          {/* Status bar */}
          <div
            style={{
              height: 44,
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 24,
              paddingRight: 24,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 50,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: 'inherit' }}>9:41</span>
            <div
              style={{
                width: 120,
                height: 30,
                background: '#000',
                borderRadius: 20,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                <rect x="0" y="4" width="3" height="8" rx="1" opacity="0.4"/>
                <rect x="4" y="2" width="3" height="10" rx="1" opacity="0.6"/>
                <rect x="8" y="0" width="3" height="12" rx="1" opacity="0.8"/>
                <rect x="12" y="0" width="3" height="12" rx="1"/>
              </svg>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor">
                <path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L13.7 3.5C12.1 1.9 9.9 1 7.5 1C5.1 1 2.9 1.9 1.3 3.5L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z" opacity="0.4"/>
                <path d="M7.5 5C8.8 5 10 5.5 10.8 6.4L11.9 5.3C10.8 4.2 9.2 3.5 7.5 3.5C5.8 3.5 4.2 4.2 3.1 5.3L4.2 6.4C5 5.5 6.2 5 7.5 5Z" opacity="0.7"/>
                <circle cx="7.5" cy="9" r="1.5"/>
              </svg>
              <div style={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <div style={{ width: 22, height: 11, borderRadius: 3, border: '1.5px solid currentColor', display: 'flex', alignItems: 'center', padding: '1px', position: 'relative' }}>
                  <div style={{ width: '75%', height: '100%', background: 'currentColor', borderRadius: 1.5 }}/>
                  <div style={{ width: 2, height: 5, background: 'currentColor', borderRadius: '0 1px 1px 0', position: 'absolute', right: -3, top: '50%', transform: 'translateY(-50%)' }}/>
                </div>
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            <style>{`
              .phone-content::-webkit-scrollbar { display: none; }
            `}</style>
            <div className="phone-content" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
              {children}
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -4, top: 100, width: 4, height: 32, background: '#333', borderRadius: '4px 0 0 4px' }}/>
        <div style={{ position: 'absolute', left: -4, top: 145, width: 4, height: 60, background: '#333', borderRadius: '4px 0 0 4px' }}/>
        <div style={{ position: 'absolute', left: -4, top: 220, width: 4, height: 60, background: '#333', borderRadius: '4px 0 0 4px' }}/>
        <div style={{ position: 'absolute', right: -4, top: 160, width: 4, height: 80, background: '#333', borderRadius: '0 4px 4px 0' }}/>
      </div>
    </div>
  );
}