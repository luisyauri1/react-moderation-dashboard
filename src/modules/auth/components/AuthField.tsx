import { Input } from '@/shared/ui'

type AuthFieldProps = {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  autoComplete?: string
}

export function AuthField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  autoComplete,
}: AuthFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-(--text-secondary)">{label}</label>

      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </div>
  )
}
