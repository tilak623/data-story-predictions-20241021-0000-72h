import dataset from '@/data/dataset.json';
import schema from '@/data/schema.json';
import Hero from '@/components/Hero';
import Scrollytelling from '@/components/Scrollytelling';
import BentoMetrics from '@/components/BentoMetrics';
import AIChatbot from '@/components/AIChatbot';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero hero={schema.heroMetric} />
      <Scrollytelling chapters={schema.scrollyChapters} dataset={dataset} />
      <BentoMetrics insights={schema.insights} qualityScore={schema.dataQualityScore} />
      
      {/* Editorial Footer */}
      <footer className="py-12 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500">
        Generated with DataMorph AI // Standalone Editorial Project // Verified Data
      </footer>

      <AIChatbot />
    </main>
  );
}
