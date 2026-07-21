import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="bg-emerald-500 p-2 rounded-xl">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-2xl text-white tracking-tight">
            Eco<span className="text-emerald-400">Zyme</span>.id
          </span>
        </div>
        <p className="text-xs sm:text-sm mb-6 max-w-md mx-auto leading-relaxed">
          Platform edukasi pengolahan limbah organik domestik. Berkontribusi nyata dari dapur rumah tangga untuk kelestarian lingkungan Kelurahan Kutowinangun Kidul, Salatiga.
        </p>
        <div className="border-t border-slate-900 pt-8 mt-8">
          <p className="text-[10px] sm:text-xs text-slate-600">&copy; 2026 EcoZyme Edu-Platform. Dibuat dengan penuh kepedulian lingkungan.</p>
        </div>
      </div>
    </footer>
  );
}