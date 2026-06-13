import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroSectionProps {
  t: Record<string, string>;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(5,150,105,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(13,148,136,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            {t('hero.live')}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl mx-auto">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-200">
              {t('hero.titlePart1')}
            </span>
            <span className="block mt-3 text-slate-200">
              {t('hero.titlePart2')}
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 shadow-lg hover:shadow-xl backdrop-blur-sm border border-emerald-500/20"
            >
              <span>{t('hero.ctaPrimary')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 hover:bg-slate-800/70 text-slate-200 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '24/7', label: t('hero.stat1') },
              { value: '99.99%', label: t('hero.stat2') },
              { value: '120+', label: t('hero.stat3') },
              { value: '42ms', label: t('hero.stat4') },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30"
              >
                <div className="text-2xl font-bold text-emerald-300">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-cyan-500/10 border border-cyan-500/20"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}