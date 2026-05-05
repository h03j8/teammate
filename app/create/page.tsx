'use client'

import { supabase } from '@/lib/supabase'
import { useState, ChangeEvent } from 'react'

export default function CreatePage() {
  // 상태 타입 지정
  const [title, setTitle] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [roles, setRoles] = useState<string>('')
  const [teamStatus, setTeamStatus] = useState<string>('')
  const [contact, setContact] = useState<string>('')
  const [author, setAuthor] = useState<string>('')

  const handleSubmit = async () => {
    const { error } = await supabase.from('posts').insert([
      {
        title,
        summary,
        description,
        roles,
        team_status: teamStatus,
        contact,
        author,
      },
    ])

    if (error) {
      alert('에러 발생')
      console.error(error)
    } else {
      alert('등록 완료!')
    }
  }

  // 공통 input 타입 정의
  type InputItem = {
    label: string
    value: string
    set: (value: string) => void
  }

  const inputs: InputItem[] = [
    { label: '프로젝트 제목', value: title, set: setTitle },
    { label: '한 줄 소개', value: summary, set: setSummary },
    { label: '모집 역할', value: roles, set: setRoles },
    { label: '현재 팀 상태', value: teamStatus, set: setTeamStatus },
    { label: '연락 방법', value: contact, set: setContact },
    { label: '작성자', value: author, set: setAuthor },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '60px',
      alignItems: 'start'
    }}>

      {/* 좌측 영역 */}
      <div>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          당신의 아이디어,
          <br />함께할 팀원을 찾으세요.
        </h1>

        <p style={{
          color: '#6b7280', // ⭐ 수정 (오류 방지)
          marginBottom: '24px'
        }}>
          TeamMate는 대학생 창업팀의
          성공적인 시작을 돕습니다.
        </p>

        <div style={{
          background: '#f9fafb',
          padding: '20px',
          borderRadius: '12px'
        }}>
          <strong>TIP</strong>
          <ul style={{ marginTop: '10px', paddingLeft: '16px' }}>
            <li>구체적으로 작성할수록 좋아요</li>
            <li>역할을 명확히 적어주세요</li>
            <li>팀 상태를 공유하세요</li>
          </ul>
        </div>
      </div>

      {/* 우측 폼 */}
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '40px',
        background: '#ffffff'
      }}>

        <h2 style={{ marginBottom: '24px' }}>
          팀원 모집 글 등록
        </h2>

        {inputs.map((item, i) => (
          <div key={i} style={{ marginBottom: '18px' }}>
            <div style={{ marginBottom: '6px', fontSize: '14px' }}>
              {item.label}
            </div>
            <input
              value={item.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                item.set(e.target.value)
              }
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid #e5e7eb'
              }}
            />
          </div>
        ))}

        {/* textarea */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '6px' }}>
            프로젝트 설명
          </div>
          <textarea
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            style={{
              width: '100%',
              height: '140px',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #e5e7eb'
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '16px',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '10px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          등록하기
        </button>

      </div>

    </div>
  )
}