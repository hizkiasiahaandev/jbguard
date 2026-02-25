"use client"

import { ShieldCheck, Facebook, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-xs text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="bg-[#4F46E5] p-2.5 rounded-xl shadow-lg shadow-indigo-100/50 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">
                JB<span className="text-[#4F46E5]">GUARD</span>
              </span>
              <div className="mt-1 flex flex-col leading-tight">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PORTAL KEAMANAN</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TRANSAKSI</span>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-[11px] font-bold leading-relaxed uppercase tracking-widest">
            Garda terdepan keamanan transaksi virtual Indonesia 2026. <br/> Built for community, by community.
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-200 transition-all cursor-pointer group">
            <Facebook className="w-5 h-5 text-slate-600 group-hover:text-[#4F46E5]" />
          </div>
          <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-200 transition-all cursor-pointer group">
            <MessageSquare className="w-5 h-5 text-slate-600 group-hover:text-[#4F46E5]" />
          </div>
        </div>

        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center md:text-right">
          © 2026 JB Guard ID. <br/> Melindungi 12,000+ Gamers dari Penipuan.
        </div>
      </div>
    </footer>
  );
}