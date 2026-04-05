'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message === 'Invalid login credentials'
        ? 'Email ou mot de passe incorrect.'
        : error.message)
      setLoading(false)
      return
    }

    router.push('/')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-bleu-nuit relative overflow-hidden items-center justify-center">
        {/* Background logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <Image
            src="/logos/logo-icon.svg"
            alt=""
            width={600}
            height={600}
            className="w-[600px] h-[600px] brightness-0 invert"
            priority
          />
        </div>

        {/* Gradient circles decoration */}
        <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-60px] w-[350px] h-[350px] rounded-full bg-prune/10 blur-3xl" />
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] rounded-full bg-sauge/8 blur-2xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-12 max-w-md">
          <Image
            src="/logos/logo-icon.svg"
            alt="Emancia"
            width={80}
            height={80}
            className="mx-auto mb-8 brightness-0 invert"
            priority
          />
          <h1 className="font-display text-3xl font-semibold text-white mb-3">
            Emancia
          </h1>
          <p className="text-white/50 text-sm leading-relaxed">
            Charte graphique & système de design
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="w-8 h-1 rounded-full bg-teal/60" />
            <div className="w-2 h-1 rounded-full bg-teal/30" />
            <div className="w-2 h-1 rounded-full bg-teal/30" />
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12" style={{ backgroundColor: '#F2F5EE' }}>
        {/* Mobile logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] lg:hidden pointer-events-none">
          <Image
            src="/logos/logo-icon.svg"
            alt=""
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          />
        </div>

        <div className="w-full max-w-sm relative z-10">
          {/* Mobile logo */}
          <div className="text-center mb-8 lg:hidden">
            <Image
              src="/logos/logo-icon.svg"
              alt="Emancia"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-semibold text-bleu-nuit font-display">
              Emancia
            </h1>
            <p className="text-sm text-gris-texte/50 mt-1">Charte Graphique</p>
          </div>

          {/* Desktop title */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-2xl font-semibold text-bleu-nuit font-display">
              Connexion
            </h2>
            <p className="text-sm text-gris-texte/50 mt-1">Accédez à l'espace interne Emancia</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gris-leger/30">
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-bleu-nuit mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom@emancia.com"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gris-leger text-sm text-gris-texte placeholder:text-gris-texte/40 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-bleu-nuit mb-1.5">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gris-leger text-sm text-gris-texte placeholder:text-gris-texte/40 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-error/10 text-error text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-teal text-white text-sm font-medium hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <p className="text-center text-xs text-gris-texte/30 mt-6">
            Accès réservé à l'équipe Emancia
          </p>
        </div>
      </div>
    </div>
  )
}
