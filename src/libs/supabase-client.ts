import { createClient } from '@supabase/supabase-js'

declare global {
    var supabase: ReturnType<typeof createClient> | undefined
}

export const supabase = globalThis.supabase || createClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY as string)

if (process.env.NODE_ENV !== 'production') {
    globalThis.supabase = supabase
}