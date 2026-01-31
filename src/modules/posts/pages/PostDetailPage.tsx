import { Button, Input } from '@/shared/ui'
import { useParams } from 'react-router'

export function PostDetailPage() {
  const { postId } = useParams()
  const isNew = !postId

  return (
    <div className="rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-6 shadow-2xl backdrop-blur-xl">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            {isNew ? 'New post' : 'Post detail'}
          </h2>
          <p className="mt-1 text-sm text-(--text-secondary)">
            {isNew ? 'Create a post (UI only for now)' : `Post ID: ${postId}`}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" type="button">
            {isNew ? 'Save draft' : 'Flag'}
          </Button>
          <Button variant="primary" type="button">
            {isNew ? 'Publish' : 'Approve'}
          </Button>
        </div>
      </header>

      <div className="mt-5 space-y-3">
        <Input placeholder="Title" />
        <Input placeholder="Author" />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-(--text-secondary)">
          Editor placeholder (later: textarea / markdown / rich editor)
        </div>
      </div>
    </div>
  )
}
