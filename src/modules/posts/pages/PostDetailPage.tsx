import { Button, Input, GlassPanel } from '@/shared/ui'
import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router'
import { useCreatePost } from '../hooks/useCreatePost'
import { useUpdatePost } from '../hooks/useUpdatePost'
import { usePost } from '../hooks/usePost'
import type { PostForm } from '../types/post.types'

export function PostDetailPage() {
  const { postId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const isNew = !postId || postId === 'new'
  const isEditMode = location.pathname.endsWith('/edit') || isNew

  const { createPost, isLoading: creating } = useCreatePost()
  const { updatePost, isLoading: updating } = useUpdatePost()
  const { post, isLoading: loadingPost } = usePost(isNew ? undefined : postId)

  const [edits, setEdits] = useState<Partial<PostForm>>({})
  const [showSuccess, setShowSuccess] = useState(false)

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
      const result = await updatePost(Number(postId), {
        title: form.title,
        body: form.body,
        userId: Number(form.authorUserId),
      })

      if (result) {
        // Limpiar edits y navegar a modo visualización
        setEdits({})
        setShowSuccess(true)
        navigate(`/app/posts/${postId}`)

        // Ocultar mensaje de éxito después de 3 segundos
        setTimeout(() => setShowSuccess(false), 3000)
      }
    }
  }

  const saving = creating || updating

  const handleEdit = () => {
    navigate(`/app/posts/${postId}/edit`)
  }

  const handleCancel = () => {
    if (isNew) {
      navigate('/app/posts')
    } else {
      // Cancelar edición: limpiar cambios y navegar a modo visualización
      setEdits({})
      navigate(`/app/posts/${postId}`)
    }
  }

  const handleBack = () => {
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
            {isNew ? 'New post' : isEditMode ? 'Edit post' : 'Post detail'}
          </h2>

          <p className="mt-1 text-sm text-(--text-secondary)">
            {isNew
              ? 'Create a new post'
              : isEditMode
                ? `Editing post • ID: ${postId}`
                : `Viewing post • ID: ${postId}`}
          </p>
        </div>

        <div className="flex gap-2">
          {/* Modo Visualización: Botones Back y Edit */}
          {!isNew && !isEditMode && (
            <>
              <Button variant="secondary" type="button" onClick={handleBack}>
                ← Back
              </Button>
              <Button variant="primary" type="button" onClick={handleEdit}>
                Edit
              </Button>
            </>
          )}

          {/* Modo Edición o Nuevo: Botones Cancel y Save/Publish */}
          {(isNew || isEditMode) && (
            <>
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
            </>
          )}
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="mt-4 animate-fade-in rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 p-4 ring-1 ring-emerald-500/30">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <p className="font-medium text-emerald-300">
              Post updated successfully!
            </p>
          </div>
        </div>
      )}

      <div className="mt-5 space-y-3">
        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => updateField('title', e.target.value)}
          disabled={!isNew && !isEditMode}
        />

        <Input
          placeholder="Author (userId)"
          value={form.authorUserId}
          onChange={(e) => updateField('authorUserId', e.target.value)}
          disabled={!isNew && !isEditMode}
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
            className="min-h-40 w-full resize-none bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary) disabled:cursor-not-allowed disabled:opacity-60"
            placeholder="Write your post content here..."
            value={form.body}
            onChange={(e) => updateField('body', e.target.value)}
            disabled={!isNew && !isEditMode}
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
