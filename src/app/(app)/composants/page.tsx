'use client'

import { useState } from 'react'
import { Info, Plus, ArrowRight, ChevronRight, Check, AlertTriangle, X } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { CommentsSection } from '@/components/CommentsSection'

export default function ComposantsPage() {
  const [activeTab, setActiveTab] = useState('onglet1')

  return (
    <>
      <PageHeader
        title="Composants UI"
        description="Les composants de l'interface Emancia suivent un design system cohérent basé sur les couleurs, la typographie et l'espacement définis dans cette charte."
      />

      {/* Boutons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Boutons</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger space-y-6">
          <div>
            <p className="text-xs font-medium text-bleu-nuit/40 uppercase tracking-wider mb-3">Variantes</p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-teal text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-dark transition-colors">
                Primaire
              </button>
              <button className="bg-prune text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                CTA
              </button>
              <button className="border-2 border-teal text-teal px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-clair transition-colors">
                Secondaire
              </button>
              <button className="text-teal px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-clair/50 transition-colors">
                Ghost
              </button>
              <button className="bg-gris-leger text-bleu-nuit/40 px-6 py-2.5 rounded-lg font-medium text-sm cursor-not-allowed">
                Désactivé
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-bleu-nuit/40 uppercase tracking-wider mb-3">Tailles</p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-teal text-white px-3.5 py-1.5 rounded-md font-medium text-xs hover:bg-teal-dark transition-colors">
                Small
              </button>
              <button className="bg-teal text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-dark transition-colors">
                Medium
              </button>
              <button className="bg-teal text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-teal-dark transition-colors">
                Large
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-bleu-nuit/40 uppercase tracking-wider mb-3">Avec icône</p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-dark transition-colors">
                <Plus size={16} /> Ajouter
              </button>
              <button className="flex items-center gap-2 border-2 border-teal text-teal px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-clair transition-colors">
                Suivant <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gris-leger/30">
            <p className="text-sm text-bleu-nuit/70 space-y-1">
              <strong>Border-radius :</strong> 8px (rounded-lg) &middot; <strong>Padding :</strong> 10px 24px &middot; <strong>Font :</strong> DM Sans 500, 14px
            </p>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Champs de formulaire</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-bleu-nuit mb-1.5">Input texte</label>
              <input
                type="text"
                placeholder="Votre nom..."
                className="w-full px-4 py-2.5 rounded-lg border border-gris-leger text-sm text-bleu-nuit placeholder:text-bleu-nuit/30 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bleu-nuit mb-1.5">Input email</label>
              <input
                type="email"
                placeholder="email@emancia.be"
                className="w-full px-4 py-2.5 rounded-lg border border-gris-leger text-sm text-bleu-nuit placeholder:text-bleu-nuit/30 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-bleu-nuit mb-1.5">Textarea</label>
            <textarea
              rows={3}
              placeholder="Décrivez votre projet..."
              className="w-full px-4 py-2.5 rounded-lg border border-gris-leger text-sm text-bleu-nuit placeholder:text-bleu-nuit/30 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-bleu-nuit mb-1.5">Select</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gris-leger text-sm text-bleu-nuit focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all bg-white">
                <option>Choisir une option</option>
                <option>Actions</option>
                <option>Obligations</option>
                <option>ETF</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-bleu-nuit mb-1.5">Input erreur</label>
              <input
                type="text"
                defaultValue="Valeur incorrecte"
                className="w-full px-4 py-2.5 rounded-lg border border-error text-sm text-bleu-nuit focus:outline-none focus:ring-2 focus:ring-error/10 transition-all"
              />
              <p className="text-xs text-error mt-1">Ce champ est obligatoire</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gris-leger/30">
            <p className="text-sm text-bleu-nuit/70">
              <strong>Border :</strong> border-gris-leger &middot; <strong>Focus :</strong> border-teal + ring-teal/10 &middot; <strong>Erreur :</strong> border-error + ring-error/10
            </p>
          </div>
        </div>
      </section>

      {/* Cartes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Cartes</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gris-leger">
            <h3 className="font-display text-lg font-semibold mb-2">Carte standard</h3>
            <p className="text-sm text-bleu-nuit/70 leading-relaxed">
              Fond blanc, bordure gris léger, rounded-lg (8px), padding 24px.
            </p>
          </div>
          <div className="bg-teal-clair rounded-lg p-6 border border-teal/10">
            <h3 className="font-display text-lg font-semibold text-teal-dark mb-2">Carte accentuée</h3>
            <p className="text-sm text-bleu-nuit/70 leading-relaxed">
              Fond teal clair, bordure teal/10, pour les sections mises en avant.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border-l-4 border-l-teal border border-gris-leger">
            <h3 className="font-display text-lg font-semibold mb-2">Carte highlight</h3>
            <p className="text-sm text-bleu-nuit/70 leading-relaxed">
              Bordure gauche teal 4px pour indiquer une mise en avant ou une sélection.
            </p>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Badges</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal">
              Actif
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-prune/10 text-prune">
              Premium
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sauge/15 text-sauge">
              Nouveau
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gris-leger text-bleu-nuit/50">
              Inactif
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
              Publié
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
              En attente
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-error/10 text-error">
              Erreur
            </span>
          </div>

          <div>
            <p className="text-xs font-medium text-bleu-nuit/40 uppercase tracking-wider mb-3">Avec indicateur</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                En ligne
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-error/10 text-error">
                <span className="w-1.5 h-1.5 rounded-full bg-error" />
                Hors ligne
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-gris-leger/30">
            <p className="text-sm text-bleu-nuit/70">
              <strong>Shape :</strong> rounded-full (pill) &middot; <strong>Padding :</strong> 4px 12px &middot; <strong>Background :</strong> couleur/10
            </p>
          </div>
        </div>
      </section>

      {/* Alertes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Alertes</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-success/10 rounded-lg p-4 border border-success/20">
            <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-bleu-nuit">Succès</p>
              <p className="text-sm text-bleu-nuit/70">Votre profil a été mis à jour avec succès.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-error/10 rounded-lg p-4 border border-error/20">
            <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-bleu-nuit">Erreur</p>
              <p className="text-sm text-bleu-nuit/70">Une erreur est survenue. Veuillez réessayer.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-warning/10 rounded-lg p-4 border border-warning/20">
            <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-bleu-nuit">Attention</p>
              <p className="text-sm text-bleu-nuit/70">Cette action est irréversible.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-info/10 rounded-lg p-4 border border-info/20">
            <Info className="w-5 h-5 text-info shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-bleu-nuit">Information</p>
              <p className="text-sm text-bleu-nuit/70">L&apos;épargne de précaution recommandée est de 3 à 6 mois de dépenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Onglets</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger">
          <div className="flex border-b border-gris-leger/30 mb-6">
            {['onglet1', 'onglet2', 'onglet3'].map((tab, i) => {
              const labels = ['Aperçu', 'Détails', 'Historique']
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                    activeTab === tab
                      ? 'border-teal text-teal'
                      : 'border-transparent text-bleu-nuit/50 hover:text-bleu-nuit/80'
                  }`}
                >
                  {labels[i]}
                </button>
              )
            })}
          </div>
          <p className="text-sm text-bleu-nuit/70">
            Contenu de l&apos;onglet &laquo; {activeTab === 'onglet1' ? 'Aperçu' : activeTab === 'onglet2' ? 'Détails' : 'Historique'} &raquo;. Les onglets utilisent une bordure inférieure teal de 2px pour l&apos;état actif.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Fil d&apos;Ariane</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger">
          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="text-teal hover:text-teal-dark transition-colors">Accueil</a>
            <ChevronRight size={14} className="text-bleu-nuit/30" />
            <a href="#" className="text-teal hover:text-teal-dark transition-colors">Outils</a>
            <ChevronRight size={14} className="text-bleu-nuit/30" />
            <span className="text-bleu-nuit/60">Composants</span>
          </nav>
        </div>
      </section>

      {/* Tooltips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Tooltips</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger">
          <div className="flex items-center gap-8">
            <div className="relative group inline-block">
              <button className="bg-teal text-white px-6 py-2.5 rounded-lg font-medium text-sm">
                Survolez-moi
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-bleu-nuit px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Tooltip d&apos;information
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-bleu-nuit" />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gris-leger/30">
            <p className="text-sm text-bleu-nuit/70">
              <strong>Background :</strong> bleu-nuit &middot; <strong>Text :</strong> blanc &middot; <strong>Radius :</strong> rounded-lg &middot; <strong>Padding :</strong> 6px 12px
            </p>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Tableau de données</h2>
        <div className="bg-white rounded-lg border border-gris-leger overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gris-leger bg-teal-clair/50">
                <th className="text-left p-4 font-medium text-bleu-nuit">Nom</th>
                <th className="text-left p-4 font-medium text-bleu-nuit">Statut</th>
                <th className="text-right p-4 font-medium text-bleu-nuit">Montant</th>
                <th className="text-right p-4 font-medium text-bleu-nuit">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'ETF World', status: 'Actif', amount: '12 450 €', date: '15 mar 2026', statusColor: 'text-teal bg-teal/10' },
                { name: 'Épargne sécurité', status: 'En attente', amount: '5 000 €', date: '12 mar 2026', statusColor: 'text-warning bg-warning/10' },
                { name: 'Crypto BTC', status: 'Inactif', amount: '1 200 €', date: '08 mar 2026', statusColor: 'text-bleu-nuit/50 bg-gris-leger' },
              ].map((row) => (
                <tr key={row.name} className="border-b border-gris-leger/50 hover:bg-blanc-casse/50 transition-colors">
                  <td className="p-4 font-medium text-bleu-nuit">{row.name}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono text-bleu-nuit">{row.amount}</td>
                  <td className="p-4 text-right text-bleu-nuit/60">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Espacement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Espacement</h2>
        <div className="bg-white rounded-lg p-8 border border-gris-leger">
          <p className="text-sm text-bleu-nuit/70 mb-4">
            Le système d&apos;espacement est basé sur un module de <strong>4px</strong>.
            Tous les espacements sont des multiples de ce module.
          </p>
          <div className="flex items-end gap-4">
            {[4, 8, 12, 16, 24, 32, 48, 64].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <div
                  className="bg-teal/20 border border-teal/30 rounded"
                  style={{ width: size, height: size }}
                />
                <span className="text-xs font-mono text-bleu-nuit/60">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille responsive */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Grille responsive</h2>
        <div className="bg-white rounded-lg border border-gris-leger overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gris-leger bg-teal-clair/50">
                <th className="text-left p-4 font-medium">Breakpoint</th>
                <th className="text-left p-4 font-medium">Largeur</th>
                <th className="text-left p-4 font-medium">Colonnes</th>
                <th className="text-left p-4 font-medium">Gouttière</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Mobile', width: '< 640px', cols: 4, gutter: '16px' },
                { name: 'Tablet', width: '640–1024px', cols: 8, gutter: '24px' },
                { name: 'Desktop', width: '1024–1280px', cols: 12, gutter: '24px' },
                { name: 'Wide', width: '> 1280px', cols: 12, gutter: '32px' },
              ].map((bp) => (
                <tr key={bp.name} className="border-b border-gris-leger/50">
                  <td className="p-4 font-medium">{bp.name}</td>
                  <td className="p-4 font-mono">{bp.width}</td>
                  <td className="p-4 font-mono">{bp.cols}</td>
                  <td className="p-4 font-mono">{bp.gutter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CommentsSection pageSlug="composants" />
    </>
  )
}
