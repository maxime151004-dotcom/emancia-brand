'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface CommentInfo {
  page_slug: string
  created_at: string
}

function getLastSeen(slug: string): number {
  if (typeof window === 'undefined') return 0
  const val = localStorage.getItem(`comments_last_seen_${slug}`)
  return val ? parseInt(val, 10) : 0
}

/**
 * Returns a Map of page_slug → number of unread comments.
 * Polls every 30 seconds.
 */
export function useUnreadComments(): Map<string, number> {
  const [unread, setUnread] = useState<Map<string, number>>(new Map())

  useEffect(() => {
    async function check() {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('page_comments')
        .select('page_slug, created_at')
        .order('created_at', { ascending: false })

      if (error || !data) return

      const counts = new Map<string, number>()
      for (const comment of data as CommentInfo[]) {
        const lastSeen = getLastSeen(comment.page_slug)
        if (new Date(comment.created_at).getTime() > lastSeen) {
          counts.set(comment.page_slug, (counts.get(comment.page_slug) || 0) + 1)
        }
      }
      setUnread(counts)
    }

    check()
    const interval = setInterval(check, 30000)
    return () => clearInterval(interval)
  }, [])

  return unread
}
