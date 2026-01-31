import { GlassPanel } from '@/shared/ui'
import { useEffect, useMemo, useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import { postsApi } from '../services/posts.api'
import { PostsToolbar } from '../components/PostsToolbar'
import { PostsGrid } from '../components/PostsGrid'

type Filters = {
  tag: string
  userId: string
}

export function PostsPage() {
  const [q, setQ] = useState('')
  const [debouncedQ, setDebouncedQ] = useState('')

  useEffect(() => {
    const t = window.setTimeout(() => setDebouncedQ(q.trim()), 350)
    return () => window.clearTimeout(t)
  }, [q])

  const [limit, setLimit] = useState(12)
  const [page, setPage] = useState(1)
  const [pageInput, setPageInput] = useState('1')

  const [filters, setFilters] = useState<Filters>({ tag: '', userId: '' })

  const [removedIds, setRemovedIds] = useState<Set<number>>(() => new Set())
  const [deletingId, setDeletingId] = useState<number | null>(null)

  const skip = useMemo(() => (page - 1) * limit, [page, limit])

  const { data, loading, error } = usePosts({
    q: debouncedQ,
    limit,
    skip,
  })

  const total = data?.total ?? 0
  const totalPages = Math.max(1, Math.ceil(total / limit))

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
      setPageInput(String(totalPages))
    }
  }, [totalPages])

  const postsOnPage = useMemo(() => {
    const posts = data?.posts ?? []
    const visible = posts.filter((p) => !removedIds.has(p.id))

    const tag = filters.tag.trim().toLowerCase()
    const userId = filters.userId.trim()

    return visible.filter((p) => {
      const okTag = tag
        ? (p.tags ?? []).some((t) => t.toLowerCase().includes(tag))
        : true
      const okUser = userId ? String(p.userId) === userId : true
      return okTag && okUser
    })
  }, [data?.posts, filters, removedIds])

  const statsText = useMemo(() => {
    if (loading && !data) return 'Loading…'
    if (!data) return ' '
    return `${total} total • Page ${page} of ${totalPages}`
  }, [data, loading, total, page, totalPages])

  const goToPage = (n: number) => {
    const safe = Math.min(Math.max(1, n), totalPages)
    setPage(safe)
    setPageInput(String(safe))
  }

  const onReset = () => {
    setQ('')
    setFilters({ tag: '', userId: '' })
    setRemovedIds(new Set())
    goToPage(1)
  }

  const onDelete = async (id: number) => {
    const ok = window.confirm('Delete this post?')
    if (!ok) return

    setDeletingId(id)
    try {
      // ✅ usa tu service (más consistente)
      await postsApi.remove(id)

      setRemovedIds((prev) => {
        const next = new Set(prev)
        next.add(id)
        return next
      })
    } catch (e) {
      window.alert(e instanceof Error ? e.message : 'Unknown error')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="space-y-4">
      <PostsToolbar
        statsText={statsText}
        q={q}
        onChangeQ={(value) => {
          setQ(value)
          goToPage(1)
        }}
        filters={filters}
        onChangeFilters={(patch) => setFilters((f) => ({ ...f, ...patch }))}
        page={page}
        totalPages={totalPages}
        pageInput={pageInput}
        onChangePageInput={setPageInput}
        onGoToPageFromInput={() => {
          const n = Number(pageInput)
          if (Number.isFinite(n)) goToPage(n)
          else setPageInput(String(page))
        }}
        onPrev={() => goToPage(page - 1)}
        onNext={() => goToPage(page + 1)}
        limit={limit}
        onSetLimit={(n) => {
          setLimit(n)
          goToPage(1)
        }}
        onReset={onReset}
      />

      {error ? (
        <GlassPanel className="p-4">
          <p className="text-sm text-(--text-secondary)">Error: {error}</p>
        </GlassPanel>
      ) : loading && !data ? (
        <GlassPanel className="p-4">
          <p className="text-sm text-(--text-secondary)">Loading posts…</p>
        </GlassPanel>
      ) : (
        <PostsGrid
          posts={postsOnPage}
          deletingId={deletingId}
          onDelete={onDelete}
          showEmpty={!!data && postsOnPage.length === 0}
        />
      )}
    </div>
  )
}
