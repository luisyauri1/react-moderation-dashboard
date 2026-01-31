export type UiPost = {
  id: number
  title: string
  body: string
  userId: number
  tags?: string[]
}

export type CreatePostDto = {
  title: string
  userId: number
  body?: string
}
