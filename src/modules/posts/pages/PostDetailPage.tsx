import { Button, Input } from '@/shared/ui'
import { useState } from 'react'

export function PostDetailPage() {
  // UI-only state (sin API)
  const [title, setTitle] = useState('')
  const [authorUserId, setAuthorUserId] = useState('5')
  const [body, setBody] = useState('')
  const [saving, setSaving] = useState(false)

  const isNew = true // UI-only (puedes cambiarlo a false para ver el otro estado)
  const headerSubtitle = isNew ? 'Create a post' : 'Post detail • ID: 1'

  const handlePrimaryAction = () => {
    setSaving(true)
    window.setTimeout(() => setSaving(false), 500)
  }

  return (
    <div className="rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-6 shadow-2xl backdrop-blur-xl">
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
          <Button variant="secondary" type="button">
            {isNew ? 'Save draft' : 'Flag'}
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
    </div>
  )
}
