import React from 'react'
import { CalendarDays, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import type { ContentIdea } from './types'
import { DAY_NAMES, MONTH_NAMES } from './types'
import { getStatusInfo, getPlatformInfo, getIdeaPlatforms, getWeekDays, formatDateKey } from './utils'

interface MilestoneCalendarProps {
  ideas: ContentIdea[]
  weekOffset: number
  onWeekOffsetChange: (offset: number | ((prev: number) => number)) => void
  onDragStart: (e: React.DragEvent, ideaId: string) => void
  onDragEnd: (e: React.DragEvent) => void
  onScheduleDate: (ideaId: string, date: string | null) => void
  dragOverDate: string | null
  onCalendarDragOver: (e: React.DragEvent, dateKey: string) => void
  onCalendarDragLeave: () => void
  onCalendarDrop: (e: React.DragEvent, dateKey: string) => void
}

export function MilestoneCalendar({
  ideas, weekOffset, onWeekOffsetChange,
  onDragStart, onDragEnd, onScheduleDate,
  dragOverDate, onCalendarDragOver, onCalendarDragLeave, onCalendarDrop,
}: MilestoneCalendarProps) {
  const weeks: Date[][] = []
  for (let w = 0; w < 4; w++) {
    weeks.push(getWeekDays(weekOffset + w))
  }

  const schedulableIdeas = ideas.filter(i => i.status === 'valide' || i.status === 'en_cours')
  const scheduledByDate: Record<string, ContentIdea[]> = {}
  ideas.forEach(idea => {
    if (idea.scheduled_date) {
      const key = idea.scheduled_date
      if (!scheduledByDate[key]) scheduledByDate[key] = []
      scheduledByDate[key].push(idea)
    }
  })

  const todayKey = formatDateKey(new Date())

  return (
    <div className="bg-white rounded-lg border border-gris-leger/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <CalendarDays size={18} className="text-teal" />
          <h2 className="text-sm font-semibold text-bleu-nuit">Planification</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onWeekOffsetChange(0)}
            className="px-3 py-1.5 rounded-md text-xs font-medium text-bleu-nuit/50 hover:text-bleu-nuit hover:bg-blanc-casse transition-colors"
          >
            Aujourd&apos;hui
          </button>
          <button
            onClick={() => onWeekOffsetChange(w => w - 1)}
            className="p-1.5 rounded-md text-bleu-nuit/40 hover:text-bleu-nuit hover:bg-blanc-casse transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => onWeekOffsetChange(w => w + 1)}
            className="p-1.5 rounded-md text-bleu-nuit/40 hover:text-bleu-nuit hover:bg-blanc-casse transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <p className="text-xs text-bleu-nuit/50 mb-4">
        Glissez les idées validées ou en cours sur un jour pour planifier le tournage. Cliquez sur une idée planifiée pour la retirer du calendrier.
      </p>

      <div className="space-y-1">
        {weeks.map((weekDays, wi) => {
          const monthLabel = MONTH_NAMES[weekDays[0].getMonth()]
          return (
            <div key={wi}>
              {(wi === 0 || weekDays[0].getMonth() !== weeks[wi - 1][0].getMonth()) && (
                <div className="text-xs font-medium text-bleu-nuit/40 uppercase tracking-wider mb-1 mt-3 first:mt-0">
                  {monthLabel} {weekDays[0].getFullYear()}
                </div>
              )}
              <div className="grid grid-cols-7 gap-1">
                {wi === 0 && DAY_NAMES.map(d => (
                  <div key={d} className="text-center text-[10px] font-medium text-bleu-nuit/30 py-1">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {weekDays.map(day => {
                  const dateKey = formatDateKey(day)
                  const isToday = dateKey === todayKey
                  const isPast = day < new Date(todayKey)
                  const isOver = dragOverDate === dateKey
                  const dayIdeas = scheduledByDate[dateKey] || []
                  const isWeekend = day.getDay() === 0 || day.getDay() === 6

                  return (
                    <div
                      key={dateKey}
                      onDragOver={(e) => onCalendarDragOver(e, dateKey)}
                      onDragLeave={onCalendarDragLeave}
                      onDrop={(e) => onCalendarDrop(e, dateKey)}
                      className={`min-h-[80px] rounded-md border p-1.5 transition-all ${
                        isOver
                          ? 'border-teal bg-teal/5 ring-1 ring-teal/20'
                          : isToday
                            ? 'border-teal/30 bg-teal/5'
                            : isPast
                              ? 'border-gris-leger/20 bg-gris-leger/5'
                              : isWeekend
                                ? 'border-gris-leger/15 bg-blanc-casse/30'
                                : 'border-gris-leger/20 bg-white'
                      }`}
                    >
                      <div className={`text-[11px] font-medium mb-1 ${
                        isToday ? 'text-teal' : isPast ? 'text-bleu-nuit/25' : 'text-bleu-nuit/50'
                      }`}>
                        {day.getDate()}
                      </div>

                      <div className="space-y-0.5">
                        {dayIdeas.map(idea => {
                          const platforms = getIdeaPlatforms(idea)
                          const mainPlatform = getPlatformInfo(platforms[0])
                          const status = getStatusInfo(idea.status)

                          return (
                            <button
                              key={idea.id}
                              onClick={() => onScheduleDate(idea.id, null)}
                              className="w-full text-left px-1.5 py-1 rounded text-[10px] font-medium truncate transition-all hover:opacity-70 border"
                              style={{
                                backgroundColor: `${mainPlatform?.color || status.color}10`,
                                borderColor: `${mainPlatform?.color || status.color}25`,
                                color: mainPlatform?.color || status.color,
                              }}
                              title={`${idea.title} — Cliquer pour retirer du calendrier`}
                            >
                              {idea.title}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {schedulableIdeas.filter(i => !i.scheduled_date).length > 0 && (
        <div className="mt-6 p-4 bg-blanc-casse/50 rounded-lg border border-gris-leger/20">
          <h3 className="text-sm font-medium text-bleu-nuit mb-3">
            Idées à planifier ({schedulableIdeas.filter(i => !i.scheduled_date).length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {schedulableIdeas.filter(i => !i.scheduled_date).map(idea => {
              const platforms = getIdeaPlatforms(idea)
              const mainPlatform = getPlatformInfo(platforms[0])
              const Icon = mainPlatform?.icon || MessageCircle

              return (
                <div
                  key={idea.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, idea.id)}
                  onDragEnd={onDragEnd}
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-gris-leger/30 text-xs cursor-grab active:cursor-grabbing hover:shadow-sm transition-all"
                >
                  <Icon size={12} style={{ color: mainPlatform?.color || '#888' }} />
                  <span className="text-bleu-nuit font-medium truncate max-w-[200px]">{idea.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
