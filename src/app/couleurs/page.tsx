import { brand } from '@/lib/brand'
import { PageHeader } from '@/components/PageHeader'
import type { ColorToken } from '@/lib/brand'

function ColorSwatch({ token, name }: { token: ColorToken; name: string }) {
  const isLight = ['blancNaturel', 'tealClair', 'grisLeger'].includes(name)
  return (
    <div className="group">
      <div
        className="h-24 rounded-xl mb-3 border border-gris-leger/30 transition-transform group-hover:scale-105"
        style={{ backgroundColor: token.hex }}
      />
      <p className={`font-medium text-sm ${isLight ? '' : ''}`}>{token.name}</p>
      <p className="font-mono text-xs text-gris-texte/60 mt-0.5">{token.hex}</p>
      <p className="text-xs text-gris-texte/80 mt-1">{token.usage}</p>
    </div>
  )
}

function ColorGroup({ title, tokens }: { title: string; tokens: Record<string, ColorToken> }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(tokens).map(([key, token]) => (
          <ColorSwatch key={key} token={token} name={key} />
        ))}
      </div>
    </section>
  )
}

export default function CouleursPage() {
  return (
    <>
      <PageHeader
        title="Palette de couleurs"
        description="Le système chromatique d'Emancia s'articule autour du teal — couleur du logo — complété par le prune pour les accents et le blanc naturel pour les espaces."
      />

      <ColorGroup title="Couleurs principales" tokens={brand.colors.primary} />
      <ColorGroup title="Couleurs secondaires" tokens={brand.colors.secondary} />
      <ColorGroup title="Couleurs fonctionnelles" tokens={brand.colors.functional} />
      <ColorGroup title="Mode sombre" tokens={brand.colors.darkMode} />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Règles d'application</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-gris-leger">
            <h3 className="font-semibold mb-2">Contraste WCAG AA</h3>
            <p className="text-sm leading-relaxed">
              Tout texte doit respecter un ratio de contraste minimum de <strong>4.5:1</strong> pour
              le texte courant et <strong>3:1</strong> pour les textes de grande taille (≥ 18px bold
              ou ≥ 24px regular).
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gris-leger">
            <h3 className="font-semibold mb-2">Hiérarchie chromatique</h3>
            <p className="text-sm leading-relaxed">
              Le teal représente maximum <strong>30%</strong> de la surface visible.
              Le blanc naturel domine à <strong>60%</strong>.
              Le prune reste un accent rare à <strong>10%</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
