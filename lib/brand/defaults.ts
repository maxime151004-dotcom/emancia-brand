import type { BrandKit } from './types'

export const brand: BrandKit = {
  name: 'Emancia',
  fullName: 'Emancia — Éducation Financière',
  tagline: 'Donner à chacun les clés de sa liberté financière',

  colors: {
    primary: {
      teal: {
        hex: '#19908A',
        name: 'Teal Emancia',
        usage: 'Couleur principale — logo, titres, liens, éléments interactifs',
      },
      tealDark: {
        hex: '#0F5E5A',
        name: 'Teal foncé',
        usage: 'Hover, états actifs, contrastes renforcés',
      },
      blancNaturel: {
        hex: '#F4F7F0',
        name: 'Blanc naturel',
        usage: 'Fond principal, espaces de respiration',
      },
      prune: {
        hex: '#6B3A5D',
        name: 'Prune',
        usage: 'CTA, accents, éléments distinctifs',
      },
    },
    secondary: {
      tealClair: {
        hex: '#E6F2F1',
        name: 'Teal clair',
        usage: 'Fonds de sections, cartes, zones mises en avant',
      },
      grisTexte: {
        hex: '#4A4A4A',
        name: 'Gris texte',
        usage: 'Texte courant, paragraphes',
      },
      grisLeger: {
        hex: '#E8E8E8',
        name: 'Gris léger',
        usage: 'Bordures, séparateurs, fonds subtils',
      },
      bleuNuit: {
        hex: '#1A2B3C',
        name: 'Bleu nuit',
        usage: 'Texte sur fond clair, titres sombres, footer',
      },
    },
    functional: {
      success: {
        hex: '#4CAF82',
        name: 'Succès',
        usage: 'Messages de succès, validations, indicateurs positifs',
      },
      error: {
        hex: '#E05252',
        name: 'Erreur',
        usage: 'Messages d\'erreur, alertes critiques',
      },
      warning: {
        hex: '#F0A500',
        name: 'Alerte',
        usage: 'Avertissements, attention requise',
      },
      info: {
        hex: '#5BBAB5',
        name: 'Info',
        usage: 'Messages informatifs, tooltips',
      },
    },
    darkMode: {
      background: {
        hex: '#0D1B1A',
        name: 'Fond sombre',
        usage: 'Fond principal en mode sombre',
      },
      surface: {
        hex: '#142625',
        name: 'Surface sombre',
        usage: 'Cartes et conteneurs en mode sombre',
      },
      tealLight: {
        hex: '#22B5AE',
        name: 'Teal lumineux',
        usage: 'Couleur principale adaptée au mode sombre',
      },
      textPrimary: {
        hex: '#E8F0EF',
        name: 'Texte clair',
        usage: 'Texte principal en mode sombre',
      },
    },
  },

  typography: {
    display: {
      family: 'Fraunces',
      fallback: 'Georgia, serif',
      googleImport: 'Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900',
      weights: [400, 600, 700],
      role: 'Titres, en-têtes, éléments éditoriaux — apporte caractère et élégance',
    },
    body: {
      family: 'DM Sans',
      fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      googleImport: 'DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000',
      weights: [400, 500, 700],
      role: 'Corps de texte, navigation, UI — lisibilité et modernité',
    },
    mono: {
      family: 'JetBrains Mono',
      fallback: '"Fira Code", "Cascadia Code", monospace',
      googleImport: 'JetBrains+Mono:wght@400;500;700',
      weights: [400, 500, 700],
      role: 'Données financières, chiffres, tableaux, code — précision et lisibilité des nombres',
    },
  },

  spacing: {
    base: 4,
    scale: {
      '0': 0,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
      '8': 32,
      '10': 40,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
    },
  },

  logos: [
    {
      name: 'Logotype principal',
      description: 'Logo horizontal avec symbole intégré au texte',
      file: '/logos/logo-main.svg',
      ratio: '4.1:1',
      usage: ['En-tête de site', 'Documents officiels', 'Présentations'],
    },
    {
      name: 'Logotype + baseline',
      description: 'Logo avec mention "Éducation Financière"',
      file: '/logos/logo-baseline.svg',
      ratio: '3.6:1',
      usage: ['Première apparition', 'Supports institutionnels', 'Partenariats'],
    },
    {
      name: 'Symbole (favicon)',
      description: 'Colombe + E — version icône',
      file: '/logos/logo-icon.svg',
      ratio: '0.93:1',
      usage: ['Favicon', 'Avatar réseaux sociaux', 'Icône application'],
    },
  ],

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
}
