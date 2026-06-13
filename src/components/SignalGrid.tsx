import { motion, AnimatePresence } from 'framer-motion';

interface SignalGridProps {
  t: Record<string, string>;
}

const SignalCard = ({
  icon,
  title,
  description,
  color,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
    className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border ${color} bg-opacity-10 border-opacity-20 hover:border-opacity-40 transition-all duration-500`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:from-black/5 group-hover:to-black/20 transition-all duration-500" />
    <div className="relative z-10">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} bg-opacity-20 text-xl`}>{icon}</div>
      <h3 className="mt-4 text-xl font-bold text-slate-100">{title}</h3>
      <p className="mt-2 text-slate-400 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center text-xs text-slate-500">
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
        {t('signalGrid.live')}
      </div>
    </div>
  </motion.div>
);

export default function SignalGrid({ t }: SignalGridProps) {
  const signals = [
    {
      icon: '📰',
      title: t('signalGrid.news.title'),
      description: t('signalGrid.news.description'),
      color: 'border-emerald-500',
      delay: 0,
    },
    {
      icon: '⚖️',
      title: t('signalGrid.regulation.title'),
      description: t('signalGrid.regulation.description'),
      color: 'border-cyan-500',
      delay: 0.2,
    },
    {
      icon: '🧬',
      title: t('signalGrid.biotech.title'),
      description: t('signalGrid.biotech.description'),
      color: 'border-teal-500',
      delay: 0.4,
    },
    {
      icon: '🌱',
      title: t('signalGrid.sustainability.title'),
      description: t('signalGrid.sustainability.description'),
      color: 'border-green-500',
      delay: 0.6,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {signals.map((signal, i) => (
          <SignalCard key={i} {...signal} />
        ))}
      </AnimatePresence>
    </div>
  );
}