import React, { useState } from 'react';
import { FlaskConical, Leaf, Droplets, Info, Plus, Minus } from 'lucide-react';

export default function Calculator({ wasteAmount, setWasteAmount }) {
  // Local state fallback jika prop dari parent undefined/tidak di-pass
  const [localWaste, setLocalWaste] = useState(300);

  const currentWaste = wasteAmount !== undefined ? wasteAmount : localWaste;
  const updateWaste = setWasteAmount || setLocalWaste;

  const calculateMaterials = (waste) => {
    const numWaste = parseFloat(waste) || 0;
    const sugar = (numWaste / 3).toFixed(0);
    const water = ((numWaste / 3) * 10).toFixed(0);
    const totalVolumeMl = parseFloat(water) + parseFloat(sugar) + numWaste;
    const recommendedContainerLiter = ((totalVolumeMl / 0.6) / 1000).toFixed(1);

    return { sugar, water, waste: numWaste, recommendedContainer: recommendedContainerLiter };
  };

  const { sugar, water, waste, recommendedContainer } = calculateMaterials(currentWaste);

  const handleIncrement = () => {
    updateWaste((prev) => (prev || 0) + 1);
  };

  const handleDecrement = () => {
    updateWaste((prev) => Math.max(0, (prev || 0) - 1));
  };

  return (
    <section id="kalkulator" className="w-full py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      {/* Mengubah max-w-7xl mx-auto menjadi w-full px-4 sm:px-8 md:px-12 lg:px-16 */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Alat Ukur Akurat
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Kalkulator Pintar Eco-Enzyme</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Tidak perlu repot menghitung pembagian secara manual. Masukkan berat sampah organik yang Anda miliki, dan sistem akan langsung memecah kebutuhan resep lainnya secara instan.
          </p>
        </div>

        {/* Card Kontainer Utama Kalkulator */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-6 sm:p-10 md:p-12">
            
            {/* Preset Buttons */}
            <div className="mb-8">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-3">
                Pilih Preset Cepat Sampah
              </span>
              <div className="flex flex-wrap gap-2 justify-center">
                {[150, 300, 500, 1000, 3000, 5000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => updateWaste(amt)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      currentWaste === amt 
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg scale-105' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-500 hover:bg-emerald-50/50'
                    }`}
                  >
                    {amt >= 1000 ? `${amt/1000} kg` : `${amt} g`}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="mb-12 text-center">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-500 mb-2 uppercase tracking-wider">
                Masukkan Berat Sampah Organik Anda
              </label>
              
              <div className="relative max-w-xs mx-auto flex items-end justify-center border-b-4 border-slate-200 focus-within:border-emerald-500 transition-colors pb-2 px-2">
                <input
                  type="number"
                  min="0"
                  value={currentWaste === 0 ? '' : currentWaste}
                  onChange={(e) => {
                    const val = e.target.value;
                    updateWaste(val === '' ? 0 : Math.max(0, parseFloat(val)));
                  }}
                  className="w-2/3 text-center text-3xl sm:text-4xl font-black text-emerald-600 focus:outline-none bg-transparent appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="0"
                />
                
                {/* Tulisan Gram & Tombol Pengatur Kustom */}
                <div className="flex items-center gap-1.5 text-slate-400 font-bold text-sm sm:text-base mb-1 ml-1 flex-shrink-0">
                  <span>gram</span>
                  <div className="flex flex-col bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                    <button 
                      onClick={handleIncrement}
                      type="button"
                      className="p-0.5 hover:bg-emerald-500 hover:text-white rounded-md transition-colors cursor-pointer"
                      title="Tambah 1g"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={handleDecrement}
                      type="button"
                      className="p-0.5 hover:bg-red-500 hover:text-white rounded-md transition-colors cursor-pointer border-t border-slate-200/60"
                      title="Kurang 1g"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Area */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-100">
                <div className="mx-auto w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <FlaskConical className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-amber-900 font-bold mb-1 text-sm sm:text-base">Gula Merah / Molase</h3>
                <p className="text-2xl sm:text-3xl font-black text-amber-600">{sugar} <span className="text-xs sm:text-sm font-normal text-amber-700">gram</span></p>
                <p className="text-xs text-amber-700 mt-2 font-bold bg-amber-200/50 inline-block px-3 py-1 rounded-full">Rasio 1</p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                <div className="mx-auto w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-emerald-900 font-bold mb-1 text-sm sm:text-base">Sampah Organik</h3>
                <p className="text-2xl sm:text-3xl font-black text-emerald-600">{waste} <span className="text-xs sm:text-sm font-normal text-emerald-700">gram</span></p>
                <p className="text-xs text-emerald-700 mt-2 font-bold bg-emerald-200/50 inline-block px-3 py-1 rounded-full">Rasio 3</p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
                <div className="mx-auto w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-blue-900 font-bold mb-1 text-sm sm:text-base">Air Bersih</h3>
                <p className="text-2xl sm:text-3xl font-black text-blue-600">{water} <span className="text-xs sm:text-sm font-normal text-blue-700">ml</span></p>
                <p className="text-xs text-blue-700 mt-2 font-bold bg-blue-200/50 inline-block px-3 py-1 rounded-full">Rasio 10</p>
              </div>
            </div>

            {/* Container Recommendation Info Box */}
            <div className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-3 items-start">
                <div className="bg-white p-2 rounded-xl shadow-sm text-emerald-600 flex-shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">Rekomendasi Kapasitas Wadah</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Demi keamanan sirkulasi gas, total volume bahan disarankan hanya mengisi maksimal <strong>60% wadah</strong>. Gunakan botol/ember plastik dengan kapasitas minimal:
                  </p>
                </div>
              </div>
              <div className="bg-white px-6 py-3 rounded-xl border border-emerald-200 text-center w-full md:w-auto shadow-sm flex-shrink-0">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kapasitas Minimal</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-700">{recommendedContainer} <span className="text-xs sm:text-sm font-normal">Liter</span></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}