type Props = {
  brand: {
    name: string
    accent?: string
    tagline?: string
  }
}

export function ShellBrand({ brand }: Props) {
  return (
    <div className="px-1">
      <p className="text-sm font-semibold tracking-tight">
        {brand.name}
        {brand.accent ? (
          <span className="ml-2 text-(--primary-soft)">{brand.accent}</span>
        ) : null}
      </p>

      {brand.tagline ? (
        <p className="mt-0.5 text-xs text-(--text-secondary)">
          {brand.tagline}
        </p>
      ) : null}
    </div>
  )
}
