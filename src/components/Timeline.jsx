import React from 'react';
import { AlertTriangle, Info, CheckCircle2, Sprout } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="panduan" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Panduan Teknis</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Perjalanan 90 Hari Fermentasi</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Mari kenali dinamika perubahan pada cairan wadah Anda dari bulan ke bulan agar hasil panen berkualitas tinggi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Bulan 1 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-48 flex-shrink-0 bg-emerald-100/50 rounded-2xl p-5 sm:p-6 text-center border border-emerald-200/50">
              <span className="block text-4xl sm:text-5xl font-black text-emerald-600 mb-1">1</span>
              <span className="block text-base sm:text-lg font-extrabold text-emerald-800 uppercase tracking-widest leading-snug">Bulan<br/>Pertama</span>
            </div>
            <div className="flex-grow w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Fase Alkohol (Banyak Gas)</h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                Bahan organik mulai dipecah oleh mikroba. Ragi memecah gula menjadi alkohol dan gas. <strong>Pada bulan pertama, tekanan gas akan sangat tinggi.</strong>
              </p>
              <div className="rounded-2xl p-4 sm:p-6 bg-slate-50 border border-slate-100 space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800">Wajib Buang Gas Setiap Hari</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">Buka sedikit tutup wadah perlahan (5–10 detik) setiap hari untuk menghindari risiko wadah meledak.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800">Tenggelamkan Sampah</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">Gunakan kayu atau plastik bersih (bukan logam) untuk menenggelamkan sampah yang mengapung.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-red-50 p-3 sm:p-4 rounded-xl border border-red-100">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-red-800">Peringatan: Dilarang Dikocok!</h4>
                    <p className="text-xs text-red-700 leading-relaxed mt-0.5">Jangan pernah mengocok wadah secara ekstrem karena melipatgandakan gas seketika.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bulan 2 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-48 flex-shrink-0 bg-blue-100/50 rounded-2xl p-5 sm:p-6 text-center border border-blue-200/50">
              <span className="block text-4xl sm:text-5xl font-black text-blue-600 mb-1">2</span>
              <span className="block text-base sm:text-lg font-extrabold text-blue-800 uppercase tracking-widest leading-snug">Bulan<br/>Kedua</span>
            </div>
            <div className="flex-grow w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Fase Asam Asetat (Fase Tenang)</h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                Bakteri asam asetat mulai bekerja mengubah alkohol menjadi cuka. Tekanan gas mulai mereda drastis dan aroma cairan berubah menjadi segar masam khas fermentasi.
              </p>
              <div className="rounded-2xl p-4 sm:p-6 bg-slate-50 border border-slate-100 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800">Sudah Tidak Perlu Diaduk</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">Jangan diaduk kembali agar lapisan pelindung mikroba permukaan tidak pecah.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800">Kemunculan Mamma Enzyme</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">Jika melihat selaput putih halus di atas air, biarkan saja. Itu jamur baik yang kaya manfaat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bulan 3 */}
          <div className="bg-emerald-50/60 rounded-3xl p-5 sm:p-6 md:p-10 border-2 border-emerald-300/80 shadow-md flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden">
            <div className="w-full md:w-48 flex-shrink-0 bg-emerald-600 rounded-2xl p-5 sm:p-6 text-center text-white shadow-lg">
              <span className="block text-4xl sm:text-5xl font-black mb-1">3</span>
              <span className="block text-base sm:text-lg font-bold uppercase tracking-widest text-emerald-100 leading-snug">Bulan<br/>Ketiga</span>
            </div>
            <div className="flex-grow w-full z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-2">Fase Panen Raya</h3>
              <p className="text-emerald-800 mb-6 text-sm sm:text-base leading-relaxed">
                Selamat! Fermentasi Anda telah tuntas dan cairan Eco-Enzyme siap dipanen untuk sejuta kegunaan pembersihan domestik hingga pupuk organik.
              </p>
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-emerald-100 space-y-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800">Teknik Penyaringan</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">Saring menggunakan kain tipis atau saringan halus untuk mendapatkan cairan jernih kecokelatan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800">Manfaatkan Ampas Organik</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">Ampas sisa penyaringan jangan dibuang. Gunakan langsung sebagai stimulan kompos bernutrisi tinggi bagi pekarangan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}