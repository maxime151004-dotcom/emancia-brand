import { STATUSES } from './types'
import type { ContentIdea } from './types'

interface StatsBarProps {
  ideas: ContentIdea[]
}

export function StatsBar({ ideas }: StatsBarProps) {
  const stats = {
    total: ideas.length,
    idee: ideas.filter(i => i.status === 'idee').length,
    valide: ideas.filter(i => i.status === 'valide').length,
    en_cours: ideas.filter(i => i.status === 'en_cours').length,
    publie: ideas.filter(i => i.status === 'publie').length,
  }

  return (
    <div className="grid grid-cols-5 gap-3 mb-6">
      <div className="bg-white rounded-lg p-4 border border-gris-leger/30 text-center">
        <p className="text-2xl font-semibold text-bleu-nuit">{stats.total}</p>
        <p className="text-[11px] text-bleu-nuit/50 mt-0.5">Total</p>
      </div>
      {STATUSES.map(s => (
        <div key={s.value} className="bg-white rounded-lg p-4 border border-gris-leger/30 text-center">
          <p className={`text-2xl font-semibold ${s.text}`}>{stats[s.value as keyof typeof stats]}</p>
          <p className="text-[11px] text-bleu-nuit/50 mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
