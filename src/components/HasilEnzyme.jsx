import React, { useState } from 'react';
import { 
  Sprout, 
  Droplets, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb
} from 'lucide-react';

const hasilEnzymeData = [
  {
    id: "tanaman",
    title: "Pupuk Alami Tanaman",
    ratio: "1 ml Eco-Enzyme : 1 Liter Air (1:1000)",
    icon: Sprout,
    colorClass: "bg-emerald-500 text-white",
    tabColor: "border-emerald-500 text-emerald-700 bg-emerald-50",
    alatBahan: [
      "1 ml cairan Eco-Enzyme murni",
      "1 Liter air sumur/air kran bersih (jangan air panas)",
      "Botol semprotan (*spray* tanaman)"
    ],
    langkah: [
      "Tuangkan 1 Liter air bersih ke dalam botol semprot.",
      "Masukkan 1 ml cairan Eco-Enzyme murni menggunakan pipet atau takaran mini (sangat encer).",
      "Kocok botol perlahan hingga cairan menyatu sempurna.",
      "Semprotkan langsung ke tanah di sekitar akar tanaman atau permukaan daun pada pagi/sore hari.",
      "Lakukan penyiraman ini cukup 1-2 kali saja dalam seminggu."
    ],
    warning: "Jangan menyemprotkan Eco-Enzyme murni tanpa diencerkan! Sifat asamnya yang kuat (pH < 4) bisa membuat akar dan daun tanaman hangus terbakar."
  },
  {
    id: "lantai",
    title: "Cairan Pembersih Lantai",
    ratio: "10-20 ml Eco-Enzyme : 1 Ember Air (~5 Liter)",
    icon: Droplets,
    colorClass: "bg-blue-500 text-white",
    tabColor: "border-blue-500 text-blue-700 bg-blue-50",
    alatBahan: [
      "15 ml (sekitar 1 sendok makan) Eco-Enzyme",
      "1 ember penuh air bersih untuk mengepel",
      "Kain pel rumah tangga"
    ],
    langkah: [
      "Isi ember pel dengan air bersih seperti biasa.",
      "Tambahkan 15 ml Eco-Enzyme ke dalam air, lalu aduk pelan dengan gagang pel.",
      "Gunakan cairan campuran tersebut untuk mengepel lantai seluruh ruangan rumah.",
      "Cairan ini efektif membunuh kuman, mengusir semut/kecoa, dan menetralisir aroma tidak sedap secara alami."
    ],
    warning: "Eco-Enzyme tidak menghasilkan busa karena bebas zat kimia surfaktan. Lantai akan tetap bersih kesat meskipun tanpa busa!"
  },
  {
    id: "sabun",
    title: "Sabun Cuci Piring Berbusa Alami",
    ratio: "1 Bagian Eco-Enzyme : 1 Bagian Sabun Lerak/Kelapa : 10 Bagian Air",
    icon: Sparkles,
    colorClass: "bg-amber-500 text-white",
    tabColor: "border-amber-500 text-amber-700 bg-amber-50",
    alatBahan: [
      "50 ml cairan Eco-Enzyme murni",
      "50 ml ekstrak buah lerak (sabun nabati) atau sabun kelapa cair standar kelurahan",
      "500 ml air bersih",
      "Wadah botol sabun cuci piring bekas"
    ],
    langkah: [
      "Campurkan ekstrak buah lerak/sabun kelapa dengan air di dalam wadah terpisah.",
      "Masukkan cairan Eco-Enzyme murni ke dalam campuran sabun lerak tersebut.",
      "Aduk rata lalu tuangkan ke dalam botol sabun cuci piring.",
      "Gunakan untuk mencuci peralatan dapur. Kombinasi ini menghasilkan busa alami pembabat minyak yang ampuh."
    ],
    warning: "Karena campuran ini menggunakan bahan organik tanpa pengawet buatan, buatlah dalam takaran kecil yang habis digunakan dalam waktu 1-2 minggu."
  },
  {
    id: "disinfektan",
    title: "Disinfektan & Pengusir Hama",
    ratio: "5 ml Eco-Enzyme : 500 ml Air (1:100)",
    icon: AlertTriangle,
    colorClass: "bg-red-500 text-white",
    tabColor: "border-red-500 text-red-700 bg-red-50",
    alatBahan: [
      "5 ml Eco-Enzyme murni",
      "500 ml air bersih",
      "Botol *hand sprayer* ukuran sedang"
    ],
    langkah: [
      "Masukkan air bersih sebanyak 500 ml ke dalam botol semprot.",
      "Campurkan 5 ml Eco-Enzyme ke dalamnya, lalu segel botol rapat-rapat dan kocok.",
      "Semprotkan pada meja makan, gagang pintu, tempat sampah, atau sudut ruangan yang sering didatangi lalat dan nyamuk.",
      "Aroma asam fermentasi segar kulit buah sangat tidak disukai oleh serangga pengganggu."
    ],
    warning: "Cairan campuran ini aman untuk permukaan benda mati, namun hindari area mata atau luka terbuka pada kulit."
  }
];

export default function HasilEnzyme() {
  const [activeTab, setActiveTab] = useState("tanaman");

  const currentData = hasilEnzymeData.find(item => item.id === activeTab) || hasilEnzymeData[0];
  const IconComponent = currentData.icon;

  return (
    <section id="pemanfaatan-hasil" className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Pascapanen</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Panduan Pengolahan Hasil Panen</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Eco-Enzyme murni hasil 90 hari fermentasi memiliki konsentrasi tinggi. Pilih opsi di bawah ini untuk melihat takaran pencampuran dan langkah aplikasi siap gunanya!
          </p>
        </div>

        {/* Tab Buttons - Navigasi Pascapanen */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-4xl mx-auto">
          {hasilEnzymeData.map((item) => {
            const TabIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl border text-sm font-bold transition-all shadow-sm cursor-pointer ${
                  activeTab === item.id
                    ? item.tabColor + ' border-2 scale-105'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {item.title.split(' ')[0] + ' ' + (item.title.split(' ')[1] || '')}
              </button>
            );
          })}
        </div>

        {/* Informasi Utama */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Judul, Rasio & Alat/Bahan */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl shadow-md ${currentData.colorClass}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">{currentData.title}</h3>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Rekomendasi Formula</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="block text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Rasio Pengenceran:</span>
              <p className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug">{currentData.ratio}</p>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-emerald-500 rounded-full inline-block"></span> Kebutuhan Bahan Campuran:
              </h4>
              <ul className="space-y-2">
                {currentData.alatBahan.map((bahan, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    {bahan}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Langkah Kerja & Peringatan Keamanan */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-blue-500 rounded-full inline-block"></span> Langkah Pembuatan & Aplikasi:
              </h4>
              <div className="space-y-3">
                {currentData.langkah.map((step, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-xs text-emerald-700 flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kotak Peringatan Edukatif */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 relative overflow-hidden mt-4">
              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-xl text-red-700 flex-shrink-0">
                  <Lightbulb className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-red-900 text-xs sm:text-sm uppercase tracking-wider mb-1">
                    Aturan Penting Satgas:
                  </h4>
                  <p className="text-red-950 text-xs sm:text-sm font-medium leading-relaxed text-justify">
                    {currentData.warning}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}