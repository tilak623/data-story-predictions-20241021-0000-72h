'use client';
import { useState } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { role: 'assistant', text: 'Hello! I am your dataset-grounded editorial assistant. Ask me anything about this data story.' },
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || loading) return;

    const userQ = question;
    setQuestion('');
    setMessages((prev) => [...prev, { role: 'user', text: userQ }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userQ }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.answer || 'Query processed.' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Could not connect to query engine.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-emerald-500 text-black shadow-xl hover:bg-emerald-400 transition-all z-50 flex items-center gap-2 font-semibold text-sm"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">Ask Dataset AI</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] h-[520px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-white text-sm">Grounded Dataset Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-xl text-xs max-w-[80%] ${m.role === 'user' ? 'bg-emerald-500 text-black font-medium' : 'bg-slate-800 text-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-slate-400 italic">Querying verified records...</div>}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. What is the peak value?"
              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
            <button type="submit" disabled={loading} className="px-3 py-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 text-xs font-semibold">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
