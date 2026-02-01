import { Button, Input, GlassPanel } from '@/shared/ui'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useCreatePost } from '../hooks/useCreatePost'
import { usePost } from '../hooks/usePost'
import type { PostForm } from '../types/post.types'

export function PostDetailPage() {
  const { postId } = useParams()
  const navigate = useNavigate()

  const isNew = !postId || postId === 'new'
  const headerSubtitle = isNew ? 'Create a post' : `Post detail • ID: ${postId}`

  const { createPost, isLoading: saving } = useCreatePost()
  const { post, isLoading: loadingPost } = usePost(isNew ? undefined : postId)

  const [edits, setEdits] = useState<Partial<PostForm>>({})

  const form: PostForm = {
    title: edits.title ?? post?.title ?? '',
    authorUserId: edits.authorUserId ?? String(post?.userId ?? ''),
    body: edits.body ?? post?.body ?? '',
  }

  const updateField = <K extends keyof PostForm>(
    field: K,
    value: PostForm[K],
  ) => {
    setEdits((prev) => ({ ...prev, [field]: value }))
  }

  const handlePrimaryAction = async () => {
    if (isNew) {
      await createPost({
        title: form.title,
        userId: Number(form.authorUserId),
        body: form.body,
      })
    } else {
      console.log('Update logic not implemented yet, but current data is:', {
        title: form.title,
        userId: form.authorUserId,
        body: form.body,
      })
    }
  }

  const handleCancel = () => {
    navigate('/app/posts')
  }

  if (loadingPost) {
    return (
      <GlassPanel className="p-12 text-center text-slate-500">
        Cargando datos del post...
      </GlassPanel>
    )
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
            disabled={saving || form.title.trim().length === 0}
          >
            {saving ? 'Saving...' : isNew ? 'Publish' : 'Save changes'}
          </Button>
        </div>
      </header>

      <div className="mt-5 space-y-3">
        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => updateField('title', e.target.value)}
        />

        <Input
          placeholder="Author (userId)"
          value={form.authorUserId}
          onChange={(e) => updateField('authorUserId', e.target.value)}
        />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <textarea
            className="min-h-40 w-full resize-none bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            placeholder="Body..."
            value={form.body}
            onChange={(e) => updateField('body', e.target.value)}
          />
          {!isNew && post && (
            <div className="mt-4 flex gap-6 border-t border-white/5 pt-4 text-[11px] font-semibold text-(--text-secondary)">
              <span className="text-emerald-400">
                👍 {post.reactions.likes} likes
              </span>
              <span className="text-rose-400">
                👎 {post.reactions.dislikes} dislikes
              </span>
              <span className="text-blue-400">👁️ {post.views} views</span>
            </div>
          )}
        </div>
      </div>
    </GlassPanel>
  )
}
