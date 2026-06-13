import { motion, AnimatePresence } from 'framer-motion';

interface ProvenanceTimelineProps {
  t: Record<string, string>;
}

const TimelineItem = ({
  date,
  title,
  description,
  isLast = false,
  delay,
}: {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start group"
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
      {date}
    </div>
    <div className="ml-4 pb-8">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-1 text-slate-400 leading-relaxed">{description}</p>
      {!isLast && (
        <div className="absolute left-4.5 top-12 w-0.5 h-full bg-gradient-to-b from-emerald-500/30 to-transparent" />
      )}
    </div>
  </motion.div>
);

export default function ProvenanceTimeline({ t }: ProvenanceTimelineProps) {
  const timelineItems = [
    {
      date: 'T+0ms',
      title: t('timeline.item1.title'),
      description: t('timeline.item1.description'),
      delay: 0,
    },
    {
      date: 'T+12ms',
      title: t('timeline.item2.title'),
      description: t('timeline.item2.description'),
      delay: 0.2,
    },
    {
      date: 'T+47ms',
      title: t('timeline.item3.title'),
      description: t('timeline.item3.description'),
      delay: 0.4,
    },
    {
      date: 'T+128ms',
      title: t('timeline.item4.title'),
      description: t('timeline.item4.description'),
      delay: 0.6,
      isLast: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
        {t('timeline.title')}
      </h2>
      <div className="relative pl-12">
        <div className="absolute left-4.5 top-0 w-0.5 h-full bg-gradient-to-b from-emerald-500/20 to-emerald-500/10" />
        <AnimatePresence>
          {timelineItems.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}