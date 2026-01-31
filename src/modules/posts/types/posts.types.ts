export type Post = {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions?: unknown
}

export type PaginatedPosts = {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export type PostComment = {
  id: number
  body: string
  postId: number
  userId: number
}
