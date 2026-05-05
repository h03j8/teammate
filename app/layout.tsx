import React from 'react'

// children 타입 정의
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{
        margin: 0,
        fontFamily: 'Pretendard, sans-serif',
        backgroundColor: '#ffffff',
        color: '#111827'
      }}>

        {/* Header */}
        <header style={{
          borderBottom: '1px solid #e5e7eb',
          background: '#ffffff'
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            
            <div style={{ fontWeight: 700, fontSize: '20px' }}>
              🚀 TeamMate
            </div>

            <nav style={{ display: 'flex', gap: '24px' }}>
              <a href="/">소개</a>
              <a href="/create" style={{ color: '#2563eb' }}>구인</a>
              <a href="/list">리스트</a>
            </nav>

          </div>
        </header>

        {/* Main */}
        <main style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '60px 20px'
        }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid #e5e7eb',
          textAlign: 'center',
          padding: '20px',
          color: '#6b7280'
        }}>
          contact@teammate.com
        </footer>

      </body>
    </html>
  )
}