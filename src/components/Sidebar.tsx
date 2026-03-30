'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Identité' },
  { href: '/logo', label: 'Logo' },
  { href: '/couleurs', label: 'Couleurs' },
  { href: '/typographie', label: 'Typographie' },
  { href: '/composants', label: 'Composants' },
  { href: '/regles', label: 'Do / Don\'t' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-bleu-nuit text-white flex flex-col">
      <div className="p-6 border-b border-white/10">
        <h1 className="font-display text-xl font-semibold text-white">
          Emancia
        </h1>
        <p className="text-sm text-white/60 mt-1">Charte Graphique</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-teal text-white font-medium'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-white/40">v1.0 — Mars 2026</p>
      </div>
    </aside>
  )
}
