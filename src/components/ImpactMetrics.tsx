import { motion } from 'framer-motion';

interface ImpactMetricsProps {
  t: Record<string, string>;
}

export default function ImpactMetrics({ t }: ImpactMetricsProps) {
  const metrics = [
    {
      label: t('impact.metrics.verifiedClaims'),
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      color: 'text-emerald-400',
    },
    {
      label: t('impact.metrics.attributionAccuracy'),
      value: '99.998%',
      change: '+0.001%',
      trend: 'up',
      color: 'text-cyan-400',
    },
    {
      label: t('impact.metrics.impactScore'),
      value: '8.7/10',
      change: '+0.4',
      trend: 'up',
      color: 'text-teal-400',
    },
    {
      label: t('impact.metrics.provenanceDepth'),
      value: '7.2 layers',
      change: '+1.1',
      trend: 'up',
      color: 'text-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-1 text-2xl font-bold text-slate-100">{metric.value}</p>
            </div>
            <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${metric.color} bg-opacity-20`}> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 mr-1 ${metric.trend === 'up' ? '' : 'rotate-180'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {metric.change}
            </div>
          </div>
          <div className="mt-4 w-full bg-slate-700/30 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full ${metric.color.replace('text-', 'bg-')}`}
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.15 + 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}