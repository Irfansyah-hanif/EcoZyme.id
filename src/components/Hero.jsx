import React from 'react';
import { Sprout, ArrowRight, Leaf, Droplets, FlaskConical } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500 opacity-15 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-400 opacity-15 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 mb-6">
            <Sprout className="w-3.5 h-3.5" /> Pelopor Gerakan Eco-Enzyme Salatiga
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            Ubah Sampah Dapur Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Cairan Ajaib</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            Platform edukasi interaktif untuk belajar membuat Eco-Enzyme secara presisi. Bersama mewujudkan Kelurahan Kutowinangun Kidul yang asri, bersih, dan berwawasan lingkungan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#kalkulator" className="inline-flex justify-center items-center px-6 py-3.5 text-base font-bold rounded-full text-emerald-950 bg-gradient-to-r from-emerald-300 to-teal-200 hover:from-emerald-200 hover:to-teal-100 shadow-xl transition-all transform hover:-translate-y-0.5">
              Mulai Kalkulasi <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#sejarah" className="inline-flex justify-center items-center px-6 py-3.5 border border-emerald-400/40 text-base font-semibold rounded-full text-white hover:bg-white/10 transition-all">
              Kisah Pelopor RW 8
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 z-10 hidden md:block">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-emerald-800/20 border border-emerald-500/20 flex items-center justify-center p-8 shadow-2xl backdrop-blur-sm">
            <div className="absolute top-10 right-10 bg-white/95 p-4 rounded-2xl shadow-xl rotate-12 animate-pulse">
              <Leaf className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="absolute bottom-10 left-10 bg-white/95 p-4 rounded-2xl shadow-xl -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}>
              <Droplets className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-center">
              <FlaskConical className="w-32 h-32 mx-auto text-emerald-300 opacity-90 drop-shadow-[0_10px_15px_rgba(16,185,129,0.3)]" />
              <p className="mt-6 font-extrabold text-2xl text-emerald-200 tracking-wider">Formula Emas</p>
              <p className="text-emerald-100/70 text-lg">1 Bagian Gula : 3 Sampah : 10 Air</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}