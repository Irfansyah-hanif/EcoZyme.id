import React from 'react';
import { History, Award } from 'lucide-react';

export default function Sejarah() {
  return (
    <section id="sejarah" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/40 rounded-3xl p-6 sm:p-8 md:p-14 border border-emerald-100/80 shadow-md relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
            <History className="w-64 h-64 text-emerald-900" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
            <div className="w-full md:w-1/3 flex-shrink-0 text-center">
              <div className="bg-white w-28 h-28 sm:w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-100 mb-6">
                <Award className="w-14 h-14 sm:w-16 h-16 text-emerald-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-900 leading-tight">
                Jejak Pelopor<br/><span className="text-emerald-600">RW 08</span>
              </h3>
              <p className="text-emerald-700/80 font-bold mt-2">Kutowinangun Kidul, Tingkir</p>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Awal Mula Gerakan Peduli Sampah</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-justify text-sm sm:text-base">
                <p>
                  Permasalahan sampah organik rumah tangga yang menumpuk sempat menjadi tantangan tersendiri bagi warga. Bau tak sedap dan lingkungan yang kurang asri mendorong sekelompok warga penggerak di <strong>RW 08 Kelurahan Kutowinangun Kidul, Tingkir, Kota Salatiga</strong> untuk mencari solusi cerdas yang berkelanjutan.
                </p>
                <p>
                  Berbekal kepedulian tinggi, RW 08 mulai menginisiasi pengolahan sampah dapur segar menjadi Eco-Enzyme. Apa yang awalnya berupa gerakan kecil para kader lingkungan, kini telah berkembang menjadi aksi komunal terstruktur dengan dibentuknya Satgas khusus.
                </p>
                <div className="bg-white p-5 sm:p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm my-6">
                  <p className="text-emerald-800 font-semibold italic text-sm sm:text-base leading-relaxed">
                    "RW 08 kini bukan hanya sekadar lingkungan tempat tinggal, melainkan telah menjadi pusat percontohan (role model). Keberhasilan produksi dan pemanfaatan Eco-Enzyme di RW ini diproyeksikan menjadi pemantik gerakan ramah lingkungan di seluruh Kelurahan Kutowinangun Kidul."
                  </p>
                </div>
                <p>
                  Dengan dukungan penuh dari Satgas Eco-Enzyme, kami membuktikan bahwa dari pilahan sampah dapur yang sederhana, kita dapat memproduksi cairan kaya guna untuk kebutuhan rumah tangga sekaligus menjaga kelestarian bumi kita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}