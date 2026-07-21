import React from 'react';
import { Wrench, Recycle, Users, Shield, User } from 'lucide-react';

export default function Tupoksi({ activeTupoksi = 'ketua', setActiveTupoksi }) {
  return (
    <section id="struktur" className="w-full py-16 bg-slate-50 border-t border-slate-100">
      {/* Mengubah max-w-7xl mx-auto menjadi w-full px-4 sm:px-8 md:px-12 lg:px-16 */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Kolaborasi Komunitas
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Satgas Eco-Enzyme</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Struktur Kepengurusan Satuan Tugas di setiap RW<br />
            Kelurahan Kutowinangun Kidul, Tingkir, Kota Salatiga
          </p>
        </div>

        {/* Interactive Org Chart Tree */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            
            {/* Level 1: Pembina */}
            <div className="relative flex flex-col items-center w-full">
              <button
                onClick={() => setActiveTupoksi && setActiveTupoksi('pembina')}
                className={`w-full max-w-xs bg-white rounded-2xl shadow-sm border p-4 text-center transition-all hover:scale-102 cursor-pointer ${
                  activeTupoksi === 'pembina'
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Shield className={`w-4 h-4 ${activeTupoksi === 'pembina' ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider">Pembina</h3>
                </div>
                <p className="text-emerald-700 font-extrabold text-lg">Ketua RW 08</p>
              </button>
              
              {/* Vertical connector line */}
              <div className="h-8 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 2: Ketua */}
            <div className="relative flex flex-col items-center w-full">
              <button
                onClick={() => setActiveTupoksi && setActiveTupoksi('ketua')}
                className={`w-full max-w-sm bg-gradient-to-r rounded-2xl shadow-md p-4 text-center transition-all hover:scale-102 cursor-pointer ${
                  activeTupoksi === 'ketua'
                    ? 'from-emerald-700 to-teal-700 text-white ring-4 ring-emerald-500/20 border-4 border-emerald-50'
                    : 'from-emerald-600 to-teal-600 text-white border-2 border-transparent'
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <User className="w-4 h-4 text-emerald-200" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">Pimpinan Utama</span>
                </div>
                <h3 className="font-black text-lg tracking-wide">Ketua Satgas Eco-Enzyme</h3>
              </button>

              {/* Vertical connector line */}
              <div className="h-8 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 3: Connecting Bridge for Divisions */}
            <div className="hidden md:flex w-full items-center justify-center relative">
              <div className="absolute top-0 left-1/6 right-1/6 h-0.5 bg-slate-300"></div>
              <div className="w-1/3 flex justify-center"><div className="h-6 w-0.5 bg-slate-300"></div></div>
              <div className="w-1/3 flex justify-center"><div className="h-6 w-0.5 bg-slate-300"></div></div>
              <div className="w-1/3 flex justify-center"><div className="h-6 w-0.5 bg-slate-300"></div></div>
            </div>

            {/* Level 4: Divisions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">
              
              {/* Sarana Prasarana */}
              <div className="flex flex-col items-center">
                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                <button 
                  onClick={() => setActiveTupoksi && setActiveTupoksi('sarpras')}
                  className={`w-full rounded-2xl p-5 border text-center transition-all hover:scale-102 cursor-pointer ${
                    activeTupoksi === 'sarpras' 
                      ? 'bg-emerald-50 border-emerald-400 shadow-md ring-2 ring-emerald-500/20' 
                      : 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm'
                  }`}
                >
                  <div className="bg-emerald-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-xs border border-emerald-100">
                    <Wrench className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">Divisi<br/>Sarana Prasarana</h4>
                  <p className="text-[10px] text-emerald-700 bg-emerald-100/50 py-0.5 px-2 rounded-md font-bold mt-2 inline-block">
                    Lihat Tugas
                  </p>
                </button>
              </div>

              {/* Produksi & Edukasi */}
              <div className="flex flex-col items-center">
                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                <button 
                  onClick={() => setActiveTupoksi && setActiveTupoksi('produksi')}
                  className={`w-full rounded-2xl p-5 border text-center transition-all hover:scale-102 cursor-pointer ${
                    activeTupoksi === 'produksi' 
                      ? 'bg-teal-50 border-teal-400 shadow-md ring-2 ring-teal-500/20' 
                      : 'bg-white border-slate-200 hover:border-teal-300 shadow-sm'
                  }`}
                >
                  <div className="bg-teal-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-xs border border-teal-100">
                    <Recycle className="w-5 h-5 text-teal-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">Divisi<br/>Produksi & Edukasi</h4>
                  <p className="text-[10px] text-teal-700 bg-teal-100/50 py-0.5 px-2 rounded-md font-bold mt-2 inline-block">
                    Lihat Tugas
                  </p>
                </button>
              </div>

              {/* Humas & Kemitraan */}
              <div className="flex flex-col items-center">
                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                <button 
                  onClick={() => setActiveTupoksi && setActiveTupoksi('humas')}
                  className={`w-full rounded-2xl p-5 border text-center transition-all hover:scale-102 cursor-pointer ${
                    activeTupoksi === 'humas' 
                      ? 'bg-blue-50 border-blue-400 shadow-md ring-2 ring-blue-500/20' 
                      : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className="bg-blue-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-xs border border-blue-100">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">Divisi<br/>Humas & Kemitraan</h4>
                  <p className="text-[10px] text-blue-700 bg-blue-100/50 py-0.5 px-2 rounded-md font-bold mt-2 inline-block">
                    Lihat Tugas
                  </p>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Dynamic Job Description (Tupoksi Detail Box) */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg transition-all duration-300">
          {(!activeTupoksi || activeTupoksi === 'ketua') && (
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Tupoksi Utama</span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Ketua Satgas Eco-Enzyme</h4>
              <ul className="text-slate-600 list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed">
                <li>Memimpin, mengawasi, dan mengkoordinasikan semua rangkaian program pembuatan Eco-Enzyme di tingkat RW[cite: 1].</li>
                <li>Merumuskan program sosialisasi, jadwal kerja, serta mengevaluasi kendala teknis dari tiap-tiap divisi.</li>
                <li>Memberikan pertimbangan krusial apabila terdapat kendala dalam kualitas hasil fermentasi.</li>
                <li>Melaporkan berkala capaian hasil produksi dan pemanfaatan panen kepada Ketua RW 08[cite: 1].</li>
              </ul>
            </div>
          )}

          {activeTupoksi === 'pembina' && (
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Tupoksi Utama</span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Pembina Satgas (Ketua RW 08)</h4>
              <ul className="text-slate-600 list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed">
                <li>Mengawasi seluruh rancangan kebijakan strategis satgas di lingkungan kelurahan[cite: 1].</li>
                <li>Memberikan arahan langsung terkait pengadaan sarana dan prasarana berskala besar.</li>
                <li>Menjadi jembatan koordinasi struktural antara Satgas tingkat RW dengan aparatur Kelurahan[cite: 1].</li>
                <li>Mengevaluasi laporan capaian panen dan distribusi berkala satgas.</li>
              </ul>
            </div>
          )}

          {activeTupoksi === 'sarpras' && (
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Tupoksi Divisi</span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Divisi Sarana Prasarana (Sarpras)</h4>
              <ul className="text-slate-600 list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed">
                <li>Menyediakan, merawat, dan mencatat ketersediaan wadah fermentasi (ember/tong plastik).</li>
                <li>Mengkoordinir penyediaan bahan pendukung seperti gula merah tebu/molase dan air bersih berkualitas tinggi.</li>
                <li>Mengatur titik lokasi pengumpulan sisa sampah kulit buah segar atau sayuran yang disumbangkan oleh warga[cite: 1].</li>
                <li>Memelihara kesiapan alat ukur penting (timbangan digital, gelas ukur, dan alat penyaring).</li>
              </ul>
            </div>
          )}

          {activeTupoksi === 'produksi' && (
            <div>
              <span className="inline-block bg-teal-100 text-teal-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Tupoksi Divisi</span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Divisi Produksi & Edukasi</h4>
              <ul className="text-slate-600 list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed">
                <li>Mengatur serta memandu proses pencampuran bahan baku dengan rasio baku 1:3:10.</li>
                <li>Membuat kalender pemantauan harian, utamanya kontrol pembuangan gas (burping) pada bulan pertama.</li>
                <li>Menjadi instruktur demo pembuatan Eco-Enzyme dalam pertemuan-pertemuan warga maupun PKK[cite: 1].</li>
                <li>Menilai kematangan fisik eco-enzyme pada masa akhir fermentasi 90 hari sebelum penyaringan.</li>
              </ul>
            </div>
          )}

          {activeTupoksi === 'humas' && (
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Tupoksi Divisi</span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Divisi Humas & Kemitraan</h4>
              <ul className="text-slate-600 list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed">
                <li>Menyosialisasikan sejuta manfaat dari cairan Eco-Enzyme kepada seluruh warga RW 08[cite: 1].</li>
                <li>Menjembatani kerja sama dengan instansi luar seperti Kelurahan, Dinas Lingkungan Hidup (DLH), maupun sekolah sekitar[cite: 1].</li>
                <li>Mendistribusikan hasil panen untuk kemaslahatan warga (disinfektan lingkungan, penjernih air selokan, maupun pupuk tanaman warga).</li>
                <li>Mempromosikan pencapaian ramah lingkungan RW 08 Kutowinangun Kidul di media sosial[cite: 1].</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}