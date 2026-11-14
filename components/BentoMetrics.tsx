'use client';
import { Award, Zap, AlertCircle } from 'lucide-react';

export default function BentoMetrics({ insights, qualityScore }: { insights: any[]; qualityScore: number }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Pattern Recognition</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 editorial-serif">Bento Analytics Grid</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quality Score Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-slate-400">DATA FIDELITY</span>
            <Award className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-5xl font-black text-white font-mono">{qualityScore}%</div>
          <p className="text-xs text-slate-400 mt-2">Certified integrity score evaluated across missing ratios, types, and outliers.</p>
        </div>

        {/* Insight Cards */}
        {insights.slice(0, 2).map((ins, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">{ins.type.replace('_', ' ')}</span>
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{ins.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{ins.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
