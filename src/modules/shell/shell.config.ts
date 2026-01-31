export type ShellNavItem = {
  to: string
  label: string
}

export type ShellConfig = {
  brand: {
    name: string
    accent?: string
    tagline?: string
  }
  nav: ShellNavItem[]
  topbar: {
    title: string
    subtitle?: string
  }
  footer?: {
    text?: string
  }
  mobile?: {
    showHint?: boolean
    hintText?: string
  }
}

export const shellConfig: ShellConfig = {
  brand: {
    name: 'Trust & Safety',
    accent: 'Console',
    tagline: 'Moderation dashboard',
  },
  nav: [
    { to: '/app/posts', label: 'Posts' },
    { to: '/app/users', label: 'Users' },
  ],
  topbar: {
    title: 'Dashboard',
    subtitle: 'Review activity and manage content',
  },
  footer: {
    text: 'Luis Yauri • Console',
  },
  mobile: {
    showHint: true,
    hintText: 'Sidebar is desktop-only for now.',
  },
}
