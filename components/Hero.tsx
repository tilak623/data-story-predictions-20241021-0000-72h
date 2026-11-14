'use client';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Database } from 'lucide-react';

export default function Hero({ hero }: { hero: any }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 py-20 border-b border-slate-800/80 overflow-hidden">
      <div className="absolute inset-0 glow-overlay pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-emerald-400 mb-8"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Grounded Editorial Investigation</span>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4"
      >
        <span className="text-7xl sm:text-9xl font-black tracking-tight text-white editorial-serif">
          {hero.giantNumber}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl sm:text-4xl font-bold text-slate-200 tracking-tight max-w-3xl mb-4"
      >
        {hero.metricLabel}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg text-slate-400 max-w-2xl font-light leading-relaxed"
      >
        {hero.editorialHook}
      </motion.p>

      <div className="mt-12 flex items-center gap-6 text-xs font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <Database className="w-4 h-4 text-emerald-400" />
          {hero.subHeadline}
        </span>
      </div>
    </section>
  );
}
