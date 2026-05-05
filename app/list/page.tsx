'use client'

import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

type Post = {
  id: string
  title: string
  summary: string
  description: string
  roles: string
  team_status: string
  contact: string
  author: string
  created_at: string
}

export default function ListPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setPosts(data || [])
    }
  }

  return (
    <div>
      <h1 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '30px'
      }}>
        팀원 모집 리스트
      </h1>

      {posts.length === 0 && (
        <p style={{ color: '#6b7280' }}>
          아직 등록된 팀이 없습니다.
        </p>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {posts.map((post) => (
          <a
            key={post.id}
            href={`/list/${post.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '24px',
              background: '#ffffff',
              cursor: 'pointer'
            }}>

              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '6px'
              }}>
                {post.title}
              </h2>

              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '16px'
              }}>
                {post.summary}
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '14px'
              }}>
                <div><strong>👥 모집 역할:</strong> {post.roles || '-'}</div>
                <div><strong>📌 팀 상태:</strong> {post.team_status || '-'}</div>
                <div><strong>📩 연락:</strong> {post.contact || '-'}</div>
                <div><strong>✍ 작성자:</strong> {post.author || '-'}</div>
              </div>

            </div>
          </a>
        ))}
      </div>
    </div>
  )
}