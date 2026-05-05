import { createClient } from '@supabase/supabase-js'

// 환경변수 타입 단언 (string으로 확정)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseKey)