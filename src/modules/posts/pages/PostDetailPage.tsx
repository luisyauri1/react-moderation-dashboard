import { Button, Divider, Input } from '@/shared/ui'

export function PostDetailPage() {
  return (
    <div className="space-y-4">
      <header>
        <h2 className="text-lg font-semibold">New post</h2>
        <p className="text-sm text-(--text-secondary)">
          Create a post (UI only for now)
        </p>
      </header>

      <Divider />

      <div className="space-y-3">
        <Input placeholder="Title" />
        <Input placeholder="Author" />

        <div className="rounded-2xl border border-(--border) bg-(--panel-2) p-4 text-sm text-(--text-secondary)">
          Editor placeholder (later: textarea / markdown / rich editor)
        </div>

        <div className="flex gap-2">
          <Button type="button" variant="secondary">
            Save draft
          </Button>
          <Button type="button" variant="primary">
            Publish
          </Button>
        </div>
      </div>
    </div>
  )
}
