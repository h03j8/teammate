export default function HomePage() {
  return (
    <div>

      {/* HERO 섹션 */}
      <section style={{
        textAlign: 'center',
        padding: '80px 20px'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 800,
          marginBottom: '16px'
        }}>
          대학생 창업팀,
          <br />함께할 팀원을 찾으세요
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          marginBottom: '32px'
        }}>
          TeamMate는 아이디어는 있지만 팀원이 부족한 대학생을 위해
          <br />
          쉽고 빠르게 팀을 구성할 수 있도록 돕습니다.
        </p>

        {/* CTA 버튼 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <a href="/create">
            <button style={{
              padding: '14px 24px',
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              팀원 모집하기
            </button>
          </a>

          <a href="/list">
            <button style={{
              padding: '14px 24px',
              background: '#f3f4f6',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              팀 찾기
            </button>
          </a>
        </div>
      </section>

      {/* 기능 소개 */}
      <section style={{
        padding: '60px 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '40px'
        }}>
          TeamMate는 이렇게 도와요
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>

          {/* 카드 1 */}
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ marginBottom: '10px' }}>
              🚀 팀원 모집
            </h3>
            <p style={{ color: '#6b7280' }}>
              아이디어를 공유하고 함께할 팀원을 모집하세요.
            </p>
          </div>

          {/* 카드 2 */}
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ marginBottom: '10px' }}>
              🔍 팀 탐색
            </h3>
            <p style={{ color: '#6b7280' }}>
              다양한 프로젝트를 확인하고 참여할 팀을 찾아보세요.
            </p>
          </div>

          {/* 카드 3 */}
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ marginBottom: '10px' }}>
              🤝 빠른 연결
            </h3>
            <p style={{ color: '#6b7280' }}>
              연락 정보를 통해 바로 팀에 합류할 수 있습니다.
            </p>
          </div>

        </div>
      </section>

      {/* 하단 CTA */}
      <section style={{
        textAlign: 'center',
        padding: '80px 20px'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          지금 바로 시작해보세요
        </h2>

        <a href="/create">
          <button style={{
            padding: '14px 28px',
            background: '#111827',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            팀원 모집 시작하기
          </button>
        </a>
      </section>

    </div>
  )
}