import { Input } from '@/shared/ui'

export function AuthField({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-(--text-secondary)">
        {label}
      </label>
      <Input {...props} />
    </div>
  )
}
