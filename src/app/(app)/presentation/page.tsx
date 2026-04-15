'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { brand } from '@/lib/brand'
import { ChevronLeft, ChevronRight, X, Maximize2, Presentation, Lightbulb, Palette, ArrowLeft } from 'lucide-react'

// ============================================================
// Types
// ============================================================

interface SlideConfig {
  id: string
  title: string
  category: string
}

interface PresentationConfig {
  id: string
  title: string
  subtitle: string
  icon: typeof Palette
  color: string
  slides: SlideConfig[]
  components: Record<string, React.FC>
}

// ============================================================
// CHARTE GRAPHIQUE — Slides
// ============================================================

const CHARTE_SLIDES: SlideConfig[] = [
  { id: 'cover', title: '', category: '' },
  { id: 'mission', title: 'Notre mission', category: 'Identit\u00e9' },
  { id: 'valeurs', title: 'Nos valeurs fondatrices', category: 'Identit\u00e9' },
  { id: 'logo', title: 'Notre logo', category: 'Logo' },
  { id: 'couleurs-primaires', title: 'Couleurs primaires', category: 'Couleurs' },
  { id: 'couleurs-secondaires', title: 'Couleurs secondaires', category: 'Couleurs' },
  { id: 'couleurs-degrades', title: 'D\u00e9grad\u00e9s', category: 'Couleurs' },
  { id: 'couleurs-harmonie', title: 'Harmonie chromatique', category: 'Couleurs' },
  { id: 'couleurs-valeurs', title: 'Couleurs & Valeurs', category: 'Couleurs' },
  { id: 'couleurs-dark', title: 'Mode sombre', category: 'Couleurs' },
  { id: 'typographie', title: 'Typographie', category: 'Typographie' },
  { id: 'ton', title: 'Ton \u00e9ditorial', category: 'Communication' },
  { id: 'regles', title: 'Do & Don\'t', category: 'R\u00e8gles' },
  { id: 'outils', title: 'Vos outils', category: 'Outils' },
  { id: 'end', title: '', category: '' },
]

function CharteCoverSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <Image src="/logos/logo-main.svg" alt="Emancia" width={280} height={70} className="mb-5" />
      <div className="w-16 h-0.5 bg-teal mb-5" />
      <h1 className="font-display text-3xl font-bold text-bleu-nuit mb-2">Charte Graphique</h1>
      <p className="text-base text-bleu-nuit/50 max-w-md">
        Guide de marque et syst&egrave;me de design pour l&apos;&eacute;quipe Emancia
      </p>
      <div className="mt-10 flex items-center gap-2 text-sm text-bleu-nuit/30">
        <span>Utilisez les fl&egrave;ches</span>
        <kbd className="px-2 py-0.5 rounded border border-[#2A4A5C]/20 text-xs">&larr;</kbd>
        <kbd className="px-2 py-0.5 rounded border border-[#2A4A5C]/20 text-xs">&rarr;</kbd>
        <span>pour naviguer</span>
      </div>
    </div>
  )
}

function MissionSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">Notre mission</p>
      <h2 className="font-display text-2xl font-bold text-bleu-nuit mb-5 leading-snug">{brand.tagline}</h2>
      <div className="w-12 h-0.5 bg-teal/30 mb-5" />
      <div className="space-y-4 w-full text-left">
        <div className="bg-teal/5 rounded-lg px-5 py-4 border border-teal/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">Vision</p>
          <p className="text-sm text-bleu-nuit/70 leading-relaxed">
            Un monde o&ugrave; chacun a les connaissances et la confiance n&eacute;cessaires pour prendre des d&eacute;cisions financi&egrave;res &eacute;clair&eacute;es, sans d&eacute;pendance ni exclusion.
          </p>
        </div>
        <div className="bg-[#7A4F6D]/5 rounded-lg px-5 py-4 border border-[#7A4F6D]/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7A4F6D] mb-1">Mission</p>
          <p className="text-sm text-bleu-nuit/70 leading-relaxed">
            D&eacute;mocratiser l&apos;&eacute;ducation financi&egrave;re en la rendant accessible, concr&egrave;te et sans jargon, pour permettre &agrave; chacun de s&apos;&eacute;manciper financi&egrave;rement.
          </p>
        </div>
        <div className="bg-bleu-nuit/5 rounded-lg px-5 py-4 border border-bleu-nuit/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-bleu-nuit mb-1">Message cl&eacute;</p>
          <p className="text-sm text-bleu-nuit/70 leading-relaxed italic">
            &laquo; Chez Emancia, on croit que comprendre ses finances n&apos;est pas un luxe r&eacute;serv&eacute; aux experts. C&apos;est un droit fondamental. &raquo;
          </p>
        </div>
      </div>
    </div>
  )
}

