import { PLATFORMS } from './types'

interface PlatformFilterChipsProps {
  selected: string[]
  onChange: (selected: string[]) => void
}

export function PlatformFilterChips({ selected, onChange }: PlatformFilterChipsProps) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value))
    } else {
      onChange([...selected, value])
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      {PLATFORMS.map(p => {
        const isActive = selected.includes(p.value)
        const Icon = p.icon
        return (
          <button
            key={p.value}
            onClick={() => toggle(p.value)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all border ${
              isActive
                ? 'border-current bg-current/10'
                : 'border-gris-leger/50 text-bleu-nuit/40 hover:border-bleu-nuit/20'
            }`}
            style={isActive ? { color: p.color } : undefined}
          >
            <Icon size={12} />
            {p.label}
          </button>
        )
      })}
    </div>
  )
}
