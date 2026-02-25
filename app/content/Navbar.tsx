"use client"

import { useState, useEffect } from 'react';
import { ShieldCheck, Skull, ListFilter, CheckCircle, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComingSoon = () => {
    alert("Fitur Lapor Scammer sedang dalam pengembangan dan akan segera dirilis!");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="bg-[#4F46E5] p-3 rounded-xl shadow-lg shadow-indigo-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-xl tracking-tighter text-slate-900 leading-none">
              JB<span className="text-[#4F46E5]">GUARD</span>
            </h1>
            <div className="mt-1 flex flex-col leading-tight shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">PORTAL KEAMANAN</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">TRANSAKSI</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-slate-400 cursor-default">
          <div className="flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-slate-300" />
            <span>Daftar Hitam</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-slate-300" />
            <span>Verifikasi</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-slate-300" />
            <span>Edukasi</span>
          </div>
        </div>

        <div className="flex items-center">
          <button 
            onClick={handleComingSoon}
            className="bg-[#FF2D55] text-white px-5 py-3 rounded-[1.5rem] font-bold hover:bg-rose-600 transition-all shadow-xl shadow-rose-100 flex items-center gap-3 shrink-0"
          >
            <div className="w-5 h-5 border-2 border-white/20 rounded-full flex items-center justify-center shrink-0">
              <Skull className="w-3 h-3 text-white" />
            </div>
            <div className="flex flex-col md:flex-row md:gap-1 items-start md:items-center leading-none text-[11px] uppercase tracking-wide whitespace-nowrap">
              <span>Lapor</span>
              <span className="mt-0.5 md:mt-0">Scammer</span>
            </div>
          </button>
        </div>

      </div>
    </nav>
  );
}