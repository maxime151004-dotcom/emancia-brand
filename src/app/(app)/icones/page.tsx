'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { CommentsSection } from '@/components/CommentsSection'
import {
  // Navigation
  Menu, ChevronDown, ChevronRight, ArrowLeft, ArrowRight, ExternalLink, Search,
  // Actions
  Plus, Pencil, Trash2, Copy, Check, X, Download, Upload, Share2,
  // Communication
  MessageCircle, Mail, Send, Phone, Bell, Heart,
  // Finance & Education
  TrendingUp, TrendingDown, BarChart3, PieChart, BookOpen, GraduationCap, Wallet, CreditCard, PiggyBank, Calculator,
  // Media
  Camera, Video, Play, Image, Film, Mic,
  // Social
  Globe, Tv, Briefcase as LinkedinIcon, AtSign,
  // UI
  Settings, User, Users, Eye, EyeOff, Lock, Unlock, Info, AlertTriangle, CheckCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface IconItem {
  name: string
  componentName: string
  Icon: LucideIcon
  color: string
}

interface IconGroup {
  label: string
  description: string
  icons: IconItem[]
}

const iconGroups: IconGroup[] = [
  {
    label: 'Navigation',
    description: 'Icônes de navigation et d\'orientation dans l\'interface',
    icons: [
      { name: 'Menu', componentName: 'Menu', Icon: Menu, color: '#1A2B3C' },
      { name: 'Chevron bas', componentName: 'ChevronDown', Icon: ChevronDown, color: '#1A2B3C' },
      { name: 'Chevron droite', componentName: 'ChevronRight', Icon: ChevronRight, color: '#1A2B3C' },
      { name: 'Flèche gauche', componentName: 'ArrowLeft', Icon: ArrowLeft, color: '#1A2B3C' },
      { name: 'Flèche droite', componentName: 'ArrowRight', Icon: ArrowRight, color: '#1A8F8A' },
      { name: 'Lien externe', componentName: 'ExternalLink', Icon: ExternalLink, color: '#1A8F8A' },
      { name: 'Recherche', componentName: 'Search', Icon: Search, color: '#1A2B3C' },
    ],
  },
  {
    label: 'Actions',
    description: 'Icônes d\'actions utilisateur courantes',
    icons: [
      { name: 'Ajouter', componentName: 'Plus', Icon: Plus, color: '#1A8F8A' },
      { name: 'Modifier', componentName: 'Pencil', Icon: Pencil, color: '#1A2B3C' },
      { name: 'Supprimer', componentName: 'Trash2', Icon: Trash2, color: '#E05252' },
      { name: 'Copier', componentName: 'Copy', Icon: Copy, color: '#1A2B3C' },
      { name: 'Valider', componentName: 'Check', Icon: Check, color: '#1A8F8A' },
      { name: 'Fermer', componentName: 'X', Icon: X, color: '#1A2B3C' },
      { name: 'Télécharger', componentName: 'Download', Icon: Download, color: '#1A2B3C' },
      { name: 'Importer', componentName: 'Upload', Icon: Upload, color: '#1A2B3C' },
      { name: 'Partager', componentName: 'Share2', Icon: Share2, color: '#1A8F8A' },
    ],
  },
  {
    label: 'Communication',
    description: 'Icônes de messagerie et interaction sociale',
    icons: [
      { name: 'Message', componentName: 'MessageCircle', Icon: MessageCircle, color: '#1A8F8A' },
      { name: 'Email', componentName: 'Mail', Icon: Mail, color: '#1A2B3C' },
      { name: 'Envoyer', componentName: 'Send', Icon: Send, color: '#1A8F8A' },
      { name: 'Téléphone', componentName: 'Phone', Icon: Phone, color: '#1A2B3C' },
      { name: 'Notification', componentName: 'Bell', Icon: Bell, color: '#7A4F6D' },
      { name: 'Favori', componentName: 'Heart', Icon: Heart, color: '#7A4F6D' },
    ],
  },
  {
    label: 'Finance & Éducation',
    description: 'Icônes pour le contenu financier et pédagogique',
    icons: [
      { name: 'Croissance', componentName: 'TrendingUp', Icon: TrendingUp, color: '#1A8F8A' },
      { name: 'Baisse', componentName: 'TrendingDown', Icon: TrendingDown, color: '#E05252' },
      { name: 'Graphique barres', componentName: 'BarChart3', Icon: BarChart3, color: '#1A8F8A' },
      { name: 'Graphique camembert', componentName: 'PieChart', Icon: PieChart, color: '#1A2B3C' },
      { name: 'Apprentissage', componentName: 'BookOpen', Icon: BookOpen, color: '#7A4F6D' },
      { name: 'Diplôme', componentName: 'GraduationCap', Icon: GraduationCap, color: '#7A4F6D' },
      { name: 'Portefeuille', componentName: 'Wallet', Icon: Wallet, color: '#1A2B3C' },
      { name: 'Carte bancaire', componentName: 'CreditCard', Icon: CreditCard, color: '#1A2B3C' },
      { name: 'Épargne', componentName: 'PiggyBank', Icon: PiggyBank, color: '#A8C280' },
      { name: 'Calculateur', componentName: 'Calculator', Icon: Calculator, color: '#1A8F8A' },
    ],
  },
  {
    label: 'Média',
    description: 'Icônes pour le contenu multimédia',
    icons: [
      { name: 'Photo', componentName: 'Camera', Icon: Camera, color: '#1A2B3C' },
      { name: 'Vidéo', componentName: 'Video', Icon: Video, color: '#1A8F8A' },
      { name: 'Lecture', componentName: 'Play', Icon: Play, color: '#1A8F8A' },
      { name: 'Image', componentName: 'Image', Icon: Image, color: '#1A2B3C' },
      { name: 'Film', componentName: 'Film', Icon: Film, color: '#1A2B3C' },
      { name: 'Micro', componentName: 'Mic', Icon: Mic, color: '#7A4F6D' },
    ],
  },
  {
    label: 'Réseaux sociaux',
    description: 'Icônes des plateformes sociales utilisées par Emancia',
    icons: [
      { name: 'Instagram', componentName: 'Camera', Icon: Camera, color: '#7A4F6D' },
      { name: 'YouTube', componentName: 'Tv', Icon: Tv, color: '#E05252' },
      { name: 'LinkedIn', componentName: 'Briefcase', Icon: LinkedinIcon, color: '#1A2B3C' },
      { name: 'Twitter / X', componentName: 'AtSign', Icon: AtSign, color: '#1A2B3C' },
      { name: 'Site web', componentName: 'Globe', Icon: Globe, color: '#1A8F8A' },
    ],
  },
  {
    label: 'Interface (UI)',
    description: 'Icônes de composants et d\'états d\'interface',
    icons: [
      { name: 'Paramètres', componentName: 'Settings', Icon: Settings, color: '#1A2B3C' },
      { name: 'Utilisateur', componentName: 'User', Icon: User, color: '#1A2B3C' },
      { name: 'Groupe', componentName: 'Users', Icon: Users, color: '#1A8F8A' },
      { name: 'Visible', componentName: 'Eye', Icon: Eye, color: '#1A2B3C' },
      { name: 'Masqué', componentName: 'EyeOff', Icon: EyeOff, color: '#1A2B3C' },
      { name: 'Verrouillé', componentName: 'Lock', Icon: Lock, color: '#7A4F6D' },
      { name: 'Déverrouillé', componentName: 'Unlock', Icon: Unlock, color: '#1A8F8A' },
      { name: 'Information', componentName: 'Info', Icon: Info, color: '#88C9C7' },
      { name: 'Attention', componentName: 'AlertTriangle', Icon: AlertTriangle, color: '#F0A500' },
      { name: 'Succès', componentName: 'CheckCircle', Icon: CheckCircle, color: '#4CAF82' },
    ],
  },
]

export default function IconesPage() {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

  function handleCopyImport(componentName: string) {
    const code = `import { ${componentName} } from 'lucide-react'`
    navigator.clipboard.writeText(code)
    setCopiedIcon(componentName)
    setTimeout(() => setCopiedIcon(null), 2000)
  }

  return (
    <>
      <PageHeader
        title="Icônes"
        description="Catalogue complet des icônes Emancia basé sur Lucide React. Cliquez sur une icône pour copier son import. Chaque icône utilise les couleurs de la charte et un trait fin (strokeWidth: 1.5)."
      />

      {/* ---------- Icon catalog ---------- */}
      {iconGroups.map((group) => (
        <section key={group.label} className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-bleu-nuit">{group.label}</h2>
            <p className="text-sm text-bleu-nuit/70">{group.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {group.icons.map(({ name, componentName, Icon, color }) => (
              <button
                key={componentName}
                type="button"
                onClick={() => handleCopyImport(componentName)}
                className="group relative flex flex-col items-center gap-2 rounded-lg bg-white p-4 border border-bleu-nuit-clair/15 hover:shadow-md transition-shadow cursor-pointer text-center"
              >
                {copiedIcon === componentName ? (
                  <Check size={28} className="text-teal" strokeWidth={1.5} />
                ) : (
                  <Icon size={28} style={{ color }} strokeWidth={1.5} />
                )}
                <span className="text-xs text-bleu-nuit">
                  {copiedIcon === componentName ? 'Copié !' : name}
                </span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-bleu-nuit px-2 py-0.5 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {componentName}
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      {/* ---------- Usage guidelines ---------- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-bleu-nuit mb-4">Règles d&apos;utilisation</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white rounded-lg p-5 border border-bleu-nuit-clair/15">
            <h3 className="font-semibold text-bleu-nuit mb-1">Tailles</h3>
            <p className="text-sm text-bleu-nuit">
              <strong>20px</strong> pour les icônes inline (texte, boutons).{' '}
              <strong>24px</strong> pour les icônes standalone (cartes, navigation). Ne pas dépasser 48px.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 border border-bleu-nuit-clair/15">
            <h3 className="font-semibold text-bleu-nuit mb-1">Épaisseur du trait</h3>
            <p className="text-sm text-bleu-nuit">
              Toujours utiliser{' '}
              <code className="font-mono text-teal bg-teal/5 px-1 rounded">strokeWidth={'{1.5}'}</code>{' '}
              (valeur par défaut Lucide) pour une apparence fine et cohérente.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 border border-bleu-nuit-clair/15">
            <h3 className="font-semibold text-bleu-nuit mb-1">Couleurs</h3>
            <p className="text-sm text-bleu-nuit">
              Utiliser uniquement les couleurs de la charte :{' '}
              <span className="font-semibold" style={{ color: '#1A8F8A' }}>teal</span> pour les éléments actifs,{' '}
              <span className="font-semibold" style={{ color: '#1A2B3C' }}>bleu-nuit</span> pour le neutre,{' '}
              <span className="font-semibold" style={{ color: '#7A4F6D' }}>prune</span> pour les CTA.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 border border-bleu-nuit-clair/15">
            <h3 className="font-semibold text-bleu-nuit mb-1">Limite de couleurs</h3>
            <p className="text-sm text-bleu-nuit">
              Ne jamais utiliser plus de <strong>2 couleurs d&apos;icônes</strong> dans le même composant pour garder une hiérarchie visuelle claire.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 border border-bleu-nuit-clair/15 sm:col-span-2">
            <h3 className="font-semibold text-bleu-nuit mb-1">Accessibilité</h3>
            <p className="text-sm text-bleu-nuit">
              Toujours accompagner les icônes d&apos;un <strong>label texte</strong> pour l&apos;accessibilité.
              Les icônes seules doivent avoir un attribut{' '}
              <code className="font-mono text-teal bg-teal/5 px-1 rounded">aria-label</code>{' '}
              ou être enveloppées dans un élément avec un texte accessible.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Do / Don't ---------- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-bleu-nuit mb-4">Bonnes pratiques</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-teal/30 bg-teal/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle size={20} className="text-teal" strokeWidth={1.5} />
              <h3 className="font-semibold text-bleu-nuit">À faire</h3>
            </div>
            <ul className="space-y-2 text-sm text-bleu-nuit">
              <li className="flex items-start gap-2">
                <Check size={14} className="text-teal mt-1 shrink-0" strokeWidth={2} />
                Utiliser les icônes Lucide exclusivement
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-teal mt-1 shrink-0" strokeWidth={2} />
                Garder strokeWidth={'{1.5}'} sur toutes les icônes
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-teal mt-1 shrink-0" strokeWidth={2} />
                Ajouter un label texte à côté de chaque icône
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-teal mt-1 shrink-0" strokeWidth={2} />
                Respecter les couleurs de la charte (teal, bleu-nuit, prune)
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-300/30 bg-red-50/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={20} className="text-red-500" strokeWidth={1.5} />
              <h3 className="font-semibold text-bleu-nuit">À éviter</h3>
            </div>
            <ul className="space-y-2 text-sm text-bleu-nuit">
              <li className="flex items-start gap-2">
                <X size={14} className="text-red-500 mt-1 shrink-0" strokeWidth={2} />
                Mélanger des jeux d&apos;icônes différents
              </li>
              <li className="flex items-start gap-2">
                <X size={14} className="text-red-500 mt-1 shrink-0" strokeWidth={2} />
                Utiliser plus de 2 couleurs d&apos;icônes par composant
              </li>
              <li className="flex items-start gap-2">
                <X size={14} className="text-red-500 mt-1 shrink-0" strokeWidth={2} />
                Afficher une icône sans texte associé
              </li>
              <li className="flex items-start gap-2">
                <X size={14} className="text-red-500 mt-1 shrink-0" strokeWidth={2} />
                Modifier l&apos;épaisseur du trait ou remplir les icônes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Code example ---------- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-bleu-nuit mb-4">Exemple de code</h2>
        <div className="rounded-lg bg-bleu-nuit p-6 overflow-x-auto">
          <pre className="text-xs text-teal-clair font-mono leading-relaxed">{`// Installation
npm install lucide-react

// Import
import { Heart, Users, TrendingUp } from 'lucide-react'

// Inline (20px) — dans du texte ou un bouton
<Heart size={20} color="#7A4F6D" strokeWidth={1.5} />

// Standalone (24px) — dans une carte ou navigation
<Users size={24} color="#1A8F8A" strokeWidth={1.5} />

// Avec label texte (accessibilité)
<span className="flex items-center gap-2">
  <TrendingUp size={20} color="#1A8F8A" strokeWidth={1.5} />
  Croissance
</span>`}</pre>
        </div>
      </section>

      <CommentsSection pageSlug="icones" />
    </>
  )
}
