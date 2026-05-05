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

type Props = {
  params: {
    id: string
  }
}

export default function DetailPage({ params }: Props) {
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      console.error(error)
    } else {
      setPost(data)
    }
  }

  if (!post) return <div>로딩 중...</div>

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto'
    }}>

      <h1 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '12px'
      }}>
        {post.title}
      </h1>

      <p style={{
        color: '#6b7280',
        marginBottom: '20px'
      }}>
        {post.summary}
      </p>

      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '20px'
      }}>
        <p><strong>👥 모집 역할:</strong> {post.roles}</p>
        <p><strong>📌 팀 상태:</strong> {post.team_status}</p>
        <p><strong>📩 연락:</strong> {post.contact}</p>
        <p><strong>✍ 작성자:</strong> {post.author}</p>
      </div>

      <div>
        <h3 style={{ marginBottom: '10px' }}>프로젝트 설명</h3>
        <p style={{ lineHeight: '1.6' }}>
          {post.description}
        </p>
      </div>

    </div>
  )
}