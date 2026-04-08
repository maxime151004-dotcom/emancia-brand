import React from 'react'

interface ChipSelectProps {
  options: { value: string; label: string }[]
  selected: string[]
  onChange: (selected: string[]) => void
  renderOption?: (opt: { value: string; label: string }, isActive: boolean) => React.ReactNode
}

export function ChipSelect({ options, selected, onChange, renderOption }: ChipSelectProps) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      if (selected.length > 1) {
        onChange(selected.filter(v => v !== value))
      }
    } else {
      onChange([...selected, value])
    }
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map(opt => {
        const isActive = selected.includes(opt.value)
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all border ${
              isActive
                ? 'bg-teal/10 border-teal/30 text-teal'
                : 'bg-white border-gris-leger/50 text-bleu-nuit/50 hover:border-teal/20 hover:text-bleu-nuit/70'
            }`}
          >
            {renderOption ? renderOption(opt, isActive) : opt.label}
          </button>
        )
      })}
    </div>
  )
}
