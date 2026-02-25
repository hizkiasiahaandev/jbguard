"use client"
import { useState } from 'react';
import {
  Search,
  Facebook,
  UserCheck,
  Skull,
  ShieldCheck,
  Clock,
  Instagram,
  ShieldAlert,
  Smartphone,
  XCircle,
  AlertTriangle,
  PackageSearch
} from 'lucide-react';
import Navbar from './content/Navbar';
import Footer from './content/Footer';
import { midmen, scammers } from './data/database';

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>('midmen');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredMidmen = midmen.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.alias.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredScammers = scammers.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.alias.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentData = activeTab === 'midmen' ? filteredMidmen : filteredScammers;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-6 pt-28 pb-24">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-end">
            <div className="grow w-full">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-2 text-left">Sistem Verifikasi Database</label>
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Cari Rekening, Nama, atau Link Profil..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-14 pr-6 text-slate-900 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all outline-none font-bold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="bg-slate-100 p-1.5 rounded-xl flex items-center shadow-inner shrink-0 w-full md:w-auto">
              <button 
                onClick={() => setActiveTab('midmen')} 
                className={`flex-1 md:flex-none px-6 md:px-10 py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'midmen' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <UserCheck className="w-4 h-4" /> LIST TRUSTED ({filteredMidmen.length})
              </button>
              <button 
                onClick={() => setActiveTab('scammers')} 
                className={`flex-1 md:flex-none px-6 md:px-10 py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'scammers' ? 'bg-white text-rose-600 shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <Skull className="w-4 h-4" /> LIST PENIPU ({filteredScammers.length})
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-rose-500 rounded-[2.5rem] p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="bg-rose-50 p-6 rounded-[1.5rem] shrink-0">
            <AlertTriangle className="w-12 h-12 text-rose-500" />
          </div>
          <div className="grow text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-rose-600 uppercase tracking-tight mb-3">PERINGATAN KERAS PENGGUNA JB!</h2>
            <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed">
              Dilarang keras melakukan transaksi <span className="text-rose-600">DIRECT (TF LANGSUNG)</span> kepada siapapun meskipun profilnya terlihat meyakinkan. Gunakan selalu jasa Rekber/Midman yang ada di daftar verified kami.
            </p>
          </div>
          <div className="bg-rose-50/50 px-6 py-4 rounded-2xl border border-rose-100 text-center shrink-0 w-full md:w-auto">
            <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">STATUS SISTEM</p>
            <p className="text-lg font-black text-rose-600 uppercase">WASPADA</p>
          </div>
        </div>

        {currentData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentData.map((item: any) => (
              <div key={item.id} className={`bg-white border-2 ${activeTab === 'midmen' ? 'border-slate-100 hover:border-indigo-400' : 'border-rose-100 hover:border-rose-500'} rounded-2xl p-6 md:p-8 transition-all duration-500 group relative`}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative w-32 h-32 shrink-0 mx-auto md:mx-0">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-full h-full rounded-2xl bg-slate-50 border-4 border-white shadow-xl object-cover transition-transform group-hover:scale-105 duration-500" 
                    />
                  </div>
                  
                  <div className="grow">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 text-center md:text-left">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">{item.name}</h3>
                        <p className={`${activeTab === 'midmen' ? 'text-indigo-600' : 'text-rose-600'} font-black text-[10px] uppercase tracking-widest mt-1`}>{item.alias}</p>
                      </div>
                      {activeTab === 'midmen' && (
                        <div className="mt-4 md:mt-0 mx-auto md:mx-0 bg-indigo-50 border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg border flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span className="text-[10px] font-black uppercase tracking-tighter">{item.jamKerja}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 mb-6 text-left">
                      {(activeTab === 'midmen' ? item.services : item.modus).map((sub: any, idx: number) => (
                        <div key={idx} className={`bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between group/service hover:bg-white transition-all ${activeTab === 'midmen' ? 'hover:border-indigo-200' : 'hover:border-rose-200'}`}>
                          <div className="flex flex-col">
                            <span className={`text-[11px] font-black ${activeTab === 'midmen' ? 'text-slate-900' : 'text-rose-700'} leading-none mb-1`}>{sub.title}</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{sub.desc}</span>
                          </div>
                          <div className={`${activeTab === 'midmen' ? 'bg-indigo-500' : 'bg-rose-600'} p-1.5 rounded-lg`}>
                            {activeTab === 'midmen' ? <ShieldCheck className="w-3 h-3 text-white" /> : <XCircle className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <div className="flex items-center gap-2 mb-1 text-slate-400">
                          <Smartphone className="w-3 h-3" />
                          <span className="text-[9px] font-black uppercase tracking-tighter">WhatsApp</span>
                        </div>
                        <p className="text-xs font-black text-slate-700">{item.wa || "---"}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <div className="flex items-center gap-2 mb-1 text-slate-400">
                          {activeTab === 'midmen' ? <Instagram className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                          <span className="text-[9px] font-black uppercase tracking-tighter">{activeTab === 'midmen' ? 'Instagram' : 'Status'}</span>
                        </div>
                        <p className="text-xs font-black text-slate-700">{activeTab === 'midmen' ? (item.ig || "---") : "BLACKLIST"}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <a href={item.fb} target="_blank" rel="noopener noreferrer" className={`w-full ${activeTab === 'midmen' ? 'bg-indigo-600' : 'bg-slate-900'} text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl`}>
                        <Facebook className="w-5 h-5" />
                        {activeTab === 'midmen' ? 'Messenger Profil Utama' : 'Cek Profil Penipu'}
                      </a>
                      
                      <div className={`relative overflow-hidden ${activeTab === 'midmen' ? 'bg-indigo-600 text-white' : 'bg-rose-600 text-white'} p-4 rounded-xl shadow-lg border-b-4 ${activeTab === 'midmen' ? 'border-indigo-800' : 'border-rose-800'}`}>
                        <div className="flex items-center gap-4 relative z-10">
                          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                            <ShieldAlert className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left leading-tight">
                            <p className="text-[12px] font-black uppercase tracking-tighter leading-none mb-1">PERINGATAN KERAS ADMIN JB!</p>
                            <p className="text-[10px] font-medium opacity-90 uppercase leading-none">
                              {activeTab === 'midmen' 
                                ? "WAJIB IDENTIK! Cek Link FB & WA Secara Detail Sebelum Transfer!" 
                                : "DILARANG TRANSAKSI! Database Ini Adalah Penipu Valid & Berbahaya!"}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 opacity-10 translate-x-4 -translate-y-4">
                          <ShieldAlert size={80} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center justify-center text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <div className={`p-6 rounded-2xl mb-6 ${activeTab === 'midmen' ? 'bg-indigo-50 text-indigo-400' : 'bg-rose-50 text-rose-400'}`}>
              {activeTab === 'midmen' ? <PackageSearch className="w-20 h-20" /> : <Skull className="w-20 h-20" />}
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Data Tidak Ditemukan</h3>
            <p className="text-slate-500 font-bold max-w-sm uppercase text-xs tracking-tight">
              Keyword "{searchTerm}" tidak terdaftar di database {activeTab === 'midmen' ? 'Trusted' : 'Penipu'}.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}