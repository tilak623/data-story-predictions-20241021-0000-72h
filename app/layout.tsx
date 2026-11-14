import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'predictions 20241021 0000 72h | Interactive Data Story',
  description: 'An editorial interactive data story generated with DataMorph AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