function ValeursSlide() {
  const valeurs = [
    { name: 'Rigueur & Qualit\u00e9', color: '#1A2B3C', letter: 'R', desc: 'Excellence & pr\u00e9cision' },
    { name: 'Transparence', color: '#1A8F8A', letter: 'T', desc: 'Clart\u00e9 & honn\u00eatet\u00e9' },
    { name: '\u00c9mancipation', color: '#7A4F6D', letter: '\u00c9', desc: 'Autonomie & libert\u00e9' },
    { name: 'Authenticit\u00e9', color: '#A8C280', letter: 'A', desc: 'Sinc\u00e9rit\u00e9 & coh\u00e9rence' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-6">Nos valeurs</p>
      <div className="grid grid-cols-4 gap-5 w-full">
        {valeurs.map((v) => (
          <div key={v.name} className="text-center">
            <div className="w-full aspect-square rounded-lg flex items-center justify-center mb-3 relative overflow-hidden" style={{ backgroundColor: v.color }}>
              <span className="text-white/10 text-[100px] font-display font-bold absolute">{v.letter}</span>
            </div>
            <h3 className="font-display text-sm font-semibold mb-0.5" style={{ color: '#1A2B3C' }}>{v.name}</h3>
            <p className="text-xs text-bleu-nuit/50">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LogoSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-6">Notre logo</p>
      <div className="bg-white rounded-lg border border-[#2A4A5C]/15 p-8 mb-6 w-full flex items-center justify-center">
        <Image src="/logos/logo-main.svg" alt="Emancia" width={260} height={65} />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="bg-blanc-casse rounded-lg p-5 flex items-center justify-center">
          <Image src="/logos/logo-main.svg" alt="Fond clair" width={120} height={30} />
        </div>
        <div className="bg-bleu-nuit rounded-lg p-5 flex items-center justify-center">
          <Image src="/logos/logo-main.svg" alt="Fond sombre" width={120} height={30} className="brightness-0 invert" />
        </div>
        <div className="bg-teal rounded-lg p-5 flex items-center justify-center">
          <Image src="/logos/logo-main.svg" alt="Fond teal" width={120} height={30} className="brightness-0 invert" />
        </div>
      </div>
      <p className="text-xs text-bleu-nuit/40 mt-3">3 d&eacute;clinaisons chromatiques pour tous les contextes</p>
    </div>
  )
}

function CouleursPrimairesSlide() {
  const primaires = [
    { name: 'Teal', hex: '#1A8F8A', role: 'Accent principal', textColor: '#fff' },
    { name: 'Bleu Nuit', hex: '#1A2B3C', role: 'Texte & fond sombre', textColor: '#fff' },
    { name: 'Blanc Cass\u00e9', hex: '#F2F5EE', role: 'Fond clair', textColor: '#1A2B3C' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Couleurs primaires</p>
      <p className="text-sm text-bleu-nuit/50 mb-6 max-w-lg text-center">Les 3 couleurs fondatrices de l&apos;identit&eacute; Emancia.</p>
      <div className="grid grid-cols-3 gap-5 w-full mb-6">
        {primaires.map((c) => (
          <div key={c.name} className="text-center">
            <div className="w-full aspect-[4/3] rounded-lg mb-3 shadow-sm flex items-end justify-between px-4 pb-3" style={{ backgroundColor: c.hex, border: c.hex === '#F2F5EE' ? '1px solid #e0e0e0' : undefined }}>
              <span className="text-xs font-mono font-medium" style={{ color: c.textColor, opacity: 0.7 }}>{c.hex}</span>
            </div>
            <p className="text-sm font-semibold text-bleu-nuit">{c.name}</p>
            <p className="text-xs text-teal mt-0.5">{c.role}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-[#2A4A5C]/10 px-5 py-3 max-w-md">
        <p className="text-xs text-bleu-nuit/50 text-center leading-relaxed">
          Le <strong className="text-teal">Teal</strong> attire l&apos;attention, le <strong className="text-bleu-nuit">Bleu Nuit</strong> structure, le <strong>Blanc Cass&eacute;</strong> donne de l&apos;air.
        </p>
      </div>
    </div>
  )
}

function CouleursSecondairesSlide() {
  const secondaires = [
    { name: 'Prune Doux', hex: '#7A4F6D' },
    { name: 'Teal Clair', hex: '#88C9C7' },
    { name: 'Sauge', hex: '#A8C280' },
    { name: 'Bleu Nuit Clair', hex: '#2A4A5C' },
  ]

  const proportions = [
    { label: 'Blanc Cass\u00e9 (fond)', pct: 60, color: '#F2F5EE', border: true },
    { label: 'Bleu Nuit (texte)', pct: 20, color: '#1A2B3C', border: false },
    { label: 'Teal (accents)', pct: 10, color: '#1A8F8A', border: false },
    { label: 'Prune (CTAs)', pct: 5, color: '#7A4F6D', border: false },
    { label: 'Sauge+Teal Clair', pct: 5, color: '#A8C280', border: false },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Couleurs secondaires</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">4 couleurs compl&eacute;mentaires pour enrichir la palette.</p>
      <div className="grid grid-cols-4 gap-4 w-full mb-6">
        {secondaires.map((c) => (
          <div key={c.name} className="text-center">
            <div className="w-full aspect-[4/3] rounded-lg mb-2 shadow-sm" style={{ backgroundColor: c.hex }} />
            <p className="text-sm font-semibold text-bleu-nuit">{c.name}</p>
            <p className="text-[11px] text-bleu-nuit/40 font-mono">{c.hex}</p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-lg">
        <p className="text-[10px] text-bleu-nuit/30 uppercase tracking-wider mb-2 text-center">Proportions d&apos;usage recommand&eacute;es</p>
        <div className="flex h-4 rounded-full overflow-hidden">
          {proportions.map((p) => (
            <div key={p.label} style={{ width: `${p.pct}%`, backgroundColor: p.color, border: p.border ? '1px solid #e0e0e0' : undefined }} />
          ))}
        </div>
        <div className="flex mt-2 gap-3 justify-center flex-wrap">
          {proportions.map((p) => (
            <div key={p.label} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color, border: p.border ? '1px solid #ccc' : undefined }} />
              <span className="text-[9px] text-bleu-nuit/40">{p.pct}% {p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CouleursDegradesSlide() {
  const gradients = [
    { dark: '#1A8F8A', light: '#88C9C7', darkName: 'Teal', lightName: 'Teal Clair' },
    { dark: '#7A4F6D', light: '#A8C280', darkName: 'Prune', lightName: 'Sauge' },
    { dark: '#1A2B3C', light: '#2A4A5C', darkName: 'Bleu Nuit', lightName: 'Bleu Nuit Clair' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">D&eacute;grad&eacute;s</p>
      <p className="text-sm text-bleu-nuit/50 mb-6 max-w-lg text-center">Chaque couleur primaire poss&egrave;de une variante plus claire pour cr&eacute;er de la profondeur.</p>
      <div className="w-full space-y-6">
        {gradients.map((g) => (
          <div key={g.darkName} className="bg-white rounded-lg border border-[#2A4A5C]/10 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: g.dark }} />
                <div>
                  <p className="text-sm font-semibold text-bleu-nuit">{g.darkName}</p>
                  <p className="text-[10px] font-mono text-bleu-nuit/40">{g.dark}</p>
                </div>
              </div>
              <span className="text-bleu-nuit/20 text-lg">&rarr;</span>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold text-bleu-nuit text-right">{g.lightName}</p>
                  <p className="text-[10px] font-mono text-bleu-nuit/40 text-right">{g.light}</p>
                </div>
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: g.light }} />
              </div>
            </div>
            <div className="w-full h-12 rounded-lg" style={{ background: `linear-gradient(to right, ${g.dark}, ${g.light})` }} />
          </div>
        ))}
      </div>
      <p className="text-xs text-bleu-nuit/40 mt-5 text-center max-w-md">
        Utilisez les variantes claires pour les bordures, arri&egrave;re-plans secondaires et &eacute;l&eacute;ments d&apos;interface subtils.
      </p>
    </div>
  )
}

function CouleursHarmonieSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">Harmonie chromatique</p>
      <p className="text-xs text-bleu-nuit/40 mb-5 max-w-md text-center">
        L&apos;axe principal Teal + Prune cr&eacute;e un contraste &eacute;l&eacute;gant entre raison (froid) et &eacute;motion (chaud).
      </p>
      <div className="grid grid-cols-2 gap-4 w-full">
        {[
          { c1: '#1A8F8A', c2: '#7A4F6D', n: 'Teal + Prune Doux', d: 'Split-compl\u00e9mentaire. Structure & libert\u00e9.', q: 'Excellent' },
          { c1: '#1A8F8A', c2: '#88C9C7', n: 'Teal + Teal Clair', d: 'Famille chromatique. Profondeur et respiration.', q: 'Excellent' },
          { c1: '#F2F5EE', c2: '#1A8F8A', n: 'Blanc Cass\u00e9 + Teal', d: 'Ancrage id\u00e9al. Teinte verd\u00e2tre du blanc cass\u00e9 harmonise avec le teal.', q: 'Excellent', border1: true },
          { c1: '#A8C280', c2: '#7A4F6D', n: 'Sauge + Prune', d: 'À surveiller. S\u00e9parer par du blanc ou du teal.', q: 'Vigilance' },
        ].map((p) => (
          <div key={p.n} className="bg-white rounded-lg border border-[#2A4A5C]/15 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 rounded-lg ${p.border1 ? 'border border-[#2A4A5C]/15' : ''}`} style={{ backgroundColor: p.c1 }} />
              <span className="text-base font-bold text-bleu-nuit/20">+</span>
              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: p.c2 }} />
            </div>
            <p className="text-sm font-semibold text-bleu-nuit mb-0.5">{p.n}</p>
            <p className="text-[11px] text-bleu-nuit/50 leading-relaxed">{p.d}</p>
            <div className={`mt-2 px-2 py-0.5 rounded-lg text-[10px] font-semibold inline-block ${
              p.q === 'Excellent'
                ? 'bg-[rgba(90,138,74,0.1)] text-[#5A8A4A]'
                : 'bg-warning/10 text-warning'
            }`}>{p.q}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-bleu-nuit/30 text-center mt-4">Audit bas&eacute; sur l&apos;analyse WCAG AA et la th&eacute;orie split-compl&eacute;mentaire</p>
    </div>
  )
}

function CouleursValeursSlide() {
  const mappings = [
    { valeur: 'Rigueur & Qualit\u00e9', color: '#1A2B3C', colorName: 'Bleu Nuit', why: 'Autorit\u00e9, s\u00e9rieux intellectuel, stabilit\u00e9' },
    { valeur: 'Transparence', color: '#1A8F8A', colorName: 'Teal', why: 'Confiance, clart\u00e9, ouverture, dialogue' },
    { valeur: '\u00c9mancipation', color: '#7A4F6D', colorName: 'Prune Doux', why: 'Empowerment, transformation, sagesse' },
    { valeur: 'Authenticit\u00e9', color: '#A8C280', colorName: 'Sauge', why: 'Naturel, croissance organique, sinc\u00e9rit\u00e9' },
  ]

  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const toggleReveal = (valeur: string) => setRevealed(prev => ({ ...prev, [valeur]: !prev[valeur] }))
  const allRevealed = Object.keys(revealed).length === mappings.length && Object.values(revealed).every(Boolean)

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Couleurs &amp; Valeurs</p>
      <p className="text-sm text-bleu-nuit/50 mb-1 max-w-lg text-center">
        Chaque couleur incarne une valeur fondatrice. Devinez laquelle !
      </p>
      {!allRevealed && <p className="text-xs text-teal/60 mb-4 animate-pulse">Cliquez sur chaque carte pour r&eacute;v&eacute;ler la valeur</p>}
      {allRevealed && <p className="text-xs text-bleu-nuit/30 mb-4">Toutes les valeurs sont r&eacute;v&eacute;l&eacute;es</p>}
      <div className="w-full space-y-2.5">
        {mappings.map((m) => {
          const isRevealed = revealed[m.valeur]
          return (
            <button key={m.valeur} onClick={() => toggleReveal(m.valeur)} className="w-full text-left flex items-stretch gap-0 bg-white rounded-lg border border-[#2A4A5C]/15 overflow-hidden transition-all hover:shadow-md cursor-pointer">
              <div className="w-2 shrink-0" style={{ backgroundColor: m.color }} />
              <div className="flex items-center gap-4 px-5 py-3 flex-1">
                <div className="w-10 h-10 rounded-lg shrink-0 transition-transform" style={{ backgroundColor: m.color }} />
                <div className="flex-1 min-w-0">
                  {isRevealed ? (
                    <>
                      <div className="flex items-center gap-3 mb-0.5">
                        <h3 className="font-display text-sm font-semibold" style={{ color: m.color }}>{m.valeur}</h3>
                        <span className="text-[10px] font-mono text-bleu-nuit/30">{m.colorName}</span>
                      </div>
                      <p className="text-xs text-bleu-nuit/50">{m.why}</p>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-bleu-nuit/40">{m.colorName}</span>
                      <span className="text-[10px] text-teal/50 italic">cliquez pour r&eacute;v&eacute;ler</span>
                    </div>
                  )}
                </div>
                <div className="text-bleu-nuit/20 text-xs shrink-0">{isRevealed ? '\u2713' : '?'}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function CouleursDarkSlide() {
  const darkColors = [
    { name: 'Fond', hex: '#0F1A24', desc: 'Arri\u00e8re-plan principal' },
    { name: 'Surface', hex: '#162535', desc: 'Cartes, panneaux' },
    { name: 'Bleu Nuit Clair', hex: '#2A4A5C', desc: 'Bordures' },
    { name: 'Teal', hex: '#88C9C7', desc: 'Accent adapt\u00e9' },
    { name: 'Texte', hex: '#E4E4E4', desc: 'Texte principal' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Mode sombre</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">Palette adapt&eacute;e pour les interfaces en mode sombre.</p>
      <div className="w-full rounded-lg overflow-hidden mb-5" style={{ backgroundColor: '#0F1A24' }}>
        <div className="p-5">
          <div className="rounded-lg p-4 mb-3" style={{ backgroundColor: '#162535', border: '1px solid #2A4A5C' }}>
            <p className="font-display text-base font-semibold mb-1" style={{ color: '#E4E4E4' }}>Exemple de surface</p>
            <p className="text-sm" style={{ color: '#E4E4E4', opacity: 0.6 }}>Texte secondaire sur fond surface</p>
            <div className="mt-2 flex gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium" style={{ backgroundColor: '#88C9C7', color: '#0F1A24' }}>Action primaire</span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium" style={{ backgroundColor: '#2A4A5C', color: '#E4E4E4' }}>Action secondaire</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3 w-full">
        {darkColors.map((c) => (
          <div key={c.name} className="text-center">
            <div className="w-full aspect-square rounded-lg mb-2 border border-[#2A4A5C]/20" style={{ backgroundColor: c.hex }} />
            <p className="text-xs font-semibold text-bleu-nuit">{c.name}</p>
            <p className="text-[10px] text-bleu-nuit/40 font-mono">{c.hex}</p>
            <p className="text-[10px] text-bleu-nuit/50 mt-0.5">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypographieSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-6">Typographie</p>
      <div className="w-full space-y-5">
        <div className="bg-white rounded-lg border border-[#2A4A5C]/15 p-6">
          <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Display &mdash; Titres</p>
          <p className="font-display text-3xl font-bold text-bleu-nuit">Fraunces</p>
          <p className="font-display text-base text-bleu-nuit/50 mt-1">&Eacute;l&eacute;gante, &eacute;ditoriale, avec du caract&egrave;re</p>
        </div>
        <div className="bg-white rounded-lg border border-[#2A4A5C]/15 p-6">
          <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Body &mdash; Texte courant</p>
          <p className="font-body text-3xl font-bold text-bleu-nuit">DM Sans</p>
          <p className="font-body text-base text-bleu-nuit/50 mt-1">Moderne, lisible, g&eacute;om&eacute;trique</p>
        </div>
        <div className="bg-white rounded-lg border border-[#2A4A5C]/15 p-6">
          <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Mono &mdash; Donn&eacute;es</p>
          <p className="font-mono text-2xl font-bold text-bleu-nuit">JetBrains Mono</p>
          <p className="font-mono text-sm text-bleu-nuit/50 mt-1">&euro;12,450.00 &middot; +8.3% &middot; #1A8F8A</p>
        </div>
      </div>
    </div>
  )
}

function TonSlide() {
  const axes = [
    { label: 'Expert mais accessible', left: 'Jargon', right: 'Vulgarisation' },
    { label: 'Confiant mais humble', left: 'Arrogant', right: 'H\u00e9sitant' },
    { label: 'Motivant mais r\u00e9aliste', left: 'Exag\u00e9r\u00e9', right: 'Pessimiste' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-6">Ton &eacute;ditorial</p>
      <div className="w-full space-y-5">
        {axes.map((axis) => (
          <div key={axis.label} className="bg-white rounded-lg border border-[#2A4A5C]/15 p-5">
            <p className="font-display text-base font-semibold text-bleu-nuit text-center mb-3">{axis.label}</p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-error/60 font-medium w-24 text-right">{axis.left}</span>
              <div className="flex-1 h-2 bg-bleu-nuit/5 rounded-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal rounded-full shadow-sm" />
              </div>
              <span className="text-xs text-error/60 font-medium w-24">{axis.right}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReglesSlide() {
  const rules = [
    { do: 'Utiliser les couleurs de la palette', dont: 'Inventer de nouvelles couleurs' },
    { do: 'Respecter les zones de protection du logo', dont: 'D\u00e9former ou recadrer le logo' },
    { do: 'Utiliser Fraunces pour les titres', dont: 'M\u00e9langer trop de polices' },
    { do: 'Maintenir un ton accessible et expert', dont: 'Utiliser du jargon financier complexe' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-6">Les r&egrave;gles essentielles</p>
      <div className="w-full space-y-2.5">
        {rules.map((r, i) => (
          <div key={i} className="grid grid-cols-2 gap-2.5">
            <div className="rounded-lg p-3 flex items-start gap-2" style={{ backgroundColor: 'rgba(90,138,74,0.05)', border: '1px solid rgba(90,138,74,0.15)' }}>
              <span className="text-base font-bold mt-[-2px]" style={{ color: '#5A8A4A' }}>&check;</span>
              <p className="text-sm text-bleu-nuit/70">{r.do}</p>
            </div>
            <div className="bg-error/5 border border-error/15 rounded-lg p-3 flex items-start gap-2">
              <span className="text-error text-base font-bold mt-[-2px]">&cross;</span>
              <p className="text-sm text-bleu-nuit/70">{r.dont}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OutilsSlide() {
  const tools = [
    { name: 'Palette interactive', desc: 'Copier les couleurs en un clic', page: '/couleurs' },
    { name: 'Composants UI', desc: 'Boutons, cards, badges pr\u00eats \u00e0 l\'emploi', page: '/composants' },
    { name: 'Export tokens', desc: 'CSS, JSON, Tailwind pour vos projets', page: '/tokens' },
    { name: 'Id\u00e9es de contenus', desc: 'Board kanban collaboratif', page: '/idees-contenus' },
    { name: 'Commentaires', desc: 'Donnez votre avis sur chaque page', page: '' },
    { name: 'Mockups contextuels', desc: 'Voir le logo en situation r\u00e9elle', page: '/contextes' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-6">Vos outils</p>
      <div className="grid grid-cols-3 gap-3 w-full">
        {tools.map((t) => (
          <div key={t.name} className="bg-white rounded-lg border border-[#2A4A5C]/15 p-4 text-center">
            <h3 className="font-display text-sm font-semibold mb-0.5" style={{ color: '#1A2B3C' }}>{t.name}</h3>
            <p className="text-xs text-bleu-nuit/50">{t.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-bleu-nuit/30 mt-5">Tout est accessible depuis la sidebar &agrave; gauche</p>
    </div>
  )
}

function CharteEndSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <Image src="/logos/logo-icon.svg" alt="Emancia" width={64} height={64} className="mb-6 opacity-20" />
      <h2 className="font-display text-3xl font-bold text-bleu-nuit mb-3">Merci !</h2>
      <p className="text-base text-bleu-nuit/50 max-w-md mb-6">
        Explorez la charte &agrave; votre rythme et n&apos;h&eacute;sitez pas &agrave; commenter chaque rubrique.
      </p>
      <div className="flex items-center gap-3">
        <a href="/" className="px-6 py-2.5 bg-teal text-white text-sm font-medium rounded-lg hover:bg-teal-dark transition-colors">Explorer la charte</a>
        <a href="/idees-contenus" className="px-6 py-2.5 bg-bleu-nuit/5 text-bleu-nuit text-sm font-medium rounded-lg hover:bg-bleu-nuit/10 transition-colors">Id&eacute;es de contenus</a>
      </div>
    </div>
  )
}

const CHARTE_COMPONENTS: Record<string, React.FC> = {
  cover: CharteCoverSlide,
  mission: MissionSlide,
  valeurs: ValeursSlide,
  logo: LogoSlide,
  'couleurs-primaires': CouleursPrimairesSlide,
  'couleurs-secondaires': CouleursSecondairesSlide,
  'couleurs-degrades': CouleursDegradesSlide,
  'couleurs-harmonie': CouleursHarmonieSlide,
  'couleurs-valeurs': CouleursValeursSlide,
  'couleurs-dark': CouleursDarkSlide,
  typographie: TypographieSlide,
  ton: TonSlide,
  regles: ReglesSlide,
  outils: OutilsSlide,
  end: CharteEndSlide,
}

// ============================================================
// ID\u00c9ES DE CONTENU — Slides
// ============================================================

const IDEES_SLIDES: SlideConfig[] = [
  { id: 'idees-cover', title: '', category: '' },
  { id: 'idees-concept', title: 'Le concept', category: 'Introduction' },
  { id: 'idees-piliers', title: 'Les 8 piliers', category: 'Strat\u00e9gie' },
  { id: 'idees-plateformes', title: 'Nos plateformes', category: 'Distribution' },
  { id: 'idees-formats', title: 'Types de contenu', category: 'Formats' },
  { id: 'idees-workflow', title: 'Workflow kanban', category: 'Organisation' },
  { id: 'idees-audiences', title: 'Audiences cibles', category: 'Ciblage' },
  { id: 'idees-calendrier', title: 'Planification', category: 'Organisation' },
  { id: 'idees-collaboration', title: 'Collaboration', category: '\u00c9quipe' },
  { id: 'idees-end', title: '', category: '' },
]

function IdeesCoverSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="w-16 h-16 rounded-lg bg-teal/10 flex items-center justify-center mb-5">
        <Lightbulb size={32} className="text-teal" />
      </div>
      <h1 className="font-display text-3xl font-bold text-bleu-nuit mb-2">Id&eacute;es de contenu</h1>
      <p className="text-base text-bleu-nuit/50 max-w-md">
        Strat&eacute;gie &eacute;ditoriale et organisation du contenu Emancia
      </p>
      <div className="mt-10 flex items-center gap-2 text-sm text-bleu-nuit/30">
        <span>Utilisez les fl&egrave;ches</span>
        <kbd className="px-2 py-0.5 rounded border border-[#2A4A5C]/20 text-xs">&larr;</kbd>
        <kbd className="px-2 py-0.5 rounded border border-[#2A4A5C]/20 text-xs">&rarr;</kbd>
        <span>pour naviguer</span>
      </div>
    </div>
  )
}

function IdeesConceptSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">Le concept</p>
      <h2 className="font-display text-2xl font-bold text-bleu-nuit mb-5 leading-snug text-center">
        Un board collaboratif pour organiser la cr&eacute;ation de contenu
      </h2>
      <div className="w-12 h-0.5 bg-teal/30 mb-6" />
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="bg-teal/5 rounded-lg px-5 py-4 border border-teal/10 text-center">
          <p className="text-2xl mb-2">💡</p>
          <p className="text-sm font-semibold text-bleu-nuit mb-1">Id&eacute;er</p>
          <p className="text-xs text-bleu-nuit/50 leading-relaxed">Capturer les id&eacute;es de contenu d&egrave;s qu&apos;elles arrivent</p>
        </div>
        <div className="bg-[#7A4F6D]/5 rounded-lg px-5 py-4 border border-[#7A4F6D]/10 text-center">
          <p className="text-2xl mb-2">📋</p>
          <p className="text-sm font-semibold text-bleu-nuit mb-1">Organiser</p>
          <p className="text-xs text-bleu-nuit/50 leading-relaxed">Trier par pilier, plateforme, effort et audience</p>
        </div>
        <div className="bg-bleu-nuit/5 rounded-lg px-5 py-4 border border-bleu-nuit/10 text-center">
          <p className="text-2xl mb-2">🚀</p>
          <p className="text-sm font-semibold text-bleu-nuit mb-1">Produire</p>
          <p className="text-xs text-bleu-nuit/50 leading-relaxed">Suivre le workflow de l&apos;id&eacute;e &agrave; la publication</p>
        </div>
      </div>
    </div>
  )
}

function IdeesPiliersSlide() {
  const piliers = [
    { emoji: '💰', name: 'Budget & \u00c9pargne', color: '#1A8F8A', desc: 'Gestion quotidienne, astuces pratiques' },
    { emoji: '📈', name: 'Investissement', color: '#0A66C2', desc: 'ETF, PEA, immobilier, crypto' },
    { emoji: '🔓', name: 'Gestion de dette', color: '#7A4F6D', desc: 'Cr\u00e9dits, strat\u00e9gies de remboursement' },
    { emoji: '🛡️', name: 'Arnaques & Pi\u00e8ges', color: '#E74C3C', desc: 'Faux placements, fraudes courantes' },
    { emoji: '📋', name: 'Fiscalit\u00e9', color: '#F0A500', desc: 'Imp\u00f4ts, d\u00e9clarations, optimisation' },
    { emoji: '🧠', name: 'Mindset financier', color: '#A8C280', desc: 'Biais cognitifs, psychologie de l\u2019argent' },
    { emoji: '📰', name: 'Actualit\u00e9 \u00e9co', color: '#1A2B3C', desc: 'D\u00e9cryptage de l\u2019actu \u00e9conomique' },
    { emoji: '🎤', name: 'T\u00e9moignage', color: '#E1306C', desc: 'Histoires r\u00e9elles, parcours inspirants' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Les 8 piliers</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">Chaque contenu s&apos;inscrit dans un pilier th&eacute;matique clair.</p>
      <div className="grid grid-cols-4 gap-3 w-full">
        {piliers.map((p) => (
          <div key={p.name} className="bg-white rounded-lg border border-[#2A4A5C]/10 p-3 text-center">
            <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center text-xl" style={{ backgroundColor: `${p.color}12` }}>
              {p.emoji}
            </div>
            <p className="text-xs font-semibold text-bleu-nuit mb-0.5">{p.name}</p>
            <p className="text-[10px] text-bleu-nuit/40 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function IdeesPlateformesSlide() {
  const platforms = [
    { name: 'Instagram', color: '#E1306C', icon: '📸', usage: 'Reels, carrousels \u00e9ducatifs, stories interactives', audience: '18-35 ans' },
    { name: 'YouTube', color: '#FF0000', icon: '▶️', usage: 'Tutoriels longs, analyses approfondies', audience: '25-45 ans' },
    { name: 'LinkedIn', color: '#0A66C2', icon: '💼', usage: 'Articles, threads, actualit\u00e9 \u00e9co', audience: 'Professionnels' },
    { name: 'TikTok', color: '#000000', icon: '🎵', usage: 'Formats courts, mythbusters, quick tips', audience: '16-28 ans' },
    { name: 'X / Twitter', color: '#1DA1F2', icon: '💬', usage: 'Threads, r\u00e9actions actu, d\u00e9bats', audience: 'Tech & finance' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Nos plateformes</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">Un sujet peut &ecirc;tre d&eacute;clin&eacute; sur plusieurs plateformes simultan&eacute;ment.</p>
      <div className="w-full space-y-2.5">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-stretch bg-white rounded-lg border border-[#2A4A5C]/10 overflow-hidden">
            <div className="w-1.5 shrink-0" style={{ backgroundColor: p.color }} />
            <div className="flex items-center gap-4 px-5 py-3 flex-1">
              <span className="text-xl">{p.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-semibold" style={{ color: p.color }}>{p.name}</p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-bleu-nuit/5 text-bleu-nuit/40">{p.audience}</span>
                </div>
                <p className="text-xs text-bleu-nuit/50">{p.usage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IdeesFormatsSlide() {
  const formats = [
    { name: 'Post image', effort: '\u26a1 Rapide', color: '#A8C280' },
    { name: 'Carrousel', effort: '\u26a1 Rapide', color: '#A8C280' },
    { name: 'Reel / Short', effort: '\u23f1\ufe0f Moyen', color: '#F0A500' },
    { name: 'Story', effort: '\u26a1 Rapide', color: '#A8C280' },
    { name: 'Vid\u00e9o longue', effort: '🎬 Complexe', color: '#7A4F6D' },
    { name: 'Article / Blog', effort: '\u23f1\ufe0f Moyen', color: '#F0A500' },
    { name: 'Newsletter', effort: '\u23f1\ufe0f Moyen', color: '#F0A500' },
    { name: 'Thread', effort: '\u26a1 Rapide', color: '#A8C280' },
    { name: 'Live', effort: '🎬 Complexe', color: '#7A4F6D' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Types de contenu</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">Chaque id&eacute;e est associ&eacute;e &agrave; un ou plusieurs formats de contenu.</p>
      <div className="grid grid-cols-3 gap-3 w-full">
        {formats.map((f) => (
          <div key={f.name} className="bg-white rounded-lg border border-[#2A4A5C]/10 px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-medium text-bleu-nuit">{f.name}</span>
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ color: f.color, backgroundColor: `${f.color}15` }}>{f.effort}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 bg-teal/5 rounded-lg px-5 py-3 border border-teal/10 max-w-md">
        <p className="text-xs text-bleu-nuit/60 text-center leading-relaxed">
          Un m&ecirc;me sujet peut donner un <strong className="text-teal">Reel Instagram</strong>, un <strong className="text-teal">Short YouTube</strong> et un <strong className="text-teal">thread X</strong> en parall&egrave;le.
        </p>
      </div>
    </div>
  )
}

function IdeesWorkflowSlide() {
  const statuses = [
    { name: 'Id\u00e9e', color: '#A8C280', desc: 'Brouillon, id\u00e9e brute', icon: '💡' },
    { name: 'Valid\u00e9', color: '#1A8F8A', desc: 'Approuv\u00e9, pr\u00eat \u00e0 produire', icon: '\u2705' },
    { name: 'En cours', color: '#F0A500', desc: 'Production / tournage', icon: '🎬' },
    { name: 'Publi\u00e9', color: '#5A8A4A', desc: 'En ligne sur la plateforme', icon: '🚀' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-4xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Workflow kanban</p>
      <p className="text-sm text-bleu-nuit/50 mb-6 max-w-lg text-center">4 colonnes pour suivre la progression de chaque id&eacute;e.</p>
      <div className="flex items-start gap-4 w-full">
        {statuses.map((s, i) => (
          <div key={s.name} className="flex-1 text-center">
            <div className="bg-white rounded-lg border-2 p-5 mb-3" style={{ borderColor: `${s.color}40` }}>
              <p className="text-2xl mb-2">{s.icon}</p>
              <p className="text-sm font-semibold" style={{ color: s.color }}>{s.name}</p>
              <p className="text-[11px] text-bleu-nuit/50 mt-1">{s.desc}</p>
            </div>
            {i < statuses.length - 1 && (
              <div className="text-bleu-nuit/15 text-lg">&rarr;</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 text-xs text-bleu-nuit/40">
        <span className="flex items-center gap-1">🖱️ Drag &amp; drop entre colonnes</span>
        <span>&middot;</span>
        <span className="flex items-center gap-1">🔄 Mise &agrave; jour en temps r&eacute;el</span>
        <span>&middot;</span>
        <span className="flex items-center gap-1">👥 Collaboratif</span>
      </div>
    </div>
  )
}

function IdeesAudiencesSlide() {
  const audiences = [
    { name: 'D\u00e9butants', color: '#1A8F8A', desc: 'Premiers pas avec les finances, besoin de bases solides', pct: 35 },
    { name: 'Jeunes 18-25', color: '#0A66C2', desc: 'Budget \u00e9tudiant, premier salaire, \u00e9pargne de pr\u00e9caution', pct: 25 },
    { name: 'Parents', color: '#7A4F6D', desc: '\u00c9pargne enfants, assurance vie, fiscalit\u00e9 familiale', pct: 15 },
    { name: 'Ind\u00e9pendants', color: '#F0A500', desc: 'Comptabilit\u00e9, URSSAF, optimisation fiscale', pct: 10 },
    { name: 'Salari\u00e9s', color: '#A8C280', desc: '\u00c9pargne salariale, PER, n\u00e9gociation', pct: 10 },
    { name: 'Tout public', color: '#1A2B3C', desc: 'Sujets transversaux, actu \u00e9co', pct: 5 },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Audiences cibles</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">Chaque id&eacute;e est cibl&eacute;e vers une ou plusieurs audiences.</p>
      <div className="w-full space-y-2">
        {audiences.map((a) => (
          <div key={a.name} className="bg-white rounded-lg border border-[#2A4A5C]/10 px-4 py-3 flex items-center gap-4">
            <div className="w-10 text-right">
              <span className="text-sm font-bold font-mono" style={{ color: a.color }}>{a.pct}%</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="h-2 rounded-full bg-bleu-nuit/5 mb-2 overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${a.pct * 2}%`, backgroundColor: a.color }} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-bleu-nuit">{a.name}</span>
                <span className="text-[10px] text-bleu-nuit/40">{a.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IdeesCalendrierSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">Planification</p>
      <h2 className="font-display text-xl font-bold text-bleu-nuit mb-5 leading-snug text-center">
        Calendrier milestone pour planifier les tournages
      </h2>
      <div className="w-full bg-white rounded-lg border border-[#2A4A5C]/15 p-5 mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-bleu-nuit/40">Semaine du 21 avril</span>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, i) => (
            <div key={day} className="text-center">
              <p className="text-[10px] text-bleu-nuit/30 mb-2">{day}</p>
              <div className={`aspect-square rounded-lg border flex items-center justify-center text-xs font-medium ${
                i === 2 ? 'border-teal/40 bg-teal/5 text-teal' : 'border-gris-leger/30 text-bleu-nuit/30'
              }`}>
                {21 + i}
              </div>
              {i === 2 && (
                <div className="mt-1.5 px-1 py-0.5 rounded bg-[#E1306C]/10 text-[8px] font-medium text-[#E1306C] truncate">
                  Reel Budget
                </div>
              )}
              {i === 4 && (
                <div className="mt-1.5 px-1 py-0.5 rounded bg-[#0A66C2]/10 text-[8px] font-medium text-[#0A66C2] truncate">
                  Article LinkedIn
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        <div className="bg-teal/5 rounded-lg px-4 py-3 border border-teal/10 text-center">
          <p className="text-xs font-semibold text-teal mb-0.5">Drag &amp; drop</p>
          <p className="text-[10px] text-bleu-nuit/40">Glisser une id&eacute;e valid&eacute;e sur un jour</p>
        </div>
        <div className="bg-[#7A4F6D]/5 rounded-lg px-4 py-3 border border-[#7A4F6D]/10 text-center">
          <p className="text-xs font-semibold text-[#7A4F6D] mb-0.5">Vue 4-6 semaines</p>
          <p className="text-[10px] text-bleu-nuit/40">Navigation horizontale par semaine</p>
        </div>
      </div>
    </div>
  )
}

function IdeesCollaborationSlide() {
  const features = [
    { icon: '💬', name: 'Commentaires', desc: 'Discuter chaque id\u00e9e en \u00e9quipe' },
    { icon: '💡', name: 'Points cl\u00e9s', desc: 'Capturer les enseignements importants' },
    { icon: '📊', name: 'Sondages', desc: 'Voter sur les orientations cr\u00e9atives' },
    { icon: '❤️', name: 'Likes', desc: 'Prioriser les id\u00e9es populaires' },
    { icon: '📋', name: 'Dupliquer', desc: 'R\u00e9utiliser une id\u00e9e comme template' },
    { icon: '📈', name: 'Dashboard', desc: 'Statistiques et suivi de progression' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 max-w-3xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-2">Collaboration</p>
      <p className="text-sm text-bleu-nuit/50 mb-5 max-w-lg text-center">Des outils collaboratifs int&eacute;gr&eacute;s dans chaque id&eacute;e de contenu.</p>
      <div className="grid grid-cols-3 gap-3 w-full">
        {features.map((f) => (
          <div key={f.name} className="bg-white rounded-lg border border-[#2A4A5C]/10 p-4 text-center">
            <p className="text-xl mb-2">{f.icon}</p>
            <p className="text-xs font-semibold text-bleu-nuit mb-0.5">{f.name}</p>
            <p className="text-[10px] text-bleu-nuit/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function IdeesEndSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="w-16 h-16 rounded-lg bg-teal/10 flex items-center justify-center mb-6">
        <Lightbulb size={32} className="text-teal/40" />
      </div>
      <h2 className="font-display text-3xl font-bold text-bleu-nuit mb-3">&Agrave; vous de jouer !</h2>
      <p className="text-base text-bleu-nuit/50 max-w-md mb-6">
        Rendez-vous sur le board pour cr&eacute;er votre premi&egrave;re id&eacute;e de contenu.
      </p>
      <a href="/idees-contenus" className="px-6 py-2.5 bg-teal text-white text-sm font-medium rounded-lg hover:bg-teal-dark transition-colors">
        Ouvrir le board
      </a>
    </div>
  )
}

const IDEES_COMPONENTS: Record<string, React.FC> = {
  'idees-cover': IdeesCoverSlide,
  'idees-concept': IdeesConceptSlide,
  'idees-piliers': IdeesPiliersSlide,
  'idees-plateformes': IdeesPlateformesSlide,
  'idees-formats': IdeesFormatsSlide,
  'idees-workflow': IdeesWorkflowSlide,
  'idees-audiences': IdeesAudiencesSlide,
  'idees-calendrier': IdeesCalendrierSlide,
  'idees-collaboration': IdeesCollaborationSlide,
  'idees-end': IdeesEndSlide,
}

// ============================================================
// PRESENTATIONS REGISTRY
// ============================================================

const PRESENTATIONS: PresentationConfig[] = [
  {
    id: 'charte-graphique',
    title: 'Charte Graphique',
    subtitle: 'Guide de marque et syst\u00e8me de design',
    icon: Palette,
    color: '#1A8F8A',
    slides: CHARTE_SLIDES,
    components: CHARTE_COMPONENTS,
  },
  {
    id: 'idees-contenu',
    title: 'Id\u00e9es de contenu',
    subtitle: 'Strat\u00e9gie \u00e9ditoriale et organisation',
    icon: Lightbulb,
    color: '#7A4F6D',
    slides: IDEES_SLIDES,
    components: IDEES_COMPONENTS,
  },
]

// ============================================================
// SLIDE VIEWER
// ============================================================

function SlideViewer({ presentation, onBack }: { presentation: PresentationConfig; onBack: () => void }) {
  const [current, setCurrent] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goNext = useCallback(() => setCurrent(prev => Math.min(prev + 1, presentation.slides.length - 1)), [presentation.slides.length])
  const goPrev = useCallback(() => setCurrent(prev => Math.max(prev - 1, 0)), [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen()
          setIsFullscreen(false)
        } else {
          onBack()
        }
      }
      if (e.key === 'f' || e.key === 'F') { toggleFullscreen() }
    }
    window.addEventListener('keydown', handleKey)

    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleFsChange)

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.removeEventListener('fullscreenchange', handleFsChange)
    }
  }, [goNext, goPrev, toggleFullscreen, onBack])

  const slide = presentation.slides[current]
  const SlideComponent = presentation.components[slide.id]

  return (
    <div className="fixed inset-0 z-50 bg-blanc-casse flex flex-col" style={{ marginLeft: isFullscreen ? 0 : undefined }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-[#2A4A5C]/10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-bleu-nuit/30 hover:text-bleu-nuit transition-colors" title="Retour aux pr\u00e9sentations">
            <ArrowLeft size={18} />
          </button>
          <span className="text-xs text-bleu-nuit/30">|</span>
          <span className="text-xs font-semibold text-bleu-nuit/50">{presentation.title}</span>
          {slide.category && (
            <>
              <span className="text-xs text-bleu-nuit/20">&middot;</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal">{slide.category}</span>
            </>
          )}
          {slide.title && (
            <>
              <span className="text-xs text-bleu-nuit/20">&middot;</span>
              <span className="text-xs text-bleu-nuit/50">{slide.title}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-bleu-nuit/30 font-mono">{current + 1} / {presentation.slides.length}</span>
          <button onClick={toggleFullscreen} className="p-1.5 rounded-lg text-bleu-nuit/30 hover:text-bleu-nuit hover:bg-bleu-nuit/5 transition-colors" title="Plein \u00e9cran (F)">
            <Maximize2 size={15} />
          </button>
        </div>
      </div>

      {/* Slide content */}
      <div className="flex-1 relative overflow-hidden">
        {SlideComponent && <SlideComponent />}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-t border-[#2A4A5C]/10">
        <button onClick={goPrev} disabled={current === 0} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-bleu-nuit/50 hover:text-bleu-nuit hover:bg-bleu-nuit/5 transition-colors disabled:opacity-20 disabled:cursor-not-allowed">
          <ChevronLeft size={16} />
          Pr&eacute;c&eacute;dent
        </button>
        <div className="flex items-center gap-1.5">
          {presentation.slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all ${i === current ? 'w-6 h-2 bg-teal' : 'w-2 h-2 bg-[#2A4A5C]/15 hover:bg-bleu-nuit/20'}`} />
          ))}
        </div>
        <button onClick={goNext} disabled={current === presentation.slides.length - 1} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-bleu-nuit/50 hover:text-bleu-nuit hover:bg-bleu-nuit/5 transition-colors disabled:opacity-20 disabled:cursor-not-allowed">
          Suivant
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

// ============================================================
// HUB — Presentation Selector
// ============================================================

export default function PresentationPage() {
  const [activePresentation, setActivePresentation] = useState<PresentationConfig | null>(null)

  const handleBack = useCallback(() => setActivePresentation(null), [])

  if (activePresentation) {
    return <SlideViewer presentation={activePresentation} onBack={handleBack} />
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
            <Presentation size={20} className="text-teal" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-bleu-nuit">Pr&eacute;sentations</h1>
            <p className="text-sm text-bleu-nuit/50">Parcourez les pr&eacute;sentations de marque Emancia</p>
          </div>
        </div>
      </div>

      {/* Presentation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PRESENTATIONS.map((pres) => {
          const Icon = pres.icon
          const slideCount = pres.slides.length
          return (
            <button
              key={pres.id}
              onClick={() => setActivePresentation(pres)}
              className="group text-left bg-white rounded-lg border border-[#2A4A5C]/10 overflow-hidden hover:shadow-lg hover:border-[#2A4A5C]/20 transition-all"
            >
              {/* Color band + preview */}
              <div className="h-36 relative flex items-center justify-center" style={{ backgroundColor: `${pres.color}08` }}>
                <div className="absolute inset-x-0 bottom-0 h-1" style={{ backgroundColor: pres.color }} />
                <Icon size={48} className="transition-transform group-hover:scale-110" style={{ color: `${pres.color}30` }} />
              </div>

              {/* Info */}
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-display text-lg font-semibold text-bleu-nuit">{pres.title}</h2>
                </div>
                <p className="text-sm text-bleu-nuit/50 mb-3">{pres.subtitle}</p>
                <div className="flex items-center gap-3 text-xs text-bleu-nuit/35">
                  <span>{slideCount} slides</span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-1 text-teal group-hover:underline">
                    Lancer la pr&eacute;sentation
                    <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Tips */}
      <div className="mt-8 bg-blanc-casse rounded-lg border border-[#2A4A5C]/10 px-5 py-4">
        <p className="text-xs text-bleu-nuit/40 leading-relaxed">
          <strong className="text-bleu-nuit/60">Raccourcis :</strong>{' '}
          <kbd className="px-1.5 py-0.5 rounded border border-[#2A4A5C]/15 text-[10px] mx-0.5">&larr;</kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-[#2A4A5C]/15 text-[10px] mx-0.5">&rarr;</kbd> naviguer &middot;{' '}
          <kbd className="px-1.5 py-0.5 rounded border border-[#2A4A5C]/15 text-[10px] mx-0.5">F</kbd> plein &eacute;cran &middot;{' '}
          <kbd className="px-1.5 py-0.5 rounded border border-[#2A4A5C]/15 text-[10px] mx-0.5">Esc</kbd> retour
        </p>
      </div>
    </div>
  )
}
