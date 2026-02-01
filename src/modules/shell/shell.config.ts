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
    tagline: 'Content moderation console',
  },
  nav: [{ to: '/app/posts', label: 'Content' }],
  topbar: {
    title: 'Moderation',
    subtitle: 'Review and manage platform activity',
  },
  footer: {
    text: 'Luis Yauri • Console',
  },
  mobile: {
    showHint: true,
    hintText: 'Some features are available on desktop view.',
  },
}
