"use client"

import { Zap, Skull, CheckCircle2, BarChart3, AlertCircle, ShieldAlert } from 'lucide-react';
import { midmen, scammers } from '../data/database';

export default function Hero() {
  const totalMidmen = midmen.length;
  const totalScammers = scammers.length;

  return (
    <header className="pt-32 md:pt-40 pb-12 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-6">
            <Zap className="w-3 h-3" /> DATABASE JB TERVERIFIKASI 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Jual Beli Aman <br /> Tanpa Takut <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-4">Ditipu.</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium">
            Cek keaslian Midman dan lacak database penipu dengan sistem intelijen komunitas yang terintegrasi langsung oleh admin.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <div className="w-full md:w-auto bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 min-w-50">
              <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 shrink-0">
                <Skull className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">{totalScammers}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ter-Blacklist</p>
              </div>
            </div>
            
            <div className="w-full md:w-auto bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 min-w-50">
              <div className="p-3 bg-green-50 rounded-2xl text-green-500 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">{totalMidmen}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified MM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl shadow-xl shadow-indigo-100/50">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <h3 className="font-bold text-slate-900">Update Terakhir</h3>
            </div>
            
            <div className="py-8 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 mb-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <ShieldAlert className="w-6 h-6 text-slate-300" />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Database Steril</p>
              <p className="text-[11px] text-slate-500 font-medium max-w-50">Belum ada laporan penipuan baru dalam 24 jam terakhir.</p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-[11px] text-amber-700 font-semibold leading-relaxed">
                Waspada modus "Segitiga" yang kembali marak minggu ini. Selalu konfirmasi ke nomor WA asli Midman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}