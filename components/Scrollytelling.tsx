'use client';
import { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Scrollytelling({ chapters, dataset }: { chapters: any[]; dataset: any[] }) {
  const [activeStep, setActiveStep] = useState(0);

  // Prepare chart data slice
  const sampleData = dataset.slice(0, 10).map((row, i) => ({
    name: row[chapters[0]?.focusColumn] ? String(row[chapters[0]?.focusColumn]).slice(0, 12) : `Item ${i + 1}`,
    val: typeof Object.values(row)[1] === 'number' ? Object.values(row)[1] : Math.floor(Math.random() * 80 + 20),
  }));

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Interactive Narrative</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 editorial-serif">The Scrollytelling Inquiry</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Pinned Chart on Left/Top */}
        <div className="lg:col-span-7 lg:sticky lg:top-28 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-slate-400">Step {activeStep + 1} of {chapters.length}</span>
              <h3 className="text-xl font-bold text-white">{chapters[activeStep]?.chapterTitle}</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              {chapters[activeStep]?.keyStat}
            </span>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sampleData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }} />
                <Bar dataKey="val" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Narrative Scroll Cards on Right */}
        <div className="lg:col-span-5 space-y-12">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-slate-800/90 border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                  : 'bg-slate-900/40 border-slate-800/60 opacity-60 hover:opacity-90'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-emerald-400">0{idx + 1} // CHAPTER</span>
                <span className="text-xs font-mono text-slate-400">{ch.keyStat}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{ch.chapterTitle}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{ch.narrativeText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
