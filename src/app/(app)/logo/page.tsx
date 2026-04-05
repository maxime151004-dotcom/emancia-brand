import { brand } from '@/lib/brand'
import { PageHeader } from '@/components/PageHeader'

export default function LogoPage() {
  return (
    <>
      <PageHeader
        title="Logo"
        description="Le logo Emancia est un logotype où le symbole — une colombe stylisée fusionnée avec la lettre E — s'intègre organiquement au texte. Il a été conçu par Studio 73 sous Adobe Illustrator."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Versions</h2>
        <div className="space-y-6">
          {brand.logos.map((logo) => (
            <div
              key={logo.name}
              className="bg-white rounded-xl p-8 border border-gris-leger"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{logo.name}</h3>
                  <p className="text-sm text-gris-texte/70 mt-1">{logo.description}</p>
                </div>
                <span className="text-xs font-mono bg-teal-clair text-teal-dark px-2 py-1 rounded">
                  ratio {logo.ratio}
                </span>
              </div>
              <div className="bg-blanc-naturel rounded-lg p-8 flex items-center justify-center min-h-[120px] border border-gris-leger/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.file} alt={logo.name} className="max-h-20 w-auto" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {logo.usage.map((use) => (
                  <span
                    key={use}
                    className="text-xs bg-teal-clair/50 text-teal-dark px-3 py-1 rounded-full"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Zone de protection</h2>
        <div className="bg-white rounded-xl p-8 border border-gris-leger">
          <p className="leading-relaxed mb-4">
            Le module de référence <strong>"x"</strong> correspond à la hauteur des
            minuscules dans le logotype (43,9 unités SVG). La zone de protection est
            de <strong>1x</strong> autour du logo — aucun élément graphique ou texte
            ne peut y figurer.
          </p>
          <div className="bg-teal-clair/30 border-2 border-dashed border-teal/30 rounded-lg p-12 flex items-center justify-center">
            <div className="bg-white border border-teal/20 rounded-lg px-12 py-6 text-center">
              <p className="font-display text-2xl font-semibold text-teal">Emancia</p>
              <p className="text-xs text-gris-texte/40 mt-2">↕ 1x de marge minimum</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Tailles minimales</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gris-leger">
            <h3 className="font-semibold mb-2">Écran</h3>
            <p className="text-sm text-gris-texte/80">
              Logotype : min. <strong className="font-mono">120px</strong> de large<br />
              Symbole seul : min. <strong className="font-mono">32px</strong>
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gris-leger">
            <h3 className="font-semibold mb-2">Impression</h3>
            <p className="text-sm text-gris-texte/80">
              Logotype : min. <strong className="font-mono">30mm</strong> de large<br />
              Symbole seul : min. <strong className="font-mono">10mm</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Déclinaisons chromatiques</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blanc-naturel rounded-xl p-8 flex items-center justify-center border border-gris-leger">
            <p className="font-display text-2xl font-semibold text-teal">Emancia</p>
          </div>
          <div className="bg-bleu-nuit rounded-xl p-8 flex items-center justify-center">
            <p className="font-display text-2xl font-semibold text-white">Emancia</p>
          </div>
          <div className="bg-teal rounded-xl p-8 flex items-center justify-center">
            <p className="font-display text-2xl font-semibold text-white">Emancia</p>
          </div>
          <div className="bg-prune rounded-xl p-8 flex items-center justify-center">
            <p className="font-display text-2xl font-semibold text-white">Emancia</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-error">Usages interdits</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            'Déformer ou étirer le logo',
            'Modifier les couleurs hors déclinaisons',
            'Ajouter des effets (ombre, reflet, 3D)',
            'Placer sur un fond de contraste insuffisant',
            'Rogner ou masquer une partie',
            'Modifier les proportions du symbole',
            'Ajouter un contour au logo',
            'Utiliser le logo en filigrane',
            'Changer la typographie du logotype',
            'Animer le logo sans validation',
          ].map((rule) => (
            <div
              key={rule}
              className="flex items-start gap-3 bg-error/5 rounded-lg p-4 border border-error/10"
            >
              <span className="text-error font-bold text-lg leading-none">×</span>
              <p className="text-sm">{rule}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
