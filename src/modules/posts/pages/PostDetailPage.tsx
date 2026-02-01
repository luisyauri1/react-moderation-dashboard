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

        {/* Tags Section - Solo visible cuando hay un post existente */}
        {!isNew && post && post.tags && post.tags.length > 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-(--text-secondary)">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-violet-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-(--text-secondary)">
            Content
          </label>
          <textarea
            className="min-h-40 w-full resize-none bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            placeholder="Write your post content here..."
            value={form.body}
            onChange={(e) => updateField('body', e.target.value)}
          />

          {/* Stats Section - Solo visible cuando hay un post existente */}
          {!isNew && post && (
            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">👍</span>
                <span className="text-lg font-bold text-emerald-400">
                  {post.reactions.likes}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-(--text-secondary)">
                  Likes
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">👎</span>
                <span className="text-lg font-bold text-rose-400">
                  {post.reactions.dislikes}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-(--text-secondary)">
                  Dislikes
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">👁️</span>
                <span className="text-lg font-bold text-blue-400">
                  {post.views.toLocaleString()}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-(--text-secondary)">
                  Views
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </GlassPanel>
  )
}
