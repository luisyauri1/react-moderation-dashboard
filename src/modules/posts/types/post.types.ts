export type Post = {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
}

export type CreatePostDto = {
  title: string
  userId: number
  body?: string
}

export type UpdatePostDto = {
  title?: string
  body?: string
  userId?: number
}

export type PostForm = {
  title: string
  authorUserId: string
  body: string
}
