import { Button, Input } from '@/shared/ui'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { usePost } from '../hooks/usePost'
import { postsApi } from '../services/posts.api'

export function PostDetailPage() {
  const { postId } = useParams()

  const isNew = !postId
  const numericId = useMemo(() => {
    if (!postId) return undefined
    const n = Number(postId)
    return Number.isFinite(n) ? n : undefined
  }, [postId])

  const { data, loading, error } = usePost(isNew ? undefined : numericId)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('5') // DummyJSON usa userId numérico
  const [body, setBody] = useState('')
  const [saving, setSaving] = useState(false)

  // ✅ Side effect: cuando llega el post, setea el form
  useEffect(() => {
    if (!data) return
    setTitle(data.title ?? '')
    setAuthor(String(data.userId ?? 5))
    setBody(data.body ?? '')
  }, [data])

  // ✅ Si pasas a /new, limpia formulario
  useEffect(() => {
    if (!isNew) return
    setTitle('')
    setAuthor('5')
    setBody('')
  }, [isNew])

  const onCreate = async () => {
    if (!title.trim()) return
    try {
      setSaving(true)
      const userId = Number(author) || 5
      await postsApi.create({ title: title.trim(), body, userId })
      alert('Created (simulated) ✅')
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Error creating post')
    } finally {
      setSaving(false)
    }
  }

  const onUpdate = async () => {
    if (!numericId || !title.trim()) return
    try {
      setSaving(true)
      await postsApi.update(numericId, { title: title.trim(), body })
      alert('Updated (simulated) ✅')
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Error updating post')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-6 shadow-2xl backdrop-blur-xl">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            {isNew ? 'New post' : 'Post detail'}
          </h2>

          <p className="mt-1 text-sm text-(--text-secondary)">
            {isNew
              ? 'Create a post (DummyJSON simulated)'
              : loading
                ? 'Loading...'
                : error
                  ? `Error: ${error}`
                  : `Post ID: ${data?.id}`}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" type="button">
            {isNew ? 'Save draft' : 'Flag'}
          </Button>

          <Button
            variant="primary"
            type="button"
            onClick={isNew ? onCreate : onUpdate}
            disabled={
              saving || (!isNew && loading) || title.trim().length === 0
            }
          >
            {saving ? 'Saving...' : isNew ? 'Publish' : 'Save'}
          </Button>
        </div>
      </header>

      <div className="mt-5 space-y-3">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Author (userId)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <textarea
            className="min-h-40 w-full bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            placeholder="Body..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <p className="mt-2 text-xs text-(--text-secondary)">
            Editor placeholder (textarea for now)
          </p>
        </div>
      </div>
    </div>
  )
}
