import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  FileText, 
  Target, 
  Award, 
  Layers,
  Shield,
  User,
  Wrench,
  Recycle,
  FileSpreadsheet,
  Wallet
} from 'lucide-react';
import { satgasHeader, satgasData } from '../data/satgasData';

export default function Tupoksi({ activeTupoksi, setActiveTupoksi }) {
  const [localActive, setLocalActive] = useState('ketua');
  const currentKey = activeTupoksi !== undefined ? activeTupoksi : localActive;
  const setTab = setActiveTupoksi || setLocalActive;

  const currentSatgas = satgasData.find(item => item.id === currentKey) || satgasData[1];

  return (
    <section id="struktur" className="w-full py-16 bg-slate-50 border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs sm:text-sm bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs inline-block mb-3">
            {satgasHeader.summaryTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
            {satgasHeader.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-700 max-w-3xl mx-auto">
            {satgasHeader.subtitle}
          </p>
        </div>

        {/* 🌳 BAGAN STRUKTUR ORGANISASI VISUAL */}
        <div className="w-full max-w-5xl mx-auto mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <h3 className="text-center text-xs font-black text-slate-400 uppercase tracking-widest mb-8">
            Bagan Struktur Organisasi Satgas
          </h3>

          <div className="flex flex-col items-center">
            
            {/* Level 1: PEMBINA */}
            <div className="flex flex-col items-center w-full">
              <button
                type="button"
                onClick={() => setTab('pembina')}
                className={`w-64 bg-white rounded-2xl border-2 p-4 text-center transition-all hover:scale-102 cursor-pointer shadow-xs ${
                  currentKey === 'pembina'
                    ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                    : 'border-slate-800 hover:border-emerald-500'
                }`}
              >
                <h4 className="font-extrabold text-slate-900 text-sm tracking-wide">PEMBINA</h4>
                <p className="text-xs text-slate-600 mt-0.5">Ketua RW</p>
              </button>
              
              {/* Garis Panah Bawah */}
              <div className="h-8 w-0.5 bg-slate-800 relative">
                <div className="absolute -bottom-1 -left-1.25 border-t-[6px] border-t-slate-800 border-x-[5px] border-x-transparent"></div>
              </div>
            </div>

            {/* Level 2: KETUA SATGAS + SEKRETARIS & BENDAHARA */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 w-full my-1">
              
              {/* SEKRETARIS (Kiri) */}
              <button
                type="button"
                onClick={() => setTab('sekretaris')}
                className={`w-36 sm:w-44 bg-white rounded-2xl border-2 p-3.5 text-center transition-all hover:scale-102 cursor-pointer shadow-xs ${
                  currentKey === 'sekretaris'
                    ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                    : 'border-slate-800 hover:border-emerald-500'
                }`}
              >
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide">SEKRETARIS</h4>
              </button>

              {/* Garis Panah Kiri ke Ketua */}
              <div className="w-6 sm:w-10 h-0.5 bg-slate-800 relative">
                <div className="absolute -right-1 -top-1 border-l-[6px] border-l-slate-800 border-y-[5px] border-y-transparent"></div>
              </div>

              {/* KETUA SATGAS (Tengah) */}
              <button
                type="button"
                onClick={() => setTab('ketua')}
                className={`w-64 sm:w-72 bg-white rounded-2xl border-2 p-4 text-center transition-all hover:scale-102 cursor-pointer shadow-sm ${
                  currentKey === 'ketua'
                    ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                    : 'border-slate-800 hover:border-emerald-500'
                }`}
              >
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight leading-snug">
                  KETUA SATGAS PENGELOLA SAMPAH ORGANIK
                </h4>
              </button>

              {/* Garis Panah Kanan ke Ketua */}
              <div className="w-6 sm:w-10 h-0.5 bg-slate-800 relative">
                <div className="absolute -left-1 -top-1 border-r-[6px] border-r-slate-800 border-y-[5px] border-y-transparent"></div>
              </div>

              {/* BENDAHARA (Kanan) */}
              <button
                type="button"
                onClick={() => setTab('bendahara')}
                className={`w-36 sm:w-44 bg-white rounded-2xl border-2 p-3.5 text-center transition-all hover:scale-102 cursor-pointer shadow-xs ${
                  currentKey === 'bendahara'
                    ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                    : 'border-slate-800 hover:border-emerald-500'
                }`}
              >
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide">BENDAHARA</h4>
              </button>

            </div>

            {/* Garis Cabang Bawah Ke Divisi */}
            <div className="flex flex-col items-center w-full">
              <div className="h-6 w-0.5 bg-slate-800"></div>
              <div className="w-[72%] sm:w-[78%] h-0.5 bg-slate-800"></div>
            </div>

            {/* Level 3: 3 DIVISI BAWAH */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full mt-0">
              
              {/* DIVISI PRODUKSI & PENGOLAHAN */}
              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-800 relative">
                  <div className="absolute -bottom-1 -left-1.25 border-t-[6px] border-t-slate-800 border-x-[5px] border-x-transparent"></div>
                </div>
                <button
                  type="button"
                  onClick={() => setTab('produksi')}
                  className={`w-full bg-white rounded-2xl border-2 p-3 sm:p-4 text-center transition-all hover:scale-102 cursor-pointer min-h-[100px] flex flex-col justify-center items-center shadow-xs ${
                    currentKey === 'produksi'
                      ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                      : 'border-slate-800 hover:border-emerald-500'
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">DIVISI</span>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                    PRODUKSI & PENGOLAHAN
                  </h4>
                </button>
              </div>

              {/* DIVISI SARANA & PRASARANA */}
              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-800 relative">
                  <div className="absolute -bottom-1 -left-1.25 border-t-[6px] border-t-slate-800 border-x-[5px] border-x-transparent"></div>
                </div>
                <button
                  type="button"
                  onClick={() => setTab('sarpras')}
                  className={`w-full bg-white rounded-2xl border-2 p-3 sm:p-4 text-center transition-all hover:scale-102 cursor-pointer min-h-[100px] flex flex-col justify-center items-center shadow-xs ${
                    currentKey === 'sarpras'
                      ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                      : 'border-slate-800 hover:border-emerald-500'
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">DIVISI</span>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                    SARANA & PRASARANA
                  </h4>
                </button>
              </div>

              {/* DIVISI / KOORDINATOR MONITORING & KEMITRAAN */}
              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-800 relative">
                  <div className="absolute -bottom-1 -left-1.25 border-t-[6px] border-t-slate-800 border-x-[5px] border-x-transparent"></div>
                </div>
                <button
                  type="button"
                  onClick={() => setTab('monev')}
                  className={`w-full bg-white rounded-2xl border-2 p-3 sm:p-4 text-center transition-all hover:scale-102 cursor-pointer min-h-[100px] flex flex-col justify-center items-center shadow-xs ${
                    currentKey === 'monev'
                      ? 'border-emerald-600 ring-4 ring-emerald-500/20 bg-emerald-50/30'
                      : 'border-slate-800 hover:border-emerald-500'
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">KOORDINATOR</span>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                    MONITORING & KEMITRAAN
                  </h4>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Tab Tombol Navigasi Cepat (1-7) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {satgasData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 border ${
                currentKey === item.id
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-black ${
                currentKey === item.id ? 'bg-white text-emerald-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {index + 1}
              </span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Detail Tupoksi (Poin a - g) */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all duration-300">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
                {currentSatgas.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {currentSatgas.title}
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* a) Ringkasan Kegiatan */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                a) Ringkasan Kegiatan
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {currentSatgas.ringkasan}
              </p>
            </div>

            {/* Grid 2 Kolom: b) Tugas & c) Tanggung Jawab */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                  b) Tugas
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {currentSatgas.tugas.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  c) Tanggung Jawab
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {currentSatgas.tanggungJawab.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grid 2 Kolom: d) Wewenang & e) Bahan Kerja */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  d) Wewenang
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {currentSatgas.wewenang.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  e) Bahan Kerja
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {currentSatgas.bahanKerja.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grid 2 Kolom: f) Ukuran Keberhasilan & g) Kompetensi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5">
                <h4 className="text-xs font-black text-emerald-900 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-emerald-600" />
                  f) Ukuran Keberhasilan
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                  {currentSatgas.ukuranKeberhasilan.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5">
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-amber-600" />
                  g) Kompetensi Jabatan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentSatgas.kompetensi.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white border border-amber-200 text-amber-950 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}