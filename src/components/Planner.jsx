import React, { useState } from 'react';
import { Calendar, CalendarClock } from 'lucide-react';

export default function Planner({ startDate, setStartDate }) {
  // Tanggal default hari ini (Format YYYY-MM-DD) jika prop tidak di-pass
  const today = new Date().toISOString().split('T')[0];
  const [localDate, setLocalDate] = useState(today);

  const currentDate = startDate || localDate;
  const updateDate = setStartDate || setLocalDate;

  const getFutureDate = (baseDate, daysToAdd) => {
    if (!baseDate) return '-';
    const date = new Date(baseDate);
    if (isNaN(date.getTime())) return '-';
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <section id="perencana" className="w-full py-16 md:py-20 bg-white">
      {/* Mengubah max-w-7xl mx-auto menjadi w-full px-4 sm:px-8 md:px-12 lg:px-16 */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Asisten Digital
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Rencana & Jadwal Pembuatan</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Tentukan tanggal di bawah ini, dan sistem akan menghitung jadwal penting proses fermentasi Anda hingga waktu panen.
          </p>
        </div>

        {/* Card Main Box */}
        <div className="w-full max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Calendar className="w-10 h-10 text-emerald-600 hidden sm:block flex-shrink-0" />
              <div>
                <label htmlFor="tanggal-mulai" className="block text-sm font-bold text-slate-500 uppercase tracking-wide">
                  Tanggal Mulai Pembuatan
                </label>
                <span className="text-xs text-slate-400">Pilih tanggal untuk memperbarui agenda di bawah</span>
              </div>
            </div>
            <input
              id="tanggal-mulai"
              type="date"
              value={currentDate}
              onChange={(e) => updateDate(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none font-bold text-slate-700 shadow-sm bg-white cursor-pointer"
            />
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-emerald-600" /> Agenda Kegiatan Fermentasi Anda:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Mulai & Buang Gas
                </span>
                <p className="font-extrabold text-slate-800 text-base sm:text-lg">
                  {getFutureDate(currentDate, 0)}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Mulai proses fermentasi. Wajib buang gas harian selama 30 hari pertama.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Masuk Fase Tenang
                </span>
                <p className="font-extrabold text-slate-800 text-base sm:text-lg">
                  {getFutureDate(currentDate, 30)}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Batas akhir buang gas harian. Gas mulai tenang, cukup diamati berkala.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 shadow-sm">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  PANEN RAYA 🎉
                </span>
                <p className="font-extrabold text-emerald-800 text-lg sm:text-xl">
                  {getFutureDate(currentDate, 90)}
                </p>
                <p className="text-xs text-emerald-600 mt-2 font-medium leading-relaxed">
                  90 hari selesai! Eco-enzyme matang sempurna dan siap dipanen.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}