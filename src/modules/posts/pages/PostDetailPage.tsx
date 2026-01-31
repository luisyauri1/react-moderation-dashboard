import { Button, Input, GlassPanel } from '@/shared/ui'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useCreatePost } from '../hooks/useCreatePost'

export function PostDetailPage() {
  const navigate = useNavigate()
  const { createPost, isLoading: saving } = useCreatePost()
  const [title, setTitle] = useState('')
  const [authorUserId, setAuthorUserId] = useState('')
  const [body, setBody] = useState('')

  const isNew = true // UI-only
  const headerSubtitle = isNew ? 'Create a post' : 'Post detail • ID: 1'

  const handlePrimaryAction = async () => {
    if (isNew) {
      await createPost({
        title,
        userId: Number(authorUserId),
        body,
      })
    }
  }

  const handleCancel = () => {
    navigate('/app/posts')
  }

  return (
    <GlassPanel className="p-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold tracking-tight text-(--text-primary)">
            {isNew ? 'New post' : 'Post detail'}
          </h2>

          <p className="mt-1 text-sm text-(--text-secondary)">
            {headerSubtitle}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" type="button" onClick={handleCancel}>
            Cancel
          </Button>

          <Button
            variant="primary"
            type="button"
            onClick={handlePrimaryAction}
            disabled={saving || title.trim().length === 0}
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
          value={authorUserId}
          onChange={(e) => setAuthorUserId(e.target.value)}
        />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <textarea
            className="min-h-40 w-full resize-none bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            placeholder="Body..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <p className="mt-2 text-xs text-(--text-secondary)">
            Editor placeholder (textarea for now)
          </p>
        </div>
      </div>
    </GlassPanel>
  )
}
